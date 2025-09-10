// src/components/home/NavigationCards.tsx
import { User, FileText, MessageSquare, Bell } from 'lucide-react'

export default function NavigationCards() {
  const navItems = [
    { icon: User, label: 'MY', href: '/profile' },
    { icon: FileText, label: '실현된꿈', href: '/dreams' },
    { icon: MessageSquare, label: '성공후기', href: '/community' },
    { icon: Bell, label: '알림', href: '/notifications' }
  ]

  return (
    <div className="bg-white rounded-2xl p-4 shadow-lg">
      <div className="grid grid-cols-4 gap-4">
        {navItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <item.icon className="w-8 h-8 text-gray-600" />
            <span className="text-xs font-medium text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}