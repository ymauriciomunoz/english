import { allLessons, levels } from "./course-data";
import type { Lesson, Level } from "./types";

export function getStudentInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("") || "BU";
}

export function getLevelLessons(level: Level) {
  return allLessons.filter((lesson) => lesson.level === level);
}

export function isLevelUnlocked(level: Level, completed: string[]) {
  const index = levels.indexOf(level);
  if (index === 0) return true;
  return getLevelLessons(levels[index - 1]).every((lesson) => completed.includes(lesson.id));
}

export function isLessonUnlocked(lesson: Lesson, completed: string[]) {
  if (!isLevelUnlocked(lesson.level, completed)) return false;
  const lessons = getLevelLessons(lesson.level);
  const index = lessons.findIndex((candidate) => candidate.id === lesson.id);
  return index <= 0 || completed.includes(lessons[index - 1].id);
}

export function getLevelCompleted(level: Level, completed: string[]) {
  return completed.filter((id) => id.startsWith(level.toLowerCase())).length;
}
