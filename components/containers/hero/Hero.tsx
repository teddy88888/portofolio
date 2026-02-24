export default function Hero() {
  return (
    <main className=" p-4   bg-blue-900 drop-shadow-blue-700 w-full">
      <div className="md:flex gap-4 ">
        <div>
        <h1 className="font-bold text-[44px]/12 md:text-[66px]/20  text-whitew-80 md:w-120 mb-8">
          <span className="text-black bg-amber-500">Crafting</span> Interfaces,
          One Line at a Time
        </h1>
        <p className=" text-gray-300 text-2xl md:text-3xl w-80 md:w-190 mb-8">
          Build fast, accessible, and responsive web experiences that users
          love.
        </p>
        <button className="bg-amber-50 h-12 w-full md:w-40 text-2xl text-black font-bold  rounded-4xl px-4 py-2  mt-4">
          say hello
        </button>
        </div>
        <div className="mt-4 flex justify-center text-gray-300">
          <img 
          src="/developer.png" 
          alt="developer" 
          width={700}
          />
        </div>
      </div>
    </main>
  );
}