"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonies = [
  {
    id: 1,
    name: "Sarah Lim",
    role: "Product Manager at Loopware",
    image: "/testi1.png",
    text: "Teddy delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Lead Developer",
    image: "/testi2.png",
    text: "Working with Teddy was a breeze. He understands complex requirements and turns them into beautiful, functional code.",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Senior Software Engineer",
    image: "/testi3.png",
    text: "Teddy delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman.",
  },
  {
    id: 4,
    name: "Magyver",
    role: "CTO at Tech Innovators",
    image: "/testi4.png",
    text: "Working with Edwin was a breeze. He understands complex requirements and turns them into beautiful, functional code.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonies[index];

  const previous = () =>
    setIndex((value) => (value === 0 ? testimonies.length - 1 : value - 1));

  const next = () =>
    setIndex((value) => (value === testimonies.length - 1 ? 0 : value + 1));

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-gray-300 px-6 py-1 text-sm font-medium text-gray-700">
            Testimony
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-5xl">
            Built with Trust & Collaboration
          </h2>
        </div>

        <div className="mx-auto mt-12 w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-[32px] border border-gray-100 bg-white p-6 pt-16 shadow-2xl sm:p-8 sm:pt-16"
            >
              <div className="absolute -top-12 left-6 sm:left-10">
                <div className="h-24 w-24 overflow-hidden rounded-full border-[6px] border-white bg-gray-200 shadow-lg">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mb-6 flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="mb-10 text-lg leading-relaxed text-gray-700 italic sm:text-xl">
                &quot;{current.text}&quot;
              </p>

              <h3 className="text-xl font-bold text-gray-900">— {current.name}</h3>
              <p className="text-gray-500">{current.role}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-400 shadow-sm hover:bg-gray-500"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-gray-400 shadow-sm hover:bg-gray-500"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
