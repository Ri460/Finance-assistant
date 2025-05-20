import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })
  const isAuthenticated = !!token

  // Define protected routes
  const protectedRoutes = ["/dashboard", "/transactions", "/budgets", "/investments", "/analytics", "/settings"]

  // Define auth routes
  const authRoutes = ["/login", "/signup"]

  // Get the pathname from the URL
  const path = req.nextUrl.pathname

  // Check if the current path is a protected route
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))

  // Check if the current path is an auth route
  const isAuthRoute = authRoutes.some((route) => path.startsWith(route))

  // If no session and trying to access protected routes
  if (!isAuthenticated && isProtectedRoute) {
    const redirectUrl = new URL("/login", req.url)
    redirectUrl.searchParams.set("callbackUrl", path)
    return NextResponse.redirect(redirectUrl)
  }

  // If session exists and trying to access auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
