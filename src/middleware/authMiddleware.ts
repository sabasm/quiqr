import { NextRequest, NextResponse } from 'next/server';
import { Auth0Service } from '../services/Auth0Service';
import { LoggerService } from '../services/LoggerService';

const auth0Service = new Auth0Service();
const logger = new LoggerService();

export async function authMiddleware(req: NextRequest) {
  try {
    const session = await auth0Service.getIdTokenClaims();
    if (!session) {
      logger.warn('Unauthorized access attempt');
      return NextResponse.redirect(new URL('/api/auth/login', req.url));
    }
    return NextResponse.next();
  } catch (error) {
    logger.error('Error in auth middleware:', error);
    return NextResponse.redirect(new URL('/error', req.url));
  }
}


