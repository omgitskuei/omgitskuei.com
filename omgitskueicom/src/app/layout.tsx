import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import favicon from "../assets/icons/icon.png"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home | OmgItsKuei',
  description: 'The office of Kuei-Feng Tung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       {/* <head> */}
        {/* <link rel='icon' href="../assets/icons/icon.png"/> */}
      {/* </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
