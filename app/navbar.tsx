'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClientNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-red-600 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-red-700">FluidTech</div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link href="/" className="text-red-700">Home</Link>

            <div className="relative group">
              <button className="text-red-700 focus:outline-none">Services</button>
              <div className="absolute left-0 mt-2 bg-white border border-red-600 shadow-lg rounded-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li><Link href="/services/detailed" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Detailed Services</Link></li>
                  <li><Link href="/services/seals" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Seal Section</Link></li>
                  <li><Link href="#hydraulic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Hydraulic Parts</Link></li>
                  <li><Link href="#pneumatic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Pneumatic Parts</Link></li>
                  <li><Link href="#industrial-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Industrial Parts</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/products" className="text-red-700">Products</Link>
            <Link href="/contact" className="text-red-700">Contact Us</Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-red-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {/* 3-line menu / X icon toggle */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (toggle) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-red-600 shadow">
          <Link href="/" className="block px-4 py-3 text-red-700 hover:bg-red-50 border-b border-red-100">Home</Link>
          <div>
            <div className="px-4 py-2 font-semibold text-red-700 border-b border-red-100">Services</div>
            <Link href="/services/detailed" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Detailed Services</Link>
            <Link href="/services/seals" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Seal Section</Link>
            <Link href="#hydraulic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Hydraulic Parts</Link>
            <Link href="#pneumatic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Pneumatic Parts</Link>
            <Link href="#industrial-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Industrial Parts</Link>
          </div>
          <Link href="/products" className="block px-4 py-3 text-red-700 hover:bg-red-50 border-t border-red-100">Products</Link>
          <Link href="/contact" className="block px-4 py-3 text-red-700 hover:bg-red-50 border-t border-red-100">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
