// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow specific admin emails
      const allowedEmails = [
        process.env.MAIN_ADMIN_EMAIL,
        process.env.SECONDARY_ADMIN_EMAIL,
      ].filter(Boolean)

      console.log('=== SIGN IN DEBUG ===')
      console.log('User email:', user.email)
      console.log('Allowed emails:', allowedEmails)
      console.log('Email comparison:', {
        userEmail: user.email,
        mainAdmin: process.env.MAIN_ADMIN_EMAIL,
        secondaryAdmin: process.env.SECONDARY_ADMIN_EMAIL,
        matchesMain: user.email === process.env.MAIN_ADMIN_EMAIL,
        matchesSecondary: user.email === process.env.SECONDARY_ADMIN_EMAIL,
        isInAllowedList: allowedEmails.includes(user.email!)
      })

      if (!allowedEmails.includes(user.email!)) {
        console.log('❌ ACCESS DENIED for:', user.email)
        return false
      }

      console.log('✅ ACCESS GRANTED for:', user.email)
      return true
    },
    async session({ session, user }) {
      console.log('=== SESSION DEBUG ===')
      console.log('User:', user)
      console.log('Session user:', session.user)
      
      // Add user role to session
      if (session.user && user) {
        (session.user as any).id = user.id
        // Set role based on email
        if (user.email === process.env.MAIN_ADMIN_EMAIL) {
          (session.user as any).role = 'main_admin'
        } else {
          (session.user as any).role = 'secondary_admin'
        }
        console.log('Final session user:', session.user)
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      // Add role to JWT token
      if (user) {
        if (user.email === process.env.MAIN_ADMIN_EMAIL) {
          (token as any).role = 'main_admin'
        } else {
          (token as any).role = 'secondary_admin'
        }
      }
      return token
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login", // Redirect to login on error
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
