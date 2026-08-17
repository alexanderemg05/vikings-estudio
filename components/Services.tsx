"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "./site.config";

// ============================================================
// ✏️ SERVICIOS — contenido editable
// ============================================================
type Service = {
  number: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    title: `Diseño para Redes
Sociales`,
    description:
      "Diseño de contenido visual para redes sociales, campañas y comunicación digital.",
  },
  {
    number: "02",
    title: "Branding",
    description:
      "Creación de identidades visuales, logotipos, sistemas gráficos y dirección visual.",
  },
  {
    number: "03",
    title: "Motion Graphics",
    description:
      "Diseño de piezas animadas, motion graphics y contenido audiovisual.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Services() {
  const { colors } = siteConfig;

  return (
    <section
      id="services"
      className="relative w-full px-6 py-32 md:px-12 md:py-48"
    >
      {/* 
        Contenedor Maestro Centrado: 
        Limitamos el ancho máximo a 1150px (un tamaño perfecto para que los 3 bloques respiren y queden juntos) 
        y con mx-auto los empujamos al centro de la pantalla.
      */}
      <div className="mx-auto max-w-[1150px] w-full">
        
        {/* Cabecera editorial (Ahora comparte exactamente el mismo contenedor centrado) */}
        <div>
          <motion.div
            className="flex items-baseline gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: colors.blue }}
            >
              03
            </span>
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "rgba(232, 227, 213, 0.45)" }}
            >
              — SERVICIOS
            </span>
          </motion.div>

          <motion.h2
            className="mt-6 text-[52px] font-bold leading-[0.95] tracking-[-0.02em] md:text-[104px]"
            style={{
              color: colors.white,
              fontFamily: "var(--font-creato), sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            DISEÑO QUE COMUNICA<span style={{ color: colors.blue }}>.</span>
          </motion.h2>
        </div>

        {/* Línea horizontal fina animada */}
        <motion.div
          className="mt-16 h-px w-full origin-left md:mt-24"
          style={{ backgroundColor: "rgba(146, 144, 139, 0.18)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
        />

        {/* Fila de servicios: Distribuida simétricamente en 3 columnas dentro del mismo espacio */}
        <div className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-3 md:gap-12">
          {services.map((service, i) => (
            <Fragment key={service.number}>
              <motion.article
                className="group flex flex-col relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.12,
                  ease: EASE,
                }}
              >
                {/* Separador vertical a la izquierda del servicio 02 y 03 */}
                {i > 0 && (
                  <motion.span
                    aria-hidden="true"
                    className="hidden absolute left-[-24px] top-0 bottom-0 w-px md:block"
                    style={{ backgroundColor: "rgba(232, 227, 213, 0.14)" }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.4 + i * 0.12,
                      ease: EASE,
                    }}
                  />
                )}

                <span
                  className="text-[56px] font-light leading-none tracking-[-0.02em] md:text-[72px]"
                  style={{ color: colors.blue }}
                >
                  {service.number}
                </span>

                <h3
                  className="mt-6 text-2xl font-bold uppercase tracking-[0.02em] md:text-[28px] whitespace-pre-line"
                  style={{
                    color: colors.white,
                    fontFamily: "var(--font-creato), sans-serif",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  className="mt-4 max-w-[340px] text-sm leading-relaxed md:text-[15px]"
                  style={{ color: "rgba(232, 227, 213, 0.55)" }}
                >
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.28em] transition-colors duration-300"
                  style={{ color: "rgba(232, 227, 213, 0.7)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(232, 227, 213, 0.7)";
                  }}
                >
                  <span>Ver Proyecto</span>
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </motion.article>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}