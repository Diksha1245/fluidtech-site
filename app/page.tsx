'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
const slides = [
  { 
    image: '/slide1.jpg',
    title: 'Precision Engineering', 
    subtitle: 'Custom hydraulic systems built for performance.' 
  },
  { 
    image: 'slide2.jpg',
    title: 'Power You Can Trust', 
    subtitle: 'High-quality pumps, motors, and valves in stock.' 
  },
  { 
    image: 'Slide3.jpg',
    title: 'Rapid Onsite Service', 
    subtitle: 'Emergency repairs & mobile hose vans at your door.' 
  },
  { 
    image: 'Slide4.jpg',
    title: 'Pneumatic Excellence', 
    subtitle: 'Janatics official distributor – full range available.' 
  },
  { 
    image: 'Slide5.jpg',
    title: 'Cylinders & Powerpacks', 
    subtitle: 'Design, fabrication and repair under one roof.' 
  },
  { 
    image: 'Slide6.jpg',
    title: 'Smart Fabrication', 
    subtitle: 'Truck bodies, tankers, and jetting units tailored to need.' 
  },
  { 
    image: 'Slide7.jpg',
    title: 'Crane Installations', 
    subtitle: 'Overhead, truck-mounted cranes and tail lifts.' 
  },
  { 
    image: 'Slide8.jpg',
    title: 'Electrical + PLC Services', 
    subtitle: 'Troubleshooting industrial control systems fast.' 
  },
  { 
    image: 'Slide9.jpg',
    title: 'Sectional Water Tanks', 
    subtitle: 'Hansung FRP tanks – supply and install.' 
  },
  { 
    image: 'Slide10.jpg',
    title: 'End-to-End Support', 
    subtitle: 'Preventive maintenance to minimize downtime.' 
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main style={{ backgroundColor: 'white', minHeight: '100vh', color: '#374151' }}>
      {/* HERO SLIDESHOW */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '500px', 
        overflow: 'hidden' 
      }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: i === current ? 1 : 0,
              transition: 'opacity 1200ms ease-in-out',
              zIndex: i === current ? 10 : 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2rem'
            }}>
              <h1 style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#fbbf24',
                textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                marginBottom: '1rem',
                margin: '0 0 1rem 0'
              }}>
                FluidTech Hydraulics
              </h1>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                margin: '0 0 0.5rem 0'
              }}>
                {slide.title}
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: '#e5e7eb',
                textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                margin: '0 0 2rem 0',
                maxWidth: '600px'
              }}>
                {slide.subtitle}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/products" passHref>
                <button style={{
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  textShadow: 'none'
                }}
                onMouseOver={(e) => {
                  const btn = e.target as HTMLButtonElement;
                  btn.style.backgroundColor = '#b91c1c';
                  btn.style.transform = 'translateY(-2px)';
                  btn.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  const btn = e.target as HTMLButtonElement;
                  btn.style.backgroundColor = '#dc2626';
                  btn.style.transform = 'translateY(0)';
                  btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
                >
                  View Products
                </button>
                </Link>
                <Link href="/contact" passHref>

                <button style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  textShadow: 'none'
                }}
                onMouseOver={(e) => {
                  const btn = e.target as HTMLButtonElement;
                  btn.style.backgroundColor = 'white';
                  btn.style.color = '#dc2626';
                  btn.style.transform = 'translateY(-2px)';
                  btn.style.boxShadow = '0 6px 10px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  const btn = e.target as HTMLButtonElement;
                  btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  btn.style.color = 'white';
                  btn.style.transform = 'translateY(0)';
                  btn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                }}
                >
                  Request Quote
                </button>
              </Link>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation arrows */}
        <button
          onClick={() => setCurrent(current === 0 ? slides.length - 1 : current - 1)}
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          }}
          onMouseOut={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }}
        >
          ‹
        </button>
        
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          }}
          onMouseOut={(e) => {
            const btn = e.target as HTMLButtonElement;
            btn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }}
        >
          ›
        </button>
        
        {/* Slide indicators */}
        <div style={{
          position: 'absolute',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '0.75rem',
          zIndex: 20
        }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '2px solid white',
                cursor: 'pointer',
                backgroundColor: i === current ? '#fbbf24' : 'transparent',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
          ))}
        </div>
      </div>

      
      {/* Services Section */}
      <section id="services" className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-red-700">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            'Hydraulic Valves',
            'Pumps & Motors',
            'Hoses & Fittings',
            'Filtration Systems',
            'Pneumatic Solutions',
            'Custom Assemblies',
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border border-red-600 p-6 rounded-lg hover:shadow-md transition cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-red-700">{service}</h3>
              <p className="mt-2 text-sm text-gray-600">
                High-performance {service.toLowerCase()} tailored to your application.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by Industry Leaders */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Authorized Dealers</h2>
          <p className="text-gray-600 mb-10">
            We proudly support leading companies across Bahrain and the GCC with fast, reliable
            hydraulic and pneumatic solutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center opacity-80">
            <img src="client5.png" alt="Client 1" className="h-16 mx-auto" />
            <img src="client6.png" alt="Client 2" className="h-16 mx-auto" />
            <img src="client3.png" alt="Client 3" className="h-16 mx-auto" />
            <img src="client4.png" alt="Client 4" className="h-16 mx-auto" />
            <img src="client1.png" alt="Client 5" className="h-16 mx-auto" />
            <img src="client2.png" alt="Client 6" className="h-16 mx-auto" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-red-700 py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Hydraulic or Pneumatic Solution?</h2>
          <p className="text-lg mb-6">
            From design to on-site service, we're ready to support your most demanding needs.
          </p>
          <a href="/contact">
            <button className="bg-white text-red-700 px-6 py-3 font-semibold rounded hover:bg-red-100 transition">
              Get in Touch Today
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}