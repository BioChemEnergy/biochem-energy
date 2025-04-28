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

     <header className="sticky top-0 z-50 bg-white shadow">
  <div className="flex justify-between items-center px-8 py-4">
    {/* Logo */}
    <div className="flex items-center">
      <Image src="/logo.png" alt="BioChem Energy Logo" width={220} height={140} />
    </div>

    {/* Tri obrázky technológií */}
    <div className="flex justify-center space-x-12 flex-grow">
      <div className="w-48 h-36 hover:scale-125 transition-transform ease-in-out duration-500 flex items-center justify-center">
        <Image src="/decontamination.PNG" alt="Air Decontamination" width={180} height={130} />
      </div>
      <div className="w-48 h-36 hover:scale-125 transition-transform ease-in-out duration-500 flex items-center justify-center">
        <Image src="/biofuel.png" alt="Biofuel Production" width={180} height={130} />
      </div>
      <div className="w-48 h-36 hover:scale-125 transition-transform ease-in-out duration-500 flex items-center justify-center">
        <Image src="/cvrcky.png" alt="Insect Recycling" width={180} height={130} />
      </div>
    </div>

    {/* Menu */}
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
        {/* Úvodný obrázok */}
        <section className="w-full">
          <img
            src="/picture1.png"
            alt="Nature with mountains and lake"
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </section>

        <div className="px-6 md:px-12">
          {/* About Us */}
          <section id="about" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">About Us</h2>
            <p className="mt-4 text-gray-700">
              BioChem Energy is a company focused on research and innovation in bioenergy and sustainable technologies.
              Our goal is to contribute to the development of ecologically and economically efficient solutions.
            </p>
          </section>

          {/* Projects */}
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

          {/* Circular Economy */}
          <section id="economy" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800">Circular Economy</h2>
            <p className="mt-4 text-gray-700">
              We support the transition to a circular model that minimizes waste and promotes efficient resource use
              through biotechnology like cricket-based organic recycling.
            </p>
          </section>

          {/* Contact */}
          <section id="contact" className="mt-12 bg-blue-50 p-6 rounded-xl shadow text-center">
            <h2 className="text-2xl font-bold text-blue-800">Interested in working with us?</h2>
            <p className="mt-2 text-gray-600">
              Contact us to learn more about our projects or to propose collaboration or investment.
            </p>
            <Link
              href="mailto:info@biochemenergy.sk"
              className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 BioChem Energy s.r.o. All rights reserved.
      </footer>
    </div>
  );
}
