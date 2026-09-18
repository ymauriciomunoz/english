"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { loadCourseEntry, type CourseEntry } from "../../../course-content";
import { allLessons, validLessonIds } from "../course-data";
import { getLevelLessons } from "../course-utils";
import type { AppView, Lesson, Level } from "../types";
import { usePersistentState } from "./use-persistent-state";

function parseCompleted(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((id): id is string => typeof id === "string" && validLessonIds.has(id));
}

function parseName(value: unknown) {
  return typeof value === "string" && value.trim() ? value : "Explorador";
}

export function useAcademyState(initialView: AppView = "home", initialLevel: Level = "A1") {
  const router = useRouter();
  const [completed, setCompleted] = usePersistentState<string[]>("learno-progress-v2", [], parseCompleted);
  const [studentName, setStudentName] = usePersistentState<string>("learno-student-name", "Explorador", parseName);
  const [selectedLevel, setSelectedLevel] = useState<Level>(initialLevel);
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [activeCourseEntry, setActiveCourseEntry] = useState<CourseEntry | null>(null);
  const [courseLessonError, setCourseLessonError] = useState("");
  const lessonRequest = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<AppView>(initialView);
  const [nameDraft, setNameDraft] = useState("Explorador");
  const [editingName, setEditingName] = useState(false);

  const courseCompleted = allLessons.every((lesson) => completed.includes(lesson.id));
  const totalProgress = Math.round((completed.length / allLessons.length) * 100);
  const openLesson = (lesson: Lesson) => {
    const requestId = lessonRequest.current + 1;
    lessonRequest.current = requestId;
    setActiveLesson(lesson);
    setActiveCourseEntry(null);
    setCourseLessonError("");
    if (lesson.sourceId) {
      void loadCourseEntry(lesson.level, lesson.sourceId)
        .then((entry) => {
          if (lessonRequest.current === requestId) setActiveCourseEntry(entry);
        })
        .catch(() => {
          if (lessonRequest.current === requestId) setCourseLessonError("No pudimos cargar esta lección. Vuelve a la ruta e inténtalo de nuevo.");
        });
    }
  };

  const closeLesson = () => {
    lessonRequest.current += 1;
    setActiveLesson(null);
    setActiveCourseEntry(null);
    setCourseLessonError("");
  };

  const completeCourseLesson = () => {
    if (!activeLesson) return;
    setCompleted((current) => current.includes(activeLesson.id) ? current : [...current, activeLesson.id]);
  };

  const exitCourseLesson = () => {
    closeLesson();
    setActiveView("route");
    router.push(`/cursos/${selectedLevel.toLowerCase()}`);
  };

  const saveStudentName = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanName = nameDraft.trim().slice(0, 24);
    if (!cleanName) return;
    setStudentName(cleanName);
    setNameDraft(cleanName);
    setEditingName(false);
  };

  const startEditingName = () => {
    setNameDraft(studentName);
    setEditingName(true);
  };

  const cancelEditingName = () => {
    setNameDraft(studentName);
    setEditingName(false);
  };

  const showHome = () => {
    setActiveView("home");
    setMenuOpen(false);
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showRoute = (section = "ruta") => {
    setActiveView("route");
    setMenuOpen(false);
    router.push(`/cursos/${selectedLevel.toLowerCase()}${section === "ruta" ? "" : `#${section}`}`);
    window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const showPractice = () => {
    setActiveView("practice");
    setMenuOpen(false);
    router.push("/practica");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextCourseLesson = () => {
    if (!activeLesson) return;
    const following = getLevelLessons(activeLesson.level)[activeLesson.number];
    if (following) openLesson(following);
    else closeLesson();
  };

  const selectLevel = (level: Level) => {
    setSelectedLevel(level);
    router.push(`/cursos/${level.toLowerCase()}`);
  };

  return {
    completed, selectedLevel, selectLevel, activeLesson, activeCourseEntry, courseLessonError,
    menuOpen, setMenuOpen, activeView, studentName, nameDraft, setNameDraft, editingName,
    courseCompleted, totalProgress, openLesson, closeLesson, completeCourseLesson, exitCourseLesson, nextCourseLesson,
    saveStudentName, startEditingName, cancelEditingName,
    showHome, showRoute, showPractice,
  };
}
