import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${creato.className} ${lotus.variable} overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
