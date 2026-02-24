import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";

export default function Portfolio() {
  return (
    <main className="bg-white w-100 md:w-315 h-350 md:h-200 scale-100 md:scale-130 flex flex-col items-center snap-start scroll-ms-6">
      <button className="mt-16 text-black font-bold bg-white-400 hover:bg-gray-100 h-8 w-30 border border-black rounded-xl flex items-center justify-center">
        Portfolio
      </button>
      <h1 className="text-2xl font-extrabold text-gray-800 mt-4 flex items-center justify-center text-center w-80">
        Built with Passion, Shipped with Precision
      </h1>
      <div className="md:flex gap-10">
        <div>
          <img src="/PortfolioImage1.png" alt="porto1" className="w-90 mt-2" />
          <p className="text-center text-gray-1000 -mt-16 font-bold rounded-2xl w-90 h-10 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm">
            Portfolio 1
          </p>
        </div>
        <div>
          <img src="/PortfolioImage2.png" alt="porto2" className="w-90 mt-10" />
          <p className="text-center text-gray-1000 -mt-16 font-bold rounded-2xl w-90 h-10 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm">
            Portfolio 2
          </p>
        </div>
        <div>
          <img src="/PortfolioImage3.png" alt="porto3" className="w-90 mt-10" />
          <p className="text-center text-gray-1000 -mt-16 font-bold rounded-2xl w-90 h-10 flex items-center justify-center bg-gray-950/50 backdrop-blur-sm">
            Portfolio 3
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-15">
        <img
          src="/chevronleft.png"
          alt="chevronleft"
          className=" hover:scale-110 transition-transform cursor-pointer"
        />
        <img
          src="/chevronright.png"
          alt="chevronright"
          className=" hover:scale-110 transition-transform cursor-pointer"
        />
      </div>
    </main>
  );
}
