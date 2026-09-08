import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learno Languages — Aprende inglés paso a paso",
  description: "Tu academia de inglés con lecciones dinámicas, práctica guiada y progreso guardado.",
  icons: {
    icon: "/brand/learno-symbol.png",
    shortcut: "/brand/learno-symbol.png",
    apple: "/brand/learno-symbol.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
