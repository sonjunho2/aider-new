// src/components/home/DreamsList.tsx
export default function DreamsList() {
  const dreams = [
    { id: 2, text: '나만의 공방을 열고 싶어요.', current: 20000, total: 78100000 },
    { id: 3, text: '세계일주를 하고 싶어요.', current: 500000, total: 120000000 }
  ]

  return (
    <div className="space-y-3 pb-6">
      {dreams.map((dream) => (
        <div key={dream.id} className="bg-white rounded-2xl p-5 shadow-lg">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {dream.id}
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium mb-3">{dream.text}</p>
              <div className="bg-gray-300 rounded-full p-1">
                <div className="bg-white rounded-full px-4 py-2">
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-600">
                      {dream.current.toLocaleString()} P / {dream.total.toLocaleString()} P
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}