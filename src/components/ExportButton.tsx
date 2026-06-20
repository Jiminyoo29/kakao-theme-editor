import { useThemeExport } from '../hooks/useThemeExport'

const LABEL: Record<string, string> = {
  idle: '.ktheme 파일 다운로드',
  building: '생성 중...',
  done: '다운로드 완료!',
  error: '오류 발생. 다시 시도하세요',
}

const BG: Record<string, string> = {
  idle: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
  building: 'bg-yellow-200 text-gray-500 cursor-not-allowed',
  done: 'bg-green-400 text-white',
  error: 'bg-red-400 text-white',
}

export default function ExportButton() {
  const { exportTheme, state } = useThemeExport()

  return (
    <button
      onClick={exportTheme}
      disabled={state === 'building'}
      className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${BG[state]}`}
    >
      {LABEL[state]}
    </button>
  )
}
