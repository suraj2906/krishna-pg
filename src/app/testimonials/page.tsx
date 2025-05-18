// testimonials.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const testimonials = [
  { name: 'Rahul Mehta', text: 'Staying at Krishna PG has been a spiritual journey! The ambiance, the food, and the sense of community are unmatched.', avatar: 'https://ui-avatars.com/api/name=Rahul+Sharma' },
  { name: 'Vedant Mishra', text: 'The rooms are cozy and the decor inspired by Lord Krishna makes it feel like home. Highly recommend!', avatar: 'https://ui-avatars.com/api/name=Vedant+Mishra' },
  { name: 'Akash Verma', text: 'Excellent facilities and a peaceful environment. The peacock motifs and temple-inspired arches are a delightful touch.', avatar: 'https://ui-avatars.com/api/name=Akash+Verma' },
];

const Testimonials: NextPage = () => (
  <>
    <Head>
      <title>Testimonials | Krishna PG</title>
    </Head>

    

    <section className="py-12 bg-white" id='testimonials'>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gradient-to-br from-yellow-100 to-indigo-100 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-indigo-200" />
              <h3 className="text-2xl font-semibold text-indigo-800">{t.name}</h3>
            </div>
            <p className="text-gray-700 italic">“{t.text}”</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Testimonials;