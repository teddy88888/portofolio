'use client';
import React from "react";
import Image from "next/image";

// import expressjs from '@/assets/expressjs.png';
// import postgresql from '@/assets/postgresql.png';

const skills = [
  {
    name: "",
    level: 90,
    color: "#F06529",
    icon: "assets/htmllabel",
  },
  { name: "", level: 90, color: "#2965F1", icon: "/assets/csslabel" },
  {
    name: "",
    level: 90,
    color: "#F7DF1E",
    icon: "/assets/jslabel",
  },
  {
    name: "",
    level: 90,
    color: "#61DAFB",
    icon: "/assets/reactlabel",
  },
  { name: "", level: 78, color: "#47A248", icon: "/assets/mongo" },
  { name: "", level: 78, color: "#2496ED", icon: "/assets/docker" },
  {
    name: "",
    level: 78,
    color: "#F7DF1E",
    icon: "/assets/expressjs",
  },
  {
    name: "",
    level: 75,
    color: "#336791",
    icon: "/assets/postgresql",
  },
];

const SkillCard = ({
  name,
  level,
  color,
  icon,
}: {
  name: string;
  level: number;
  color: string;
  icon: string;
}) => {
  // Hitung dash offset untuk lingkaran (Keliling = 2 * PI * R)
  // R = 65, Keliling ≈ 408
  const radius = 65;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="bg-white rounded-[32px] p-10 flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105">
      {/* Progress Circle */}
      <div className="relative w-[160px] h-[160px] mb-6">
        <svg className="w-full h-full transform -rotate-90">
          {/* Lingkaran Background (Abu-abu) */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#F3F4F6"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Lingkaran Progress (Warna Kuning/Orange) */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#FBBF24" // Warna kuning sesuai gambar
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-[#1F2937]">{level}%</span>
        </div>
      </div>

      {/* Label & Icon */}
      <div className="gap-4 items-center">
        <img
          src={icon}
          alt={name}
          className="w-40 object-contain "
          onError={(e) => {
            console.error(`Gagal memuat gambar: ${icon}`);
            // Opsional: berikan gambar cadangan jika gagal load
            // e.currentTarget.src = "/assets/fallback.png";
          }}
        />
        <span className="text-2xl font-semibold text-[#1F2937]">{name}</span>
      </div>
    </div>
  );
};
export default function Skillset() {
  return (
    <main className="  bg-blue-400 p-4 mt-16  w-100 md:w-315 scale-100 md:scale-130 flex flex-col items-center justify-center">
      <button className="text-white font-bold mb-4 bg-blue-400 hover:bg-blue-600 h-10 w-20 border rounded-2xl flex items-center justify-center">
        skillset
      </button>
      <h1 className="text-2xl font-bold w-70 text-center text-gray-200 mb-4">
        Skills That Build Great Interfaces
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl mb-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            level={skill.level}
            color={skill.color}
            // Tambahkan .png jika di folder assets kamu filenya berformat png
            icon={`${skill.icon}.png`}
          />
        ))}
      </div>
    </main>
  );
}
