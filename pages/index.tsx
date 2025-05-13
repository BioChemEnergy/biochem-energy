import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    const isValid =
      updatedData.name.trim() !== '' &&
      updatedData.email.trim() !== '' &&
      updatedData.message.trim() !== '';
    setFormValid(isValid);
  };

  const handleSubmit = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <div>
      <Head>
        <title>BioChem Energy</title>
        <meta name="description" content="BioChem Energy – Sustainable Innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ...ostatné sekcie zostávajú rovnaké... */}

      {/* Contact */}
      <section id="contact" className="mt-12 bg-blue-50 p-6 rounded-xl shadow text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Interested in working with us?</h2>

        {formSent && (
          <div className="mb-4 text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded">
            Your message has been sent successfully. Thank you!
          </div>
        )}

        <form
          action="https://formsubmit.co/bce.biochem@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto text-left space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block text-sm text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 ${!formValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!formValid}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* ...ostatné sekcie zostávajú rovnaké... */}
    </div>
  );
}

// ProjectsSection zostáva bezo zmien
