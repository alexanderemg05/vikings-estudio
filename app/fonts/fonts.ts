import localFont from "next/font/local";
import { Inter } from "next/font/google";

// Creato Display — identidad / display / titulares
export const creatoDisplay = localFont({
  src: [
    {
      path: "./Creato Display/CreatoDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Creato Display/CreatoDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Creato Display/CreatoDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Creato Display/CreatoDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-creato",
  display: "swap",
});

// Inter — información / lectura / interfaz
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});