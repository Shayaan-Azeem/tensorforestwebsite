import type { Metadata } from 'next'
import { EB_Garamond } from 'next/font/google'

const garamond = EB_Garamond({ 
  subsets: ['latin'],
  display: 'swap',
})
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tensorforest',
  description: 'Building AI drones for forest mapping and monitoring',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
