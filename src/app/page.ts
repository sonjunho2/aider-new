// src/app/page.tsx
import Header from '@/components/layout/Header'
import ProfileSection from '@/components/home/ProfileSection'
import PointsDisplay from '@/components/home/PointsDisplay'
import NavigationCards from '@/components/home/NavigationCards'
import FeaturedDream from '@/components/home/FeaturedDream'
import DreamsList from '@/components/home/DreamsList'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 space-y-6">
        <ProfileSection />
        <PointsDisplay />
        <NavigationCards />
        <FeaturedDream />
        <DreamsList />
      </div>
    </div>
  )
}