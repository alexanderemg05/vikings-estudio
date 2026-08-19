import type { Project } from "./ProjectCard";

// ============================================================
// TIPO EXTENDIDO — campos de la página individual del proyecto
// ============================================================
export type ProjectDetail = Project & {
  subtitle?: string;
  genre?: string;
  year?: string; // se MUESTRA en la meta ("AÑO")
  date?: string; // opcional "YYYY-MM-DD" — se usa SOLO para ordenar (más reciente primero)
  client?: string;
  description?: string; // admite varios párrafos separando con doble salto de línea \n\n
  credits?: { role: string; name: string }[]; // créditos (rol → nombre)
  heroImage?: string; // si no se indica, se usa image/thumbnail
  gallery?: string[]; // imágenes adicionales, cantidad libre
  hideHero?: boolean; // oculta el visual principal (hero) en la página de detalle
};

// ============================================================
// 🔢 ORDENACIÓN AUTOMÁTICA — más reciente primero
// - Usa `date` ("YYYY-MM-DD") si existe.
// - Si no, usa `year` como "año-01-01".
// - Empates: se respeta el orden en el que están escritos.
// ============================================================
function projectTime(p: ProjectDetail): number {
  const raw = p.date ?? (p.year ? `${p.year}-01-01` : "1970-01-01");
  const t = new Date(raw).getTime();
  return Number.isNaN(t) ? 0 : t;
}

function sortByDateDesc(list: ProjectDetail[]): ProjectDetail[] {
  return list.slice().sort((a, b) => projectTime(b) - projectTime(a));
}

// ============================================================
// ✏️ PROYECTOS DE DISEÑO — EDITA AQUÍ
// ============================================================
const designProjectsData: ProjectDetail[] = [
  {
    id: "delalba",
    title: "Del Alba",
    category: "Branding",
    type: "design",
    featured: true,
    thumbnail: "/projects/delalba.png",
    image: "/proyecto-delalba.png",
    subtitle: "Identidad de marca para una empresa familiar de embutidos artesanales.",
    genre: "Branding",
    year: "2024",
    date: "2026-09-15",
    client: "Del Alba Embutidos Artesanales",
    description:
      "Desarrollo de identidad visual para Del Alba, un negocio familiar dedicado a la elaboración artesanal de chorizos y embutidos a partir de recetas propias. El proyecto abarcó la creación del logotipo, selección cromática, tipografía y desarrollo de una identidad visual aplicada a diferentes soportes y piezas de comunicación.",
    gallery: [],
  },
  {
    id: "harvey",
    title: "Harvey",
    category: "Branding",
    type: "design",
    thumbnail: "/projects/harvey.png",
    image: "/proyecto-harvey.png",
    subtitle: "Identidad visual para una marca enfocada en soluciones energéticas sostenibles.",
    genre: "Branding",
    year: "2024",
    date: "2026-09-11",
    client: "Harvey — Powered by Krill Energy",
    description:
      "Desarrollo de identidad visual para Harvey, una marca orientada al sector de las soluciones energéticas sostenibles. El proyecto contempló la creación del logotipo, sistema cromático, selección tipográfica y desarrollo de diferentes aplicaciones de marca mediante piezas y mockups.",
    gallery: [],
  },
  {
    id: "poker",
    title: "Poker Ranking",
    category: "Branding",
    type: "design",
    thumbnail: "/projects/poker.png",
    image: "/proyecto-poker.png",
    subtitle: "Identidad visual para una plataforma de ranking competitivo de póker.",
    genre: "Branding",
    year: "2024",
    date: "2026-09-13",
    client: "Poker Ranking",
    description:
      "Desarrollo de identidad visual para un proyecto digital enfocado en la creación de una plataforma de ranking competitivo de póker. El trabajo incluyó exploración conceptual, desarrollo de bocetos, definición cromática y tipográfica, creación de la identidad gráfica y aplicación del sistema visual en diferentes piezas y mockups.",
    gallery: [],
  },
  {
    id: "social",
    title: "Contenido para Redes Sociales",
    category: "Diseño para redes sociales",
    type: "design",
    thumbnail: "/projects/social.png",
    image: "/proyecto-social.png",
    subtitle: "Selección de piezas gráficas desarrolladas para diferentes marcas y negocios.",
    genre: "Diseño para redes sociales",
    year: "2023 - 2024",
    date: "2026-09-12",
    client: "Sierra Negra Restaurant · Casa Vegas Orizaba · Ford · Susana Toscano Nutrióloga · Rincón Italiano Restaurant",
    description:
      "Selección de piezas desarrolladas para comunicación y promoción en redes sociales. El proyecto reúne diferentes estilos visuales y necesidades de comunicación, adaptando cada propuesta a la identidad y público de distintas marcas y negocios.",
    gallery: [],
  },
  {
    id: "sport",
    title: "Bayern vs. Dortmund",
    category: "Diseño para redes sociales",
    type: "design",
    thumbnail: "/projects/sport.png",
    image: "/proyecto-sport.png",
    subtitle: "Concepto visual para una campaña inspirada en el clásico de la Bundesliga.",
    genre: "Diseño para redes sociales",
    year: "2025",
    date: "2026-09-14",
    client: "Proyecto personal",
    description:
      "Concepto gráfico desarrollado a partir del enfrentamiento entre Bayern Múnich y Borussia Dortmund. El proyecto explora la creación de una identidad visual deportiva aplicada a publicaciones y stories para redes sociales, tomando como referencia la rivalidad y el carácter competitivo de ambos equipos.",
    gallery: [],
  },
];

