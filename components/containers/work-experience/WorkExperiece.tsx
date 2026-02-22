"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";

export default function TimelineItem() {
  // State untuk melacak apakah sudah diklik atau belum
  const [isActive, setIsActive] = useState(false);
// export default function WorkExperiece() {
  return (
    <main className="bg-white w-100 h-690 md:w-full h-350 flex flex-col items-center snap-start scroll-ms-6">
      <button className="mt-16 text-black font-bold bg-white-400 hover:bg-gray-100 h-8 w-38 border border-black rounded-xl flex items-center justify-center">
        Work Experience
      </button>
      <h1 className="text-2xl font-extrabold text-gray-800 mt-4 flex items-center justify-center text-center w-82">
        A timeline of companies and roles that helped shape my skills.
      </h1>

      <Card className="w-95 md:w-315 mt-12 py-4 px-8 bg-gray-100">
        <div
          onClick={() => setIsActive(!isActive)} // Fungsi ganti warna saat klik
          className={`absolute left-[2px] w-5 h-5 cursor-pointer rounded-full border-4 transition-all duration-300
            ${
              isActive
                ? "bg-blue-500 border-blue-200 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" // Warna Biru
                : "bg-gray-400 border-gray-200 shadow-none" // Warna Abu-abu (Default)
            }`}
        >
          {/* Efek lingkaran putih di dalam */}
          <div className="w-full h-full rounded-full border-2 border-white"></div>
        </div>
        <img src="/work1.png" alt="work1" />
        <div className="flex  gap-2 px-6">
          <img src="/schedule.png" alt="" />
          <p>2025 - Present</p>
        </div>
        <img src="/adobe.png" alt="adobe" className="px-6 w-40 h-11" />
        <CardContent className="">
          <p className="text-gray-700 font-bold mb-4">Fronted Developer</p>
          <p className="text-gray-700">
            Builds responsive and high-performance web applications with clean,
            maintainable code. Expert in translating UI/UX designs into
            pixel-perfect interfaces using modern frameworks. Focused on
            optimizing performance, accessibility, and seamless user experiences
          </p>
        </CardContent>
      </Card>
      <Card className="w-95 md:w-315 mt-12 py-4 px-8 bg-gray-100">
        <div
          onClick={() => setIsActive(!isActive)} // Fungsi ganti warna saat klik
          className={`absolute left-[2px] w-5 h-5 cursor-pointer rounded-full border-4 transition-all duration-300
            ${
              isActive
                ? "bg-blue-500 border-blue-200 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" // Warna Biru
                : "bg-gray-400 border-gray-200 shadow-none" // Warna Abu-abu (Default)
            }`}
        >
          {/* Efek lingkaran putih di dalam */}
          <div className="w-full h-full rounded-full border-2 border-white"></div>
        </div>
        <img src="/work2.png" alt="work1" />
        <div className="flex  gap-2 px-6">
          <img src="/schedule.png" alt="schedule" />
          <p>2025 - Present</p>
        </div>
        <img src="/dribble.png" alt="dribble" className="px-6 w-36 h-6" />
        <CardContent className="">
          <p className="text-gray-700 font-bold mb-4">Fronted Developer</p>
          <p className="text-gray-700">
            Builds responsive and high-performance web applications with clean,
            maintainable code. Expert in translating UI/UX designs into
            pixel-perfect interfaces using modern frameworks. Focused on
            optimizing performance, accessibility, and seamless user experiences
          </p>
        </CardContent>
      </Card>
      <Card className="w-95 md:w-315 mt-12 py-4 px-8 bg-gray-100">
        <div
          onClick={() => setIsActive(!isActive)} // Fungsi ganti warna saat klik
          className={`absolute left-[2px] w-5 h-5 cursor-pointer rounded-full border-4 transition-all duration-300
            ${
              isActive
                ? "bg-blue-500 border-blue-200 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" // Warna Biru
                : "bg-gray-400 border-gray-200 shadow-none" // Warna Abu-abu (Default)
            }`}
        >
          {/* Efek lingkaran putih di dalam */}
          <div className="w-full h-full rounded-full border-2 border-white"></div>
        </div>
        <img src="/work3.png" alt="work1" />
        <div className="flex  gap-2 px-6">
          <img src="/schedule.png" alt="schedule" />
          <p>2025 - Present</p>
        </div>
        <img src="/dropbox.png" alt="dropbox" className="px-6 w-40 h-11" />
        <CardContent className="">
          <p className="text-gray-700 font-bold mb-4">Fronted Developer</p>
          <p className="text-gray-700">
            Builds responsive and high-performance web applications with clean,
            maintainable code. Expert in translating UI/UX designs into
            pixel-perfect interfaces using modern frameworks. Focused on
            optimizing performance, accessibility, and seamless user experiences
          </p>
        </CardContent>
      </Card>
      <Card className="w-95 md:w-315 mt-12 py-4 px-8 bg-gray-100">
        <div
          onClick={() => setIsActive(!isActive)} // Fungsi ganti warna saat klik
          className={`absolute left-[2px] w-5 h-5 cursor-pointer rounded-full border-4 transition-all duration-300
            ${
              isActive
                ? "bg-blue-500 border-blue-200 shadow-[0_0_0_4px_rgba(59,130,246,0.1)]" // Warna Biru
                : "bg-gray-400 border-gray-200 shadow-none" // Warna Abu-abu (Default)
            }`}
        >
          {/* Efek lingkaran putih di dalam */}
          <div className="w-full h-full rounded-full border-2 border-white"></div>
        </div>
        <img src="/work4.png" alt="work1" />
        <div className="flex  gap-2 px-6">
          <img src="/schedule.png" alt="schedule" />
          <p>2025 - Present</p>
        </div>
        <img src="/paypal2.png" alt="paypal" className="px-6 w-40 h-11" />
        <CardContent className="">
          <p className="text-gray-700 font-bold mb-4">Fronted Developer</p>
          <p className="text-gray-700">
            Builds responsive and high-performance web applications with clean,
            maintainable code. Expert in translating UI/UX designs into
            pixel-perfect interfaces using modern frameworks. Focused on
            optimizing performance, accessibility, and seamless user experiences
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
