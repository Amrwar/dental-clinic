import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Arty Dental Clinic | Premium Dental Care',
  description: 'Experience exceptional dental care with our team of expert dentists. Modern technology, gentle care, and beautiful smiles.',
  keywords: 'dental clinic, dentist, dental care, teeth whitening, dental implants, cosmetic dentistry, root canal, pediatric dentistry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
