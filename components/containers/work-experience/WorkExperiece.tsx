"use client";

import { useState } from "react";
import { Card, CardContent } from "../../ui/card";

const jobs = [
  {
    logo: "/adobe.png",
    image: "/work1.png",
    date: "2025 - Present",
  },
  {
    logo: "/dribble.png",
    image: "/work2.png",
    date: "2025 - Present",
  },
  {
    logo: "/dropbox.png",
    image: "/work3.png",
    date: "2025 - Present",
  },
  {
    logo: "/paypal2.png",
    image: "/work4.png",
    date: "2025 - Present",
  },
];

const description =
  "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.";

export default function WorkExperiece() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-xl border border-black px-4 py-2 font-bold text-black">
            Work Experience
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold text-gray-800 sm:text-4xl">
            A timeline of companies and roles that helped shape my skills.
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gray-300 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <Card
                key={job.image}
                className={`relative w-full overflow-hidden border-0 bg-gray-100 shadow-sm ${
                  active === index ? "ring-2 ring-blue-400" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Select experience ${index + 1}`}
                  className={`absolute left-2 top-8 z-10 h-5 w-5 rounded-full border-4 transition ${
                    active === index
                      ? "border-blue-200 bg-blue-500"
                      : "border-gray-200 bg-gray-400"
                  }`}
                />

                <div className="grid grid-cols-1 gap-6 p-6 pl-10 md:grid-cols-2 md:p-8 md:pl-12">
                  <div
                    className={index % 2 === 0 ? "md:order-1" : "md:order-2"}
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <img
                        src="/schedule.png"
                        alt=""
                        className="h-5 w-5 object-contain"
                      />
                      <span>{job.date}</span>
                    </div>

                    <img
                      src={job.logo}
                      alt=""
                      className="mt-4 h-10 w-auto max-w-40 object-contain object-left"
                    />

                    <CardContent className="px-0 pt-5">
                      <h3 className="font-bold text-gray-800">
                        Frontend Developer
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-gray-700">
                        {description}
                      </p>
                    </CardContent>
                  </div>

                  <div
                    className={`flex items-center justify-center ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <img
                      src={job.image}
                      alt=""
                      className="h-auto max-h-64 w-full max-w-md object-contain"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
