import { NextRequest, NextResponse } from 'next/server';
import LoggerService from '../services/LoggerService';

const logger = new LoggerService();

export function errorMiddleware(req: NextRequest) {
  try {
    return NextResponse.next();
  } catch (error) {
    logger.error('Unhandled error:', error);
    return NextResponse.redirect(new URL('/error', req.url));
  }
}

