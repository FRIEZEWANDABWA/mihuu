'use client'

import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { BackToTop } from '../components/BackToTop'
import { ScrollProgress } from '../components/ScrollProgress'
import { ThemeProvider } from '../components/ThemeProvider'
import { Transparency } from '../components/Transparency'

export default function TransparencyPage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <Navigation />
        <main className="pt-20">
          <Transparency />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}