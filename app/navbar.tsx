'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ClientNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-red-600 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-red-700">FluidTech</div>

          {/* Desktop Menu */}
          <div className="space-x-6 text-sm font-medium hidden md:flex">
            <Link href="/" className="text-red-700">Home</Link>

            <div className="relative group">
              <button className="text-red-700 focus:outline-none">Services</button>
              <div className="absolute left-0 mt-2 bg-white border border-red-600 shadow-lg rounded-md w-64 opacity-70 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li><Link href="/services/detailed" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Detailed Services</Link></li>
                  <li><Link href="/services/seals" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Seal Section</Link></li>
                  <li><Link href="#hydraulic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Hydraulic Parts & Service</Link></li>
                  <li><Link href="#pneumatic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Pneumatic Parts & Service</Link></li>
                  <li><Link href="#industrial-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700">Industrial Parts & Service</Link></li>
                </ul>
              </div>
            </div>

            <Link href="/products" className="text-red-700">Products</Link>
            <Link href="/contact" className="text-red-700">Contact Us</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-red-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-red-600 shadow-lg`}>
        <Link href="/" className="block px-4 py-3 text-red-700 border-b border-red-100 hover:bg-red-50">Home</Link>
        
        <div>
          <div className="px-4 py-2 text-red-700 font-semibold border-b border-red-100">Services</div>
          <Link href="/services/detailed" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Detailed Services</Link>
          <Link href="/services/seals" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Seal Section</Link>
          <Link href="#hydraulic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Hydraulic Parts & Service</Link>
          <Link href="#pneumatic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Pneumatic Parts & Service</Link>
          <Link href="#industrial-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50">Industrial Parts & Service</Link>
        </div>

        <Link href="/products" className="block px-4 py-3 text-red-700 border-t border-red-100 hover:bg-red-50">Products</Link>
        <Link href="/contact" className="block px-4 py-3 text-red-700 border-t border-red-100 hover:bg-red-50">Contact Us</Link>
      </div>
    </nav>
  );
}
