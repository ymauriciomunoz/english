import type { Metadata } from "next";
import { LearnoLanguagesApp } from "../features/academy/LearnoLanguagesApp";

export const metadata: Metadata = {
  title: "Práctica de inglés con audio, frases y tarjetas",
  description: "Practica inglés con audios de pronunciación, frases útiles, ejercicios de escucha y tarjetas dinámicas de vocabulario.",
  alternates: { canonical: "/practica" },
  openGraph: {
    url: "/practica",
    title: "Práctica interactiva de inglés",
    description: "Entrena pronunciación, escucha y vocabulario con actividades dinámicas.",
  },
};

export default function PracticePage() {
  return <LearnoLanguagesApp initialView="practice" />;
}
