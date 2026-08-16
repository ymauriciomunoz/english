export type LessonFeedback = "idle" | "correct" | "wrong";
export type LessonSectionId = "inicio" | "teoria" | "vocabulario" | "ejercicios" | "tarjetas" | "evaluacion";

export const lessonSections: Array<{ id: LessonSectionId; label: string; eyebrow: string }> = [
  { id: "inicio", label: "Inicio", eyebrow: "CONOCE" },
  { id: "teoria", label: "Teoría", eyebrow: "COMPRENDE" },
  { id: "vocabulario", label: "Vocabulario", eyebrow: "DESCUBRE" },
  { id: "ejercicios", label: "Ejercicios", eyebrow: "PRACTICA" },
  { id: "tarjetas", label: "Tarjetas", eyebrow: "RECUERDA" },
  { id: "evaluacion", label: "Evaluación", eyebrow: "DEMUESTRA" },
];
