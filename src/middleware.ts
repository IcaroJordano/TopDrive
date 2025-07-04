// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const ua = request.headers.get("user-agent") || "";

  const isMobile = /mobile/i.test(ua);

  if (request.nextUrl.pathname === "/home") {
    const destination = isMobile ? "/home/mobile" : "/home/desktop";
    return NextResponse.redirect(new URL(destination, request.url));
  }

  return NextResponse.next();
}
