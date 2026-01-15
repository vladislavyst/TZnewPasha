import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Интерактивный тест для сбора ТЗ',
  description: 'Веб-приложение для сбора технического задания от клиентов',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
