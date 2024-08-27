'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { RecoilRoot } from 'recoil'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </RecoilRoot>
      </body>
    </html>
  )
}
