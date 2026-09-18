import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseRoadmaps } from "../../course-content";
import { LearnoLanguagesApp } from "../../features/academy/LearnoLanguagesApp";
import { levelData, levelSummaries } from "../../features/academy/course-data";
import type { Level } from "../../features/academy/types";

const validLevels: Level[] = ["A1", "A2", "B1", "B2", "C1"];

function readLevel(value: string): Level | null {
  const level = value.toUpperCase() as Level;
  return validLevels.includes(level) ? level : null;
}

export function generateStaticParams() {
  return validLevels.map((level) => ({ nivel: level.toLowerCase() }));
}

export async function generateMetadata({ params }: { params: Promise<{ nivel: string }> }): Promise<Metadata> {
  const { nivel } = await params;
  const level = readLevel(nivel);
  if (!level) return {};
  const lessonCount = courseRoadmaps[level].length;
  return {
    title: `Curso de inglés ${level} online — ${levelData[level].label}`,
    description: `${levelSummaries[level]} Aprende inglés ${level} online con ${lessonCount} lecciones, explicaciones, vocabulario, audio y ejercicios interactivos.`,
    alternates: { canonical: `/cursos/${level.toLowerCase()}` },
    openGraph: {
      url: `/cursos/${level.toLowerCase()}`,
      title: `Curso de inglés ${level} online`,
      description: `${lessonCount} lecciones progresivas para desarrollar las habilidades del nivel ${level}.`,
    },
  };
}

export default async function LevelPage({ params }: { params: Promise<{ nivel: string }> }) {
  const { nivel } = await params;
  const level = readLevel(nivel);
  if (!level) notFound();
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `Curso de inglés ${level}`,
    description: levelSummaries[level],
    educationalLevel: level,
    inLanguage: "es",
    provider: { "@type": "EducationalOrganization", name: "Learno Languages", url: "https://learnolanguages.com" },
  };

  return <><LearnoLanguagesApp initialView="route" initialLevel={level} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData).replace(/</g, "\\u003c") }} /></>;
}
