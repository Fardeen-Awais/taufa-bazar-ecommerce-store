import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const { handlers, auth, signIn, signOut } = NextAuth({
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

      if (!allowedEmails.includes(user.email!)) {
        return false
      }

      return true
    },
    async session({ session, user }) {
      // Add user role to session
      if (session.user) {
        (session.user as any).id = user.id
        ;(session.user as any).role = (user as any).role as 'main_admin' | 'secondary_admin'
      }
      return session
    },
    async jwt({ token, user, account, profile }) {
      // Add role to JWT token
      if (user) {
        (token as any).role = (user as any).role
      }
      return token
    },
  },
  pages: {
    signIn: "/admin/login",
  },
  session: {
    strategy: "jwt",
  },
})

export type AuthSession = Awaited<ReturnType<typeof auth>>

// Check if email is allowed for admin access
export function isAllowedAdminEmail(email: string): boolean {
  const allowedEmails = [
    process.env.MAIN_ADMIN_EMAIL,
    process.env.SECONDARY_ADMIN_EMAIL,
  ].filter(Boolean)
  
  return allowedEmails.includes(email)
}

// Get role based on email
export function getRoleFromEmail(email: string): 'main_admin' | 'secondary_admin' {
  if (email === process.env.MAIN_ADMIN_EMAIL) {
    return 'main_admin'
  }
  return 'secondary_admin'
} 