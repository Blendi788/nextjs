import { NextApiRequest, NextApiResponse } from 'next';
import { userStorage } from '@/lib/storage/userStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const user = userStorage.login(email, password);
    return res.status(200).json(user);
  } catch (error: any) {
    if (error.message === 'Invalid credentials') {
      return res.status(401).json({ error: error.message });
    }
    console.error('Error logging in:', error);
    return res.status(500).json({ error: 'Error logging in' });
  }
} 