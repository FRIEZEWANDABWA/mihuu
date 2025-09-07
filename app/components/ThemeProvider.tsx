'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => {},
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'mihuu-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(storageKey)
      if (stored && (stored === 'dark' || stored === 'light')) {
        setTheme(stored as Theme)
      }
    } catch (error) {
      console.warn('Failed to access localStorage:', error)
    }
  }, [storageKey])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    try {
      const root = window.document.documentElement
      root.classList.remove('light', 'dark')
      root.classList.add(theme)
    } catch (error) {
      console.warn('Failed to update theme:', error)
    }
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      try {
        if (typeof window !== 'undefined') {
          localStorage.setItem(storageKey, theme)
        }
        setTheme(theme)
      } catch (error) {
        console.warn('Failed to save theme:', error)
        setTheme(theme)
      }
    },
  }

  if (!mounted) {
    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      </ThemeProviderContext.Provider>
    )
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}