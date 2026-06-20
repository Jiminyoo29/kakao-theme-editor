import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import {
  type ThemeColors,
  type ThemeMetadata,
  type ColorKey,
  DEFAULT_COLORS,
  DEFAULT_METADATA,
} from '../types/theme'

interface ThemeContextValue {
  colors: ThemeColors
  metadata: ThemeMetadata
  setColor: (key: ColorKey, value: string) => void
  setMetadata: (patch: Partial<ThemeMetadata>) => void
  resetColors: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colors, setColors] = useState<ThemeColors>({ ...DEFAULT_COLORS })
  const [metadata, setMetadataState] = useState<ThemeMetadata>({ ...DEFAULT_METADATA })

  const setColor = useCallback((key: ColorKey, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }))
  }, [])

  const setMetadata = useCallback((patch: Partial<ThemeMetadata>) => {
    setMetadataState((prev) => ({ ...prev, ...patch }))
  }, [])

  const resetColors = useCallback(() => {
    setColors({ ...DEFAULT_COLORS })
  }, [])

  return (
    <ThemeContext.Provider value={{ colors, metadata, setColor, setMetadata, resetColors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}
