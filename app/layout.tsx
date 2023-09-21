import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'
import { ThemeProvider } from '@/components/ui/theme-provider'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png"/>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#444444"/>
        <meta name="apple-mobile-web-app-title" content="Upstate Digital Solutions"/>
        <meta name="application-name" content="Upstate Digital Solutions"/>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
        <meta name="theme-color" content="444444"/>
        </head>
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex-1 flex-col">
              {children}
              <Analytics />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
