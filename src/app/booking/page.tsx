'use client'
// booking.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

const Booking: NextPage = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', roomType: 'Single', startDate: '', endDate: '' });
  const roomTypes = ['Single', 'Double', 'Triple'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert('Booking request submitted!');
  };

  return (
    <>
      <Head>
        <title>Booking | Krishna PG</title>
      </Head>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-indigo-900 mb-4">Book Your Stay</h1>
          <p className="max-w-xl mx-auto text-gray-700 mb-8">
            Reserve your room at Krishna PG. Complete the steps to submit your booking request.
          </p>

          <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-300"
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Room Type</label>
                  <select
                    name="roomType"
                    value={form.roomType}
                    onChange={handleChange}
                    className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-300"
                  >
                    {roomTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2">Start Date</label>
                    <input
                      type="date"
                      name="startDate"
                      value={form.startDate}
                      onChange={handleChange}
                      className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-300"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 mb-2">End Date</label>
                    <input
                      type="date"
                      name="endDate"
                      value={form.endDate}
                      onChange={handleChange}
                      className="w-full border border-indigo-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-300"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-semibold text-indigo-800">Review Details</h3>
                <p><strong>Name:</strong> {form.name}</p>
                <p><strong>Email:</strong> {form.email}</p>
                <p><strong>Room Type:</strong> {form.roomType}</p>
                <p><strong>From:</strong> {form.startDate}</p>
                <p><strong>To:</strong> {form.endDate}</p>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 bg-indigo-200 rounded-lg hover:bg-indigo-300"
                >Previous</button>
              ) : <div />}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-yellow-300 rounded-lg hover:bg-yellow-400"
                >Next</button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-blue-900 font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500"
                >Submit</button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};  

export default Booking;
// This code defines a booking page for a PG accommodation website using Next.js and React.