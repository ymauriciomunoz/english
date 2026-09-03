import { courseRoadmaps } from "../../course-content";
import type { CourseContentLevel, Lesson, Level, LevelInfo, LevelVisual } from "./types";

const courseLevels: CourseContentLevel[] = ["A1", "A2", "B1", "B2", "C1"];

export const levelData: Record<Level, LevelInfo> = {
  A1: { label: "Primeros pasos", color: "#6c5ce7", topics: courseRoadmaps.A1.map((lesson) => lesson.title_target) },
  A2: { label: "Explorador", color: "#00a896", topics: courseRoadmaps.A2.map((lesson) => lesson.title_target) },
  B1: { label: "Aventurero", color: "#f59e0b", topics: courseRoadmaps.B1.map((lesson) => lesson.title_target) },
  B2: { label: "Comunicador", color: "#ef476f", topics: courseRoadmaps.B2.map((lesson) => lesson.title_target) },
  C1: { label: "Maestro del inglés", color: "#118ab2", topics: courseRoadmaps.C1.map((lesson) => lesson.title_target) },
};

export const levels = Object.keys(levelData) as Level[];

export const levelVisuals: Record<Level, LevelVisual> = {
  A1: { icon: "🌱", motto: "Empieza a hablar", stage: "BASE", secondary: "#9b8cf6" },
  A2: { icon: "🧭", motto: "Explora situaciones reales", stage: "EXPLORA", secondary: "#38d1bd" },
  B1: { icon: "🏔️", motto: "Conecta y desarrolla tus ideas", stage: "AVANZA", secondary: "#f7bd52" },
  B2: { icon: "🎙️", motto: "Argumenta con confianza", stage: "COMUNICA", secondary: "#ff7b9a" },
  C1: { icon: "💎", motto: "Domina cada matiz", stage: "DOMINIO", secondary: "#3dcae8" },
};

export const levelSummaries: Record<Level, string> = {
  A1: "Construye una base sólida con palabras y frases cotidianas.",
  A2: "Habla de experiencias, planes y situaciones conocidas.",
  B1: "Conversa con seguridad y entiende ideas más amplias.",
  B2: "Expresa opiniones con fluidez y argumenta tus ideas.",
  C1: "Domina matices, estilos y conversaciones complejas.",
};

const lessonIcons = ["👋", "🎧", "🎨", "⚡", "🌟", "🧩", "🎯", "🚀"];

export const contentLessons: Lesson[] = courseLevels.flatMap((level) => courseRoadmaps[level].map((entry, index) => ({
  id: `${level.toLowerCase()}-${entry.id}`,
  level,
  number: index + 1,
  title: entry.title_target,
  summary: entry.learning_objectives[0] ?? entry.theme_focus,
  icon: lessonIcons[index % lessonIcons.length],
  unit: entry.unit_id,
  unitTitle: entry.unit_title,
  duration: entry.estimated_minutes,
  sourceId: entry.id,
})));

export const a1Lessons = contentLessons.filter((lesson) => lesson.level === "A1");

export const allLessons: Lesson[] = contentLessons;
export const validLessonIds = new Set(allLessons.map((lesson) => lesson.id));
