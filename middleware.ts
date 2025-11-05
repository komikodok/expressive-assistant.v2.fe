import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET })
  const isAuthenticated = !!token
  const pathname = request.nextUrl.pathname

  const publicRoutes = ['/login', '/register']

  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route))

  if (isAuthenticated && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}
