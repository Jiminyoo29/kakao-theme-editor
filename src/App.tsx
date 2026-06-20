import { ThemeProvider } from './context/ThemeContext'
import ControlPanel from './components/controls/ControlPanel'
import PreviewPanel from './components/preview/PreviewPanel'

export default function App() {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden">
        {/* 좌측: 컨트롤 패널 (고정 너비) */}
        <div className="w-72 flex-shrink-0 h-full overflow-hidden">
          <ControlPanel />
        </div>

        {/* 우측: 실시간 프리뷰 (나머지 공간) */}
        <div className="flex-1 h-full overflow-hidden">
          <PreviewPanel />
        </div>
      </div>
    </ThemeProvider>
  )
}
