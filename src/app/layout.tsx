import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Krishna PG Hostel',
  description: 'Comfortable and spiritual PG accommodation at Krishna PG',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-gradient-to-br from-indigo-200 via-yellow-100 to-blue-100 text-gray-800 min-h-screen flex flex-col`}>
        <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-yellow-200 shadow-lg animate-fade-in py-5">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold tracking-wider">Krishna PG 🦚</h1>
            <nav>
              <ul className="flex space-x-6 text-lg">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#amenities">Amenities</Link></li>
                <li><Link href="/#carousel">Gallery</Link></li>
                <li><Link href="/#testimonials">Testimonials</Link></li>
                <li><Link href="/#location">Location</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto px-6 py-10 animate-fade-in-slow">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white py-8">
          <div className="container mx-auto px-6 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Krishna PG. All rights reserved.</p>
            <p>WhatsApp us: <a href="tel:+919967269742" className="underline hover:text-yellow-300">+91 99672 69742</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}