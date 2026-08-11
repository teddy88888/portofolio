import Image from "next/image";
import { Card, CardAction, CardContent, CardHeader } from "../../ui/card";
import { Button } from "../../ui/button";

const techIcons = [
  { name: "CSS3", src: "/css.png", position: "left-[4%] bottom-[20%]" },
  { name: "JavaScript", src: "/js.png", position: "left-[18%] top-[40%]" },
  { name: "TypeScript", src: "/ts.png", position: "left-[42%] top-[30%]" },
  { name: "HTML5", src: "/html.png", position: "right-[15%] top-[40%]" },
  { name: "React", src: "/react.png", position: "right-[4%] bottom-[20%]" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <button
            type="button"
            className="h-12 rounded-2xl border border-amber-950 px-5 text-xl font-extrabold text-black transition hover:bg-amber-100"
          >
            About
          </button>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-black sm:text-5xl">
            The Developer Behind the Pixel
          </h2>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Card className="w-full bg-blue-500">
            <CardHeader className="flex flex-row items-start gap-4">
              <Image
                src="/profile.png"
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-foreground min-w-0">
                <p>Teddy Prasetyo</p>
                <p className="mt-2 break-all font-medium">teddy12pd@gmail.com</p>
              </div>
              <CardAction className="ml-auto flex shrink-0 gap-2">
                {["facebook", "instagram", "linkedin", "tiktok"].map((name) => (
                  <Image
                    key={name}
                    src={`/${name}.png`}
                    alt={name}
                    width={32}
                    height={32}
                  />
                ))}
              </CardAction>
            </CardHeader>

            <CardContent className="pt-6">
              <h3 className="mb-2 text-2xl font-bold sm:text-3xl">
                Pushing boundaries through innovation
              </h3>
              <p>
                I create frontend solutions that not only look good but also
                load fast, work everywhere, and scale well.
              </p>
            </CardContent>
          </Card>

          <Card className="flex min-h-[360px] w-full items-center justify-center bg-muted p-6">
            <Image
              src="/developher.png"
              alt="Developer illustration"
              width={380}
              height={380}
              className="h-auto max-h-[360px] w-full max-w-[380px] object-contain"
            />
          </Card>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr_0.45fr]">
          <Card className="w-full overflow-hidden bg-neutral-900 text-white">
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-extrabold">Check My Portfolio</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Explore selected works and real-world projects
                  </p>
                </div>
                <Button className="h-14 w-14 shrink-0 rounded-full">
                  <Image src="/link.png" alt="Open portfolio" height={32} width={32} />
                </Button>
              </div>
              <Image
                className="mt-8 h-auto w-full object-contain"
                src="/PortfolioImage.png"
                alt="Portfolio preview"
                width={600}
                height={260}
              />
            </CardHeader>
          </Card>

          <Card className="relative w-full overflow-hidden bg-gray-100 p-4">
            <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-[40px] bg-gradient-to-b from-[#F59E0B] to-[#FBBF24] shadow-xl">
              <div className="absolute bottom-[-10%] left-1/2 aspect-square w-[120%] -translate-x-1/2 rounded-full border border-white/10" />
              <div className="absolute bottom-[-5%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full border border-white/20 bg-white/5" />
              <div className="absolute bottom-0 left-1/2 aspect-square w-[80%] -translate-x-1/2 rounded-full border border-white/30 bg-white/10" />
              <div className="absolute bottom-[5%] left-1/2 aspect-square w-[60%] -translate-x-1/2 rounded-full bg-[#FDE68A]/40 blur-sm" />

              {techIcons.map((tech) => (
                <div
                  key={tech.name}
                  className={`absolute ${tech.position} flex -translate-y-1/2 items-center justify-center transition-transform duration-300 hover:scale-110`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#FCE3C1] shadow-lg sm:h-16 sm:w-16">
                    <img
                      src={tech.src}
                      alt={tech.name}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                </div>
              ))}

              <div className="absolute inset-x-0 bottom-10 z-10 px-6 text-center">
                <h3 className="text-2xl font-bold leading-tight text-[#1A1A1A]">
                  Built with 10+ Trusted
                  <br />
                  Technologies
                </h3>
              </div>
            </div>
          </Card>

          <button
            type="button"
            className="flex min-h-[160px] w-full items-center justify-center rounded-2xl bg-blue-400 p-6 transition hover:bg-blue-500 lg:min-h-full"
          >
            <img src="/letter.png" alt="Contact" className="max-h-40 w-auto object-contain" />
          </button>
        </div>
      </div>
    </section>
  );
}
