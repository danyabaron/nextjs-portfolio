import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danya Baron Portfolio',
  description: 'Danya Baron: UI/UX Designer and Front End Developer',
  // icons: {
  //   icon: 'src/app/favicon.ico',
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <link rel="icon" href="app/icon.ico" sizes="any" />
      
        {children}
      </body>
    </html>
  )
}
