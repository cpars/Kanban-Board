import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // Verify the token and check if it is valid
  const authHeader = req.headers['authorization'];

  // Extract the token from the Authorization header
  const token = authHeader && authHeader.split(' ')[1];

  // Check if the token is not present
  if (token == null) {
    res.sendStatus(401).json({ error: 'Unauthorized' });
  } else {
    // Verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, user) => {
      if (err) {
        return res.sendStatus(403).json({ message: 'Token expired or not valid' });
      }
      // Set the user in the request object
      req.user = user as JwtPayload;
      return next();
    });
  }
};
  
