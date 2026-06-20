import { useTheme } from '../../context/ThemeContext'

const FRIENDS = [
  { name: '친구 A', msg: '오늘 점심 뭐 먹었어?', time: '오전 10:30', unread: 2 },
  { name: '친구 B', msg: '내일 약속 괜찮아?', time: '오전 9:15', unread: 0 },
  { name: '친구 C', msg: '사진 보냈어!', time: '어제', unread: 1 },
  { name: '우리 가족', msg: '엄마: 저녁은?', time: '어제', unread: 5 },
]

export default function HomePreview() {
  const { colors } = useTheme()

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden shadow-xl border border-gray-300"
      style={{ maxWidth: 320, margin: '0 auto' }}
    >
      {/* 헤더 */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ backgroundColor: colors.headerBg }}
      >
        <h2 className="text-base font-bold" style={{ color: colors.headerText }}>
          채팅
        </h2>
        <div className="flex gap-3">
          <span style={{ color: colors.headerText }}>🔍</span>
          <span style={{ color: colors.headerText }}>+</span>
        </div>
      </div>

      {/* 채팅 목록 */}
      <div className="flex-1 overflow-y-auto" style={{ backgroundColor: colors.mainBg }}>
        {FRIENDS.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-4 py-3 border-b border-black/5"
          >
            {/* 프로필 */}
            <div className="w-12 h-12 rounded-full bg-gray-400 flex-shrink-0 flex items-center justify-center text-white font-bold">
              {f.name[0]}
            </div>

            {/* 내용 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold truncate" style={{ color: colors.nameText }}>
                  {f.name}
                </span>
                <span className="text-xs flex-shrink-0 ml-2" style={{ color: colors.timeText }}>
                  {f.time}
                </span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs truncate" style={{ color: colors.timeText }}>
                  {f.msg}
                </span>
                {f.unread > 0 && (
                  <span
                    className="ml-2 text-xs font-bold rounded-full px-1.5 py-0.5 flex-shrink-0"
                    style={{ backgroundColor: colors.myBubbleBg, color: colors.myBubbleText }}
                  >
                    {f.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 탭바 */}
      <div
        className="flex border-t border-black/10"
        style={{ backgroundColor: colors.tabBarBg }}
      >
        {[
          { icon: '👥', label: '친구' },
          { icon: '💬', label: '채팅', active: true },
          { icon: '#', label: '오픈채팅' },
          { icon: '🛒', label: '쇼핑' },
          { icon: '⋯', label: '더보기' },
        ].map((tab) => (
          <button
            key={tab.label}
            className="flex-1 flex flex-col items-center py-2 gap-0.5"
          >
            <span className="text-lg">{tab.icon}</span>
            <span
              className="text-[10px]"
              style={{ color: tab.active ? colors.tabBarActive : colors.tabBarInactive }}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
