// src/components/home/PointsDisplay.tsx
export default function PointsDisplay() {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 font-medium">내가받은 총 POINT</span>
        <div className="bg-gray-100 px-4 py-2 rounded-lg border-2 border-gray-300">
          <span className="text-xl font-bold text-gray-800">1,240,000 P</span>
        </div>
      </div>
    </div>
  )
}