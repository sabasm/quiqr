import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0';

export async function rbacMiddleware(req: NextRequest) {
  const session = await getSession(req, {});
  const userRole = session?.user.role;

  if (!userRole || !['admin', 'user'].includes(userRole)) {
    return NextResponse.redirect(new URL('/unauthorized', req.url));
  }

  return NextResponse.next();
}


