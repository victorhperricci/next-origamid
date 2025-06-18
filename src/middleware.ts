import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for a specific path
  if (request.nextUrl.pathname.startsWith("/api")) {
    // Perform some logic, e.g., logging or authentication
    console.log("API request detected:", request.nextUrl.pathname);
  }

  // Continue to the next middleware or route handler
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"], // Apply middleware to all API routes
};
