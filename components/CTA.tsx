"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "./site.config";

// ============================================================
// ✏️ CTA — contenido editable
// ============================================================
const CTA_CONTENT = {
  headline: "HAGAMOS ALGO",
  headlineAccent: "GRANDE JUNTOS.",
  subtitle: `¿Tienes un proyecto en mente? Hablemos y demos forma a
tu próxima idea.`, // <-- Salto de línea exacto aquí usando comillas invertidas
  buttonLabel: "HABLEMOS",
  buttonHref: "/contact",
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CTA() {
  const { colors } = siteConfig;

  return (
    <section id="cta" className="relative w-full px-6 py-40 md:px-12 md:py-56">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">
        <motion.h2
          className="text-[44px] font-bold leading-[1.05] tracking-[-0.02em] md:text-[96px]"
          style={{
            color: colors.white,
            fontFamily: "var(--font-creato), sans-serif",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          {CTA_CONTENT.headline}
          <br />
          <span style={{ color: colors.blue }}>
            {CTA_CONTENT.headlineAccent}
          </span>
        </motion.h2>

        <motion.p
          className="mt-8 max-w-[520px] text-sm leading-relaxed md:text-base whitespace-pre-line" // <-- Añadida la clase 'whitespace-pre-line' aquí
          style={{ color: "rgba(232, 227, 213, 0.55)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          {CTA_CONTENT.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        >
          <Link
            href={CTA_CONTENT.buttonHref}
            className="group mt-12 inline-flex items-center gap-3 rounded-full border px-8 py-4 text-[11px] uppercase tracking-[0.32em] transition-all duration-500"
            style={{
              borderColor: "rgba(232, 227, 213, 0.25)",
              color: colors.white,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.white;
              e.currentTarget.style.color = colors.black;
              e.currentTarget.style.borderColor = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = colors.white;
              e.currentTarget.style.borderColor = "rgba(232, 227, 213, 0.25)";
            }}
          >
            <span>{CTA_CONTENT.buttonLabel}</span>
            <span
              aria-hidden
              className="inline-block transition-transform duration-500 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}