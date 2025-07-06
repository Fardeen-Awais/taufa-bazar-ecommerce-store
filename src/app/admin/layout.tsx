'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Providers } from './providers'

interface AdminUser {
  name: string
  email: string
  role: string
  image?: string
}

function AdminLayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session, status } = useSession()

  // Skip authentication check for login page
  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    if (status === 'unauthenticated' && !isLoginPage) {
      router.push('/admin/login')
    } else if (status === 'authenticated' && isLoginPage) {
      // If user is authenticated and on login page, redirect to dashboard
      router.push('/admin/dashboard')
    }
  }, [status, router, isLoginPage])

  // Add debug logging
  console.log('Admin Layout Debug:', {
    status,
    isLoginPage,
    pathname,
    hasSession: !!session?.user,
    userEmail: session?.user?.email
  })

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/admin/login' })
  }

  // If it's the login page, render without authentication check
  if (isLoginPage) {
    return <>{children}</>
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session?.user) {
    return null
  }

  const user: AdminUser = {
    name: session.user.name || 'Admin User',
    email: session.user.email || '',
    role: (session.user as any).role || 'admin',
    image: session.user.image || '/default-avatar.png'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">TaufaBazar Admin</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src={user.image || '/default-avatar.png'}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-gray-500 capitalize">{user.role}</p>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Admin Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <a
              href="/admin/dashboard"
              className="text-gray-700 hover:text-gray-900 px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-blue-500"
            >
              Dashboard
            </a>
            <a
              href="/admin/products"
              className="text-gray-700 hover:text-gray-900 px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-blue-500"
            >
              Products
            </a>
            <a
              href="/admin/orders"
              className="text-gray-700 hover:text-gray-900 px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-blue-500"
            >
              Orders
            </a>
            <a
              href="/admin/users"
              className="text-gray-700 hover:text-gray-900 px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-blue-500"
            >
              Users
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Providers>
  )
} 