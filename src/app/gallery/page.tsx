import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Gallery: NextPage = () => {
  const images = [
    { src: 'https://via.placeholder.com/600x400?text=Room', alt: 'Comfortable bedroom at Krishna PG' },
    { src: 'https://via.placeholder.com/600x400?text=Dining', alt: 'Spacious dining hall' },
    { src: 'https://via.placeholder.com/600x400?text=Common+Area', alt: 'Cozy common area with lounge seating' },
    { src: 'https://via.placeholder.com/600x400?text=Prayer+Room', alt: 'Peaceful prayer room with Krishna idol' },
    { src: 'https://via.placeholder.com/600x400?text=Garden', alt: 'Serene garden area' },
    { src: 'https://via.placeholder.com/600x400?text=Study', alt: 'Quiet study area' },
  ];

  return (
    <>
      <Head>
        <title>Gallery | Krishna PG</title>
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-yellow-300 text-white py-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Decorative shapes for Krishna theme */}
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-400 opacity-20 rounded-tl-full"></div>
          <div className="absolute top-0 left-0 w-56 h-56 bg-indigo-600 opacity-20 rounded-br-full"></div>
          <div className="absolute top-10 right-20 w-32 h-32 bg-cyan-500 opacity-30 rounded-bl-full"></div>
        </div>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">Gallery of Krishna PG</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            Explore the vibrant life at Krishna PG through a collection of images showcasing our serene rooms, communal spaces, dining area, and spiritual ambiance.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
                <p className="absolute bottom-0 left-0 m-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;