import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isComingSoonMode = process.env.COMING_SOON_MODE === "true";

  // If coming soon mode is enabled, redirect all pages to /coming-soon
  // except for the coming-soon page itself and static assets
  if (isComingSoonMode) {
    const pathname = request.nextUrl.pathname;

    // Allow these paths through without redirect
    const allowedPaths = [
      "/coming-soon",
      "/api/subscribe",
      "/_next",
      "/favicon",
      "/images",
      "/logo",
    ];

    const isAllowed = allowedPaths.some(path => pathname.startsWith(path));

    if (!isAllowed && pathname !== "/") {
      return NextResponse.redirect(new URL("/coming-soon", request.url));
    }

    // For the homepage, rewrite to coming-soon (same URL, different content)
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/coming-soon", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
};
