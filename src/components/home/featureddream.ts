// src/components/home/FeaturedDream.tsx
export default function FeaturedDream() {
  return (
    <div className="text-white mb-4">
      <h2 className="text-lg font-bold mb-3">나의 이루고 싶은 꿈</h2>
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <div className="flex items-start space-x-4">
          <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
            1
          </div>
          <div className="flex-1">
            <p className="text-gray-800 text-lg font-medium mb-3">
              가족과 제주도로 여행가고 싶어요.
            </p>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1">
              <div className="bg-white rounded-full px-4 py-2">
                <div className="text-center">
                  <span className="text-sm font-bold text-gray-700">1,220,000 P / 78,100,000 P</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}