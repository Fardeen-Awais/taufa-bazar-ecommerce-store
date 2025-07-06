import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    mainAdminEmail: process.env.MAIN_ADMIN_EMAIL,
    secondaryAdminEmail: process.env.SECONDARY_ADMIN_EMAIL,
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleClientSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
  })
} 