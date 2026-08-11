"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Project", href: "#project" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full bg-purple-950/50 backdrop-blur-md">
      <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src="/tedy.png"
            alt="Teddy"
            width={48}
            height={48}
            priority
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="text-base font-medium text-white sm:text-lg">
            Teddy
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center gap-7 md:flex lg:gap-11">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-white transition-colors hover:text-amber-300 lg:text-lg"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>

          <span className="flex w-6 flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-purple-950/95 shadow-xl backdrop-blur-md transition-all duration-200 md:hidden ${
            isOpen
              ? "pointer-events-auto max-h-96 translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col p-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-white transition hover:bg-white/10 hover:text-amber-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
