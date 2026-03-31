"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const projects = [
  {
    slug: "sport",

    /* ===== TITULO EDITABLE ===== */
    title: [
      { text: "Sports", color: "text-white" },
      { text: "Design #01", color: "text-blue-400" }
    ],

    image: "/proyecto-sport.png",

    info: "Social Media Campaign / Motion Ads",

    description:
      "Campaña visual enfocada en redes sociales con piezas diseñadas para captar atención inmediata y generar conversión."
  },

  {
    slug: "poker",
    title: [
      { text: "Poker Ranking – ", color: "text-white" },
      { text: "Brand Identity", color: "text-blue-400" }
    ],
    image: "/proyecto-poker.png",
    info: "Brand Identity / Social Media",
    description:
      "Sistema visual moderno y adaptable para marca digital relacionada con poker online."
  },

  {
    slug: "delalba",
    title: [
      { text: "Del Alba –", color: "text-white" },
      { text: "Branding", color: "text-blue-400" }
    ],
    image: "/proyecto-delalba.png",
    info: "Branding / Packaging",
    description:
      "Identidad visual premium con enfoque en elegancia y consistencia de marca."
  },

  {
  slug: "social",
  title: [
    { text: "Social Media", color: "text-white" },
    { text: "Post of Brands", color: "text-blue-400" }
  ],
  image: "/proyecto-social.png",
  info: "Social Media / Digital Campaign",
  description:
    "Colección de piezas visuales diseñadas para campañas digitales y redes sociales. El enfoque estuvo en la consistencia visual, impacto inmediato y claridad de comunicación."
},

{
  slug: "harvey",
  title: [
    { text: "Harvey Logo", color: "text-white" },
    { text: "Identity & Branding", color: "text-blue-400" }
  ],
  image: "/proyecto-harvey.png",
  info: "Brand Identity / Advertising",
  description:
    "Sistema gráfico aplicado a campañas publicitarias y piezas digitales. El objetivo fue construir una identidad visual fuerte y adaptable a diferentes formatos."
}
];

export default function ProjectPage() {

  const { slug } = useParams();

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white text-center mt-40 text-2xl">
        Proyecto no encontrado
      </div>
    );
  }

  /* ===========================
     CONTROLES DE DISEÑO
  =========================== */

  const TITLE_POSITION = "center"; // left center right

  const TITLE_MARGIN_TOP = "mt-4";

  const IMAGE_WIDTH = "max-w-[1500px]";

  const NOISE_INTENSITY = 0.1; // 0 a 0.2

  /* ===========================
     POSICIÓN TITULO
  =========================== */

  const titleAlign =
    TITLE_POSITION === "center"
      ? "text-center items-center"
      : TITLE_POSITION === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <main className="relative w-full text-white overflow-x-hidden">

      {/* ===========================
          MESH GRADIENT BACKGROUND
      =========================== */}

      <div className="absolute inset-0 -z-10">

        {/* GRADIENT */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(at 20% 20%, #0C131E 0px, transparent 50%),
            radial-gradient(at 80% 0%, #10213e 0px, transparent 50%),
            radial-gradient(at 0% 80%, #173c87 0px, transparent 50%),
            radial-gradient(at 80% 80%, #0C131E 0px, transparent 50%),
            #0A0F1C
            `
          }}
        />

        {/* NOISE */}
        <div
          className="absolute inset-0 mix-blend-overlay pointer-events-none"
          style={{
            opacity: NOISE_INTENSITY,
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')"
          }}
        />

      </div>

      {/* BOTÓN VOLVER */}

      <Link
        href="/"
        className="fixed top-8 left-8 z-50 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full hover:bg-white/20 transition"
      >
        ← Back
      </Link>

      {/* CONTENEDOR */}

      <div className="max-w-[1100px] mx-auto px-6 pt-40 pb-20">

        {/* TITULO */}

        <div className={`flex flex-col ${titleAlign} ${TITLE_MARGIN_TOP}`}>

          <h1 className="text-6xl font-extrabold leading-tight">

            {project.title.map((word, i) => (
              <span key={i} className={`${word.color} mr-4`}>
                {word.text}
              </span>
            ))}

          </h1>

        </div>

        {/* IMAGEN */}

        <div className="flex justify-center my-24">

          <img
            src={project.image}
            alt=""
            className={`w-full ${IMAGE_WIDTH} rounded-xl shadow-2xl`}
          />

        </div>

        {/* INFO */}

        <div className="grid md:grid-cols-2 gap-16">

          <div>

            <h3 className="text-sm tracking-widest text-gray-400 mb-4">
              PROJECT INFO
            </h3>

            <p className="text-lg text-gray-200">
              {project.info}
            </p>

          </div>

          <div>

            <h3 className="text-sm tracking-widest text-gray-400 mb-4">
              DESCRIPTION
            </h3>

            <p className="text-gray-300 leading-relaxed">
              {project.description}
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}