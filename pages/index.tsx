import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, company, email, message } = formData;
    if (!name || !company || !email || !message) {
      setError('Please fill in all fields before submitting.');
      return;
    }
    alert('Message sent successfully!');
    setFormData({ name: '', company: '', email: '', message: '' });
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
          <img src="/picture3.png" alt="Nature" className="w-full h-auto" />
        </section>

        <div className="px-6 md:px-12">
          <section id="about" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-gray-700">
              <strong>BioChem Energy s.r.o.</strong> is a research and development company dedicated to ecological and sustainable technologies. Our primary focus is on the development of innovative solutions for biomass waste processing, alternative biofuel production, and advanced air decontamination systems.
            </p>
          </section>

          <section id="projects" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
            <div className="space-y-6">
              <Project title="Air Decontamination Technology" image="/decontamination.PNG" text="Cold plasma and photocatalysis for pathogen removal. Tested with ESA." />
              <Project title="Biomass to Biofuel System" image="/biofuel.png" text="Municipal waste to biofuel and bioplastics in compact modular units." />
              <Project title="Insect Protein & Soil Substrate" image="/cvrcky.png" text="Crickets transform kitchen waste into protein and rich soil substrate." />
            </div>
          </section>

          <section id="economy" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Circular Economy</h2>
            <p className="mt-4 text-gray-700">
              At BioChem Energy, circular economy is at the core of everything we do. Our three main technological areas – air decontamination, biofuel production, and insect recycling – are all designed to reduce waste and reuse valuable materials. We are committed to protecting the environment and ensuring that our solutions help close the loop on material cycles.
            </p>
          </section>

          <section id="contact" className="mt-12 bg-blue-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-blue-800">Interested in working with us?</h2>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-4 text-left">
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Company</label>
                <input name="company" value={formData.company} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded h-24" />
              </div>
              {error && <p className="text-red-600 mb-2">{error}</p>}
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
            </form>
          </section>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 BioChem Energy s.r.o. All rights reserved.
      </footer>
    </div>
  );
}

function Project({ title, text, image }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <p className="mt-2 text-gray-700">{text}</p>
      <div className="mt-4">
        <Image src={image} alt={title} width={600} height={350} />
      </div>
    </div>
  );
}