// ============================================================
// ✏️ PROYECTOS DE MOTION — EDITA AQUÍ
// ============================================================
const motionProjectsData: ProjectDetail[] = [
  {
    id: "biker",
    title: "Baji Casino App Campaign",
    category: "Motion Graphics",
    type: "video",
    featured: true,
    video: "/videos/biker.mp4",
    thumbnail: "",
    subtitle:
      "Motion graphics y postproducción para una campaña publicitaria de una aplicación de casino.",
    genre: "Motion Graphics",
    year: "2026",
    date: "2026-09-15",
    client: "Baji Casino",
    description:
      "Proyecto desarrollado junto a Caldera Films para la campaña de lanzamiento de Baji Casino. La producción incluyó diferentes piezas publicitarias y adaptaciones para distintas plataformas.\n\nMi participación se centró en la creación e integración de motion graphics y elementos de postproducción. El trabajo incluyó animación de textos y logotipos, tracking de elementos gráficos, integración de contenido dentro de pantallas de dispositivos, chroma key en el teléfono, unión y composición de elementos audiovisuales, transiciones y animación de logotipo.",
    credits: [
      { role: "Producción y material audiovisual base", name: "Caldera Films" },
      { role: "Motion Graphics / Postproducción", name: "Alex Moreno" },
    ],
    gallery: [],
  },
  {
    id: "wawu",
    title: "Wauu",
    category: "Video promocional",
    type: "video",
    video: "/videos/wawu.mp4",
    thumbnail: "",
    subtitle:
      "Video promocional para una plataforma de descuentos y experiencias online.",
    genre: "Video promocional",
    year: "2026",
    date: "2026-09-14",
    client: "Wauu",
    description:
      "Proyecto realizado como encargo independiente para promocionar Wauu, una plataforma de cupones y ofertas digitales en Venezuela orientada a compras online, restaurantes, peluquerías, vacaciones y diferentes experiencias.\n\nEn este proyecto desarrollé integralmente la pieza audiovisual, desde la selección y unificación del material de stock hasta la edición, construcción del ritmo, transiciones, animación de textos y logotipo, creación de mockups animados de dispositivos móviles y composición final.",
    credits: [
      { role: "Dirección y edición", name: "Alex Moreno" },
      { role: "Motion Graphics", name: "Alex Moreno" },
      { role: "Postproducción", name: "Alex Moreno" },
    ],
    gallery: [],
  },
  {
    id: "golf",
    title: "Golf",
    category: "Motion Graphics",
    type: "video",
    video: "/videos/golf-video.mp4",
    thumbnail: "",
    subtitle: "Motion graphics para una pieza promocional de ropa deportiva.",
    genre: "Motion Graphics",
    year: "2026",
    date: "2026-09-13",
    client: "No especificado",
    description:
      "Proyecto desarrollado junto a Caldera Films para una pieza promocional de pantalones de golf. El material audiovisual base fue proporcionado por el estudio y mi participación se centró en el desarrollo de los elementos gráficos animados.\n\nEl trabajo incluyó animación de textos, shapes y diferentes elementos gráficos destinados a comunicar las características del producto y reforzar el ritmo visual de la pieza.",
    credits: [
      { role: "Producción y material audiovisual base", name: "Caldera Films" },
      { role: "Motion Graphics", name: "Alex Moreno" },
    ],
    gallery: [],
  },
  {
    id: "solace",
    title: "Solace Performance Sport Visor",
    category: "Motion Graphics",
    type: "video",
    video: "/videos/solace.mp4",
    thumbnail: "",
    subtitle:
      "Pieza promocional de motion graphics para una línea de viseras deportivas.",
    genre: "Motion Graphics",
    year: "2026",
    date: "2026-09-12",
    client: "Solace Performance",
    description:
      "Proyecto desarrollado junto a Caldera Films para la promoción de una línea de viseras deportivas de Solace Performance.\n\nA partir de fotografías y material audiovisual proporcionado por el estudio, desarrollé una pieza de motion graphics enfocada en presentar el producto y sus características. El trabajo incluyó animación de textos, composición, transiciones e integración de fotografías y vídeos.",
    credits: [
      { role: "Producción / Material audiovisual", name: "Caldera Films" },
      { role: "Motion Graphics / Postproducción", name: "Alex Moreno" },
    ],
    gallery: [],
  },
  // ============================================================
  // 🎞️ LOGO MOTION — logos animados en GIF (SELECTED MOTION)
  // hideHero: true → sin imagen HERO; los 7 GIFs se muestran como galería,
  // ahora DESPUÉS de la descripción (estructura uniforme).
  // ============================================================
  {
    id: "logo",
    title: "Logo Motion",
    category: "Logo Motion",
    type: "video",
    thumbnail: "/PortadaGif.gif",
    subtitle:
      "Colección de animaciones de logotipos desarrolladas para diferentes marcas.",
    genre: "Logo Motion",
    year: "2026",
    date: "2026-09-11",
    client: "Varios",
    description:
      "Selección de animaciones de logotipos desarrolladas para diferentes marcas y proyectos. Cada pieza parte de una identidad visual diferente y explora distintas técnicas de animación, composición, ritmo y transición para dar movimiento a los sistemas gráficos existentes.",
    credits: [{ role: "Motion Design", name: "Alex Moreno" }],
    hideHero: true,
    gallery: [
      "/LogoAnimado-1.gif",
      "/LogoAnimado-2.gif",
      "/LogoAnimado-3.gif",
      "/LogoAnimado-4.gif",
      "/LogoAnimado-5.gif",
      "/LogoAnimado-6.gif",
      "/LogoAnimado-7.gif",
    ],
  },
];

// ============================================================
// EXPORTS — ya ordenados automáticamente (más reciente primero).
// ============================================================
export const designProjects: ProjectDetail[] = sortByDateDesc(designProjectsData);
export const motionProjects: ProjectDetail[] = sortByDateDesc(motionProjectsData);

export const allProjects: ProjectDetail[] = [
  ...designProjects,
  ...motionProjects,
];

export function getProject(id: string): ProjectDetail | undefined {
  return allProjects.find((p) => p.id === id);
}