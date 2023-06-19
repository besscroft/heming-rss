import '~/styles/globals.css'

export const metadata = {
  title: 'HeMing RSS',
  description: 'Your personal ChatGPT RSS Reader.',
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  appleWebApp: {
    title: "HeMing RSS",
    statusBarStyle: "default",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
