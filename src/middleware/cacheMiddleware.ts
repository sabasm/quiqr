import { NextRequest, NextResponse } from 'next/server';

export async function cacheMiddleware(req: NextRequest) {
  if (req.method === 'GET' && req.nextUrl.pathname.startsWith('/static/')) {
    const cache = await caches.open('static-cache');
    const cachedResponse = await cache.match(req);

    if (cachedResponse) {
      return cachedResponse;
    }

    const response = await fetch(req.url);
    cache.put(req, response.clone());
    return response;
  }

  return NextResponse.next();
}


