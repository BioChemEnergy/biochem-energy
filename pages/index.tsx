import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

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
            <Image src="/logo.png" alt="BioChem Energy Logo" width={280} height={200} />
          </div>

          {/* Tri obrázky technológií */}
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
            src="/picture3.png"
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
              <strong>BioChem Energy s.r.o.</strong> is a research and development company dedicated to ecological and sustainable technologies. Our primary focus is on the development of innovative solutions for biomass waste processing, alternative biofuel production, and advanced air decontamination systems.
            </p>
            <p className="mt-4 text-gray-700">
              The company’s expertise builds on years of research experience led by its managing director, <strong>Ing. Maroš Palko, PhD</strong>, who is actively involved in scientific projects at the Faculty of Mechanical Engineering at the Technical University of Košice. These include collaborations on national and international research initiatives, including cooperation with partners on project with the <strong>European Space Agency (ESA)</strong>, with a focus on air purification technologies.
            </p>
            <p className="mt-4 text-gray-700">
              At BioChem Energy, we aim to bridge the gap between academic research and industrial application. We are committed to supporting the <strong>principles of the circular economy</strong> and developing technologies that promote environmental sustainability and efficient use of natural resources.
            </p>
          </section>

          {/* Projects */}
          <ProjectsSection />

          {/* Circular Economy */}
          <section id="economy" className="mt-12 px-6 md:px-0">
            <h2 className="text-2xl font-bold text-gray-800">Circular Economy</h2>
            <p className="mt-4 text-gray-700">
              At <strong>BioChem Energy</strong>, we are committed to the principles of the <strong>circular economy</strong> — a sustainable model that aims to minimize waste and continuously reuse resources through innovative technologies.
            </p>
            <p className="mt-4 text-gray-700">
              All of our key projects reflect this philosophy:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>
                <strong>Air decontamination technologies</strong> help restore indoor air quality without disposable filters, promoting <em>clean air without generating waste</em>.
              </li>
              <li>
                <strong>Biomass-to-biofuel systems</strong> convert municipal waste into <em>renewable fuels and biodegradable materials</em>, supporting resource recovery instead of landfilling.
              </li>
              <li>
                <strong>Insect protein production</strong> uses food waste as a resource, turning it into <em>valuable protein and natural soil substrate</em>, thus closing the biological cycle.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Through these solutions, we are actively reducing environmental impact, supporting climate goals, and promoting responsible innovation. Every activity and technology we develop is a step toward a cleaner, <strong>more circular and resilient future</strong>.
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

// Inline ProjectsSection
function ProjectsSection() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="mt-12 px-6 md:px-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>

      {/* Project 1 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700">Air Decontamination Technology</h3>
        <p className="mt-2 text-gray-700">
          Development of innovative air purification systems using cold plasma and photocatalysis.
        </p>
        <button onClick={() => toggleProject('project1')} className="mt-2 text-blue-600 hover:underline">
          {openProject === 'project1' ? 'Hide details' : 'Learn more'}
        </button>
        {openProject === 'project1' && (
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-700">
              Our air decontamination technology eliminates pathogens, viruses, and harmful particles without using filters.
              It is based on advanced cold plasma and photocatalytic oxidation and will be tested in collaboration with the European Space Agency.
            </p>
            <div className="mt-4">
              <Image src="/decontamination.PNG" alt="Air Technology" width={600} height={350} />
            </div>
          </div>
        )}
      </div>

      {/* Project 2 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700">Biomass to Biofuel System</h3>
        <p className="mt-2 text-gray-700">
          Conversion of wasted biomass and municipal waste into clean, renewable biofuel through a compact processing unit.
        </p>
        <button onClick={() => toggleProject('project2')} className="mt-2 text-blue-600 hover:underline">
          {openProject === 'project2' ? 'Hide details' : 'Learn more'}
        </button>
        {openProject === 'project2' && (
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-700">
              Our system transforms organic waste into valuable biobutanol and biodegradable plastics. The modular unit is scalable and ideal for urban or industrial applications focused on reducing environmental impact.
            </p>
            <div className="mt-4">
              <Image src="/biofuel.png" alt="Biofuel Technology" width={600} height={350} />
            </div>
          </div>
        )}
      </div>

      {/* Project 3 */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-green-700">Insect Protein & Soil Substrate</h3>
        <p className="mt-2 text-gray-700">
          Kitchen waste is transformed by crickets into high-value protein for pet food and natural fertilizer.
        </p>
        <button onClick={() => toggleProject('project3')} className="mt-2 text-blue-600 hover:underline">
          {openProject === 'project3' ? 'Hide details' : 'Learn more'}
        </button>
        {openProject === 'project3' && (
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-700">
              We design and manufacture autonomous 3D-printed insect habitats that convert food waste into two valuable outputs: protein for pets and nutrient-rich soil substrate for agriculture and gardening.
            </p>
            <div className="mt-4">
              <Image src="/cvrcky.png" alt="Insect Project" width={600} height={350} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
