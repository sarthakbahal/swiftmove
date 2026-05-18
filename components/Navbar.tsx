"use client";

import { useEffect, useState } from "react";
import { Menu, Truck } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

type NavId = (typeof NAV_LINKS)[number]["id"];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<NavId>("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 8);

      const sections = NAV_LINKS.map((link) =>
        document.getElementById(link.id)
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActive(NAV_LINKS[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="flex items-center gap-2 text-lg font-semibold">
          <Truck className="h-5 w-5 text-accent" />
          <span>SwiftMove</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 border-b-2 pb-1 ${
                active === link.id
                  ? "border-accent text-white"
                  : "border-transparent text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen((prev: boolean) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 border-b border-white/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-sm font-medium tracking-wide ${
                active === link.id ? "text-accent" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
