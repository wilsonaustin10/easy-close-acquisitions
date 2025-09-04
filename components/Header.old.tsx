'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/Easy Close Acquisitions.png"
              alt="Easy Close Acquisitions"
              width={200}
              height={60}
              style={{ objectFit: 'contain' }}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-primary hover:text-accent font-medium text-lg transition-colors"
            >
              Home
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-primary hover:text-accent font-medium text-lg transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#testimonials" 
              className="text-primary hover:text-accent font-medium text-lg transition-colors"
            >
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link
              href="/about"
              className="inline-flex items-center px-4 py-2 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#business-form"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors"
            >
              Get Business Valuation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 