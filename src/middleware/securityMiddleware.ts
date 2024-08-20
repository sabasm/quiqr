import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '../utils/securityUtils';

export function securityMiddleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];

  if (!token || !verifyToken(token)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}


