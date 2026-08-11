import Image from "next/image";

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Project", href: "#project" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 w-full bg-orange-300 backdrop-blur-sm">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex shrink-0 items-center gap-3">
          <Image
            src="/tedy.png"
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-white">Teddy</span>
        </a>

        <div className="ml-auto hidden items-center gap-8 md:flex lg:gap-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-amber-50 transition hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="ml-4 shrink-0 md:hidden"
        >
          <Image src="/menu.png" alt="" width={22} height={22} />
        </button>
      </div>
    </nav>
  );
}
