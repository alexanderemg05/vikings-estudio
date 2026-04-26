"use client";

import { useState, useEffect, useRef } from "react";
import ServiceModal from "./ServiceModal";

export default function Services({
  activeVideo
}: {
  activeVideo?: string | null
}) {

const [isMobile, setIsMobile] = useState<boolean | null>(null);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const [activeService, setActiveService] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // 👉 CONTROL SCROLL MODAL
useEffect(() => {
  if (activeService) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [activeService]);

// 👉 ANIMACIÓN SCROLL (INTERSECTION)
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      }
    },
    {
      threshold: 0.15
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);

  const TITLE_X = 0;
const TITLE_Y = isMobile ? -160 : -270;
const TITLE_SCALE = 1;
const TITLE_SIZE = isMobile ? "text-[68px]" : "text-[282px]";
const TITLE_OPACITY = "opacity-40";

const LINE_WIDTH = isMobile ? "w-[340px]" : "w-[900px]";

const STATUE_WIDTH = isMobile ? "w-[195px]" : "w-[300px]";
const STATUE_MARGIN_TOP = isMobile ? "mt-[120px]" : "mt-[50px]";

const SERVICES_MARGIN_TOP = "mt-50";
const CARD_GAP = "gap-32";
const ICON_SIZE = "w-[42px]";

const BUTTON_STYLE =
  "px-6 py-2 bg-blue-600 rounded-full text-sm font-extrabold tracking-wide hover:scale-105 transition";

const LINE_X = 0;
const LINE_Y = isMobile ? -110 : -60;
const LINE_SCALE = isMobile ? 1 : 1.4;

  const SOCIAL_POSITION = "mt-[-250px] translate-x-[-60px]";
const BRANDING_POSITION = "mt-[-170px] translate-x-[0px]";
const MOTION_POSITION = "mt-[-250px] translate-x-[60px]";

  return (
<section
  ref={sectionRef}
  id="services"
  className="relative z-[40] w-full min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
  style={
    isMobile
      ? {
          background:
            "linear-gradient(to bottom, #000511 0%, #18263F 50%, #1E1E1E 100%)",
        }
      : undefined
  }
>
      {/* TITULO */}

      <div
        className="absolute left-1/2 top-1/2 pointer-events-none"
        style={{
          transform: `translate(-50%, -50%) translateX(${TITLE_X}px) translateY(${TITLE_Y}px) scale(${TITLE_SCALE})`
        }}
      >

        <div className={`transition-all duration-1000 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>
          <h2 className={`${TITLE_SIZE} ${TITLE_OPACITY} font-lotus tracking-[0.01em]`}>
            SERVICIOS
          </h2>
        </div>

      </div>

      {/* LINEA */}

      <div
        className="absolute left-1/2 z-10"
        style={{
          transform: `translate(-50%, ${LINE_Y}px) translateX(${LINE_X}px) scale(${LINE_SCALE})`
        }}
      >

        <img
          src="/services-line.png"
          className={`${LINE_WIDTH} transition-all duration-1000 delay-200 ${
  visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
}`}
style={{ transformOrigin: "left" }}
          alt="decorative line"
        />

      </div>

      {/* ESTATUA */}

      <div className={`flex justify-center ${STATUE_MARGIN_TOP} relative z-20`}>

        <div className={`transition-all duration-1000 delay-300 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>
          <img
            src="/statue-services.png"
            className={STATUE_WIDTH}
            alt="services statue"
          />
        </div>

      </div>

      {/* SERVICIOS */}

      <div
  className={`relative z-10 text-center ${
    isMobile
      ? "grid grid-cols-2 gap-x-3 gap-y-10 mt-12 px-4 w-full max-w-[420px]"
      : `flex justify-center ${CARD_GAP} ${SERVICES_MARGIN_TOP}`
  }`}
>

        {/* SOCIAL */}

        <div className={`max-w-[260px] ${isMobile ? "col-span-1 mx-auto" : SOCIAL_POSITION}`}>

          <div className={`transition-all duration-700 delay-400 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>

            <img
              src="/icon-social.png"
              className={`${ICON_SIZE} mx-auto mb-4`}
              alt=""
            />

            <h3 className="text-xl font-black mb-3 leading-tight">
              Diseño para <br /> Redes Sociales
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Creación de piezas visuales
              <br />
              estratégicas para redes sociales
              <br />
              que refuerzan la identidad de tu
              <br />
              marca y captan la atención en
              <br />
              segundos dentro del feed.
            </p>

            <button
  type="button"
  className={BUTTON_STYLE}
  onClick={() => {
    setActiveService("Redes Sociales");
  }}
>
  INICIAR PROYECTO
</button>

          </div>

        </div>

        {/* BRANDING */}

        <div className={`max-w-[260px] ${isMobile ? "col-span-1 mx-auto" : BRANDING_POSITION}`}>

          <div className={`transition-all duration-700 delay-500 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>

            <img
              src="/icon-branding.png"
              className={`${ICON_SIZE} mx-auto mb-4`}
              alt=""
            />

            <h3 className="text-xl font-black mb-3">
              Branding
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Diseño de identidades visuales
              <br />
              completas que construyen marcas
              <br />
              memorables: logotipo, sistema
              <br />
              gráfico y lineamientos visuales 
              <br />
              coherentes.
            </p>

            <button
  type="button"
  className={BUTTON_STYLE}
  onClick={() => {
    setActiveService("Branding");
  }}
>
  CREAR MI MARCA
</button>

          </div>

        </div>

        {/* MOTION */}

        <div className={`max-w-[260px] ${isMobile ? "col-span-2 mx-auto" : MOTION_POSITION}`}>

          <div className={`transition-all duration-700 delay-600 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>

            <img
              src="/icon-motion.png"
              className={`${ICON_SIZE} mx-auto mb-4`}
              alt=""
            />

            <h3 className="text-xl font-black mb-3 leading-tight">
              Motion <br /> Graphics
            </h3>

            <p className="text-gray-400 text-sm mb-5">
              Animación de piezas gráficas,
              <br />
              logotipos y contenido visual 
              <br />
              para redes sociales o campañas 
              <br />
              digitales que aportan dinamismo
              <br />
              y mayor impacto.
            </p>

            <button
  type="button"
  className={BUTTON_STYLE}
  onClick={() => {
    setActiveService("Motion Graphics");
  }}
>
  ANIMAR MI PROYECTO
</button>

          </div>

        </div>

      </div>

      <ServiceModal
        service={activeService}
        closeModal={() => setActiveService(null)}
      />

    </section>
  );
}