import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, company, email, message } = formData;
    if (!name || !company || !email || !message) {
      setError('Please fill out all fields.');
      return;
    }
    window.location.href = `mailto:bce.biochem@gmail.com?subject=Message from ${name} (${company})&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`;
    setSuccess(true);
  };

  return (
    <div>
      <Head>
        <title>BioChem Energy</title>
        <meta name="description" content="BioChem Energy – Sustainable Innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white shadow">
        <div className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="BioChem Energy Logo" width={280} height={200} />
          </div>

          <div className="flex justify-center space-x-12 flex-grow">
            <div className="w-48 h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/decontamination.PNG" alt="Air Decontamination" width={180} height={130} />
            </div>
            <div className="w-48 h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/biofuel.png" alt="Biofuel Production" width={180} height={130} />
            </div>
            <div className="w-48 h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/cvrcky.png" alt="Insect Recycling" width={180} height={130} />
            </div>
          </div>

          <nav className="space-x-6 text-sm">
            <Link href="#about">About Us</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#economy">Circular Economy</Link>
            <Link href="#contact">Contact</Link>
            <span className="ml-4">SK | EN</span>
          </nav>
        </div>
      </header>

      <main className="p-0">
        <section className="w-full">
          <img src="/picture3.png" alt="Nature with mountains and lake" className="w-full h-auto" style={{ display: 'block' }} />
        </section>

        <div className="px-6 md:px-12">
          {/* existing content */}
        </div>

        <section id="contact" className="mt-12 bg-blue-50 p-6 rounded-xl shadow max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-800 text-center">Interested in working with us?</h2>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            {error && <div className="text-red-600 font-semibold text-sm text-center">{error}</div>}
            {success && <div className="text-green-600 font-semibold text-sm text-center">Message sent successfully.</div>}
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2" />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded px-3 py-2 h-32" />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 BioChem Energy s.r.o. All rights reserved.
      </footer>
    </div>
  );
}
