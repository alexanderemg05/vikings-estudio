"use client";

import { useState, useEffect } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 w-full z-[50] px-5 py-5 md:px-6 md:py-6 flex justify-between items-center">
      
      {/* LOGO */}
<div className="flex items-center gap-2 md:gap-3 text-white font-bold">
  <img
    src="/iso.png"
    alt="Isotipo"
    className="h-6 w-auto md:h-8"
  />
  <span className="text-lg md:text-xl border-b-2 border-[#3578FF] md:border-b-0 pb-0.5 md:pb-0">
    Vikings Estudio
  </span>
</div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-8 text-white font-semibold">
        <button onClick={() => scrollToSection("services")} className="hover:text-[#6B9CFF] transition">
          Servicios
        </button>
        <button onClick={() => scrollToSection("portfolio")} className="hover:text-[#6B9CFF] transition">
          Portafolio
        </button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-[#6B9CFF] transition">
          Contacto
        </button>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl bg-white/10 backdrop-blur-md border border-white/20 rounded-lg w-11 h-11 flex items-center justify-center transition-transform duration-300 active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1F2127]/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden transition-all duration-300 ${
          open ? "opacity-85 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={() => { scrollToSection("services"); setOpen(false); }}
          className="text-white font-semibold hover:text-[#6B9CFF] transition"
        >
          Servicios
        </button>
        <button
          onClick={() => { scrollToSection("portfolio"); setOpen(false); }}
          className="text-white font-semibold hover:text-[#6B9CFF] transition"
        >
          Portafolio
        </button>
        <button
          onClick={() => { scrollToSection("contact"); setOpen(false); }}
          className="text-white font-semibold hover:text-[#6B9CFF] transition"
        >
          Contacto
        </button>
      </div>
    </nav>
  );
}