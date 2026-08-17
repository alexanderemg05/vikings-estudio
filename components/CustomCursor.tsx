"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const BLUE = "#4b87ff";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Inercia suave y elegante
  const springX = useSpring(x, { stiffness: 350, damping: 35, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 35, mass: 0.5 });

  useEffect(() => {
    // Solo dispositivos con cursor real (desktop). Táctil → desactivado.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as Element | null;
      if (!target || typeof target.closest !== "function") return;

      // Solo crece sobre elementos realmente clicables
      setInteractive(
        Boolean(
          target.closest(
            'a, button, [role="button"], .work-card, input, textarea, select, label, [data-cursor]'
          )
        )
      );
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      data-testid="custom-cursor"
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="rounded-full"
        style={{
          border: `1.5px solid ${BLUE}`,
          backgroundColor: "transparent",
        }}
        animate={{
          width: interactive ? 32 : 12,
          height: interactive ? 32 : 12,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </motion.div>
  );
}