'use client';

import { useEffect, useState } from 'react';
import { FaBox, FaCogs, FaTools, FaShieldAlt, FaIndustry, FaShippingFast, FaHandsHelping } from 'react-icons/fa';
import Link from 'next/link';
const seals = [
  {
    icon: <FaBox className="text-red-600 w-7 h-7" />,
    title: 'Hydraulic Seals',
    description:
      'Precision-engineered hydraulic seals designed to withstand high pressures and extreme conditions, ensuring leak-free and reliable performance across all hydraulic applications.',
  },
  {
    icon: <FaCogs className="text-red-600 w-7 h-7" />,
    title: 'Pneumatic Seals',
    description:
      'Durable pneumatic seals that maintain optimal air-tightness and resist wear, providing efficient operation in pneumatic cylinders and equipment.',
  },
  {
    icon: <FaTools className="text-red-600 w-7 h-7" />,
    title: 'Custom Seals',
    description:
      'Tailor-made sealing solutions crafted to meet your specific industrial needs, accommodating unique dimensions, materials, and performance requirements.',
  },
  {
    icon: <FaShieldAlt className="text-red-600 w-7 h-7" />,
    title: 'Wear Rings & Bearings',
    description:
      'High-quality wear rings and bearings to support piston alignment, reduce friction, and prolong the lifespan of hydraulic and pneumatic components.',
  },
];

const benefits = [
  'Extensive range of seals for varied industrial applications',
  'High resistance to temperature, pressure, and chemicals',
  'Superior durability for reduced downtime and maintenance',
  'Precision manufacturing ensuring tight tolerances and fit',
  'Expert technical support for seal selection and troubleshooting',
];

export default function SealSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-red-700 mb-8 text-center tracking-tight">
          Seal Section
        </h1>

        {/* Intro paragraph */}
        <p className="text-xl max-w-4xl mx-auto text-center text-gray-700 mb-16 leading-relaxed">
          At FluidTech Hydraulics, we specialize in premium sealing solutions engineered for
          performance, reliability, and longevity. Our comprehensive seal range supports hydraulic,
          pneumatic, and custom industrial applications — delivering leak-proof operation and
          unmatched durability under the toughest conditions.
        </p>

        {/* Seal types grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 opacity-0 transform transition duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}
        >
          {seals.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className="flex items-start gap-5 bg-gray-50 border-l-8 border-red-600 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="mt-1">{icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-red-700 mb-2">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose us section */}
        <section className="mt-20 max-w-4xl mx-auto bg-red-50 border border-red-300 rounded-lg p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">
            Why Choose FluidTech Seals?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            {benefits.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </section>

        {/* Service Highlights */}
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <FaIndustry className="mx-auto text-red-700 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Industry Leading Quality</h3>
            <p className="text-gray-700">
              Our seals meet the most stringent industrial standards and are tested for maximum
              reliability.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <FaShippingFast className="mx-auto text-red-700 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable Delivery</h3>
            <p className="text-gray-700">
              With extensive stock and logistics, we ensure your seals arrive on time, minimizing
              downtime.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <FaHandsHelping className="mx-auto text-red-700 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Technical Support</h3>
            <p className="text-gray-700">
              Our team provides dedicated support to help you select and maintain the ideal sealing
              solutions.
            </p>
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-red-700 mb-4">
            Ready to Find the Perfect Seal?
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact our specialists today to discuss your requirements and get a custom quote
            tailored to your industrial needs.
          </p>
          <Link
            href="/contact">
            <p className="inline-block bg-red-700 text-white text-lg font-semibold px-8 py-3 rounded shadow hover:bg-red-800 transition">
          
            Get in Touch
            </p>
          </Link>
        </section>
      </section>
    </main>
  );
}
