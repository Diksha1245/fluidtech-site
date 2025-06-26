import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'FluidTech Hydraulics',
  description: 'Precision. Power. Performance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-white text-gray-900">
        
        {/* Navbar */}
        <nav className="bg-white border-b border-red-600 shadow sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="text-2xl font-bold text-red-700">FluidTech</div>
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
                        <a href="/services/hydaraulic" className="block px-4 py-2 hover:bg-red-50 hover:text-red-700 transition">Hydraulic Parts & Service</a>
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
                <a href="#accessories" className="text-red-700">Accessories</a>
                <a href="#tech" className="text-red-700">Tech Details</a>
                <a href="/contact" className="text-red-700">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>


        {/* Page content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-2  border-t border-red-600">
          &copy; {new Date().getFullYear()} FluidTech Hydraulics. All rights reserved.
        </footer>
      </body>
    </html>
  );
} 