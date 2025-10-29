import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authServices } from "./lib/api/services/auth.service"
import { userServices } from "./lib/api/services/user.service"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials) {
        const res = await authServices.login({
          email: credentials.email as string,
          password: credentials.password as string
        })

        const token = res.data.data.token
        if (!token) return null

        const userRes = await userServices.getDetail(token)
        const user = userRes.data.data
        if (!user) return null
        
        return {
          ...user,
          accessToken: token
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