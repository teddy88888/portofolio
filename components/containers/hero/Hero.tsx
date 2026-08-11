import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-blue-900">
      <div className="mx-auto grid min-h-[620px] w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-12 pt-28 sm:px-6 md:grid-cols-2 md:pb-16 md:pt-28 lg:px-8">
        <div className="relative z-10 max-w-2xl">
          <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="bg-amber-500 px-1 text-black">Crafting</span>{" "}
            Interfaces, One Line at a Time
          </h1>

          <p className="mb-8 max-w-xl text-xl leading-relaxed text-gray-300 sm:text-2xl md:text-3xl">
            Builder fast, accessible, and responsive web experiences that users
            love.
          </p>

          <button
            type="button"
            className="h-12 w-full rounded-full bg-amber-50 px-6 text-xl font-bold text-black transition hover:bg-amber-200 sm:w-40"
          >
            say hello
          </button>
        </div>

        <div className="flex w-full items-end justify-center md:justify-end">
          <Image
            src="/developer2.png"
            alt="Developer illustration"
            width={700}
            height={700}
            className="h-auto w-full max-w-155 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
