"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function VideoModal({
  video,
  onClose
}: {
  video: string | null;
  onClose: () => void;
}) {

  useEffect(() => {
    if (video) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [video]);

  if (!video) return null;

  return createPortal(

    <div
      className="fixed inset-0 z-[9999999] bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >

      <video
        src={video}
        controls
        autoPlay
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
      />

      <button
        onClick={onClose}
        className="absolute top-8 right-10 text-white text-4xl"
      >
        ✕
      </button>

    </div>,

    document.body
  );
}