import './globals.css' // ✅ REQUIRED for Tailwind to work

export const metadata = {
  title: 'DirtHub',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}