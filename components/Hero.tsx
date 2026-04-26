"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* 🌌 HERO */
  const PARALLAX_INTENSITY = 4;
  const BACKGROUND_BLUR = 1;
  const BACKGROUND_DARKNESS = 0.35;
  const NOISE_OPACITY = 0.08;

  /* 🏛 ESTATUA */
  const STATUE_SIZE = isMobile ? 360 : 645;
  const STATUE_Y = isMobile ? 0 : -20;
  const STATUE_X = 0;

  /* 🔥 ISOTIPO (solo desktop) */
  const ISOTIPO_SIZE = 90;
  const ISO_X = 475;
  const ISO_Y = -20;

  /* ✍️ TÍTULO */
  const TITLE_LINE_1 = "Construimos";
  const TITLE_LINE_2_PART1 = "MARCAS";
  const TITLE_LINE_2_PART2 = " CON";
  const TITLE_LINE_3 = "CARÁCTER";
  const TITLE_SMALL_SIZE = isMobile ? 26 : 41;
  const TITLE_MAIN_SIZE = isMobile ? 44 : 57;
  const TITLE_X = -450;
  const TITLE_Y = -150;

  /* ✍️ SUBTÍTULO (solo desktop) */
  const SUBTITLE_LINE_1 = "DONDE LA ESTRATEGIA";
  const SUBTITLE_LINE_2 = "SE CONVIERTE EN UN SIMBOLO.";
  const SUBTITLE_SIZE = 16;
  const SUBTITLE_X = 475;
  const SUBTITLE_Y = 70;

  /* 🔘 BOTONES */
  const BUTTON_WIDTH = isMobile ? 150 : 170;
  const BUTTON_HEIGHT = isMobile ? 44 : 40;
  const BUTTONS_X = 475;
  const BUTTONS_Y = 140;

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    let x = (e.clientX / window.innerWidth - 0.5) * PARALLAX_INTENSITY;
    let y = (e.clientY / window.innerHeight - 0.5) * PARALLAX_INTENSITY;
    x = Math.max(Math.min(x, 10), -10);
    y = Math.max(Math.min(y, 10), -10);
    setPosition({ x, y });
  };

  /* ============================= */
  /* 📱 MOBILE LAYOUT */
  /* ============================= */
  if (isMobile) {
    return (
      <section className="relative min-h-screen w-full overflow-hidden">
        <Navbar />

        {/* 🌌 Fondo */}
        <div
          className="absolute inset-0 z-0"
          style={{ filter: `blur(${BACKGROUND_BLUR}px)` }}
        >
          <img
            src="/fondo-mobile.png"
            alt="Paisaje"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: `rgba(0,0,0,${BACKGROUND_DARKNESS})` }}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay z-0"
          style={{ backgroundImage: "url('/noise.png')", opacity: NOISE_OPACITY }}
        />

        {/* Contenido en flujo natural */}
        <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-24 pb-10 px-6">
          
          {/* 🏛 ESTATUA */}
          <img
            src="/statue.png"
            alt="Estatua"
            style={{ height: `${STATUE_SIZE}px` }}
            className={`relative z-10 transition-all duration-[1400ms] ease-out ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          />

          {/* ✍️ TÍTULO */}
          <div
            className={`relative z-30 text-center mt-2 transition-all duration-[1200ms] delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="leading-tight text-center text-white">
              <div style={{ fontSize: `${TITLE_SMALL_SIZE}px` }} className="font-extrabold">
                {TITLE_LINE_1}
              </div>
              <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold leading-[1.05]">
                <span className="text-[#3578FF]">{TITLE_LINE_2_PART1}</span>
                {TITLE_LINE_2_PART2}
              </div>
              <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold leading-[1.05]">
                {TITLE_LINE_3}
              </div>
            </h1>
          </div>

          {/* 🔘 BOTONES */}
          <div
            className={`relative z-30 flex flex-row justify-center items-center gap-4 mt-8 transition-all duration-[1200ms] delay-500 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => scrollToSection("about")}
              style={{
                width: `${BUTTON_WIDTH}px`,
                height: `${BUTTON_HEIGHT}px`,
                borderRadius: "9999px",
                backgroundColor: "#3578FF",
              }}
              className="font-bold text-sm text-white transition active:scale-95"
            >
              Conóceme
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              style={{
                width: `${BUTTON_WIDTH}px`,
                height: `${BUTTON_HEIGHT}px`,
                borderRadius: "9999px",
                border: "2px solid white",
              }}
              className="font-bold text-sm text-white transition active:scale-95"
            >
              Trabajemos Juntos
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ============================= */
  /* 🖥 DESKTOP LAYOUT (intacto) */
  /* ============================= */
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Navbar />

      <div
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] z-0"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(1.05)`,
          filter: `blur(${BACKGROUND_BLUR}px)`,
        }}
      >
        <img src="/fondo.jpg" alt="Paisaje" className="w-full h-full object-cover" />
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: `rgba(0,0,0,${BACKGROUND_DARKNESS})` }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: "url('/noise.png')", opacity: NOISE_OPACITY }}
      />

      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <img
          src="/statue.png"
          alt="Estatua"
          style={{
            height: `${STATUE_SIZE}px`,
            transform: `translate(${STATUE_X}px, ${STATUE_Y}px)`,
          }}
          className={`z-10 absolute transition-all duration-[1400ms] ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        />

        <div
          style={{ transform: `translate(${TITLE_X}px, ${TITLE_Y}px)` }}
          className={`z-30 absolute transition-all duration-[1200ms] delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <h1 className="leading-tight text-left">
            <div style={{ fontSize: `${TITLE_SMALL_SIZE}px` }} className="font-extrabold">
              {TITLE_LINE_1}
            </div>
            <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold">
              <span className="text-[#3578FF]">{TITLE_LINE_2_PART1}</span>
              {TITLE_LINE_2_PART2}
            </div>
            <div style={{ fontSize: `${TITLE_MAIN_SIZE}px` }} className="font-extrabold">
              {TITLE_LINE_3}
            </div>
          </h1>
        </div>

        <div
          style={{ transform: `translate(${SUBTITLE_X}px, ${SUBTITLE_Y}px)` }}
          className={`absolute z-30 text-center transition-all duration-[1200ms] delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <div
            style={{ fontSize: `${SUBTITLE_SIZE}px`, letterSpacing: "0.28em" }}
            className="font-medium"
          >
            <div>{SUBTITLE_LINE_1}</div>
            <div>{SUBTITLE_LINE_2}</div>
          </div>
        </div>

        <img
          src="/isotipo.png"
          alt="Isotipo"
          style={{
            height: `${ISOTIPO_SIZE}px`,
            transform: `translate(${ISO_X}px, ${ISO_Y}px)`,
          }}
          className={`absolute z-30 transition-all duration-[1300ms] delay-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />

        <div
          className={`z-30 flex gap-6 absolute transition-all duration-[1200ms] delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          style={{ transform: `translate(${BUTTONS_X}px, ${BUTTONS_Y}px)` }}
        >
          <button
            onClick={() => scrollToSection("about")}
            style={{
              width: `${BUTTON_WIDTH}px`,
              height: `${BUTTON_HEIGHT}px`,
              borderRadius: "9999px",
              backgroundColor: "#3578FF",
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
              border: "2px solid white",
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