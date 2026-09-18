import type { Metadata } from "next";
import { LearnoLanguagesApp } from "../features/academy/LearnoLanguagesApp";

export const metadata: Metadata = {
  title: "Cursos de inglés online A1, A2, B1, B2 y C1",
  description: "Explora 217 lecciones de inglés organizadas por los niveles A1, A2, B1, B2 y C1, con vocabulario, gramática, comprensión y ejercicios interactivos.",
  alternates: { canonical: "/cursos" },
  openGraph: {
    url: "/cursos",
    title: "Cursos de inglés online de A1 a C1",
    description: "Elige tu nivel y avanza por una ruta de aprendizaje completa con 217 lecciones.",
  },
};

export default function CoursesPage() {
  return <LearnoLanguagesApp initialView="route" initialLevel="A1" />;
}
