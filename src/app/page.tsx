// page.tsx
'use client';
import { useState } from 'react';
import Amenities from './amenities/page';
import Carousel from '@/components/Carousel/page';
import Testimonials from './testimonials/page';
import Location from './location/page';
import emailjs from 'emailjs-com';





export default function Home() {

  const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_0m0ozlh',
      'template_27m8mpm',
      e.target as HTMLFormElement,
      'qoOTfgI3b6-ZXKtLC'
    )
    .then((result) => {
      alert("Email sent successfully!");
    }, (error) => {
      alert("Failed to send email: " + error.text);
    });

    (e.target as HTMLFormElement).reset();
  };

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
      <section id="about" className="text-center py-12 relative">
        <div className="absolute inset-0 bg-yellow-200 opacity-30 -z-10 transform -skew-y-2"></div>
        <h2 className="text-5xl font-bold text-blue-900 animate-fade-in relative">Welcome to Krishna PG</h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-indigo-800 relative">
          A divine blend of comfort and culture. Our PG is inspired by the peaceful and graceful presence of Lord Krishna, offering a serene living space filled with positive vibes and spiritual ambiance.
        </p>
        <div className="mt-6 inline-block bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg animate-pulse">
          <span>Located near <span className="underline decoration-yellow-300">NMIMS</span> &amp; <span className="underline decoration-yellow-300">Mithibai College</span> in Andheri West</span>
        </div>
      </section>

      <section id="rooms" className="py-12">
        <h2 className="text-4xl font-semibold text-indigo-900 mb-8 text-center">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Single', 'Double', 'Triple', 'Quadruple'].map((type) => (
            <div key={type} className="bg-white border-4 border-yellow-200 rounded-3xl shadow-2xl p-6 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-blue-800">{type} Occupancy</h3>
              <p className="mt-2 text-gray-700">Comfortable space with Krishna-inspired decor, attached bath, and natural ventilation.</p>
              <p className="mt-4 font-semibold text-indigo-600">₹{type === 'Single' ? '10,00,000' : type === 'Double' ? '5,50,000' : type == 'Triple'? '5,00,000' : '4,75,000'}/year</p>
            </div>
          ))}
        </div>
      </section>

      <Amenities />
      <Carousel />
      <Testimonials />
      <Location />

      <section
  id="contact"
  className="py-12 px-4 sm:px-6 bg-gradient-to-br from-yellow-100 to-white rounded-xl shadow-inner"
>
  <h2 className="text-2xl sm:text-4xl font-semibold text-center text-blue-900 mb-6">
    Contact Us
  </h2>

  {submitted ? (
    <p className="text-green-700 font-medium text-center">
      Thank you for reaching out! We'll get back to you soon. 🕉️
    </p>
  ) : (
    <form
      onSubmit={sendEmail}
      className="max-w-xl mx-auto bg-white p-6 sm:p-10 rounded-3xl shadow-xl animate-fade-in"
    >
      <div className="mb-5">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-5">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="w-full border border-indigo-200 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-xl transition shadow-lg"
      >
        Send Message
      </button>
    </form>
  )}

  <div className="mt-10 text-center text-indigo-800">
    <p className="mb-1 text-base sm:text-lg">Or reach us at:</p>
    {/* <p>Email: <a href="mailto:contact@krishnapg.com" className="underline hover:text-blue-600">contact@krishnapg.com</a></p> */}
    <p>
      Whatsapp:{' '}
      <a
        href="tel:+919967269742"
        className="underline hover:text-blue-600 break-all"
      >
        +91 99672 69742
      </a>
    </p>
  </div>
</section>

    </>
  );
}
