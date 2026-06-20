import { useTheme } from '../../context/ThemeContext'

export default function ChatPreview() {
  const { colors } = useTheme()

  return (
    <div
      className="flex flex-col h-full rounded-2xl overflow-hidden shadow-xl border border-gray-300"
      style={{ maxWidth: 320, margin: '0 auto' }}
    >
      {/* 상단 헤더 */}
      <div
        className="flex items-center px-4 py-3 gap-3"
        style={{ backgroundColor: colors.headerBg }}
      >
        <button className="text-lg" style={{ color: colors.headerText }}>←</button>
        <div className="flex items-center gap-2 flex-1">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
            J
          </div>
          <div>
            <div className="text-sm font-semibold" style={{ color: colors.headerText }}>
              친구
            </div>
            <div className="text-xs opacity-60" style={{ color: colors.headerText }}>
              온라인
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <span style={{ color: colors.headerText }}>🔍</span>
          <span style={{ color: colors.headerText }}>☰</span>
        </div>
      </div>

      {/* 채팅 영역 */}
      <div
        className="flex-1 px-3 py-4 flex flex-col gap-3 overflow-y-auto"
        style={{ backgroundColor: colors.chatBg }}
      >
        {/* 상대방 메시지 */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 flex items-center justify-center text-white text-xs">
            J
          </div>
          <div>
            <div className="text-xs mb-1 ml-1" style={{ color: colors.nameText }}>
              친구
            </div>
            <div className="flex items-end gap-1">
              <div
                className="px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-[180px]"
                style={{ backgroundColor: colors.otherBubbleBg, color: colors.otherBubbleText }}
              >
                안녕하세요! 오늘 날씨 좋네요 ☀️
              </div>
              <span className="text-xs flex-shrink-0" style={{ color: colors.timeText }}>
                오전 10:23
              </span>
            </div>
          </div>
        </div>

        {/* 상대방 메시지 2 */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 flex items-center justify-center text-white text-xs">
            J
          </div>
          <div className="flex items-end gap-1">
            <div
              className="px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-[180px]"
              style={{ backgroundColor: colors.otherBubbleBg, color: colors.otherBubbleText }}
            >
              점심 같이 드실래요?
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: colors.timeText }}>
              오전 10:24
            </span>
          </div>
        </div>

        {/* 내 메시지 */}
        <div className="flex items-end justify-end gap-2">
          <div className="flex items-end gap-1">
            <span className="text-xs flex-shrink-0" style={{ color: colors.timeText }}>
              오전 10:25
            </span>
            <div
              className="px-3 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[180px]"
              style={{ backgroundColor: colors.myBubbleBg, color: colors.myBubbleText }}
            >
              좋아요! 어디로 갈까요?
            </div>
          </div>
        </div>

        {/* 내 메시지 2 */}
        <div className="flex items-end justify-end gap-2">
          <div className="flex items-end gap-1">
            <span className="text-xs flex-shrink-0" style={{ color: colors.timeText }}>
              오전 10:25
            </span>
            <div
              className="px-3 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[180px]"
              style={{ backgroundColor: colors.myBubbleBg, color: colors.myBubbleText }}
            >
              파스타 먹고 싶어요 😊
            </div>
          </div>
        </div>

        {/* 상대방 메시지 3 */}
        <div className="flex items-end gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 flex items-center justify-center text-white text-xs">
            J
          </div>
          <div className="flex items-end gap-1">
            <div
              className="px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-[180px]"
              style={{ backgroundColor: colors.otherBubbleBg, color: colors.otherBubbleText }}
            >
              저도요! 12시에 만나요 🍝
            </div>
            <span className="text-xs flex-shrink-0" style={{ color: colors.timeText }}>
              오전 10:26
            </span>
          </div>
        </div>
      </div>

      {/* 입력창 */}
      <div
        className="flex items-center gap-2 px-3 py-2 border-t border-black/10"
        style={{ backgroundColor: colors.inputBg }}
      >
        <span className="text-xl">+</span>
        <div
          className="flex-1 rounded-full px-4 py-1.5 text-sm"
          style={{ backgroundColor: colors.chatBg, color: colors.inputText }}
        >
          <span className="opacity-40" style={{ color: colors.inputText }}>메시지 입력</span>
        </div>
        <span className="text-xl">😊</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: colors.myBubbleBg, color: colors.myBubbleText }}
        >
          ▶
        </div>
      </div>
    </div>
  )
}
