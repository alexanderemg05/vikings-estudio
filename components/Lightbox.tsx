"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "./site.config";

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Lightbox({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const { colors } = siteConfig;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-y-auto"
          style={{ backgroundColor: hexToRgba(colors.black, 0.96) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="fixed top-5 right-5 z-10 flex h-11 w-11 items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100"
            style={{ color: colors.white }}
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <div
            className="flex min-h-full w-full p-6 md:p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="m-auto flex w-full justify-center">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}