"use client";

import { useState } from "react";

export default function GetContact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 1000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0c10] py-16 text-white sm:py-20 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <img
                src="/Profile.png"
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-blue-500 object-cover md:h-16 md:w-16"
              />
              <div>
                <h3 className="text-lg font-semibold md:text-xl">Edwin Anderson</h3>
                <p className="text-xs text-gray-400 md:text-sm">
                  edwinanderson@email.com
                </p>
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Great results begin
              <br />
              <span className="text-gray-500">with clear ideas.</span>
            </h2>
          </div>

          <div className="mt-10 flex gap-4">
            {["facebook", "instagram", "linkedin", "tiktok"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="transition hover:scale-110"
              >
                <img
                  src={`/${social}.png`}
                  alt=""
                  className="h-9 w-9 object-contain md:h-10 md:w-10"
                />
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="mb-4 inline-block rounded-full border border-gray-700 px-3 py-1 text-xs font-medium text-gray-400">
            Contact
          </span>
          <h2 className="mb-8 text-3xl font-bold sm:text-4xl md:text-5xl">
            Start Your Next Project
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {[
              { label: "Name", type: "text", placeholder: "What should I call you?..." },
              { label: "Email", type: "email", placeholder: "Where can I reach you?..." },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-2 block text-sm font-medium">
                  {field.label}<span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full border-b border-gray-800 bg-transparent py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-blue-500 md:text-base"
                />
              </div>
            ))}

            <div>
              <label className="mb-2 block text-sm font-medium">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell me about your project..."
                className="w-full resize-none border-b border-gray-800 bg-transparent py-3 text-sm outline-none transition placeholder:text-gray-600 focus:border-blue-500 md:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-[#3b82f6] px-8 py-4 font-semibold transition hover:bg-blue-600 disabled:bg-gray-700 md:w-auto"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {status === "success" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
          <div className="w-full max-w-sm overflow-hidden rounded-3xl bg-white text-center">
            <div className="flex justify-center bg-gradient-to-b from-orange-400 to-orange-500 p-8">
              <img src="/success-mail.png" alt="Success" className="h-32 w-32" />
            </div>
            <div className="p-8">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                Got Your Message!
              </h2>
              <p className="mb-8 text-gray-500">
                Really appreciate you reaching out. I&apos;ll be in touch soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full rounded-2xl bg-blue-500 py-4 font-bold text-white hover:bg-blue-600"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
