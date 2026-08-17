"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "./site.config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { nav, colors } = siteConfig;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        fontFamily: "var(--font-creato), sans-serif",
        backgroundColor: colors.white,
      }}
    >
      <nav
        className="flex items-center justify-between"
        style={{
          height: nav.height,
          paddingLeft: nav.paddingX,
          paddingRight: nav.paddingX,
        }}
      >
        {/* IZQUIERDA: isotipo + marca */}
        <Link href="/" className="flex items-center gap-3" aria-label={nav.brandText}>
          {/* Isotipo teñido a #111316 mediante máscara CSS
              (el archivo iso.png no se modifica) */}
          <span
            role="img"
            aria-label={nav.logoAlt}
            className="inline-block"
            style={{
              width: nav.logoHeight,
              height: nav.logoHeight,
              backgroundColor: colors.black,
              WebkitMaskImage: `url(${nav.logoSrc})`,
              maskImage: `url(${nav.logoSrc})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span
            className="whitespace-nowrap text-[11px] font-bold tracking-[0.3em] md:text-xs"
            style={{ color: colors.black }}
          >
            {nav.brandText}
          </span>
        </Link>

        {/* DERECHA: links desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-[0.35em] opacity-70 transition-opacity duration-300 hover:opacity-100"
                style={{ color: colors.black }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburguesa mobile */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
            style={{ backgroundColor: open ? colors.white : colors.black }}
          />
          <span
            className={`block h-[1.5px] w-6 transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: colors.black }}
          />
          <span
            className={`block h-[1.5px] w-6 transition-all duration-300 ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
            style={{ backgroundColor: open ? colors.white : colors.black }}
          />
        </button>
      </nav>

      {/* Menú mobile: pantalla completa, entrada escalonada */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-9 transition-opacity duration-500 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        style={{ backgroundColor: colors.black }}
        aria-hidden={!open}
      >
        {nav.links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`text-xl font-bold tracking-[0.35em] transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              color: colors.white,
              transitionDelay: open ? `${120 + i * 70}ms` : "0ms",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}