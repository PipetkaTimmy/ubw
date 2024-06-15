'use client'
import { useEffect } from 'react';
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Navigation/Sidebar'
import AdminSidebar from './components/Navigation/AdminSidebar'
import Navbar from './components/Navigation/Navbar'
import { usePathname, useRouter } from 'next/navigation'
import { expiry } from './services/loginService';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const route = usePathname();
  const router = useRouter();

  useEffect(() => {
    expiry(router);
  }, [route, router]);

  const isAdminRoute = route.startsWith('/Admin');

  return (
    <html lang="en">
      <body className={inter.className}>
        {route !== '/' && (isAdminRoute ? <AdminSidebar /> : <Sidebar />)}
        <main className='mainContainer'>
          {route !== '/' && <Navbar />}
          {children}
        </main>
      </body>
    </html>
  )
}
