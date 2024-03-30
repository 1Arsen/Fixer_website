import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import HeaderPage from './views/header/header'
import FooterPage from './views/footer/footer'

export const metadata: Metadata = {
  title: 'Ремонт техники',
  description: 'Создано BS group',
}

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-inter',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={montserrat.className}>
      <link rel="manifest" href="/manifest.json" />
      <body>
        <HeaderPage />
        <div className="main">{children}</div>
        <FooterPage />
      </body>
    </html>
  )
}
