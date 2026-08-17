"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Instagram, Linkedin, Globe } from "lucide-react";
import Footer from "@/components/Footer";
import { siteConfig } from "@/components/site.config";


// ============================================================
// ✏️ DATOS DE CONTACTO — editable
// ============================================================

// Icono Behance (no existe en lucide-react) — SVG inline minimalista
const BehanceIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M2.5 5.5h5.2c1.7 0 3 .9 3 2.6 0 1.5-.9 2.4-1.9 2.7 1.4.2 2.5 1.2 2.5 3 0 2-1.6 3.2-3.6 3.2H2.5V5.5Z" />
    <path d="M2.5 10.9h5.4" />
    <path d="M14.5 8.5h5" />
    <path d="M21.5 14.2c-.4 1.9-1.9 3.2-4 3.2-2.4 0-4.3-1.7-4.3-4.3s1.8-4.3 4.3-4.3c2.6 0 4.1 1.9 4.1 4.4 0 .2 0 .3-.1.5H13.5" />
  </svg>
);

const contactData = {
  name: "Alex Moreno",
  role: "Diseño & Motion Designer",
  email: "alexanderm05@gmail.com",
  phone: "+34 605 81 52 63",
  location: "Vigo, España",
  socials: [
    {
      label: "Behance",
      href: "https://www.behance.net/Alexanderm",
      Icon: BehanceIcon,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/alexandermoreno/",
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/alexanderm/",
      Icon: Instagram,
    },
    {
      label: "Web",
      href: "https://www.vikingsstudio/",
      Icon: Globe,
    },
  ],
};


// ============================================================
// ✏️ EMAILJS — credenciales (reutilizadas del ServiceModal)
// ============================================================
const EMAILJS = {
  serviceId: "service_fpzsezm",
  templateId: "template_thidarp",
  publicKey: "dfLIXoLUg5UcMyWF5",
};


const PROJECT_TYPES = [
  "Branding",
  "Diseño gráfico",
  "Motion Design",
  "Edición de vídeo",
  "Redes sociales",
  "Otro",
];


const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];


// Bordes reutilizados
const INPUT_BORDER_DARK = "rgba(232, 227, 213, 0.18)";
const INPUT_BORDER_FOCUS = "#4B87FF";


// Tokens del bloque claro (columna izquierda con fondo crema)
const CREAM_DARK_TEXT = "#111316";
const CREAM_MUTED_TEXT = "rgba(17, 19, 22, 0.55)";
const CREAM_BORDER = "rgba(17, 19, 22, 0.14)";


