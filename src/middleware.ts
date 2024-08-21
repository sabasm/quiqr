import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authMiddleware } from './middleware/authMiddleware';
import { rbacMiddleware } from './middleware/rbacMiddleware';
import { csrfMiddleware } from './middleware/csrfMiddleware';

export function middleware(request: NextRequest) {
  const authResponse = authMiddleware(request);
  if (authResponse) return authResponse;

  const rbacResponse = rbacMiddleware(request);
  if (rbacResponse) return rbacResponse;

  if (request.method === 'POST') {
    const csrfResponse = csrfMiddleware(request);
    if (csrfResponse) return csrfResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};


