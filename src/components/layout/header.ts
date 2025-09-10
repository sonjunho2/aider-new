// src/components/layout/Header.tsx
import { ArrowLeft } from 'lucide-react'

export default function Header() {
  return (
    <div className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center space-x-3">
        <ArrowLeft className="w-6 h-6" />
        <span className="text-lg font-medium">홈</span>
      </div>
      <div className="text-3xl font-bold text-orange-400 drop-shadow-lg">
        ANDER
      </div>
    </div>
  )
}