"use client";

import { motion } from "framer-motion";

export default function Contact() {

  // =========================
  // 🎛️ CONTROLES
  // =========================

  // ISO
  const ISO_SIZE = "w-[80px]";

  // TEXTO
  const TEXT_SIZE = "text-[16px]";
  const TEXT_WIDTH = "max-w-[500px]";
  const TEXT_COLOR = "text-[#CFCFCF]";

  // LINEAS
  const LINE_WIDTH = "w-[3px]";
  const LINE_HEIGHT = "h-[80px]";
  const LINE_COLOR = "bg-white/20";

  // ICONOS
  const ICON_SIZE = "w-[42px] md:w-[80px]";
  const ICON_GAP = "gap-16";

  // TEXTO ICONOS
  const ICON_TEXT_SIZE = "text-[10px] md:text-[14px]";
  const ICON_TEXT_COLOR = "text-[#949494]";

  // POSICION GENERAL
  const CONTENT_X = 0;
  const CONTENT_Y = 0;

  // =========================

  return (
    <section
      id="contact"
      className="relative z-[20] py-24 md:py-56 px-6 bg-transparent text-white flex items-center justify-center"
    >
      <motion.div
        className="w-full max-w-4xl mx-auto text-center flex flex-col items-center"
        style={{
          transform: `translate(${CONTENT_X}px, ${CONTENT_Y}px)`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* ISO */}
        <motion.img
          src="/iso-redes.png"
          className={`${ISO_SIZE} mb-8`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* TEXTO + LINEAS */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* LINEA IZQUIERDA */}
          <div className={`hidden md:block ${LINE_WIDTH} ${LINE_HEIGHT} ${LINE_COLOR}`}></div>

          {/* TEXTO */}
          <p className="text-center leading-relaxed">
            <span className="block">
              Estamos disponibles para colaborar con marcas,
            </span>

            <span className="block text-[#3578FF]">
              empresas y negocios que buscan evolucionar su
            </span>

            <span className="block">
              identidad y presencia digital.
            </span>
          </p>

          {/* LINEA DERECHA */}
          <div className={`hidden md:block ${LINE_WIDTH} ${LINE_HEIGHT} ${LINE_COLOR}`}></div>
        </motion.div>

        {/* ICONOS */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-10 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* TELEFONO */}
          <a
            href="tel:+34677800597"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src="/icono-phone.png"
              className={`${ICON_SIZE} transition-transform duration-300 group-hover:scale-110`}
            />
            <span
              className={`${ICON_TEXT_SIZE} ${ICON_TEXT_COLOR} group-hover:text-white transition break-all md:break-normal text-center leading-tight`}
            >
              +34 677 800 597
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:alexanderemg05@gmail.com"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src="/icono-correo.png"
              className={`${ICON_SIZE} transition-transform duration-300 group-hover:scale-110`}
            />
            <span
              className={`${ICON_TEXT_SIZE} ${ICON_TEXT_COLOR} group-hover:text-white transition break-all md:break-normal text-center leading-tight`}
            >
              alexanderemg05@gmail.com
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/viking.estudio"
            target="_blank"
            className="flex flex-col items-center gap-3 group"
          >
            <img
              src="/icono-instragram.png"
              className={`${ICON_SIZE} transition-transform duration-300 group-hover:scale-110`}
            />
            <span
              className={`${ICON_TEXT_SIZE} ${ICON_TEXT_COLOR} group-hover:text-white transition break-all md:break-normal text-center leading-tight`}
            >
              viking.estudio
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}