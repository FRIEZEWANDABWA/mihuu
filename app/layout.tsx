import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Mihuu Ward - Empowering Community Growth',
    template: '%s | Mihuu Ward'
  },
  description: 'Official website for Mihuu Ward, Webuye East, Bungoma County. Transparent service delivery, community projects, and civic engagement.',
  keywords: ['Mihuu Ward', 'Bungoma County', 'Webuye East', 'Kenya Government', 'Community Development', 'Transparent Governance', 'Hon. Violet Makhanu'],
  authors: [{ name: 'Mihuu Ward Administration' }],
  creator: 'Mihuu Ward',
  publisher: 'Mihuu Ward Administration',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mihuu.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mihuu Ward - Empowering Community Growth',
    description: 'Official website for Mihuu Ward, Webuye East, Bungoma County. Transparent service delivery, community projects, and civic engagement.',
    url: 'https://mihuu.netlify.app',
    siteName: 'Mihuu Ward',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/pics/profile/2.jpg',
        width: 1200,
        height: 630,
        alt: 'Mihuu Ward Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mihuu Ward - Empowering Community Growth',
    description: 'Official website for Mihuu Ward, Webuye East, Bungoma County. Transparent service delivery, community projects, and civic engagement.',
    images: ['/pics/profile/2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mihuu Ward" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}