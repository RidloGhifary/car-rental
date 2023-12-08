import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './footer/page'
import Navbar from './navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Car Rental',
  description: 'Generated by ridlo achmad ghifary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
