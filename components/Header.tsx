'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 px-4" onClick={closeMenu}>
            <Image
              src="/easy-close-acquisitions-logo.png"
              alt="Easy Close Acquisitions"
              width={100}
              height={30}
              style={{ objectFit: 'contain' }}
              priority
              className="hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary font-medium text-base transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-gray-700 hover:text-primary font-medium text-base transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-gray-700 hover:text-primary font-medium text-base transition-colors"
            >
              Testimonials
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-primary font-medium text-base transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:(302) 592-3436"
              className="flex items-center px-4 py-2 text-primary hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">(302) 592-3436</span>
            </a>
            <Link
              href="/#business-form"
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105"
            >
              Get Free Valuation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link
            href="/"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/#how-it-works"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            How It Works
          </Link>
          <Link
            href="/#testimonials"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            href="/about"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
            onClick={closeMenu}
          >
            About Us
          </Link>
          
          {/* Mobile CTA section */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <a
              href="tel:(302) 592-3436"
              className="flex items-center justify-center w-full px-4 py-3 mb-3 text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
              onClick={closeMenu}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-semibold">Call (302) 592-3436</span>
            </a>
            <Link
              href="/#business-form"
              className="flex items-center justify-center w-full px-4 py-3 text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-colors font-semibold"
              onClick={closeMenu}
            >
              Get Free Business Valuation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}