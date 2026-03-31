"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const offsets: Record<string, number> = {
    services: 100,
    portfolio: 100,
    about: 140,
    contact: 180 // 👈 este baja más
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

  return (
    <nav className="fixed w-full bg-[#1F2127]/90 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center">
      
      <div className="text-2xl font-bold text-white">
        Vikings Estudio
      </div>

      <div className="hidden md:flex gap-8 text-white font-semibold">
        <button onClick={() => scrollToSection("services")}>Servicios</button>
        <button onClick={() => scrollToSection("portfolio")}>Portafolio</button>
        <button onClick={() => scrollToSection("about")}>Sobre mí</button>
        <button onClick={() => scrollToSection("contact")}>Contacto</button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="text-white font-bold">
          {open ? "X" : "☰"}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-[#1F2127] flex flex-col items-center py-4 gap-4 md:hidden">
          <button onClick={() => scrollToSection("services")}>Servicios</button>
          <button onClick={() => scrollToSection("portfolio")}>Portafolio</button>
          <button onClick={() => scrollToSection("about")}>Sobre mí</button>
          <button onClick={() => scrollToSection("contact")}>Contacto</button>
        </div>
      )}
    </nav>
  );
}