import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
 
export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET })
    const isAuthenticated = !!token

    if (request.nextUrl.pathname.startsWith('/login')) {
        if (isAuthenticated) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }
}
 