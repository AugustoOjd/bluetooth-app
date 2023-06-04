import NavBar from '../components/layout/NavBar'
import { AuthProvider } from '../context/AuthProvider'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bluetooth App',
  description: 'App Bluetooth connection',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        </head>
      <body className={inter.className}>
      <AuthProvider>
      
        <NavBar/>
          <div className="container p-4">
                {children}
          </div>
            
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      </AuthProvider>
      </body>
      
    </html>
  )
}
