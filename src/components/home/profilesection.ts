// src/components/home/ProfileSection.tsx
export default function ProfileSection() {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-yellow-400 px-4 py-2 rounded-full">
        <span className="text-sm font-bold text-black">주의사항필독</span>
      </div>
      <div className="text-white">
        <div className="text-sm opacity-90">반가워요</div>
        <div className="text-lg font-semibold">sonoo2 님</div>
      </div>
      <div className="ml-auto">
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}