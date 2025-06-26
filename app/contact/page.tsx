'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const yourEmail = 'info@fluidtechhydraulics.net'; // Your email here

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="bg-white py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-red-700 text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We'd love to hear from you. Fill out the form and we’ll be in touch!
        </p>

        <form onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form Inputs */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-3 rounded-md font-semibold hover:bg-red-800 transition"
            >
              Send Message
            </button>
          </div>

          <div className="bg-red-50 p-8 rounded-xl shadow-md text-gray-800">
  <h3 className="text-2xl font-semibold text-red-700 mb-6">Reach Us At</h3>

  <div className="flex flex-col md:flex-row md:space-x-12">
    {/* Main Contact Details */}
    <div className="flex-1 space-y-3">
      <p>
        <strong>FluidTech Hydraulics</strong><br />
        Building 819 C, Road 4812, Block 948, LHassay<br />
        Kingdom of Bahrain. P.O.Box 37126
      </p>
      <p>Website: www.fluidtechhydraulics.net</p>
      <p>Email: info@fluidtechhydraulics.net</p>
      <p>Phone: number</p>
    </div>

    {/* CEO Info */}
    <div className="flex-1 border-l border-red-300 pl-6 mt-6 md:mt-0">
      <p className="font-semibold text-lg text-red-700">D. Kumarguru</p>
      <p className="text-gray-700 mb-1">CEO</p>
      <p className="font-mono text-gray-800">number</p>
    </div>
  </div>
</div>

        </form>
      </div>
    </section>
  );
}
