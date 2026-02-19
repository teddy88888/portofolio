export default function Hero() {
  return (
    <main className="mt-16 p-4 relative">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-[44px]/12 text-white">
          <span className="text-black bg-amber-500">Crafting</span> Interfaces,
          One Line at a Time
        </h1>
        <p className="text-lg text-gray-300">
          Build fast, accessible, and responsive web experiences that users
          love.
        </p>
        <button className="bg-amber-50 h-12 text-xl text-black font-bold w-full rounded-4xl px-4 py-2 rounded mt-4">
          say hello
        </button>
        <div className="mt-4 flex justify-center text-gray-300">
          <img 
          src="/developer.png" 
          alt="developer" 
          />
        </div>
      </div>
    </main>
  );
}