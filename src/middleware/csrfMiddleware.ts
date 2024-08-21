import { NextRequest, NextResponse } from 'next/server';

export function csrfMiddleware(request: NextRequest): NextResponse | undefined {
  return undefined; 
}


