import { useTheme } from '../../context/ThemeContext'
import { COLOR_SECTIONS } from '../../types/theme'
import SectionHeader from './SectionHeader'
import ColorPickerRow from './ColorPickerRow'
import ExportButton from '../ExportButton'

export default function ControlPanel() {
  const { metadata, setMetadata, resetColors } = useTheme()

  return (
    <aside className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* 헤더 */}
      <div className="px-4 py-4 border-b border-gray-200 bg-yellow-400">
        <h1 className="text-lg font-bold text-gray-900">카카오톡 테마 에디터</h1>
        <p className="text-xs text-gray-700 mt-0.5">색상을 바꾸면 우측 미리보기에 실시간 반영됩니다</p>
      </div>

      {/* 스크롤 영역 */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        {/* 테마 이름 */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            테마 이름
          </label>
          <input
            type="text"
            value={metadata.name}
            onChange={(e) => setMetadata({ name: e.target.value })}
            placeholder="나만의 테마"
            className="w-full border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* 색상 섹션 */}
        {COLOR_SECTIONS.map((section) => (
          <div key={section.title}>
            <SectionHeader title={section.title} />
            {section.fields.map((field) => (
              <ColorPickerRow key={field.key} colorKey={field.key} label={field.label} />
            ))}
          </div>
        ))}
      </div>

      {/* 하단 버튼 영역 */}
      <div className="px-4 py-3 border-t border-gray-200 flex flex-col gap-2">
        <ExportButton />
        <button
          onClick={resetColors}
          className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
        >
          기본값으로 초기화
        </button>
      </div>
    </aside>
  )
}
