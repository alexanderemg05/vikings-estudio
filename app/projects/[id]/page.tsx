"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProject } from "@/components/projectsData";
import { siteConfig } from "@/components/site.config";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function ProjectPage() {
  const { colors } = siteConfig;
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : "";
  const project = getProject(id);

  const labelStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: hexToRgba(colors.white, 0.45),
  };

  /* Proyecto no encontrado */
  if (!project) {
    return (
      <main
        className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"
        style={{
          backgroundColor: colors.black,
          color: colors.white,
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <p style={labelStyle}>PROYECTO NO ENCONTRADO</p>
        <Link
          href="/#work"
          className="text-sm uppercase tracking-[0.3em] underline underline-offset-8 opacity-80 transition-opacity hover:opacity-100"
        >
          ← Back to Work
        </Link>
      </main>
    );
  }

  const isVideo = project.type === "video";
  const sectionLabel = isVideo ? "SELECTED MOTION" : "SELECTED DESIGN";
  const heroImage = project.heroImage ?? project.image ?? project.thumbnail;

  const meta = [
    { label: "CATEGORÍA", value: project.genre ?? project.category },
    { label: "AÑO", value: project.year },
    { label: "CLIENTE", value: project.client },
    { label: "TIPO", value: isVideo ? "MOTION" : "DESIGN" },
  ].filter((m) => m.value);

  // Descripción → soporta varios párrafos (se separan con \n / \n\n)
  const paragraphs = project.description
    ? project.description
        .split(/\n+/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  return (
    <main
      className="min-h-screen w-full"
      style={{
        backgroundColor: colors.black,
        color: colors.white,
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1200px]"
        style={{
          padding:
            "clamp(2rem, 5vh, 4rem) clamp(1.5rem, 6vw, 8rem) clamp(5rem, 12vh, 8rem)",
        }}
      >
        {/* VOLVER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <Link
            href="/#work"
            className="inline-block opacity-70 transition-opacity duration-300 hover:opacity-100"
            style={labelStyle}
          >
            ← BACK TO WORK
          </Link>
        </motion.div>

        {/* BREADCRUMB */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
          style={{
            ...labelStyle,
            marginTop: "clamp(3rem, 8vh, 5rem)",
            color: hexToRgba(colors.white, 0.45),
          }}
        >
          {sectionLabel} <span style={{ color: colors.blue }}>/</span>{" "}
          {project.title.toUpperCase()}
        </motion.p>

        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.16, ease: EASE }}
          style={{
            fontFamily: "var(--font-creato), sans-serif",
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            marginTop: "1.25rem",
          }}
        >
          {project.title}
        </motion.h1>

        {/* SUBTÍTULO */}
        {project.subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.26, ease: EASE }}
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
              color: hexToRgba(colors.white, 0.65),
              maxWidth: "52ch",
              lineHeight: 1.6,
            }}
          >
            {project.subtitle}
          </motion.p>
        )}

        {/* META */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.36, ease: EASE }}
          className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {meta.map((m) => (
            <div key={m.label}>
              <p style={labelStyle}>{m.label}</p>
              <p
                className="mt-2 text-sm uppercase tracking-[0.15em]"
                style={{ color: colors.white }}
              >
                {m.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* DESCRIPCIÓN — ahora ANTES del contenido visual · admite varios párrafos */}
        {paragraphs.length > 0 && (
          <div style={{ marginTop: "clamp(3rem, 8vh, 5rem)", maxWidth: "62ch" }}>
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, delay: i * 0.06, ease: EASE }}
                style={{
                  marginTop: i === 0 ? 0 : "1.25rem",
                  fontSize: "clamp(0.9rem, 1.15vw, 1.05rem)",
                  lineHeight: 1.8,
                  color: hexToRgba(colors.white, 0.65),
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        )}

        {/* CRÉDITOS — presentación coherente con la meta */}
        {project.credits && project.credits.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: EASE }}
            style={{ marginTop: "clamp(2.5rem, 6vh, 3.5rem)" }}
          >
            <p style={labelStyle}>CRÉDITOS</p>
            <div className="mt-4 flex flex-col gap-3">
              {project.credits.map((c, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-4"
                >
                  <span
                    style={{ ...labelStyle, minWidth: "16rem" }}
                    className="md:shrink-0"
                  >
                    {c.role}
                  </span>
                  <span
                    className="text-sm tracking-[0.05em]"
                    style={{ color: colors.white }}
                  >
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* VISUAL PRINCIPAL (hero) — se oculta si el proyecto marca hideHero */}
        {!project.hideHero && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.1, ease: EASE }}
            style={{ marginTop: "clamp(3rem, 8vh, 5rem)" }}
          >
            {isVideo && project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster={project.thumbnail || undefined}
                className="h-auto w-full rounded-[14px]"
              />
            ) : (
              heroImage && (
                <img
                  src={heroImage}
                  alt={project.title}
                  className="h-auto w-full rounded-[14px]"
                />
              )
            )}
          </motion.div>
        )}

        {/* GALERÍA — cantidad libre por proyecto (después de la descripción) */}
        {project.gallery && project.gallery.length > 0 && (
          <div
            className="flex flex-col"
            style={{
              marginTop: "clamp(3rem, 8vh, 5rem)",
              gap: "clamp(1.5rem, 4vh, 3rem)",
            }}
          >
            {project.gallery.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`${project.title} — ${i + 1}`}
                className="h-auto w-full rounded-[14px]"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: EASE }}
              />
            ))}
          </div>
        )}

        {/* VOLVER (inferior) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginTop: "clamp(4rem, 10vh, 7rem)" }}
        >
          <Link
            href="/#work"
            className="inline-block opacity-70 transition-opacity duration-300 hover:opacity-100"
            style={labelStyle}
          >
            ← BACK TO WORK
          </Link>
        </motion.div>
      </div>
    </main>
  );
}