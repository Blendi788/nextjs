import { NextApiRequest, NextApiResponse } from 'next';
import { blogStorage } from '@/lib/storage/blogStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Return all blogs
    return res.status(200).json(blogStorage.getAllBlogs());
  } 
  
  if (req.method === 'POST') {
    try {
      const { title, body, author } = req.body;

      // Validate required fields
      if (!title || !body || !author) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create new blog
      const newBlog = blogStorage.addBlog({ title, body, author });
      return res.status(201).json(newBlog);
    } catch (error) {
      console.error('Error creating blog:', error);
      return res.status(500).json({ error: 'Error creating blog post' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      // Delete the blog
      const success = blogStorage.deleteBlog(id as string);
      
      if (!success) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      return res.status(500).json({ error: 'Error deleting blog' });
    }
  }

  // Method not allowed
  res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
} 