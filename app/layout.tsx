'use client'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

import Dashboard from './@component/Dashboard'

// export const metadata: Metadata = {
//   title: "white's blog",
//   description: 'about me',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <title>white&apos;s blog</title>
        <meta name="description" content="white's blog" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  )
}
