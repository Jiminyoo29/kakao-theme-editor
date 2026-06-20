import { useState } from 'react'
import ChatPreview from './ChatPreview'
import HomePreview from './HomePreview'

type Tab = 'chat' | 'home'

export default function PreviewPanel() {
  const [tab, setTab] = useState<Tab>('chat')

  return (
    <main className="flex flex-col h-full bg-gray-100">
      {/* 탭 전환 */}
      <div className="flex gap-1 px-6 pt-5 pb-0">
        {(['chat', 'home'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 text-sm font-medium rounded-t-lg border border-b-0 transition-colors ${
              tab === t
                ? 'bg-white border-gray-300 text-gray-900'
                : 'bg-gray-200 border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {t === 'chat' ? '채팅방' : '채팅 목록'}
          </button>
        ))}
      </div>

      {/* 기기 프레임 */}
      <div className="flex-1 flex items-center justify-center p-6 bg-white border border-gray-300 mx-6 mb-6 rounded-b-xl rounded-tr-xl overflow-auto">
        <div className="w-[320px] h-[568px]">
          {tab === 'chat' ? <ChatPreview /> : <HomePreview />}
        </div>
      </div>
    </main>
  )
}
