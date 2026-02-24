import React from "react";
import Image from "next/image";
// import Image { StaticImageData } from "next/image";
import { Card, CardHeader, CardAction, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";



// Data ikon untuk memudahkan mapping posisi
const techIcons = [
  { name: 'CSS3', src: '/css.png', position: 'left-[0%] bottom-[20%]' },
  { name: 'JavaScript', src: '/js.png', position: 'left-[18%] top-[40%]' },
  { name: 'TypeScript', src: '/ts.png', position: 'left-[42%] top-[30%]' },
  { name: 'HTML5', src: '/html.png', position: 'right-[15%] top-[40%]' },
  { name: 'React', src: '/react.png', position: 'right-[0%] bottom-[20%]' },
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
    <main className=" mt-20 h-500 md:h-320 bg-white  w-100 md:w-315 flex flex-col items-center snap-start scroll-ms-6 scale-100 md:scale-140 left-0 md:left-100">
      <div className=" flex flex-col gap-4 items-center mb-4">
        <button
         
          className=" w-22 font-extrabold hover:bg-amber-200 transition-colors border border-amber-950 h-12 text-xl text-black rounded-2xl mt-4 "
        >
          About
        </button>
        <h1 className="font-extrabold text-[44px]/12 text-black bg-white text-center">
          The Developer Behind the Pixel
        </h1>
      </div>
      <div className="mt-12 w-90 md:w-full flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 md:flex gap-4 ">
          <Card className="bg-blue-500 w-full flex flex-col w-90 md:w-180 h-106 ">
            <div className="">
              <CardHeader className="flex gap-4 ">
                <Image
                  src="/profile.png" // Next.js otomatis melihat ke folder public
                  alt="Profile"
                  width={48}
                  height={48}
                />
                <div className="text-foreground ">
                  <p>Teddy Prasetyo</p>
                  <p className="font-medium mt-4">teddy12pd@gmail.com</p>
                </div>
              </CardHeader>
              <CardAction className="flex gap-2 px-4 mt-4 md:-mt-12">
                <Image
                  src="/facebook.png"
                  alt="facebook"
                  width={40}
                  height={40}
                />
                <Image
                  src="/instagram.png"
                  alt="instagram"
                  width={40}
                  height={40}
                />
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={40}
                  height={40}
                />
                <Image src="/tiktok.png" alt="tiktok" width={40} height={40} />
              </CardAction>
            </div>
            <CardContent className="text-foreground mt-16">
              <h1 className="text-3xl mb-2 md:mt-12  font-bold">
                Pushing boundaries through innovation
              </h1>
              <p>
                I create frontend solutions that not only look good but also
                load fast, work everywhere, and scale well.
              </p>
            </CardContent>
          </Card>
          <Card className="mt-6 md:mt-0 px-6 flex items-center justify-center bg-muted w-full w-90 h-106">
            <Image
              className=" "
              src="/developher.png"
              alt="developher"
              width={380}
              height={380}
            />
          </Card>
        </div>

        <div className="md:flex gap-8 mt-10 md:w-270 ">
          <Card className="mt-6  text-foreground bg-neutral-900 w-90 md:w-1500 h-130 ">
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
                  className="mt-10 mb-0 w-100  bottom-0"
                  src="/PortfolioImage.png"
                  alt="PortfolioImage"
                  width={300}
                  height={130}
                />
              </div>
            </CardHeader>
          </Card>
          <Card className="mt-2 h-90 w-98 md:h-90 overflow-x: hidden;">
            <div className="flex items-center justify-center p-8 bg-gray-100 min-h-[500px]">
              {/* Container Utama dengan Background Gradient Orange */}
              <div className="relative w-[450px] h-[450px] bg-gradient-to-b from-[#F59E0B] to-[#FBBF24] rounded-[40px] shadow-xl overflow-hidden flex flex-col items-center justify-end pb-12">
                {/* Lingkaran Konsentris (Background Deco) */}
                <div className="absolute bottom-[-10%] w-[120%] aspect-square border-[1px] border-white/10 rounded-full" />
                <div className="absolute bottom-[-5%] w-[100%] aspect-square border-[1px] border-white/20 rounded-full bg-white/5" />
                <div className="absolute bottom-[0%] w-[80%] aspect-square border-[1px] border-white/30 rounded-full bg-white/10" />
                <div className="absolute bottom-[5%] w-[60%] aspect-square bg-[#FDE68A]/40 rounded-full blur-sm" />

                {/* Pemetaan Ikon Teknologi */}
                {techIcons.map((tech, index) => (
                  <div
                    key={index}
                    className={`absolute ${tech.position} transform -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-110 duration-300`}
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FCE3C1] rounded-full flex items-center justify-center shadow-lg border border-white/20">
                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}

                {/* Teks Utama */}
                <div className="relative z-10 text-center px-8">
                  <h2 className="text-[#1A1A1A] text-2xl md:text-3xl font-bold leading-tight">
                    Built with 10+ Trusted <br /> Technologies
                  </h2>
                </div>
              </div>
            </div>
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
          <button className="bg-blue-400 mt-42 hover:bg-blue-700 w-full h-10 md:h-120 md:mt-8 rounded-2xl flex items-center justify-center">
            <img src="/letter.png" alt="letter" />
          </button>
        </div>
      </div>
    </main>
  );
}