export default function ContactPage() {
  const { colors } = siteConfig;


  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        {
          name: form.name,
          email: form.email,
          service: form.projectType,
          message: form.message,
        },
        EMAILJS.publicKey
      );
      setStatus("sent");
      setForm({ name: "", email: "", projectType: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };


  // Estilo compartido para los inputs del formulario (columna derecha, oscura)
  const inputBase =
    "w-full bg-transparent py-3 text-base tracking-[-0.01em] outline-none transition-colors duration-300 md:text-lg";
  const inputStyle: React.CSSProperties = {
    color: colors.white,
    borderBottom: `1px solid ${INPUT_BORDER_DARK}`,
  };


  // Labels: dos variantes (para bloque oscuro y bloque claro)
  const labelBase = "mb-2 block text-[10px] uppercase tracking-[0.32em]";
  const labelDark = { color: "rgba(232, 227, 213, 0.45)" }; // sobre fondo oscuro
  const labelLight = { color: CREAM_MUTED_TEXT }; // sobre fondo crema


  return (
    <main
      className="relative min-h-screen w-full"
      style={{ backgroundColor: colors.black, color: colors.white }}
    >
      <section className="relative w-full px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-56">
        <div className="mx-auto max-w-[1400px]">
          {/* ============================================================
              CABECERA — se mantiene idéntica
             ============================================================ */}
          <motion.div
            className="flex items-baseline gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: colors.blue }}
            >
              04
            </span>
            <span
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: "rgba(232, 227, 213, 0.45)" }}
            >
              — Contacto
            </span>
          </motion.div>


          <motion.h1
            className="mt-6 text-[52px] font-bold leading-[0.95] tracking-[-0.02em] md:text-[104px]"
            style={{
              color: colors.white,
              fontFamily: "var(--font-creato), sans-serif",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            ¿Hablamos<span style={{ color: colors.blue }}>?</span>
          </motion.h1>


          <motion.p
            className="mt-8 max-w-[560px] text-sm leading-relaxed md:text-base"
            style={{ color: "rgba(232, 227, 213, 0.55)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estoy
            disponible para colaborar con marcas y estudios que buscan elevar
            su identidad visual.
          </motion.p>


          <motion.div
            className="mt-16 h-px w-full origin-left md:mt-24"
            style={{ backgroundColor: "rgba(232, 227, 213, 0.18)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
          />


          {/* ============================================================
              NUEVO BLOQUE INFERIOR — dos columnas
              Izquierda: fondo crema con información
              Derecha : fondo oscuro con formulario
             ============================================================ */}
          <motion.div
            className="mt-16 grid grid-cols-1 overflow-hidden md:mt-24 md:grid-cols-2 md:items-stretch"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {/* ------------------------------------------------------------
                COLUMNA IZQUIERDA — Bloque claro (fondo crema)
               ------------------------------------------------------------ */}
            <div
              className="flex h-full flex-col gap-10 px-6 py-14 md:gap-12 md:px-14 md:py-20"
              style={{
                backgroundColor: colors.white, // color crema de identidad (#E8E3D5)
                color: CREAM_DARK_TEXT,
              }}
            >
              {/* ESTUDIO */}
              <div>
                <div className={labelBase} style={labelLight}>
                  Estudio
                </div>
                <div
                  className="mt-2 text-xl font-bold uppercase tracking-[0.02em] md:text-2xl"
                  style={{
                    color: CREAM_DARK_TEXT,
                    fontFamily: "var(--font-creato), sans-serif",
                  }}
                >
                  {contactData.name}
                </div>
                <div
                  className="mt-1 text-xs uppercase tracking-[0.24em]"
                  style={{ color: CREAM_MUTED_TEXT }}
                >
                  {contactData.role}
                </div>
              </div>


              {/* CORREO */}
              <a
                href={`mailto:${contactData.email}`}
                className="group flex flex-col gap-2"
              >
                <span className={labelBase} style={labelLight}>
                  Correo
                </span>
                <span
                  className="text-lg font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#4B87FF] md:text-2xl"
                  style={{ color: CREAM_DARK_TEXT }}
                >
                  {contactData.email}
                </span>
              </a>


              {/* TELÉFONO */}
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                className="group flex flex-col gap-2"
              >
                <span className={labelBase} style={labelLight}>
                  Teléfono
                </span>
                <span
                  className="text-lg font-medium tracking-[-0.01em] transition-colors duration-300 group-hover:text-[#4B87FF] md:text-2xl"
                  style={{ color: CREAM_DARK_TEXT }}
                >
                  {contactData.phone}
                </span>
              </a>


              {/* UBICACIÓN */}
              <div className="flex flex-col gap-2">
                <span className={labelBase} style={labelLight}>
                  Ubicación
                </span>
                <span
                  className="text-lg font-medium tracking-[-0.01em] md:text-2xl"
                  style={{ color: CREAM_DARK_TEXT }}
                >
                  {contactData.location}
                </span>
              </div>


              {/* REDES */}
              <div className="flex flex-col gap-4">
                <span className={labelBase} style={labelLight}>
                  Redes
                </span>


                <ul className="flex flex-col">
                  {contactData.socials.map((s, i) => {
                    const Icon = s.Icon;
                    return (
                      <li
                        key={s.label}
                        style={{
                          borderTop:
                            i === 0 ? `1px solid ${CREAM_BORDER}` : undefined,
                          borderBottom: `1px solid ${CREAM_BORDER}`,
                        }}
                      >
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between py-4 md:py-5"
                        >
                          <span className="flex items-center gap-3">
                            <Icon
                              className="h-5 w-5 transition-colors duration-300 group-hover:text-[#4B87FF] md:h-[22px] md:w-[22px]"
                              strokeWidth={1.5}
                              style={{ color: CREAM_DARK_TEXT }}
                            />
                            <span
                              className="text-lg font-bold uppercase tracking-[0.02em] transition-colors duration-300 group-hover:text-[#4B87FF] md:text-xl"
                              style={{
                                color: CREAM_DARK_TEXT,
                                fontFamily: "var(--font-creato), sans-serif",
                              }}
                            >
                              {s.label}
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                            style={{ color: CREAM_MUTED_TEXT }}
                          >
                            ↗
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>


              {/* Volver — enlace secundario en el pie de la columna clara */}
              <Link
                href="/"
                className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 hover:text-[#4B87FF]"
                style={{ color: CREAM_MUTED_TEXT }}
              >
                <span aria-hidden>←</span>
                <span>Volver al trabajo</span>
              </Link>
            </div>


            {/* ------------------------------------------------------------
                COLUMNA DERECHA — Bloque oscuro (formulario)
               ------------------------------------------------------------ */}
            <div
              className="flex h-full flex-col px-6 py-14 md:px-14 md:py-20"
              style={{ backgroundColor: colors.black }}
            >
              <motion.h2
                className="text-[36px] font-bold leading-[0.95] tracking-[-0.02em] md:text-[56px]"
                style={{
                  color: colors.white,
                  fontFamily: "var(--font-creato), sans-serif",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: EASE }}
              >
                Trabajemos juntos
                <span style={{ color: colors.blue }}>.</span>
              </motion.h2>


              <motion.form
                onSubmit={handleSubmit}
                className="mt-12 flex flex-1 flex-col gap-y-10 md:mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              >
                {/* NOMBRE */}
                <div>
                  <label
                    htmlFor="name"
                    className={labelBase}
                    style={labelDark}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_FOCUS}`)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_DARK}`)
                    }
                    className={inputBase}
                    style={inputStyle}
                    placeholder="Tu nombre"
                  />
                </div>


                {/* CORREO ELECTRÓNICO */}
                <div>
                  <label
                    htmlFor="email"
                    className={labelBase}
                    style={labelDark}
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_FOCUS}`)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_DARK}`)
                    }
                    className={inputBase}
                    style={inputStyle}
                    placeholder="tu@email.com"
                  />
                </div>


                {/* TIPO DE PROYECTO */}
                <div>
                  <label
                    htmlFor="projectType"
                    className={labelBase}
                    style={labelDark}
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={form.projectType}
                    onChange={handleChange}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_FOCUS}`)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_DARK}`)
                    }
                    className={`${inputBase} cursor-pointer appearance-none`}
                    style={{
                      ...inputStyle,
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1l4 4 4-4' stroke='%23E8E3D5' stroke-opacity='0.45' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 4px center",
                      paddingRight: "24px",
                    }}
                  >
                    <option value="" disabled style={{ color: "#111316" }}>
                      Selecciona una categoría
                    </option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} style={{ color: "#111316" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>


                {/* MENSAJE */}
                <div>
                  <label
                    htmlFor="message"
                    className={labelBase}
                    style={labelDark}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_FOCUS}`)
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderBottom = `1px solid ${INPUT_BORDER_DARK}`)
                    }
                    className={`${inputBase} resize-none leading-relaxed`}
                    style={inputStyle}
                    placeholder="Cuéntame brevemente sobre tu proyecto…"
                  />
                </div>


                {/* ENVIAR + STATUS */}
                <div className="mt-auto flex flex-col gap-4 pt-6 md:flex-row md:items-center md:justify-between">
                  <div
                    className="text-xs uppercase tracking-[0.28em]"
                    style={{
                      color:
                        status === "sent"
                          ? colors.blue
                          : status === "error"
                          ? "#FF6B6B"
                          : "rgba(232, 227, 213, 0.45)",
                    }}
                    aria-live="polite"
                  >
                    {status === "idle" && "Te respondo en menos de 48 horas."}
                    {status === "sending" && "Enviando…"}
                    {status === "sent" && "Mensaje enviado — hablamos pronto."}
                    {status === "error" &&
                      "Algo ha fallado. Inténtalo de nuevo."}
                  </div>


                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-3 self-start rounded-full border px-8 py-4 text-[11px] uppercase tracking-[0.32em] transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50 md:self-auto"
                    style={{
                      borderColor: "rgba(232, 227, 213, 0.25)",
                      color: colors.white,
                    }}
                    onMouseEnter={(e) => {
                      if (status === "sending") return;
                      e.currentTarget.style.backgroundColor = colors.blue;
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.color = colors.white;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor =
                        "rgba(232, 227, 213, 0.25)";
                      e.currentTarget.style.color = colors.white;
                    }}
                  >
                    <span>
                      {status === "sending" ? "Enviando" : "Enviar mensaje"}
                    </span>
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </main>
  );
}