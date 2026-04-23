"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { scrollToSection } from "@/utils/scrollToSection";

export default function Hero() {

  /* ============================= */
  /* 🔧 CONTROLES EDITABLES */
  /* ============================= */

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
  const PARALLAX_INTENSITY = 8;
  const BACKGROUND_SCALE = 1.15;
  const BACKGROUND_BLUR = 1;
  const BACKGROUND_DARKNESS = 0.35;
  const NOISE_OPACITY = 0.08;

  /* 🏛 ESTATUA */
  const STATUE_SIZE = isMobile ? 320 : 645;
  const STATUE_Y = isMobile ? 40 : -20;
  const STATUE_X = 0;


  /* 🔥 ISOTIPO */
  const ISOTIPO_SIZE = isMobile ? 60 : 90;
  const ISO_X = isMobile ? 0 : 475;
  const ISO_Y = isMobile ? -180 : -50;

  /* ✍️ TÍTULO */
  const TITLE_LINE_1 = "Construimos";
  const TITLE_LINE_2_PART1 = "MARCAS";
  const TITLE_LINE_2_PART2 = " CON";
  const TITLE_LINE_3 = "CARÁCTER";
  const TITLE_SMALL_SIZE = isMobile ? 22 : 41;
  const TITLE_MAIN_SIZE = isMobile ? 30 : 57;
  const TITLE_X = isMobile ? 0 : -450;
  const TITLE_Y = isMobile ? -120 : -150;
  const TITLE_ALIGN = isMobile ? "center" : "left";

  /* ✍️ SUBTÍTULO */
  const SUBTITLE_LINE_1 = "DONDE LA ESTRATEGIA";
  const SUBTITLE_LINE_2 = "SE CONVIERTE EN UN SIMBOLO.";
  const SUBTITLE_SIZE = isMobile ? 12 : 16;
  const SUBTITLE_X = isMobile ? 0 : 475;
  const SUBTITLE_Y = isMobile ? -20 : 45;

  /* 🔘 BOTONES */
  const BUTTON_WIDTH = isMobile ? 140 : 170;
  const BUTTON_HEIGHT = isMobile ? 38 : 40;
  const BUTTONS_X = isMobile ? 0 : 475;
  const BUTTONS_Y = isMobile ? 80 : 115;

  /* ============================= */
  /* 🎬 ESTADOS */
  /* ============================= */

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (isMobile) return;

  const x = (e.clientX / window.innerWidth - 0.5) * PARALLAX_INTENSITY;
  const y = (e.clientY / window.innerHeight - 0.5) * PARALLAX_INTENSITY;
  setPosition({ x, y });
};

  return (
    <section
  onMouseMove={isMobile ? undefined : handleMouseMove}
  className="relative min-h-screen w-full"
>

       <Navbar />
    
      {/* 🌌 Fondo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: isMobile
  ? `scale(${BACKGROUND_SCALE})`
  : `translate(${position.x}px, ${position.y}px) scale(${BACKGROUND_SCALE})`,
          filter: `blur(${BACKGROUND_BLUR}px)`
        }}
      >
        <img
          src={isMobile ? "/fondo-mobile.png" : "/fondo.jpg"}
          alt="Paisaje"
          className="min-h-full w-full object-cover"
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

      <div className={`relative min-h-[112vh] flex flex-col items-center ${
  isMobile ? "justify-center px-6 pt-32" : "justify-center"
}`}>

        {/* 🏛 ESTATUA */}
        <img
          src="/statue.png"
          alt="Estatua"
          style={{
            height: `${STATUE_SIZE}px`,
            transform: `translate(${STATUE_X}px, ${STATUE_Y}px)`
          }}
          className={`
  z-10 transition-all duration-[1400ms] ease-out
  ${isMobile ? "relative mt-6" : "absolute"}
  ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
`}
        />

        {/* ✍️ TÍTULO */}
        <div
          style={
  isMobile
    ? {}
    : { transform: `translate(${TITLE_X}px, ${TITLE_Y}px)` }
}
          className={`z-30 transition-all duration-[1200ms] delay-200 ${
  isMobile
    ? "text-center mb-6"
    : "absolute"
} ${
  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
}`}

        >
          <h1 className={`leading-tight ${TITLE_ALIGN === "left" ? "text-left" : "text-center"}`}>
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

        {/* ✍️ SUBTÍTULO */}
        {!isMobile && (
  <div
    style={{
      transform: `translate(${SUBTITLE_X}px, ${SUBTITLE_Y}px)`
    }}
    className={`absolute z-30 text-center ${
      isMobile ? "left-1/2 -translate-x-1/2" : ""
    } transition-all duration-[1200ms] delay-400 ${
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
)}

        {/* 🔥 ISOTIPO */}
        {!isMobile && (
  <img
    src="/isotipo.png"
    alt="Isotipo"
    style={{
      height: `${ISOTIPO_SIZE}px`,
      transform: `translate(${ISO_X}px, ${ISO_Y}px)`
    }}
    className={`absolute z-30 ${
      isMobile ? "left-1/2 -translate-x-1/2" : ""
    } transition-all duration-[1300ms] delay-500 ${
      loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
    }`}
  />
)}

        {/* 🔘 BOTONES */}
        <div
          className={`z-30 flex gap-6 transition-all duration-[1200ms] delay-500 ${
  isMobile
    ? "flex-row justify-center items-center mt-6"
    : "absolute"
} ${
  loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
}`}
style={
  isMobile
    ? {}
    : { transform: `translate(${BUTTONS_X}px, ${BUTTONS_Y}px)` }
}
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