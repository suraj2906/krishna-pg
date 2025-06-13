'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const desc = ['', '', '', '', '', '', '']
  const titles = [
    "Elegant bedroom with a double bed, artistic wall painting, and soft natural lighting.",
    "Bright bedroom with a double bed, large window, and ample storage space.",
    "Same bedroom with a different angle",
    "Contemporary dining room with a glass table, dark chairs, and large windows for natural light.",
    "Cozy sitting area featuring black sofas and a vibrant yellow accent wall.",
    "Large living room with elegant black sofas, glass coffee table, and bright ambient lighting.",
    "Spacious modern kitchen with wooden cabinets, black countertops, and ample lighting.",
  ]

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id='carousel' className='py-5'>
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Slide wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1280}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-end">
        <div className="text-white  bg-black/50 w-[100%] p-6">
          <h2 className="text-2xl font-bold">{titles[currentIndex]}</h2>
          <p className="text-sm mt-1">{desc[currentIndex]}</p>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    </section>
  );
}
