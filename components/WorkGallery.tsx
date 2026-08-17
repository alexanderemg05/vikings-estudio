"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ProjectCard,
  ProjectCardStyles,
  type Project,
} from "./ProjectCard";
import { siteConfig } from "./site.config";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function WorkGallery({
  id,
  index,
  title,
  projects,
}: {
  id: string;
  index: string;
  title: string;
  projects: Project[];
}) {
  const { colors } = siteConfig;
  const router = useRouter();

  // La variante de color crema→azul solo aplica a la sección Motion
  const motionAccent = id === "motion";

  // Jerarquía automática: el primero (o featured: true) es el protagonista
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.id !== featured.id);
  const second = rest[0];
  const others = rest.slice(1);

  const openProject = (p: Project) => {
    router.push(`/projects/${p.id}`);
  };

  return (
    <section
      id={id}
      className="relative w-full"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      <div
        className="mx-auto w-full max-w-[1400px]"
        style={{
          padding:
            "clamp(5rem, 14vh, 9rem) clamp(1.5rem, 6vw, 8rem)",
        }}
      >
        {/* CONTENEDOR COMPARTIDO — etiqueta y grid usan exactamente
            el mismo ancho y centrado, por lo que quedan alineados */}
        <div className="mx-auto w-full" style={{ maxWidth: "900px" }}>
          {/* HEADER */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: EASE }}
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: hexToRgba(colors.white, 0.6),
              marginBottom: "clamp(2.5rem, 7vh, 4.5rem)",
            }}
          >
            <span style={{ color: colors.blue }}>{index}</span> — {title}
          </motion.p>

          {/* GALERÍA COMPACTA — fila 1: protagonista + secundario · resto: 3 por fila */}
          <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            <ProjectCard
              project={featured}
              featured
              index={0}
              onOpen={openProject}
              motionAccent={motionAccent}
            />
            {second && (
              <ProjectCard
                project={second}
                index={1}
                onOpen={openProject}
                motionAccent={motionAccent}
              />
            )}
            {others.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i + 2}
                onOpen={openProject}
                motionAccent={motionAccent}
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectCardStyles />
    </section>
  );
}