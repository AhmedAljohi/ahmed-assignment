import './globals.css'
import { Inter, Abel } from 'next/font/google'
import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import { ReactQueryProvider } from '@/providers/react-query'

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-inter',
})

const abel = Abel({
  weight: ['400'],
  variable: '--font-abel',
})

export const metadata = {
  icons: {
    icon: '/assets/nhc-logo.svg',
  },
  title: 'NHC Assignment',
  description: 'NHC Assignment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${abel.variable}`}>
        <ReactQueryProvider>
          <Header />
          {/* 209px is the height of the header and footer */}
          <main className="min-h-[calc(100vh-209px)]">
            {children}
          </main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
