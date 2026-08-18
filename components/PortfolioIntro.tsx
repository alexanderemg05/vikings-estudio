"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./site.config";

const portfolioIntroImage = "/fondo-2.png";
const overlayOpacity = 0.6;

const content = {
  eyebrow: "VIKINGS ESTUDIO",
  title: "SECCIÓN DE ",
  titleAccent: "PROYECTOS",
  tagline: "Una selección de proyectos de diseño, branding y Motion Graphics.",
};

const iso = {
  src: "/iso.png",
  size: "clamp(1.75rem, 3vw, 2.5rem)",
  marginBottom: "1.25rem",
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function PortfolioIntro() {
  const { colors } = siteConfig;

  return (
    <section
      className="portfolio-intro relative w-full overflow-hidden"
      style={{
        height: "80vh",
        minHeight: "520px",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <img
        src={portfolioIntroImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: hexToRgba(colors.black, overlayOpacity) }}
      />

      <div className="portfolio-intro-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.span
          role="img"
          aria-label="Isotipo Vikings Studio"
          className="block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: EASE }}
          style={{
            width: iso.size,
            height: iso.size,
            marginBottom: iso.marginBottom,
            backgroundColor: colors.white,
            WebkitMaskImage: `url(${iso.src})`,
            maskImage: `url(${iso.src})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.08, ease: EASE }}
          style={{
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: hexToRgba(colors.white, 0.6),
            marginBottom: "1.5rem",
          }}
        >
          {content.eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, delay: 0.18, ease: EASE }}
          style={{
            fontFamily: "var(--font-creato), sans-serif",
            fontSize: "clamp(1.9rem, 5.4vw, 4.5rem)",
            fontWeight: 800,
            letterSpacing: "0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
            color: colors.white,
          }}
        >
          {content.title}
          <span style={{ color: colors.blue }}>{content.titleAccent}</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.3, ease: EASE }}
          style={{
            marginTop: "1.5rem",
            fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: hexToRgba(colors.white, 0.6),
          }}
        >
          {content.tagline}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        aria-hidden="true"
      >
        <span
          className="intro-scroll-line block w-px"
          style={{ height: 40, backgroundColor: colors.white }}
        />
      </motion.div>

      <style>{`
        @keyframes intro-scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .intro-scroll-line {
          animation: intro-scroll-line 2.2s ease-in-out infinite;
        }

        /* 📱 SOLO MOBILE (< 768px) — DESKTOP NO SE TOCA */
        @media (max-width: 767px) {
          .portfolio-intro {
            height: auto !important;
            min-height: auto !important;
          }
          .portfolio-intro-content {
            height: auto !important;
            justify-content: flex-start !important;
            padding-top: 4.5rem !important;
            padding-bottom: 5rem !important;
          }
          .portfolio-intro .intro-scroll-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}