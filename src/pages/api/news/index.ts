import { NextApiRequest, NextApiResponse } from 'next';
import { newsStorage } from '@/lib/storage/newsStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all news
    return res.status(200).json(newsStorage.getAllNews());
  } 
  
  if (req.method === 'POST') {
    try {
      const { title, content, author } = req.body;

      // Validate required fields
      if (!title || !content || !author) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create new news article
      const newArticle = newsStorage.addNews({ title, content, author });
      return res.status(201).json(newArticle);
    } catch (error) {
      console.error('Error creating news:', error);
      return res.status(500).json({ error: 'Error creating news article' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'News ID is required' });
      }

      // Delete the news article
      const success = newsStorage.deleteNews(id as string);
      
      if (!success) {
        return res.status(404).json({ error: 'News article not found' });
      }

      return res.status(200).json({ message: 'News article deleted successfully' });
    } catch (error) {
      console.error('Error deleting news:', error);
      return res.status(500).json({ error: 'Error deleting news article' });
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 