"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const offsets: Record<string, number> = {
    services: 100,
    portfolio: 100,
    about: 140,
    contact: 180
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = offsets[id] || 100;

    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth"
    });

    setOpen(false);
  };

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
    <nav className="fixed w-full bg-[#1F2127]/90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      
      <div className="text-2xl font-bold text-white">
        Vikings Estudio
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex gap-8 text-white font-semibold">
        <button onClick={() => scrollToSection("services")} className="hover:text-[#6B9CFF] transition">Servicios</button>
        <button onClick={() => scrollToSection("portfolio")} className="hover:text-[#6B9CFF] transition">Portafolio</button>
        <button onClick={() => scrollToSection("about")} className="hover:text-[#6B9CFF] transition">Sobre mí</button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-[#6B9CFF] transition">Contacto</button>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl transition-transform duration-300"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1F2127]/95 backdrop-blur-md flex flex-col items-center py-6 gap-6 md:hidden transition-all duration-300 ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <button onClick={() => scrollToSection("services")} className="text-white font-semibold hover:text-[#6B9CFF] transition">Servicios</button>
        <button onClick={() => scrollToSection("portfolio")} className="text-white font-semibold hover:text-[#6B9CFF] transition">Portafolio</button>
        <button onClick={() => scrollToSection("about")} className="text-white font-semibold hover:text-[#6B9CFF] transition">Sobre mí</button>
        <button onClick={() => scrollToSection("contact")} className="text-white font-semibold hover:text-[#6B9CFF] transition">Contacto</button>
      </div>

    </nav>
  );
}