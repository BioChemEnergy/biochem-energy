import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BioChem Energy</title>
        <meta name="description" content="BioChem Energy – Sustainable Innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" alt="BioChem Energy Logo" width={120} height={80} />
            </div>
        <nav className="space-x-4 text-sm">
          <Link href="#about">About Us</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#economy">Circular Economy</Link>
          <Link href="#contact">Contact</Link>
          <span className="ml-4">SK | EN</span>
        </nav>
      </header>

      <main className="p-6">
        <section className="bg-green-50 p-10 rounded-xl shadow text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-800">Innovative solutions for a sustainable future</h1>
          <p className="text-lg text-gray-600">We focus on bioenergy, biotechnology and circular economy projects.</p>
          <Link href="#projects" className="inline-block mt-6 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">View Projects</Link>
        </section>

        <section id="about" className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-gray-700">BioChem Energy is a company focused on research and innovation in bioenergy and sustainable technologies. Our goal is to contribute to the development of ecologically and economically efficient solutions.</p>
        </section>

        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-green-700">April 2024</h3>
              <p className="font-bold">Development of biofuels from waste</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-green-700">January 2024</h3>
              <p className="font-bold">Biomass valorization</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold text-green-700">September 2023</h3>
              <p className="font-bold">Plastic packaging recycling</p>
            </div>
          </div>
        </section>

        <section id="economy" className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800">Circular Economy</h2>
          <p className="mt-4 text-gray-700">We support the transition to a circular model that minimizes waste and promotes efficient resource use through biotechnology like cricket-based organic recycling.</p>
        </section>

        <section id="contact" className="mt-12 bg-blue-50 p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-blue-800">Interested in working with us?</h2>
          <p className="mt-2 text-gray-600">Contact us to learn more about our projects or to propose collaboration or investment.</p>
          <Link href="mailto:info@biochemenergy.sk" className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Us</Link>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 BioChem Energy s.r.o. All rights reserved.
      </footer>
    </div>
  );
}
