import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageHeader from './../components/navbar/PageHeader'
// import Breadcrumbs from "./../components/navbar/Breadcrumbs";
import Footer from './../components/footer/Footer'

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
      <body className={inter.className}>
        <header>
          <PageHeader/>
          {/* <Breadcrumbs></Breadcrumbs> */}
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
