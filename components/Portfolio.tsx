"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {

  const [isDesktop, setIsDesktop] = useState(false);
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
  if (video) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [video]);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  handleResize(); // 👈 importante para primera carga

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

  const projects = [
{
  name: "sport",
  slug: "sport",
  image: "/projects/sport.png",
  project: "/proyecto-sport.png"
},
{
  name: "poker",
  slug: "poker",
  image: "/projects/poker.png",
  project: "/proyecto-poker.png"
},
{
  name: "delalba",
  slug: "delalba",
  image: "/projects/delalba.png",
  project: "/proyecto-delalba.png"
},
{
  name: "social",
  slug: "social",
  image: "/projects/social.png",
  project: "/proyecto-social.png"
},
{
  name: "harvey",
  slug: "harvey",
  image: "/projects/harvey.png",
  project: "/proyecto-harvey.png"
},

// 👇 ESTE ES EL EXTERNO
{
  name: "logo",
  image: "/projects/logo.png",
  external: true,
  link: "https://www.behance.net/gallery/127923687/Motion-Graphic-FacebookInstagram-Ads"
}
];

  const [mode, setMode] = useState(0);
const [visible, setVisible] = useState(false);
const [motionVisible, setMotionVisible] = useState(false);
const motionRef = useRef<HTMLElement | null>(null);

const sectionRef = useRef<HTMLElement | null>(null);

// 👇 ESTE ES EL ÚNICO useEffect QUE NECESITAS
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

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setMotionVisible(true);
      }
    },
    {
      threshold: 0.15
    }
  );

  if (motionRef.current) {
    observer.observe(motionRef.current);
  }

  return () => {
    if (motionRef.current) {
      observer.unobserve(motionRef.current);
    }
  };
}, []);

const SCALE_ACTIVE = 1.10;
const SCALE_INACTIVE = 0.95;

const CAROUSEL_OFFSET = "mt-[60px]";
const BUTTONS_OFFSET = "mt-[30px]";

const next = () => {
  if (mode === 0) setMode(1);
};

