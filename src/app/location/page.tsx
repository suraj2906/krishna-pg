// location.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const Location: NextPage = () => (
  <>
    <Head>
      <title>Location & Directions | Krishna PG</title>
    </Head>

    <section className="bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-4 p-10">
          <h2 className="text-2xl font-semibold text-indigo-800">Our Address</h2>
          <div className="w-[100%]"><iframe width="100%" height="600"  scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=krishna%20apartment%20juhu%20galli+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personl trackers</a></iframe></div>
          <h2 className="text-2xl font-semibold text-indigo-800">Local Connectivity</h2>
          <p>Andheri Metro/Local Station 5 minutes walking</p>
      
        </div>
       
        
      </div>
    </section>
  </>
);

export default Location;
