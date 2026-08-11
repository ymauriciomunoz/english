import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightUp — Aprende inglés paso a paso",
  description: "Una ruta de aprendizaje de inglés dinámica, progresiva y llena de retos.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
