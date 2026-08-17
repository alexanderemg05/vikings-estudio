// ============================================================
// CONFIGURACIÓN GLOBAL — ALEXANDER MORENO / VIKINGS STUDIO
// ============================================================

export const siteConfig = {
  /* 🎨 COLORES */
  colors: {
    black: "#111316",
    gray: "#1C1C1C",
    white: "#E8E3D5",
    blue: "#4B87FF",
    overlayColor: "#111316",
    overlayOpacity: 0.5, // 0 = sin overlay · 1 = sólido
    servicesBg: "#1c1c1c", // fondo alternativo sutil para Services
  },

  /* 🧭 NAVBAR */
  nav: {
    logoSrc: "/iso.png",
    logoAlt: "Isotipo Vikings Studio",
    brandText: "VIKINGS STUDIO",
    logoHeight: 22, // px
    height: 56, // px — altura de la barra superior
    paddingX: "clamp(1.25rem, 4vw, 3rem)",
    links: [
      { label: "SOBRE MÍ", href: "#about" },
      { label: "PROYECTOS", href: "#work" },
      { label: "SERVICIOS", href: "#services" },
      // ✅ FIX: antes "#contact" (ancla inexistente) → ahora navega a la página /contact
      { label: "CONTACTO", href: "/contact" },
    ],
  },

  /* 🎬 HERO */
  hero: {
    titleLine1: "ALEX",
    titleLine2: "MORENO",
    subtitle: "VIKINGS ESTUDIO",
    tagline: "Diseñador & Motion Designer",

    // Isotipo sobre el título (firma de marca)
    isoSrc: "/iso.png",
    isoSize: "clamp(1.75rem, 3vw, 2.5rem)", // 28px mobile · 40px desktop
    isoMarginBottom: "clamp(1.25rem, 3vh, 2rem)",

    // Título (dos líneas deliberadas)
    titleSize: "clamp(1.75rem, 6.5vw, 3.75rem)",
    titleWeight: 800,
    titleLetterSpacing: "0.02em",
    titleLineHeight: 0.95,

    // Subtítulo (mayor presencia)
    subtitleSize: "clamp(0.8rem, 1.9vw, 1rem)",
    subtitleWeight: 600,
    subtitleLetterSpacing: "0.5em",
    subtitleMarginTop: "clamp(1rem, 2.5vh, 1.75rem)",

    // Tagline (más discreto)
    taglineSize: "clamp(0.65rem, 1.2vw, 0.5rem)",
    taglineWeight: 400,
    taglineLetterSpacing: "0.3em",
    taglineMarginTop: "0.5rem",

    /* 🖼 BACKGROUND — preparado para vídeo futuro */
    background: {
      type: "video" as "video" | "video", // futuro: "video"
      image: "/fondo.jpg",
      position: "center",
      desktopVideo: "/videos/hero-desktop.mp4", // futuro: "/videos/hero-desktop.mp4"
      mobileVideo: "", // futuro: "/videos/hero-mobile.mp4"
    },

    /* ↓ SCROLL INDICATOR */
    scrollIndicator: {
      text: "SCROLL",
      showArrow: true,
      size: 10, // px
      letterSpacing: "0.45em",
      lineHeight: 44, // px
      bottom: 28, // px desde abajo
      speed: 2.2, // segundos por ciclo
    },
  },
};

export type SiteConfig = typeof siteConfig;