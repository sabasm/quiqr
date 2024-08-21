import jwt from 'jsonwebtoken';

export const verifyToken = (token: string): boolean => {
  try {
    jwt.verify(token, process.env.JWT_SECRET as string);
    return true;
  } catch (error) {
    return false;
  }
};


