"use client";

import { motion } from "framer-motion";

export default function Studio() {
  return (
    <section
      id="studio"
      className="py-24 px-6 bg-[#1A1C22] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Manifiesto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            El Estudio
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Vikings Estudio nace con la visión de construir marcas sólidas,
            estratégicas y con carácter. No diseñamos por estética, diseñamos
            con intención.
          </p>
        </motion.div>

        {/* Bloque personal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Dirección creativa por Alex
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Soy diseñador y director creativo enfocado en estrategia,
              identidad visual y presencia digital. Trabajo con marcas
              emergentes, negocios locales y empresas en crecimiento
              que buscan evolucionar su imagen y posicionamiento.
            </p>
          </div>

          <div className="bg-[#24262D] h-80 rounded-2xl flex items-center justify-center text-gray-500">
            Foto aquí
          </div>
        </motion.div>
      </div>
    </section>
  );
}