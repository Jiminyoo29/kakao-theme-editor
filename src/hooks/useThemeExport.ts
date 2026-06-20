import { useState, useCallback } from 'react'
import { buildKthemeBlob, downloadBlob } from '../utils/themeBuilder'
import { useTheme } from '../context/ThemeContext'

type ExportState = 'idle' | 'building' | 'done' | 'error'

export function useThemeExport() {
  const { colors, metadata } = useTheme()
  const [state, setState] = useState<ExportState>('idle')

  const exportTheme = useCallback(async () => {
    setState('building')
    try {
      const blob = await buildKthemeBlob(colors, metadata)
      const safeName = metadata.name.replace(/[^a-zA-Z0-9가-힣_-]/g, '_')
      downloadBlob(blob, `${safeName}.ktheme`)
      setState('done')
      setTimeout(() => setState('idle'), 2000)
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 3000)
    }
  }, [colors, metadata])

  return { exportTheme, state }
}
