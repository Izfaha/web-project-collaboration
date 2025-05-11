import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // Only apply to specific paths
  if (request.nextUrl.pathname.startsWith('/api/users/profile')) {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const token = authHeader.split(' ')[1];
    
    try {
      // Using jose for edge compatibility
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || 'your_jwt_secret'
      );
      
      await jwtVerify(token, secret);
      
      // Continue to the route
      return NextResponse.next();
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }
  }
  
  // Continue for all other routes
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/api/users/profile/:path*'
  ],
};
