import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Esteban Montecinos',
  description: 'blog personal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-zinc-950 text-zinc-100`}>{children}</body>
    </html>
  )
}
