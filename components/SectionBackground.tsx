"use client";

import React, { useState, useEffect } from "react";

export default function SectionBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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

  /* 🔢 SERVICIOS DESKTOP */
  const SERVICES_Y = 210;
  const SERVICES_SIZE = 14;

  const SERVICE_1_X = -280; const SERVICE_1_Y = -300;
  const SERVICE_2_X = -120; const SERVICE_2_Y = -300;
  const SERVICE_3_X = 120;  const SERVICE_3_Y = -300;
  const SERVICE_4_X = 280;  const SERVICE_4_Y = -300;

  /* 🎨 FONDO SECCIONES */
  const SECTION_BG_Y = -1050;
  const SECTION_BG_SCALE = 1;
  const SECTION_BG_OPACITY = 1;

  const services = [
    ["#01", "Estrategia De Marca", SERVICE_1_X, SERVICE_1_Y],
    ["#02", "Identidad Visual", SERVICE_2_X, SERVICE_2_Y],
    ["#03", "Diseño De Packaging", SERVICE_3_X, SERVICE_3_Y],
    ["#04", "Dirección Creativa", SERVICE_4_X, SERVICE_4_Y],
  ] as const;

  return (
  <section className="absolute top-0 left-0 w-full pointer-events-none">

    {/* 🎨 FONDO DESKTOP (imagen) */}
    {!isMobile && (
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${SECTION_BG_Y}px) scale(${SECTION_BG_SCALE})`,
          opacity: SECTION_BG_OPACITY,
          zIndex: 20,
        }}
      >
        <img src="/section-bg.png" alt="Fondo secciones" className="w-full object-cover" />
      </div>
    )}

    {/* 🎨 FONDO MOBILE (imagen PNG fija detrás de TODA la página) */}
{isMobile && (
  <div
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: -1 }}
  >
    <img
      src="/fondo-mobile.png"
      alt="Fondo mobile"
      className="w-full h-full object-cover"
    />
  </div>
)}

    {/* 🔢 SERVICIOS */}
    {isMobile ? (
      /* 📱 MOBILE: 4 en fila, centrados, más arriba */
      <div className="relative z-[30] w-full px-5 pb-10 -mt-25 flex justify-between items-start gap-3">
        {services.map(([num, text], i) => (
          <div
            key={i}
            className="flex-1 text-center transition-all duration-1000"
            style={{
              transitionDelay: `${900 + i * 150}ms`,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px)" : "translateY(20px)",
            }}
          >
            <div className="text-yellow-400 font-bold text-[12px] mb-1">
              {num}
            </div>
            <div
              style={{ fontSize: "11.5px", lineHeight: "1.25" }}
              className="font-bold text-white"
            >
              {text}
            </div>
          </div>
        ))}
      </div>
    ) : (
      /* 🖥 DESKTOP: layout original con translates absolutos */
      <div
        style={{ transform: `translateY(${SERVICES_Y}px)` }}
        className="relative z-[30] w-full pb-32 flex justify-center gap-20"
      >
        {services.map(([num, text, x, y], i) => (
          <div
            key={i}
            className="transition-all duration-1000 text-left"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transitionDelay: `${900 + i * 200}ms`,
              opacity: loaded ? 1 : 0,
              translate: loaded ? "0px 0px" : "0px 40px",
            }}
          >
            <div className="text-yellow-400 font-bold">{num}</div>
            <div
              style={{ fontSize: `${SERVICES_SIZE}px` }}
              className="font-bold"
            >
              {text}
            </div>
          </div>
        ))}
      </div>
    )}
  </section>
  );
}