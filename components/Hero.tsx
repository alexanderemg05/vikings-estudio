"use client";

import React, { useState, useEffect } from "react";

export default function Hero() {

  /* ============================= */
  /* 🔧 CONTROLES EDITABLES */
  /* ============================= */

  const offsets: Record<string, number> = {
  services: 25,
  portfolio: 27,
  about: -90,   // 👈 más abajo "Conóceme"
  contact: -70  // 👈 más abajo "Trabajemos Juntos"
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
};

  /* 🌌 HERO */
  const PARALLAX_INTENSITY = 5;
  const BACKGROUND_SCALE = 1;
  const BACKGROUND_BLUR = 1;
  const BACKGROUND_DARKNESS = 0.5;
  const NOISE_OPACITY = 0.08;

  /* 🏛 ESTATUA */
  const STATUE_SIZE = 645;
  const STATUE_X = 0;
  const STATUE_Y = -20;

  /* 🔥 ISOTIPO */
  const ISOTIPO_SIZE = 90;
  const ISO_X = 475;
  const ISO_Y = -60;

  /* ✍️ TÍTULO */
  const TITLE_LINE_1 = "Construimos";
  const TITLE_LINE_2_PART1 = "MARCAS";
  const TITLE_LINE_2_PART2 = " CON";
  const TITLE_LINE_3 = "CARÁCTER";
  const TITLE_SMALL_SIZE = 41;
  const TITLE_MAIN_SIZE = 57;
  const TITLE_X = -450;
  const TITLE_Y = -183;
  const TITLE_ALIGN = "left";

  /* ✍️ SUBTÍTULO */
  const SUBTITLE_LINE_1 = "DONDE LA ESTRATEGIA";
  const SUBTITLE_LINE_2 = "SE CONVIERTE EN UN SIMBOLO.";
  const SUBTITLE_SIZE = 16;
  const SUBTITLE_X = 475;
  const SUBTITLE_Y = 25;

  /* 🔘 BOTONES */
  const BUTTON_WIDTH = 170;
  const BUTTON_HEIGHT = 40;
  const BUTTONS_X = 475;
  const BUTTONS_Y = 95;

  /* ============================= */
  /* 🎬 ESTADOS */
  /* ============================= */

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * PARALLAX_INTENSITY;
    const y = (e.clientY / window.innerHeight - 0.5) * PARALLAX_INTENSITY;
    setPosition({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full"
    >
      {/* 🌌 Fondo */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out z-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${BACKGROUND_SCALE})`,
          filter: `blur(${BACKGROUND_BLUR}px)`
        }}
      >
        <img
          src="/fondo.jpg"
          alt="Paisaje"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: `rgba(0,0,0,${BACKGROUND_DARKNESS})`
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: "url('/noise.png')",
          opacity: NOISE_OPACITY
        }}
      />

      {/* 🧭 NAVBAR */}
      <nav className={`relative z-30 px-7 py-6 flex justify-between items-center transition-all duration-1000 ${
        loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}>
        <div className="font-extrabold text-lg">
          Vikings Estudio
        </div>
        <div className="flex gap-10 text-sm font-semibold">
          <button onClick={() => scrollToSection("services")} className="hover:opacity-70 transition">Servicios</button>
          <button onClick={() => scrollToSection("portfolio")} className="hover:opacity-70 transition">Portafolio</button>
          <button onClick={() => scrollToSection("contact")} className="hover:opacity-70 transition">Contacto</button>
        </div>
      </nav>

      <div className="relative h-screen flex items-center justify-center">

        {/* 🏛 ESTATUA */}
        <img
          src="/statue.png"
          alt="Estatua"
          style={{
            height: `${STATUE_SIZE}px`,
            transform: `translate(${STATUE_X}px, ${STATUE_Y}px)`
          }}
          className={`absolute z-10 transition-all duration-[1400ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        />

        {/* ✍️ TÍTULO */}
        <div
          style={{
            transform: `translate(${TITLE_X}px, ${TITLE_Y}px)`
          }}
          className={`absolute z-30 transition-all duration-[1200ms] delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className={`leading-tight ${TITLE_ALIGN === "left" ? "text-left" : "text-center"}`}>
            <div style={{ fontSize: `${TITLE_SMALL_SIZE}px` }} className="font-extrabold">
              {TITLE_LINE_1}
            </div>
            <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold">
              <span className="text-[#6B9CFF]">{TITLE_LINE_2_PART1}</span>
              {TITLE_LINE_2_PART2}
            </div>
            <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold">
              {TITLE_LINE_3}
            </div>
          </h1>
        </div>

        {/* ✍️ SUBTÍTULO */}
        <div
          style={{
            transform: `translate(${SUBTITLE_X}px, ${SUBTITLE_Y}px)`
          }}
          className={`absolute z-30 text-center transition-all duration-[1200ms] delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div
            style={{
              fontSize: `${SUBTITLE_SIZE}px`,
              letterSpacing: "0.28em"
            }}
            className="font-medium"
          >
            <div>{SUBTITLE_LINE_1}</div>
            <div>{SUBTITLE_LINE_2}</div>
          </div>
        </div>

        {/* 🔥 ISOTIPO */}
        <img
          src="/isotipo.png"
          alt="Isotipo"
          style={{
            height: `${ISOTIPO_SIZE}px`,
            transform: `translate(${ISO_X}px, ${ISO_Y}px)`
          }}
          className={`absolute z-30 transition-all duration-[1300ms] delay-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        {/* 🔘 BOTONES */}
        <div
          style={{
            transform: `translate(${BUTTONS_X}px, ${BUTTONS_Y}px)`
          }}
          className={`absolute z-30 flex gap-6 transition-all duration-[1200ms] delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => scrollToSection("about")}
            style={{
              width: `${BUTTON_WIDTH}px`,
              height: `${BUTTON_HEIGHT}px`,
              borderRadius: "9999px",
              backgroundColor: "#3578FF"
            }}
            className="font-bold text-sm transition hover:scale-105"
          >
            Conóceme
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            style={{
              width: `${BUTTON_WIDTH}px`,
              height: `${BUTTON_HEIGHT}px`,
              borderRadius: "9999px",
              border: "2px solid white"
            }}
            className="font-bold text-sm transition hover:bg-white hover:text-black"
          >
            Trabajemos Juntos
          </button>
        </div>

      </div>
    </section>
  );
}