import React, { useState } from "react";

const GetContact: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulasi proses pengiriman
    setTimeout(() => {
      // Ubah ke 'success' atau 'error' untuk mengetes tampilan
      setStatus("success");
    }, 2000);
  };

  return (
    <section className="bg-[#0a0c10] text-white py-12 md:py-20 px-6 md:px-12 lg:px-24 min-h-screen flex items-center relative overflow-hidden left-0 md:left-60">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Kolom Kiri */}
        <div className="flex flex-col justify-between order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <img
                src="/Profile.png"
                alt="Edwin Anderson"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Edwin Anderson
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  edwinanderson@email.com
                </p>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Great results begin <br />
              <span className="text-gray-500">with clear ideas.</span>
            </h1>
          </div>

          <div className="flex gap-4 mt-10 md:mt-12">
            {/* Gunakan class 'w-8 h-8 md:w-10 md:h-10' agar ikon mengecil di mobile */}
            {["facebook", "instagram", "linkedin", "tiktok"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:scale-110 transition-transform"
              >
                <img
                  src={`/${social}.png`}
                  alt={social}
                  className="w-9 h-9 md:w-10 md:h-10"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Form */}
        <div className="bg-transparent order-1 lg:order-2">
          <div className="inline-block px-3 py-1 rounded-full border border-gray-700 text-[10px] md:text-xs font-medium text-gray-400 mb-4 md:mb-6">
            Contact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10">
            Start Your Next Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="group">
              <label className="block text-xs md:text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                placeholder="What should I call you?..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 text-sm md:text-base"
              />
            </div>

            <div className="group">
              <label className="block text-xs md:text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                placeholder="Where can I reach you? ..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 text-sm md:text-base"
              />
            </div>

            <div className="group">
              <label className="block text-xs md:text-sm font-medium mb-2 group-focus-within:text-blue-500 transition-colors">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={1}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent border-b border-gray-800 py-3 outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600 resize-none text-sm md:text-base"
              ></textarea>
            </div>

            {/* Tombol Send Message Responsif */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-max md:px-12 bg-[#3b82f6] hover:bg-blue-600 disabled:bg-gray-700 text-white font-semibold py-4 rounded-full transition-all mt-4 shadow-lg shadow-blue-500/20 active:scale-95 flex justify-center items-center"
            >
              {status === "loading" ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Pop-up Modal Status (Berdasarkan Gambar Referensi) */}
      {status === "success" && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl overflow-hidden max-w-sm w-full text-center animate-in fade-in zoom-in duration-300">
            <div className="bg-gradient-to-b from-orange-400 to-orange-500 p-8 flex justify-center relative">
              {/* Efek Confetti Sederhana */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]" />
              <img
                src="/success-mail.png"
                alt="Success"
                className="w-32 h-32 relative z-10"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Got Your Message!
              </h2>
              <p className="text-gray-500 mb-8">
                Really appreciate you reaching out. I&apos;ll be in touch soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-blue-200"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GetContact;
