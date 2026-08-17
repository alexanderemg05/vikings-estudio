"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { siteConfig } from "./site.config";

function hexToRgba(hex: string, alpha: number) {
  const n = hex.replace("#", "");
  const r = parseInt(n.substring(0, 2), 16);
  const g = parseInt(n.substring(2, 4), 16);
  const b = parseInt(n.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Hero() {
  const { hero, colors } = siteConfig;
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    setLoaded(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoSrc =
    isMobile && hero.background.mobileVideo
      ? hero.background.mobileVideo
      : hero.background.desktopVideo;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        height: "100svh",
        minHeight: "100vh",
        backgroundColor: colors.black,
        fontFamily: "var(--font-creato), sans-serif",
      }}
    >
      {/* ===== 1. BACKGROUND (imagen ahora · vídeo en el futuro) ===== */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-[2400ms] ease-out"
        style={{ transform: loaded ? "scale(1)" : "scale(1.07)" }}
      >
        {hero.background.type === "video" ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            style={{ objectPosition: hero.background.position }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src={hero.background.image}
            alt=""
            className="h-full w-full object-cover"
            style={{ objectPosition: hero.background.position }}
          />
        )}
      </div>

      {/* ===== 2. OVERLAY (color + opacidad configurables) ===== */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundColor: hexToRgba(colors.overlayColor, colors.overlayOpacity),
        }}
      />
      {/* Viñeta cinematográfica suave */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `linear-gradient(to bottom, ${hexToRgba(
            colors.black,
            0.35
          )} 0%, transparent 30%, transparent 62%, ${hexToRgba(
            colors.black,
            0.55
          )} 100%)`,
        }}
      />

      {/* ===== 3. NAVBAR ===== */}
      <Navbar />

      {/* ===== 4. HERO CONTENT ===== */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Isotipo — firma de marca sobre el título
            (teñido a #E8E3D5 con máscara CSS, iso.png no se modifica) */}
        <span
          role="img"
          aria-label="Isotipo Vikings Studio"
          className={`block transition-all duration-[1200ms] ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            width: hero.isoSize,
            height: hero.isoSize,
            marginBottom: hero.isoMarginBottom,
            backgroundColor: colors.white,
            WebkitMaskImage: `url(${hero.isoSrc})`,
            maskImage: `url(${hero.isoSrc})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            transitionDelay: "0ms",
          }}
        />

        <h1
          className={`uppercase transition-all duration-[1200ms] ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{
            fontSize: hero.titleSize,
            fontWeight: hero.titleWeight,
            letterSpacing: hero.titleLetterSpacing,
            lineHeight: hero.titleLineHeight,
            transitionDelay: "150ms",
          }}
        >
          <span className="block" style={{ color: colors.blue }}>
            {hero.titleLine1}
          </span>
          <span className="block" style={{ color: colors.white }}>
            {hero.titleLine2}
          </span>
        </h1>

        <p
          className={`uppercase transition-all duration-[1200ms] ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            marginTop: hero.subtitleMarginTop,
            fontSize: hero.subtitleSize,
            fontWeight: hero.subtitleWeight,
            letterSpacing: hero.subtitleLetterSpacing,
            color: colors.white,
            transitionDelay: "350ms",
          }}
        >
          {hero.subtitle}
        </p>

        <p
          className={`uppercase transition-all duration-[1200ms] ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{
            marginTop: hero.taglineMarginTop,
            fontSize: hero.taglineSize,
            fontWeight: hero.taglineWeight,
            letterSpacing: hero.taglineLetterSpacing,
            color: hexToRgba(colors.white, 0.75),
            transitionDelay: "500ms",
          }}
        >
          {hero.tagline}
        </p>
      </div>

      {/* ===== 5. SCROLL INDICATOR ===== */}
      <a
        href="#about"
        aria-label="Bajar a la siguiente sección"
        className={`absolute left-1/2 z-10 flex -translate-x-1/2 flex-col items-center transition-opacity duration-1000 ${
          loaded ? "opacity-70 hover:opacity-100" : "opacity-0"
        }`}
        style={{
          bottom: hero.scrollIndicator.bottom,
          color: colors.white,
          transitionDelay: loaded ? "950ms" : "0ms",
        }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: hero.scrollIndicator.size,
            letterSpacing: hero.scrollIndicator.letterSpacing,
            fontWeight: 500,
          }}
        >
          {hero.scrollIndicator.text}
        </span>
        <span
          className="hero-scroll-line mt-3 block w-px"
          style={{
            height: hero.scrollIndicator.lineHeight,
            backgroundColor: colors.white,
            animationDuration: `${hero.scrollIndicator.speed}s`,
          }}
        />
        {hero.scrollIndicator.showArrow && (
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            className="mt-2"
            aria-hidden="true"
          >
            <path
              d="M1 1l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </a>

      <style>{`
        @keyframes hero-scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          45% { transform: scaleY(1); transform-origin: top; }
          55% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .hero-scroll-line {
          animation-name: hero-scroll-line;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
}