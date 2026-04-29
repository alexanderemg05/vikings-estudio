"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // =========================
  // 🎛️ CONTROLES
  // =========================

  // ISO
const ISO_SIZE = isMobile ? "w-[55px]" : "w-[110px]";
const ISO_X = isMobile ? 0 : -250;
const ISO_Y = isMobile ? 0 : 90;

// TITULO
const TITLE_SIZE = "text-[28px] md:text-[67px]";
const TITLE_X = isMobile ? 0 : -240;
const TITLE_Y = isMobile ? 0 : 90;

  // TEXTO
  const TEXT_SIZE = "text-[14px] md:text-[16px]";
  const TEXT_WIDTH = "max-w-[650px]";
  const TEXT_X = isMobile ? 0 : -250;
const TEXT_Y = isMobile ? 0 : 90;

  // BOTON CONTROLES (responsive)
  const BTN_TEXT_SIZE = isMobile ? "text-[13px]" : "text-[17px]";
  const BTN_ARROW_SIZE = isMobile ? "text-[16px]" : "text-[21px]";
  const BTN_BORDER = "border-[2px]";
  const BTN_PADDING_X = isMobile ? "px-4" : "px-6";
  const BTN_PADDING_Y = isMobile ? "py-1.5" : "py-2";
  const BTN_RADIUS = "rounded-full";

  // BOTON POSICION
  const BUTTON_X = isMobile ? 0 : -250;
const BUTTON_Y = isMobile ? 0 : 90;
  const BUTTON_SCALE = 1;

  // CONTENEDOR GENERAL
  const CONTENT_X = 0;
  const CONTENT_Y = 0;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <section
      id="about"
      className="relative z-30 w-full flex items-center justify-center text-white min-h-[60vh] py-12 md:min-h-screen md:py-0"
    >
      {/* CONTENEDOR */}
      <motion.div
        className="flex flex-col items-start md:items-start items-center px-6 md:px-0 text-center md:text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ x: CONTENT_X, y: CONTENT_Y }}
      >
        {/* ISO + TITULO */}
        <div className="flex items-center gap-4 mb-8">
          {/* ISO */}
          {/* ISO */}
<motion.img
  src="/iso.png"
  className={ISO_SIZE}
  initial={{ opacity: 0, x: ISO_X, y: ISO_Y + 40 }}
  animate={{ opacity: 1, x: ISO_X, y: ISO_Y }}
  transition={{ duration: 0.6, delay: 0.1 }}
/>

          {/* TITULO */}
          <motion.h2
            className={`${TITLE_SIZE} font-extrabold`}
            initial={{ opacity: 0, x: TITLE_X, y: TITLE_Y + 40 }}
            whileInView={{ opacity: 1, x: TITLE_X, y: TITLE_Y }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vikings <span className="text-[#4B87FF]">Estudio</span>
          </motion.h2>
        </div>

        {/* TEXTO */}
        <motion.div
          className={`${TEXT_WIDTH} ${TEXT_SIZE} italic text-gray-300 space-y-6 leading-relaxed`}
          initial={{ opacity: 0, x: TEXT_X, y: TEXT_Y + 40 }}
          whileInView={{ opacity: 1, x: TEXT_X, y: TEXT_Y }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            <span className="font-bold not-italic text-white">
              Vikings Estudio nace de una idea sencilla:
            </span>{" "}
            crear con la misma fuerza, determinación y pasión con la que los
            vikingos exploraban nuevos horizontes.
          </p>

          <p>
            Nos apasiona transformar ideas en{" "}
            <span className="text-[#4B87FF] not-italic">
              identidades visuales con propósito:
            </span>{" "}
            minimalistas, memorables y diseñadas para ayudar a las marcas a
            diferenciarse y alcanzar su mejor versión.
          </p>

          <p>
            Cada proyecto nace de un proceso creativo enfocado en comprender
            la esencia de la marca, combinando estrategia, creatividad y
            diseño premium para construir identidades sólidas y duraderas.
          </p>
        </motion.div>

        {/* BOTON */}
        <motion.button
          onClick={() => setOpen(true)}
          className="group relative mt-10"
          initial={{ opacity: 0, x: BUTTON_X, y: BUTTON_Y + 40, scale: BUTTON_SCALE }}
          whileInView={{ opacity: 1, x: BUTTON_X, y: BUTTON_Y, scale: BUTTON_SCALE }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`
              ${BTN_PADDING_X} ${BTN_PADDING_Y}
              ${BTN_RADIUS}
              ${BTN_BORDER}
              border-white
              flex items-center gap-2
              transition-all duration-300
              group-hover:bg-[#3578FF]
              group-hover:border-[#3578FF]
            `}
          >
            <span
              className={`
                ${BTN_TEXT_SIZE}
                font-semibold tracking-wide
                text-white transition-colors duration-300
              `}
            >
              SOBRE EL{" "}
              <span className="text-[#4B87FF] group-hover:text-white">
                FUNDADOR
              </span>
            </span>

            <span
              className={`
                ${BTN_ARROW_SIZE}
                text-white transition-colors duration-300
              `}
            >
              →
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* MODAL TARJETA */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[99999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={isMobile ? "/tarjeta-1-movil.png" : "/tarjeta-1.png"}
              className="max-w-[90%] md:max-w-[800px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}