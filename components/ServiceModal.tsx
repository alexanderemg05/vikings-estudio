"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

type ServiceModalProps = {
  service: string | null;
  closeModal: () => void;
};

export default function ServiceModal({ service, closeModal }: ServiceModalProps) {

  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      service,
      ...form
    });

    setSent(true);
  };

  if (!service) return null;

  return (
    <AnimatePresence>

      {service && (

        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[9999]"
          style={{ isolation: "isolate" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          >

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-neutral-900 p-10 rounded-2xl w-[420px] text-white relative"
          >

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Solicitar {service}
            </h3>

            <p className="text-gray-400 mb-6 text-sm">
              Cuéntame brevemente tu proyecto.
            </p>

            {!sent ? (

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >

                <input
                  name="name"
                  placeholder="Nombre"
                  onChange={handleChange}
                  className="p-3 rounded bg-neutral-800"
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="p-3 rounded bg-neutral-800"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Cuéntame sobre tu proyecto"
                  onChange={handleChange}
                  className="p-3 rounded bg-neutral-800 h-28"
                  required
                />

                <button className="bg-blue-600 py-3 rounded-full font-bold hover:scale-105 transition">
                  SOLICITAR
                </button>

              </form>

            ) : (

              <div className="flex flex-col items-center text-center py-6">

                <div className="text-4xl mb-4">
                  ✓
                </div>

                <h4 className="text-xl font-bold mb-2">
                  Solicitud enviada
                </h4>

                <p className="text-gray-400 text-sm mb-6">
                  Gracias por tu interés. Revisaré tu mensaje y te responderé pronto.
                </p>

                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-blue-600 rounded-full font-bold hover:scale-105 transition"
                >
                  Cerrar
                </button>

              </div>

            )}

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
    
  );
}