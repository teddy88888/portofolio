"use client"; // Tambahkan baris ini di paling atas

import React, { useState } from "react";

// Data FAQ
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

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className=" w-96 bg-white rounded-[32px] p-8 shadow-sm border border-gray-100  md:scale-150 md:mt-40 md:w-300 md:left-80 absolute">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Frequently Asked Question
        </h2>
        <p className="text-gray-500 text-sm">
          Everything you need to know about working with me.
        </p>
      </header>

      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <span
                className={`font-semibold ${openIndex === index ? "text-blue-600" : "text-gray-800"}`}
              >
                {item.question}
              </span>
              <span
                className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
