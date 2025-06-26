'use client';

import { useEffect, useState } from 'react';
import { FaCog, FaWrench, FaTruck, FaTools, FaWater, FaShieldAlt, FaBolt, FaPhoneAlt, FaCogs, FaDatabase, FaHeadset, FaCubes } from 'react-icons/fa';

const services = [
  {
    icon: <FaCog className="text-red-600 w-6 h-6" />,
    title: "Design, Fabricate and Repair of all types of Hydraulic & Pneumatic Cylinders and Powerpacks",
  },
  {
    icon: <FaWrench className="text-red-600 w-6 h-6" />,
    title: "Custom Hydraulic Systems designed to customer specifications",
  },
  {
    icon: <FaCogs className="text-red-600 w-6 h-6" />,
    title: "Upgrading and retrofitting existing hydraulic systems",
  },
  {
    icon: <FaTools className="text-red-600 w-6 h-6" />,
    title: "Supply and service of pumps, motors, valves and components (all major brands)",
  },
  {
    icon: <FaDatabase className="text-red-600 w-6 h-6" />,
    title: "Authorised Janatics distributor – full Pneumatic product range in stock",
  },
  {
    icon: <FaShieldAlt className="text-red-600 w-6 h-6" />,
    title: "HFS Rolling Shutter supply, installation, and commissioning",
  },
  {
    icon: <FaTruck className="text-red-600 w-6 h-6" />,
    title: "Fabrication of Truck bodies, Tankers, Dump Trucks, High-Pressure Jetting Units, etc.",
  },
  {
    icon: <FaBolt className="text-red-600 w-6 h-6" />,
    title: "Supply & installation of truck-mounted cranes, tail lifts, overhead cranes, skip loaders",
  },
  {
    icon: <FaHeadset className="text-red-600 w-6 h-6" />,
    title: "Mobile Hose Vans for rapid onsite service and emergency repairs",
  },
  {
    icon: <FaPhoneAlt className="text-red-600 w-6 h-6" />,
    title: "PLC & Electrical troubleshooting for industrial systems",
  },
  {
    icon: <FaWater className="text-red-600 w-6 h-6" />,
    title: "Installation of Hansung sectional water tanks",
  },
  {
    icon: <FaCubes className="text-red-600 w-6 h-6" />,
    title: "Preventive maintenance programs to reduce downtime",
  },
];

export default function DetailedServices() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate fade-in after mount
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 transition-colors duration-500">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-red-700 mb-10 text-center">Detailed Services</h1>

        {/* Intro */}
        <p className="text-lg max-w-3xl mx-auto text-center mb-12 text-gray-700">
          We offer a comprehensive suite of hydraulic and pneumatic services tailored to meet the
          highest standards of performance, precision, and durability.
        </p>

        {/* Grid of Services with fade-in animation */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 opacity-0 transform transition duration-700 ${visible ? 'opacity-100 translate-y-0' : 'translate-y-10'}`}>
          {services.map(({ icon, title }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gray-100 border-l-4 border-red-600 p-5 rounded shadow-sm hover:shadow-md transition"
            >
              <div className="mt-1">{icon}</div>
              <h3 className="text-lg font-semibold text-red-700">{title}</h3>
            </div>
          ))}
        </div>

        {/* Highlighted Box */}
        <div className="mt-16 bg-red-50 border border-red-200 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-red-700 mb-4">Why Choose Us?</h2>
          <ul className="space-y-2 list-disc pl-6 text-gray-700 text-sm">
            <li>Over 50,000+ Hydraulic & Pneumatic parts in stock</li>
            <li>Fully equipped in-house machine & fabrication shop</li>
            <li>High-pressure equipment service & support</li>
            <li>Precision testing under simulated load conditions</li>
            <li>Expert field engineers and fast turnaround service</li>
          </ul>
        </div>

        {/* Contact Prompt */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Need a Custom Hydraulic Solution?</h3>
          <p className="text-gray-600 mb-4">We’re here to support your toughest industrial challenges.</p>
          <Link
            href="/contact"
            className="inline-block bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
