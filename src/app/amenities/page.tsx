// amenities.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { TiWiFiOutline } from 'react-icons/ti';
import React from 'react';
import { BiWifi } from 'react-icons/bi';
import { MdCleaningServices, MdDryCleaning, MdSecurity } from 'react-icons/md';
import { FaBowlFood } from 'react-icons/fa6';
import { SiStudyverse } from 'react-icons/si';
import { GiDesk } from 'react-icons/gi';

const Amenities: NextPage = () => {
  const amenities = [
    { title: 'High-Speed Wi-Fi', icon: <BiWifi size={100}/>, desc: 'Stay connected with fast and reliable internet.' },
    { title: '24/7 Security', icon: <MdSecurity size={100}/>, desc: 'Secure premises with CCTV and security staff.' },
    { title: 'Daily Housekeeping', icon: <MdCleaningServices size={100}/>, desc: 'Keep your room clean and tidy every day.' },
    { title: 'Nutritious Meals', icon: <FaBowlFood size={100}/>, desc: 'Fresh, balanced meals served thrice a day.' },
    { title: 'Laundry Service', icon: <MdDryCleaning size={100}/>, desc: 'Convenient on-site laundry facilities.' },
    { title: 'Study Area', icon: <GiDesk size={100}/>, desc: 'Quiet space with desks and ample lighting.' },
  ];

  return (
    <>
      <Head>
        <title>Amenities | Krishna PG</title>
      </Head>

      {/* <section className="py-16 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4 font-sans">Amenities at Krishna PG</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Experience top-notch facilities designed for your comfort and convenience.
          </p>
        </div>
      </section> */}

      <section className="py-12 bg-white" id='amenities'>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, idx) => (
            <div key={idx} className=" hover:bg-indigo-900 p-6 shadow-lg hover:shadow-2xl bg-white transition-all group hover:scale-105">
              <div className="text-4xl mb-4 animate-fade-in self-center justify-center flex text-indigo-900 group-hover:text-white">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-900 group-hover:text-white mb-2">{item.title}</h3>
              <p className="group-hover:text-gray-100 text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Amenities;
