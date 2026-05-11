import { NextResponse, type NextRequest } from "next/server";

// Compatibility middleware restored; currently passthrough.
export function middleware(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

import { NextResponse, type NextRequest } from "next/server";
import { sessionCookieName } from "@/lib/auth/cookieNames";
import { verifySessionValueEdge } from "@/lib/auth/sessionEdge";

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isAdmin = pathname.startsWith("/admin");
  const isLogin = pathname === "/admin/login";

  if (!isAdmin || isLogin) return NextResponse.next();

  const cookie = req.cookies.get(sessionCookieName)?.value;
  if (!cookie) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  const session = await verifySessionValueEdge(cookie);
  if (!session) {
    const url = new URL("/admin/login", req.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

