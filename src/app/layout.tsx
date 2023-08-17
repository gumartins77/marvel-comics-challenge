import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/img/icons8-marvel-48.png" type="image/png" />
        <title>Marvel</title>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
