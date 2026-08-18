"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./site.config";

// ============================================================
// ✏️ CONTENIDO EDITABLE
// ============================================================
const content = {
  titleLines: ["DISEÑO QUE", "CONVIERTE IDEAS", "EN EXPERIENCIAS."],
  description:
    "Alexander Moreno es diseñador gráfico y Motion Designer especializado en branding, contenido digital y comunicación visual. Creo identidades y piezas visuales que combinan estrategia, diseño y movimiento para convertir ideas en experiencias.",
};

// ============================================================
// 🎬 ANIMACIÓN (sutil / cinematográfica)
// ============================================================
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const animation = {
  duration: 1.1, // segundos por elemento
  stagger: 0.14, // retraso entre líneas del título
  distance: 40, // px de desplazamiento vertical
};

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function StatementSection() {
  const { colors } = siteConfig;

  // ============================================================
  // 🎛️ VARIABLES DE DISEÑO — edita aquí tamaños, anchuras y espaciado
  // (Estos valores son los de DESKTOP y NO se tocan)
  // ============================================================
  const vars = {
    "--statement-title-size": "clamp(2.25rem, 6vw, 5.5rem)",
    "--statement-title-width": "15ch",
    "--statement-text-size": "clamp(0.9rem, 1.15vw, 1.05rem)",
    "--statement-text-width": "62ch",
    "--statement-content-width": "1400px",
    "--statement-padding-x": "clamp(1.5rem, 6vw, 8rem)",
    "--statement-padding-y": "clamp(6rem, 16vh, 11rem)",
    "--statement-gap": "clamp(2.25rem, 6vh, 4rem)",
  } as React.CSSProperties;

  return (
    <section
      id="about"
      className="statement-section relative z-30 w-full overflow-hidden"
      style={vars}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--statement-content-width)",
          padding:
            "var(--statement-padding-y) var(--statement-padding-x)",
        }}
      >
        {/* TÍTULO — Creato Display, saltos de línea intencionales */}
        <h2
          style={{
            fontSize: "var(--statement-title-size)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            color: colors.white,
            maxWidth: "var(--statement-title-width)",
          }}
        >
          {content.titleLines.map((line, i) => (
            <span
              key={i}
              className="block overflow-hidden"
              /* ✅ FIX tilde de la Ñ: el padding-top amplía la zona pintable
                 de la máscara (overflow recorta en el borde del padding),
                 y el margin-top negativo compensa para que cada línea quede
                 visualmente en el mismo píxel (tamaño y ritmo intactos) */
              style={{
                paddingTop: "0.15em",
                marginTop: "-0.15em",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: animation.distance }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: animation.duration,
                  delay: 0.1 + i * animation.stagger,
                  ease: EASE,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        {/* DESCRIPCIÓN — Inter, capa funcional */}
        <motion.p
          initial={{ opacity: 0, y: animation.distance }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: animation.duration,
            delay: 0.1 + content.titleLines.length * animation.stagger,
            ease: EASE,
          }}
          style={{
            marginTop: "var(--statement-gap)",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "var(--statement-text-size)",
            lineHeight: 1.7,
            maxWidth: "var(--statement-text-width)",
            color: hexToRgba(colors.white, 0.65),
          }}
        >
          {content.description}
        </motion.p>
      </div>

      <style>{`
        /* ============================================================
           📱 SOLO MOBILE (< 768px) — no afecta a DESKTOP en absoluto.
           Reduce el enorme espacio vertical entre el Hero y el claim.
           Sobreescribimos SOLO las variables de espaciado con !important
           (una regla !important de hoja de estilos gana a la variable
           inline), así el título y el texto suben cerca de la parte
           superior manteniendo un margen elegante.
           No se tocan tipografías, colores, tamaños ni animaciones.
           ============================================================ */
        @media (max-width: 767px) {
          .statement-section {
            --statement-padding-y: clamp(3.25rem, 8vh, 4.5rem) !important;
            --statement-gap: clamp(1.5rem, 4vh, 2.25rem) !important;
          }
        }
      `}</style>
    </section>
  );
}