import './styles/globals.scss'
import { fontClasses } from "./styles/fonts";


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Frontend Bites',
  description: 'A library of frontend elements',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontClasses}>
        {children}
      </body>
    </html>
  )
}
