'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


// Data testimoni berdasarkan gambar
const testimonies = [
  {
    id: 1,
    name: "Sarah Lim",
    role: "Product Manager at Loopware",
    image: "/testi1.png", // Sesuaikan dengan path fotomu
    text: "Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
    stars: 5,
  },
  {
    id: 2,
    name: "John Doe",
    role: "Lead Developer",
    image: "/testi2.png",
    text: "Working with Edwin was a breeze. He understands complex requirements and turns them into beautiful, functional code.",
    stars: 5,
  },
  {
    id: 3,
    name: "John Smith",
    role: "Lead Developer",
    image: "/testi3.png",
    text: "Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
    stars: 5,
  },
  {
    id: 4,
    name: "Magyver",
    role: "Lead Developer",
    image: "/testi4.png",
    text: "Working with Edwin was a breeze. He understands complex requirements and turns them into beautiful, functional code.",
    stars: 5,
  },
];

export default function TestimonySlider() {
  const [index, setIndex] = useState(0);

  const nextTestimony = () => {
    setIndex((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  const prevTestimony = () => {
    setIndex((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const current = testimonies[index];

  return (
    <section className="bg-white py-16 px-6 flex flex-col items-center">
      {/* Badge & Title */}
      <div className="text-center mb-12">
        <span className="inline-block border border-gray-300 rounded-full px-6 py-1 text-sm font-medium mb-4 text-gray-700">
          Testimony
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Built with Trust & <br /> Collaboration
        </h2>
      </div>

      {/* Testimony Card Container */}
      <div className="relative w-full max-w-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[32px] p-8 shadow-2xl border border-gray-50 relative pt-16"
          >
            {/* User Avatar (Floating) */}
            <div className="absolute -top-12 left-8 md:left-12">
              <div className="w-24 h-24 rounded-full border-[6px] border-white shadow-lg overflow-hidden bg-gray-200">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(current.stars)].map((_, i) => (
                <span key={i} className="text-2xl">
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-10">
              "{current.text}"
            </p>

            {/* Author Info */}
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                — {current.name}
              </h4>
              <p className="text-gray-500">{current.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons (Left-Right) */}
      <div className="flex gap-4 mt-10">
        <button
          onClick={prevTestimony}
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button
          onClick={nextTestimony}
          className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors shadow-sm"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}