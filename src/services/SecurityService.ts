import jwt from 'jsonwebtoken';
import { securityConfig } from '../config/securityConfig';

export class SecurityService {
  validateToken(token: string): boolean {
    try {
      jwt.verify(token, securityConfig.jwtSecret);
      return true;
    } catch (error) {
      return false;
    }
  }

  signToken(payload: any): string {
    return jwt.sign(payload, securityConfig.jwtSecret, {
      expiresIn: securityConfig.expiresIn,
    });
  }
}


