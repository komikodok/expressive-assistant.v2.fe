import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authServices } from "./lib/api/services/auth.service"
import { userServices } from "./lib/api/services/user.service"
import exceptionHandler from "./lib/error-handler"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const res = await authServices.login({
            email: credentials.email as string,
            password: credentials.password as string
          })

          const token = res.data.token
          if (!token) return null
  
          const userRes = await userServices.getDetail(token)

          const user = userRes.data
          if (!user) return null
          
          return {
            ...user,
            accessToken: token
          }
        } catch (error) {
          const appError = exceptionHandler(error)
          console.error(appError)

          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.accessToken = user.accessToken
      }
      
      return token
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id,
        username: token.username,
        accessToken: token.accessToken
      }
      
      return session
    },
  }
})