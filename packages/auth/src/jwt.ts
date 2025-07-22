import jwt from 'jsonwebtoken';
import { User } from './types';

export const generateToken = (user: User, secret: string): string => {
  return jwt.sign(
    { userId: user.id, email: user.email },
    secret,
    { expiresIn: '24h' }
  );
};

export const verifyToken = (token: string, secret: string): any => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

export const decodeToken = (token: string): any => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
}; 