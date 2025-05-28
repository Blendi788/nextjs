import { NextApiRequest, NextApiResponse } from 'next';
import { userStorage } from '@/lib/storage/userStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    const user = userStorage.register({ username, email, password });
    return res.status(201).json(user);
  } catch (error: any) {
    if (error.message === 'User with this email already exists') {
      return res.status(409).json({ error: error.message });
    }
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Error registering user' });
  }
} 