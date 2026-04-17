"use client";

import React, { useState, useEffect } from "react";

export default function SectionBackground() {

const [isMobile, setIsMobile] = useState(false);
const [mounted, setMounted] = useState(false);
const [loaded, setLoaded] = useState(false);

useEffect(() => {
  setMounted(true);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  setLoaded(true);
}, []);

  // 🔥 ESTA LÍNEA ES LA CLAVE
  if (!mounted) return null;

  /* ============================= */
  /* 🔧 CONTROLES EDITABLES */
  /* ============================= */

  /* 🔢 SERVICIOS */
  const SERVICES_Y = 140;
  const SERVICES_SIZE = 14;

  const SERVICE_1_X = -280;
  const SERVICE_1_Y = -300;

  const SERVICE_2_X = -120;
  const SERVICE_2_Y = -300;

  const SERVICE_3_X = 120;
  const SERVICE_3_Y = -300;

  const SERVICE_4_X = 280;
  const SERVICE_4_Y = -300;

  /* 🎨 FONDO SECCIONES */
  const SECTION_BG_Y = -1050;
  const SECTION_BG_SCALE = 1;
  const SECTION_BG_OPACITY = 1;

  /* ============================= */
  /* 🎬 ESTADO PARA ANIMACIÓN */
  /* ============================= */

  return (
    <section className="absolute top-0 left-0 w-full pointer-events-none">

      {/* Fondo nuevo */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${SECTION_BG_Y}px) scale(${SECTION_BG_SCALE})`,
          opacity: SECTION_BG_OPACITY,
          zIndex: 20
        }}
      >
        <img
          src="/section-bg.png"
          alt="Fondo secciones"
          className="w-full object-cover"
        />
      </div>

      {/* 🔢 SERVICIOS */}
      <div
        style={{ transform: `translateY(${SERVICES_Y}px)` }}
        className={`relative z-[30] w-full pb-32 ${
  isMobile
    ? "flex flex-col items-center gap-8"
    : "flex justify-center gap-20"
}`}
      >
        {[
  ["#01", "Estrategia de Marca", SERVICE_1_X, SERVICE_1_Y],
  ["#02", "Identidad Visual", SERVICE_2_X, SERVICE_2_Y],
  ["#03", "Diseño de Packaging", SERVICE_3_X, SERVICE_3_Y],
  ["#04", "Dirección Creativa", SERVICE_4_X, SERVICE_4_Y]
].map(([num, text, x, y], i) => (
  <div
    key={i}
    className={`transition-all duration-1000 ${
      isMobile ? "text-center" : "text-left"
    }`}
    style={{
      transform: isMobile ? "none" : `translate(${x}px, ${y}px)`,
      transitionDelay: `${900 + i * 200}ms`,
      opacity: loaded ? 1 : 0,
      translate: loaded ? "0px 0px" : "0px 40px"
    }}
  >
    <div className="text-yellow-400 font-bold">{num}</div>

    <div
      style={{ fontSize: isMobile ? "13px" : `${SERVICES_SIZE}px` }}
      className="font-bold"
    >
      {text}
    </div>
  </div>
        ))}
      </div>
    </section>
  );
}