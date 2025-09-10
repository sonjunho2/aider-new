// src/components/layout/BottomNavigation.tsx
'use client'
import { Home, Award, Users, Share2, Bell } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function BottomNavigation() {
  const pathname = usePathname()
  
  const navItems = [
    { icon: Home, label: '홈', href: '/', active: pathname === '/' },
    { icon: Award, label: '후기', href: '/reviews', active: pathname === '/reviews' },
    { icon: Users, label: '커뮤니티', href: '/community', active: pathname === '/community' },
    { icon: Share2, label: '추천하기', href: '/recommend', active: pathname === '/recommend' },
    { icon: Bell, label: '알림및공지', href: '/notifications', active: pathname === '/notifications' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-2">
      <div className="flex justify-around">
        {navItems.map((item, index) => (
          <div key={index} className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg ${item.active ? 'text-purple-600 bg-purple-50' : 'text-gray-500'}`}>
            <item.icon className="w-6 h-6" />
            <span className="text-xs font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}