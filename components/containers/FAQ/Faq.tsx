"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What technologies do you use?",
    answer:
      "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
  },
  {
    question: "Do you work on freelance or remote projects?",
    answer:
      "Yes, I am open to freelance and remote opportunities. I have experience collaborating with teams across different time zones and can adapt to various project requirements.",
  },
  {
    question: "Can you convert Figma or Sketch designs into code?",
    answer:
      "Yes, I can convert Figma or Sketch designs into clean, responsive code using modern frontend technologies.",
  },
  {
    question: "Do you collaborate with backend developers or teams?",
    answer:
      "Yes, I can collaborate effectively with backend developers and teams to ensure seamless integration of frontend and backend components.",
  },
  {
    question: "Are you available for full-time roles?",
    answer:
      "Yes, I am open to full-time opportunities. I am currently seeking a permanent position where I can contribute my frontend development skills and experience.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          <header className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Frequently Asked Question
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Everything you need to know about working with me.
            </p>
          </header>

          <div className="space-y-2">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="border-b border-gray-100 last:border-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  >
                    <span className={`font-semibold ${isOpen ? "text-blue-600" : "text-gray-800"}`}>
                      {item.question}
                    </span>
                    <span className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}>
                      ↓
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
