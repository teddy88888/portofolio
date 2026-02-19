import React from "react";
import Image from "next/image";
// import Image { StaticImageData } from "next/image";
import { Card, CardHeader, CardAction, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { profile } from "../../public/Profile.png";
import { facebook } from "../../public/facebook.png";
import { instagram } from "../../public/instgram.png";
import linkedin from "../../public/linkedin.png";
import tiktiok from "../../public/tiktok.png";
import link from "../../public/link.png";
import { PortfolioImage } from "../../public/PortfolioImage.png";
import yellow from "../../public/yellow.png";
import css from "@/assets/css.png";
import html from "@/assets/html.png";
import js from "@/assets/js.png";
import react from "@/assets/react.png";
import ts from "@/assets/ts.png";

const technologies = [
  {
    src: "/css.png",
    alt: "CSS3",
    position: "-left-16 top-40 -translate-y-1/2",
  },
  { src: "/js.png", alt: "JavaScript", position: "left-0 top-18" },
  {
    src: "/ts.png",
    alt: "TypeScript",
    position: "left-1/2 top-8 -translate-x-1/2",
  },
  { src: "/html.png", alt: "HTML5", position: "right-0 top-18" },
  {
    src: "/react.png",
    alt: "React",
    position: "-right-16 top-40 -translate-y-1/2",
  },
];
// interface IlistTech {
//   id: number;
//   icon: StaticImageData;
//   position: string;
// }
// const listTech: IlistTech[] = [
//   {
//     id: 1,
//     icon: css,
//     position: "bottom-20 left-0",
//   },
//   {
//     id: 2,
//     icon: js,
//     position: "bottom-48 left-10",
//   },
//   {
//     id: 3,
//     icon: ts,
//     position: "bottom-60 justify-center ",
//   },
//   {
//     id: 4,
//     icon: html,
//     position: "bottom-48 right-10",
//   },
//   {
//     id: 5,
//     icon: react,
//     position: "bottom-20 right-0",
//   },
// ];

export default function About() {
  return (
    <main className="p-4 mt-16 bg-white h-800 absolute mt-8 w-full ">
      <div className="flex flex-col gap-4 items-center mb-4">
        <button
          variant={"outline"}
          className="bg- w-22 font-extrabold hover:bg-amber-200 transition-colors border border-amber-950 h-12 text-xl text-black rounded-2xl mt-4 "
        >
          About
        </button>
        <h1 className="font-extrabold text-[44px]/12 text-black bg-white text-center">
          The Developer Behind the Pixel
        </h1>
      </div>
      <div className="mt-12  absolute">
        <Card className="bg-blue-500 w-full flex flex-col w-90 h-106 md">
          <CardHeader className="flex gap-4">
            <Image
              src="/profile.png" // Next.js otomatis melihat ke folder public
              alt="Profile"
              width={48}
              height={48}
            />
            <div className="text-foreground">
              <p>Teddy Prasetyo</p>
              <p className="font-medium">teddy12pd@gmail.com</p>
            </div>
          </CardHeader>
          <CardAction className="flex gap-2 px-2">
            <Image src="/facebook.png" alt="facebook" width={40} height={40} />
            <Image
              src="/instagram.png"
              alt="instagram"
              width={40}
              height={40}
            />
            <Image src="/linkedin.png" alt="linkedin" width={40} height={40} />
            <Image src="/tiktok.png" alt="tiktok" width={40} height={40} />
          </CardAction>
          <CardContent className="text-foreground mt-16">
            <h1 className="text-3xl mb-2">
              Pushing boundaries through innovation
            </h1>
            <p>
              I create frontend solutions that not only look good but also load
              fast, work everywhere, and scale well.
            </p>
          </CardContent>
        </Card>
        <Card className="mt-6 flex items-center bg-muted w-full w-90">
          <Image
            className=" "
            src="/developher.png"
            alt="developher"
            width={249}
            height={249}
          />
        </Card>
        <Card className="mt-6 text-foreground bg-neutral-900 w-full w-90 ">
          <CardHeader>
            <div className="flex gap-4 items-center">
              <div>
                <h1 className="text-xl mb-2 font-extrabold">
                  Check My Portfolio
                </h1>
                <p className="text-base-6">
                  Explore selected works and real-world projects
                </p>
              </div>
              <div>
                <Button className="w-16 h-16 font-bold hover:bg-gray-500 transition-colors border border-amber-950  text-xl text-black rounded-full border-gray-500 mt-4 ">
                  <Image
                    src="/link.png"
                    alt="link"
                    height={80}
                    width={80}
                  ></Image>
                </Button>
              </div>
            </div>
            <div>
              <Image
                className="mt-10 mb-0 w-100 h-90 bottom-0"
                src="/PortfolioImage.png"
                alt="PortfolioImage"
                width={300}
                height={300}
              />
            </div>
          </CardHeader>
        </Card>
        <Card className="mt-6 h-80 overflow-x: hidden;">
          <Image
            src="/yellow.png"
            alt="yellow"
            width={40}
            height={40}
            className="h-70 w-86 bg-yellow-500 absolute mt-24"
          />
          <section className="flex items-center justify-center bg-yellow-500 p-10">
            {/* Container Utama (Lingkaran Luar) */}
            <div className=" relative w-[260px] h-[300px] flex items-center justify-center">
              {/* Lingkaran Dekoratif (Orbit)
              <div className="absolute inset-0 border border-white/20 rounded-full scale-100"></div>
              <div className="absolute inset-0 border border-white/20 rounded-full scale-75"></div>
              <div className="absolute inset-0 border border-white/10 rounded-full scale-50"></div> */}

              {/* Ikon Teknologi yang Melingkar */}
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`absolute ${tech.position} p-3  rounded-full  `}
                >
                  <div className="relative w-14 h-14">
                    <Image
                      src={tech.src}
                      alt={tech.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Teks Pusat */}
              <div className="text-center top-10 translate-y-1/2">
                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Built with 10+ <br />
                  <span className="text-gray-800 text-3xl w-12">
                    Trusted Technologies
                  </span>
                </h2>
              </div>
            </div>
          </section>
        </Card>
        {/* <Card className="mt-8 w-full h-90 mb-6 w-90 flex flex-col items-center justify-center bg-yellow-500">
          <Image
            src="/yellow.png"
            alt="yellow"
            width={40}
            height={40}
            className="h-70 w-90 mt-10 bg-yellow-500 absolute mb-0"
          />
          {listTech.map((content) => {
            return (
              <div
                key={content.id}
                className={`absolute h-15 w-16 rounded-full flex justify-center ${content.position}`}
              >
                <Image
                  className="mt-0 h-20 w-20"
                  src={content.icon}
                  alt="css"
                  width={0}
                  height={0}
                />
              </div>
            );
          })}
          <h1 className=" mt-30 font-bold text-2xl text-center w-60 flex items-center justify-center mx-auto relative text-black">
            Built with 10+ Trusted Technologies
          </h1>
        </Card> */}
        <button className="bg-blue-400 hover:bg-blue-700 w-full h-10 mt-26 rounded-2xl flex items-center justify-center">
          <img 
          src="/letter.png" 
          alt="letter" 
          />
        </button>
        <Card className=" mt-4 flex items-center bg-muted w-full w-90">
          <Image
            className=" "
            src="/developher.png"
            alt="developher"
            width={249}
            height={249}
          />
        </Card>
      </div>
    </main>
  );
}
