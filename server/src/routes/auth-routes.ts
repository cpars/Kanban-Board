import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // Extract the username and password from the request body
  const { username, password } = req.body;

  // Check if the user exists
  const user = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if the password is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Create a JWT token
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: '1h',
  });
  return res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
