import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import type { Viewport } from "next";
import CustomCursor from "@/components/CustomCursor";

// ✅ ÚNICA fuente de verdad del viewport (se elimina el de metadata).
//    viewport-fit: cover → imprescindible para notch + svh/dvh en iPhone.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const creato = localFont({
  src: [
    {
      path: "./fonts/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CreatoDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-creato", // ✅ ahora var(--font-creato) resuelve de verdad
  display: "swap",
});

const lotus = localFont({
  src: "./fonts/lotus-history.ttf",
  variable: "--font-lotus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikings Studio",
  description: "Identidad. Estrategia. Impacto.",
  // ❌ eliminado "viewport" de aquí (deprecado y en conflicto con el export)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${creato.className} ${creato.variable} ${lotus.variable} overflow-x-hidden`}
      >
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
