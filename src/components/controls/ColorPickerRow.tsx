import { useTheme } from '../../context/ThemeContext'
import type { ColorKey } from '../../types/theme'

interface Props {
  colorKey: ColorKey
  label: string
}

export default function ColorPickerRow({ colorKey, label }: Props) {
  const { colors, setColor } = useTheme()
  const hex = colors[colorKey]

  return (
    <div className="flex items-center justify-between py-1.5">
      <label className="text-sm text-gray-700 select-none">{label}</label>
      <div className="flex items-center gap-2">
        {/* hex 값 텍스트 입력 */}
        <input
          type="text"
          maxLength={7}
          value={hex}
          onChange={(e) => {
            const v = e.target.value
            if (/^#[0-9A-Fa-f]{0,6}$/.test(v)) setColor(colorKey, v)
          }}
          className="w-24 text-xs text-center border border-gray-300 rounded px-2 py-1 font-mono focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        {/* 색상 스와치 */}
        <div
          className="w-8 h-8 rounded border border-gray-300 overflow-hidden cursor-pointer relative"
          style={{ backgroundColor: hex }}
          title={label}
        >
          <input
            type="color"
            value={hex}
            onChange={(e) => setColor(colorKey, e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
