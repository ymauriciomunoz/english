import { a1Roadmap } from "../../a1-expanded-course";
import { a2Course } from "../../a2-course";
import { b1Course } from "../../b1-course";
import { b2Course } from "../../b2-course";
import { c1Course } from "../../c1-course";
import type { LegacyLevel, Lesson, Level, LevelInfo, LevelVisual } from "./types";

export const levelData: Record<Level, LevelInfo> = {
  A1: { label: "Primeros pasos", color: "#6c5ce7", topics: a1Roadmap.map((lesson) => lesson.title_target) },
  A2: { label: "Explorador", color: "#00a896", topics: [
    "Mi último viaje", "Una historia divertida", "Compras inteligentes", "Direcciones en la ciudad", "Planes futuros",
    "Mis mejores amigos", "Deportes y movimiento", "Salud y bienestar", "Tecnología cotidiana", "En el restaurante",
    "Música y artistas", "El mundo natural", "Comparar y elegir", "Normas y consejos", "Experiencias geniales",
    "En el aeropuerto", "Celebraciones", "Trabajos del futuro", "Historias del pasado", "Misión A2",
  ] },
  B1: { label: "Aventurero", color: "#f59e0b", topics: [
    "Cuenta tu historia", "Noticias sorprendentes", "Sueños y objetivos", "Cuidemos el planeta", "Cine y personajes",
    "Problemas y soluciones", "Viajar con confianza", "Una vida saludable", "El poder de internet", "Cultura alrededor del mundo",
    "Expresar opiniones", "Tomar decisiones", "Relatos de misterio", "Ciencia en acción", "Aprender a aprender",
    "Trabajo en equipo", "Inventos que cambiaron todo", "Debates amistosos", "Proyecto: mi podcast", "Misión B1",
  ] },
  B2: { label: "Comunicador", color: "#ef476f", topics: [
    "Ideas que inspiran", "Comunicación sin fronteras", "El futuro de las ciudades", "Historias entre líneas", "Decisiones difíciles",
    "Arte que provoca", "Medios y mensajes", "Hábitos sostenibles", "Liderazgo positivo", "Ciencia ficción",
    "Defender una postura", "Humor en inglés", "Cambios sociales", "Mitos y leyendas", "Pensamiento crítico",
    "Presentaciones memorables", "Escritura creativa", "Entrevistas y reportajes", "Proyecto: charla TED", "Misión B2",
  ] },
  C1: { label: "Maestro del inglés", color: "#118ab2", topics: [
    "Matices del lenguaje", "Persuadir con ideas", "Voces de la literatura", "Retos globales", "Innovación y ética",
    "Lenguaje de los medios", "Historias complejas", "Debate avanzado", "Comunicación intercultural", "Argumentos sólidos",
    "Expresiones naturales", "Análisis de discursos", "Narrativa y estilo", "Ideas abstractas", "Ironía y tono",
    "Investigación en inglés", "Negociación", "Ensayo de opinión", "Proyecto final", "Gran misión C1",
  ] },
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

export const a1Lessons: Lesson[] = a1Roadmap.map((entry, index) => ({
  id: `a1-${entry.id}`,
  level: "A1",
  number: index + 1,
  title: entry.title_target,
  summary: entry.can_do,
  icon: lessonIcons[index % lessonIcons.length],
  unit: entry.unit,
  duration: entry.estimated_minutes,
  sourceId: entry.id,
}));

const legacyLessons: Lesson[] = levels
  .filter((level): level is LegacyLevel => level !== "A1")
  .flatMap((level) => levelData[level].topics.map((title, index) => ({
    id: `${level.toLowerCase()}-${index + 1}`,
    level,
    number: index + 1,
    title,
    summary: levelSummaries[level],
    icon: lessonIcons[index % lessonIcons.length],
  })));

export const allLessons: Lesson[] = [...a1Lessons, ...legacyLessons];
export const validLessonIds = new Set(allLessons.map((lesson) => lesson.id));

export const courseByLevel = {
  A2: a2Course,
  B1: b1Course,
  B2: b2Course,
  C1: c1Course,
};