const prev = () => {
  if (mode === 1) setMode(0);
};

  return (
    <>
    <section
  ref={sectionRef}
  id="portfolio"
  className="relative z-[50] w-full pb-32 text-white overflow-x-hidden overflow-y-visible -top-[-80px]"
>

      {/* ================= HEADER ================= */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative">
          <div className="relative pb-[220px]">

            <h2 className={`absolute md:top-0 md:left-26 text-3xl md:text-6xl font-extrabold text-center md:text-left w-full md:w-auto transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}>
              PORTAFOLIO.
            </h2>

            <p className={`absolute md:top-19 md:left-26 text-[12px] md:text-[14.5px] text-gray-300 leading-relaxed tracking-[0.25em] text-center md:text-left w-full md:w-auto transition-all duration-1000 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}>
              UNA SELECCIÓN DE PROYECTOS DONDE <br />
              <span className="text-[#6B9CFF]">
              IDENTIDAD, ESTRATEGIA Y EJECUCIÓN
              </span>
            <br />
              TRABAJAN EN ARMONÍA.
            </p>

            <a
  href="https://www.behance.net/Alexandermg"
  target="_blank"
  rel="noopener noreferrer"
  className={`absolute md:top-[165px] md:left-26 mt-6 md:mt-0 w-[160px] md:w-[190px] h-[40px] md:h-[45px] flex items-center justify-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-[1.06] transition-all duration-700 delay-300 shadow-lg hover:shadow-blue-500/40 mx-auto md:mx-0 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
}`}
>
  
  <img
    src="/behance.png"
    alt="Behance"
    className="w-10 h-10 object-contain"
  />

  <span className="text-lg font-semibold tracking-widest">
    BEHANCE
  </span>

</a>

            <div
  className={`hidden md:block absolute top-6 left-[593px] w-[1px] h-[180px] bg-white transition-all duration-1000 ${
  visible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
}`}
  style={{
    transformOrigin: "top"
  }}
/>
          </div>

          {/* INFO CARDS */}
<div className="absolute md:right-25 md:top-0 flex flex-col md:flex-row gap-6 items-center md:items-start mt-[140px] md:mt-0 w-full md:w-auto">

  <div className={`w-[260px] min-h-[180px] p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 delay-500 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
}`}>
    <div className="text-yellow-400 text-sm font-bold mb-3">01</div>
    <h3 className="font-bold mb-3">DISEÑO & BRANDING</h3>
    <p className="text-xs text-gray-300 leading-relaxed">
      Sistemas visuales estratégicos: branding,
      logotipos, social media, packaging y piezas
      gráficas diseñadas para construir marcas
      con identidad y coherencia.
    </p>
  </div>

  <div className={`w-[260px] min-h-[215px] p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 delay-500 hover:shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/40 ${
  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
}`}>
    <div className="text-yellow-400 text-sm font-bold mb-3">02</div>
    <h3 className="font-bold mb-3">MOTION & ANIMACIÓN</h3>
    <p className="text-xs text-gray-300 leading-relaxed">
      Animación de logos, motion graphics y edición
      de video para llevar la identidad visual a un
      plano dinámico y memorable.
    </p>
  </div>

</div>
        </div>
      </div>

      {/* ================= CARRUSEL ================= */}
      <div className={`${CAROUSEL_OFFSET} flex flex-col items-center transition-all duration-1000 delay-900 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>

        <div 
  className="w-full md:w-[1224px] overflow-x-auto md:overflow-visible py-10 px-6 md:px-16"
  style={{ scrollSnapType: "x mandatory" }}
>

          <div
  className="flex gap-6 md:gap-12 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group"
  style={{
    transform:
      isDesktop
        ? mode === 0
          ? "translateX(-46px)"
          : "translateX(calc(-1224px - 46px))"
        : "none",
  }}
>

            {projects.map((project, i) => (

              <div 
  key={i} 
  className="w-[260px] md:w-[360px] flex-shrink-0 flex justify-center"
  style={{ scrollSnapAlign: "center" }}
>

                <div
                  className="transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ transformOrigin: "bottom center" }}
                  onMouseEnter={(e) => {
                    const siblings =
                      e.currentTarget.parentElement?.parentElement?.children;
                    if (!siblings) return;

                    Array.from(siblings).forEach((el) => {
                      const img = el.querySelector("img");
                      if (img) img.style.transform = `scale(${SCALE_INACTIVE})`;
                    });

                    const activeImg = e.currentTarget.querySelector("img");
                    if (activeImg)
                      activeImg.style.transform = `scale(${SCALE_ACTIVE})`;
                  }}
                  onMouseLeave={(e) => {
                    const siblings =
                      e.currentTarget.parentElement?.parentElement?.children;
                    if (!siblings) return;

                    Array.from(siblings).forEach((el) => {
                      const img = el.querySelector("img");
                      if (img) img.style.transform = "scale(1)";
                    });
                  }}
                >

                  <a
  href={
  project.external
    ? project.link
    : `/portfolio/${project.slug}`
}
  target={project.external ? "_blank" : "_self"}
  rel="noopener noreferrer"
>

                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto object-contain rounded-2xl transition-all duration-500 cursor-pointer"
                    />

                  </a>

                </div>
              </div>

            ))}

          </div>
        </div>

        <div className={`hidden md:flex gap-4 ${BUTTONS_OFFSET} transition-all duration-1000 delay-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <button
            onClick={prev}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft className="text-black" size={22} />
          </button>

          <button
            onClick={next}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-[0_0_25px_rgba(37,99,235,0.5)]"
          >
            <ChevronRight className="text-white" size={22} />
          </button>
        </div>

      </div>
      </section>

{/* ================= MOTION VIDEO ================= */}

<section
  ref={motionRef}
  className="w-full mt-40 relative z-[50]"
>

  {/* HEADER */}
  <div className="text-center max-w-[1000px] mx-auto mb-24">

    <h2
      className={`text-3xl md:text-6xl font-black tracking-wide mb-10 transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
        motionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      MOTION & <span className="text-[#6B9CFF]">VIDEO</span>
    </h2>

    <p
      className={`text-gray-300 text-[11px] md:text-[14px] leading-relaxed tracking-[0.25em] uppercase transition-all duration-1000 delay-200 ${
        motionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      UNA SELECCIÓN DE PROYECTOS DE{" "}
      <span className="text-[#6B9CFF]">
        EDICIÓN DE VIDEO, ANIMACIÓN Y MOTION GRAPHICS
      </span>.
      <br />
      ALGUNOS DESARROLLADOS DE FORMA INDEPENDIENTE Y OTROS REALIZADOS EN COLABORACIÓN
      <br />
      CON ESTUDIOS Y AGENCIAS CREATIVAS.
    </p>

  </div>

  {/* GRID VIDEOS */}

  <div
    className={`w-full grid grid-cols-1 md:grid-cols-12 transition-all duration-1000 delay-400 ${
      motionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
    }`}
  >

    {/* BIKER */}
    <div
      onClick={() => setVideo("/videos/biker.mp4")}
      className="col-span-1 md:col-span-7 relative group overflow-hidden h-[260px] md:h-[490px] cursor-pointer"
    >
      <img
        src="/biker-chick.jpg"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition text-white text-5xl font-light">
          PLAY ▶
        </div>
      </div>
    </div>

    {/* SOLACE */}
    <div
      onClick={() => setVideo("/videos/solace.mp4")}
      className="col-span-1 md:col-span-5 relative group overflow-hidden h-[260px] md:h-[490px]"
    >
      <img
        src="/solace.jpg"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition text-white text-5xl font-light">
          PLAY ▶
        </div>
      </div>
    </div>

    {/* WAWU */}
    <div
      onClick={() => setVideo("/videos/wawu.mp4")}
      className="col-span-1 md:col-span-5 relative group overflow-hidden h-[260px] md:h-[490px]"
    >
      <img
        src="/wawu.jpg"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition text-white text-5xl font-light">
          PLAY ▶
        </div>
      </div>
    </div>

    {/* GOLF */}
    <div
      onClick={() => setVideo("/videos/golf.mp4")}
      className="col-span-1 md:col-span-7 relative group overflow-hidden h-[260px] md:h-[490px]"
    >
      <img
        src="/golf.jpg"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition text-white text-5xl font-light">
          PLAY ▶
        </div>
      </div>
    </div>

  </div>

  {video && (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto bg-black/95 backdrop-blur-md flex items-center justify-center"
      style={{ isolation: "isolate" }}
      onClick={() => setVideo(null)}
    >
      <video
        src={video!}
        controls
        autoPlay
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
      />

      <button
        onClick={() => setVideo(null)}
        className="absolute top-8 right-10 text-white text-4xl"
      >
        ✕
      </button>
    </div>
  )}

</section>
  </>
);
}