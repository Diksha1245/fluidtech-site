// app/ClientNavbar.tsx

'use client';

import { useState } from 'react';

export default function ClientNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-red-600 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-red-700">FluidTech</div>

          {/* Desktop menu */}
          <div className="space-x-6 text-sm font-medium hidden md:flex">
            <a href="/" className="text-red-700">Home</a>

            <div className="relative group">
              <button className="text-red-700 focus:outline-none">
                Services
              </button>

              {/* Dropdown menu */}
              <div className="absolute left-0 mt-2 bg-white border border-red-600 shadow-lg rounded-md w-50 opacity-70 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="/services/detailed" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Detailed Services</a>
                  </li>
                  <li>
                    <a href="/services/seals" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Seal Section</a>
                  </li>
                  <li>
                    <a href="#hydraulic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Hydraulic Parts & Service</a>
                  </li>
                  <li>
                    <a href="#pneumatic-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Pneumatic Parts & Service</a>
                  </li>
                  <li>
                    <a href="#industrial-parts" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Industrial Parts & Service</a>
                  </li>
                </ul>
              </div>
            </div>

            <a href="/products" className="text-red-700">Products</a>
            <a href="/contact" className="text-red-700">Contact Us</a>
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden text-red-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-red-600 shadow-lg">
          <a href="/" className="block px-4 py-3 text-red-700 border-b border-red-100 hover:bg-red-50 transition">Home</a>

          <div>
            <div className="px-4 py-2 text-red-700 font-semibold border-b border-red-100">Services</div>
            <a href="/services/detailed" className="block px-6 py-2 text-gray-700 hover:bg-red-50 transition">Detailed Services</a>
            <a href="/services/seals" className="block px-6 py-2 text-gray-700 hover:bg-red-50 transition">Seal Section</a>
            <a href="#hydraulic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50 transition">Hydraulic Parts & Service</a>
            <a href="#pneumatic-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50 transition">Pneumatic Parts & Service</a>
            <a href="#industrial-parts" className="block px-6 py-2 text-gray-700 hover:bg-red-50 transition">Industrial Parts & Service</a>
          </div>
          <a href="/products" className="block px-4 py-3 text-red-700 border-t border-red-100 hover:bg-red-50 transition">Products</a>
          <a href="/contact" className="block px-4 py-3 text-red-700 border-t border-red-100 hover:bg-red-50 transition">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
