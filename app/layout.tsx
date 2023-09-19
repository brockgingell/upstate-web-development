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
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"/>
          <link rel="manifest" href="/public/site.webmanifest"/>
          <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#bf7e00"/>
          <link rel="shortcut icon" href="/public/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#ffc40d"/>
          <meta name="msapplication-config" content="/public/browserconfig.xml"/>
          <meta name="theme-color" content="#e4a20b"/>
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}<Analytics /></div>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
