import { NextRequest, NextResponse } from 'next/server';

export function csrfMiddleware(req: NextRequest) {
  const csrfToken = req.cookies.get('XSRF-TOKEN');
  const headerToken = req.headers.get('x-xsrf-token');

  if (!csrfToken || csrfToken !== headerToken) {
    return NextResponse.redirect('/error/csrf');
  }

  return NextResponse.next();
}


