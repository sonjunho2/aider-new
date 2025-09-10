// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNavigation from '@/components/layout/BottomNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ANDER - 꿈을 이루는 앱',
  description: '당신의 꿈을 현실로 만들어보세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
          <main className="pb-20">
            {children}
          </main>
          <BottomNavigation />
        </div>
      </body>
    </html>
  )
}