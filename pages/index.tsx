import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>(null);

  const toggleProject = (projectId: string) => {
    setOpenProject(openProject === projectId ? null : projectId);
  };

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
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/logo.png" alt="BioChem Energy Logo" width={180} height={120} />
          </div>

          <div className="flex justify-center space-x-4 md:space-x-12 flex-wrap md:flex-nowrap">
            <div className="w-28 md:w-48 h-24 md:h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/decontamination.PNG" alt="Air Decontamination" width={130} height={90} />
            </div>
            <div className="w-28 md:w-48 h-24 md:h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/biofuel.png" alt="Biofuel Production" width={130} height={90} />
            </div>
            <div className="w-28 md:w-48 h-24 md:h-36 hover:scale-110 transition-transform ease-in-out duration-500 flex items-center justify-center">
              <Image src="/cvrcky.png" alt="Insect Recycling" width={130} height={90} />
            </div>
          </div>

          <nav className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="#about">About Us</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#economy">Circular Economy</Link>
            <Link href="#contact">Contact</Link>
            <span className="ml-0 md:ml-4">SK | EN</span>
          </nav>
        </div>
      </header>

      <main className="p-0">
        <section className="w-full">
          <img src="/picture3.png" alt="Nature with mountains and lake" className="w-full h-auto" style={{ display: 'block' }} />
        </section>

        <div className="px-4 md:px-12">
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

          <section id="projects" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Projects</h2>
            {[
              {
                id: 'project1',
                title: 'Air Decontamination Technology',
                short: 'Development of innovative air purification systems using cold plasma and photocatalysis.',
                long: 'Our air decontamination technology eliminates pathogens, viruses, and harmful particles without using filters. It is based on advanced cold plasma and photocatalytic oxidation and will be tested in collaboration with the European Space Agency.',
                image: '/decontamination.PNG',
              },
              {
                id: 'project2',
                title: 'Biomass to Biofuel System',
                short: 'Conversion of wasted biomass and municipal waste into clean, renewable biofuel through a compact processing unit.',
                long: 'Our system transforms organic waste into valuable biobutanol and biodegradable plastics. The modular unit is scalable and ideal for urban or industrial applications focused on reducing environmental impact.',
                image: '/biofuel.png',
              },
              {
                id: 'project3',
                title: 'Insect Protein & Soil Substrate',
                short: 'Kitchen waste is transformed by crickets into high-value protein for pet food and natural fertilizer.',
                long: 'We design and manufacture autonomous 3D-printed insect habitats that convert food waste into two valuable outputs: protein for pets and nutrient-rich soil substrate for agriculture and gardening.',
                image: '/cvrcky.png',
              },
            ].map((project) => (
              <div key={project.id} className="mb-8">
                <h3 className="text-xl font-semibold text-green-700">{project.title}</h3>
                <p className="mt-2 text-gray-700">{project.short}</p>
                <button onClick={() => toggleProject(project.id)} className="mt-2 text-blue-600 hover:underline">
                  {openProject === project.id ? 'Hide details' : 'Learn more'}
                </button>
                {openProject === project.id && (
                  <div className="mt-4 border-t pt-4">
                    <p className="text-gray-700">{project.long}</p>
                    <div className="mt-4">
                      <Image src={project.image} alt={project.title} width={600} height={350} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>

          <section id="economy" className="mt-12">
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
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-500 py-4 border-t">
        &copy; 2025 BioChem Energy s.r.o. All rights reserved.
      </footer>
    </div>
  );
}
