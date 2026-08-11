const projects = [
  { image: "/PortfolioImage1.png", label: "Portfolio 1" },
  { image: "/PortfolioImage2.png", label: "Portfolio 2" },
  { image: "/PortfolioImage3.png", label: "Portfolio 3" },
];

export default function Portfolio() {
  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex h-9 items-center rounded-xl border border-black px-4 font-bold text-black">
            Portfolio
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Built with Passion, Shipped with Precision
          </h2>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.image} className="w-full overflow-hidden rounded-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.label}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-3 bottom-3 flex h-10 items-center justify-center rounded-xl bg-gray-950/60 font-bold text-white backdrop-blur-sm">
                  {project.label}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <button type="button" aria-label="Previous project">
            <img src="/chevronleft.png" alt="" className="transition hover:scale-110" />
          </button>
          <button type="button" aria-label="Next project">
            <img src="/chevronright.png" alt="" className="transition hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
}
