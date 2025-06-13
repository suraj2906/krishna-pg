import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Krishna Haven',
  description: 'Comfortable and spiritual PG accommodation at Krishna Haven PG Hostel',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} bg-gradient-to-br from-indigo-200 via-yellow-100 to-blue-100 text-gray-800 min-h-screen flex flex-col`}
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-yellow-200 shadow-lg animate-fade-in py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-center md:text-left">
              Krishna Haven 🦚
            </h1>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-base sm:text-lg text-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#amenities">Amenities</Link></li>
                <li><Link href="/#carousel">Gallery</Link></li>
                {/* <li><Link href="/#testimonials">Testimonials</Link></li> */}
                <li><Link href="/#location">Location</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-fade-in-slow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm space-y-1">
            <p>&copy; {new Date().getFullYear()} Krishna PG. All rights reserved.</p>
            <p>
              WhatsApp us:{' '}
              <a
                href="tel:+919967269742"
                className="underline hover:text-yellow-300"
              >
                +91 99672 69742
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
