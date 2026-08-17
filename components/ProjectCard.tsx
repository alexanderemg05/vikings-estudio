"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { siteConfig } from "./site.config";

export type Project = {
  id: string;
  title: string;
  category: string;
  type: "design" | "video";
  featured?: boolean;
  thumbnail?: string;
  image?: string;
  video?: string;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Vídeo con autoplay controlado por IntersectionObserver.
 * - Se reproduce automáticamente al entrar en el viewport.
 * - Se pausa al salir para no consumir recursos.
 * - Vuelve a reproducirse al re-entrar.
 * - El sufijo #t=0.5 (Media Fragments URI) evita el primer frame negro
 *   SIN modificar el archivo .mp4 original.
 */
function AutoplayVideo({ src, title }: { src?: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            /* ignorar bloqueos de autoplay */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const srcWithOffset = src ? `${src}#t=0.5` : undefined;

  return (
    <video
      ref={videoRef}
      src={srcWithOffset}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      aria-label={title}
      className="h-auto w-full"
    />
  );
}

export function ProjectCard({
  project,
  featured = false,
  index,
  onOpen,
  motionAccent = false,
}: {
  project: Project;
  featured?: boolean;
  index: number;
  onOpen: (p: Project) => void;
  motionAccent?: boolean;
}) {
  const { colors } = siteConfig;
  const isVideo = project.type === "video";

  return (
    <motion.div
      className={
        featured
          ? "col-span-2 md:col-span-7"
          : index === 1
          ? "col-span-1 md:col-span-5"
          : "col-span-1 md:col-span-4"
      }
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: EASE }}
    >
      <button
        type="button"
        data-cursor={isVideo ? "view" : "link"}
        onClick={() => onOpen(project)}
        className={`work-card${
          motionAccent ? " work-card--motion" : ""
        } flex h-full w-full flex-col p-2 text-left md:p-2.5`}
        aria-label={
          isVideo
            ? `Reproducir ${project.title}`
            : `Abrir proyecto ${project.title}`
        }
      >
        <div className="work-card-media relative w-full overflow-hidden rounded-[10px]">
          {isVideo ? (
            project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-auto w-full"
              />
            ) : (
              <AutoplayVideo src={project.video} title={project.title} />
            )
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-auto w-full"
            />
          )}

          {/* Indicador de play sutil (solo vídeo) */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{
                  backgroundColor: hexToRgba(colors.black, 0.55),
                  color: colors.white,
                }}
              >
                <Play size={13} strokeWidth={1.5} fill="currentColor" />
              </span>
            </div>
          )}
        </div>

        <div className="mt-2.5 flex items-baseline justify-between gap-2 px-0.5 pb-0.5">
          <h3
            className={`work-card-title font-bold uppercase tracking-[0.08em] ${
              featured ? "text-xs md:text-sm" : "text-[10px] md:text-xs"
            }`}
            style={{ fontFamily: "var(--font-creato), sans-serif" }}
          >
            {project.title}
          </h3>
          <span className="work-card-cat text-[8px] uppercase tracking-[0.28em] md:text-[9px]">
            {project.category}
          </span>
        </div>
      </button>
    </motion.div>
  );
}

export function ProjectCardStyles() {
  return (
    <style>{`
      .work-card {
        background-color: #1C1C1C;
        border: 1px solid rgba(232, 227, 213, 0.08);
        border-radius: 14px;
        cursor: pointer;
        transition: background-color 0.4s ease-out,
          border-color 0.4s ease-out;
      }
      .work-card:hover {
        background-color: #E8E3D5;
        border-color: rgba(232, 227, 213, 0.35);
      }
      .work-card-title {
        color: #E8E3D5;
        transition: color 0.4s ease-out;
      }
      .work-card:hover .work-card-title {
        color: #111316;
      }
      .work-card-cat {
        color: rgba(232, 227, 213, 0.45);
        transition: color 0.4s ease-out;
      }
      .work-card:hover .work-card-cat {
        color: rgba(17, 19, 22, 0.55);
      }
      .work-card-media img,
      .work-card-media video {
        display: block;
        object-fit: contain;
        object-position: top;
        transition: transform 0.5s ease-out, filter 0.5s ease-out;
      }
      .work-card:hover .work-card-media img,
      .work-card:hover .work-card-media video {
        transform: scale(1.02);
        filter: saturate(1.05);
      }

      /* ============================================================
         VARIANTE MOTION — crema → azul identidad en hover → crema
         Solo se aplica cuando WorkGallery pasa motionAccent
         (id="motion"). Las reglas .work-card originales quedan
         intactas para la sección Design.
         ============================================================ */
      .work-card--motion {
        background-color: #E8E3D5;
        border-color: rgba(232, 227, 213, 0.35);
        transition: background-color 0.6s cubic-bezier(0.22, 1, 0.36, 1),
          border-color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .work-card--motion:hover {
        background-color: #4B87FF;
        border-color: rgba(232, 227, 213, 0.35);
      }
      .work-card--motion .work-card-title {
        color: #111316;
        transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .work-card--motion:hover .work-card-title {
        color: #E8E3D5;
      }
      .work-card--motion .work-card-cat {
        color: rgba(17, 19, 22, 0.55);
        transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .work-card--motion:hover .work-card-cat {
        color: rgba(232, 227, 213, 0.75);
      }
    `}</style>
  );
}