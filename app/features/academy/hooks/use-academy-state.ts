"use client";

import { useMemo, useState, type FormEvent } from "react";
import { a1Roadmap } from "../../../a1-expanded-course";
import { allLessons, courseByLevel, levels, validLessonIds } from "../course-data";
import { getLevelLessons, isLessonUnlocked } from "../course-utils";
import type { AppView, Feedback, LegacyLevel, Lesson, Level } from "../types";
import { usePersistentState } from "./use-persistent-state";

function parseCompleted(value: unknown) {
  if (!Array.isArray(value)) return [];
  return value.filter((id): id is string => typeof id === "string" && validLessonIds.has(id));
}

function parseName(value: unknown) {
  return typeof value === "string" && value.trim() ? value : "Explorador";
}

function isLegacyLevel(level: Level): level is LegacyLevel {
  return level !== "A1";
}

export function useAcademyState() {
  const [completed, setCompleted] = usePersistentState<string[]>("brightup-progress-v2", [], parseCompleted);
  const [studentName, setStudentName] = usePersistentState<string>("brightup-student-name", "Explorador", parseName);
  const [selectedLevel, setSelectedLevel] = useState<Level>("A1");
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [lessonStep, setLessonStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState<Feedback>("idle");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeView, setActiveView] = useState<AppView>("home");
  const [nameDraft, setNameDraft] = useState("Explorador");
  const [editingName, setEditingName] = useState(false);

  const courseCompleted = allLessons.every((lesson) => completed.includes(lesson.id));
  const totalProgress = Math.round((completed.length / allLessons.length) * 100);
  const activeA1Entry = activeLesson?.level === "A1" ? a1Roadmap[activeLesson.number - 1] : null;
  const activeContent = activeLesson && isLegacyLevel(activeLesson.level)
    ? courseByLevel[activeLesson.level][activeLesson.number - 1]
    : null;
  const activeActivity = activeContent && lessonStep > 0 ? activeContent.activities[lessonStep - 1] : null;
  const displayedOptions = useMemo(() => {
    if (!activeActivity || !activeLesson) return [];
    const offset = (activeLesson.number * 2 + lessonStep + levels.indexOf(activeLesson.level)) % activeActivity.options.length;
    return [...activeActivity.options.slice(offset), ...activeActivity.options.slice(0, offset)];
  }, [activeActivity, activeLesson, lessonStep]);

  const openLesson = (lesson: Lesson) => {
    if (!isLessonUnlocked(lesson, completed)) return;
    setActiveLesson(lesson);
    setLessonStep(0);
    setSelectedAnswer("");
    setFeedback("idle");
  };

  const closeLesson = () => setActiveLesson(null);

  const completeA1Lesson = () => {
    if (!activeLesson) return;
    setCompleted((current) => current.includes(activeLesson.id) ? current : [...current, activeLesson.id]);
  };

  const exitA1Lesson = () => {
    setActiveLesson(null);
    setActiveView("route");
    window.history.replaceState(null, "", "#ruta");
  };

  const checkLegacyAnswer = () => {
    if (!activeLesson || !activeContent || !activeActivity || !selectedAnswer) return;
    const correct = selectedAnswer === activeActivity.answer;
    setFeedback(correct ? "correct" : "wrong");
    if (correct && lessonStep === activeContent.activities.length) {
      setCompleted((current) => current.includes(activeLesson.id) ? current : [...current, activeLesson.id]);
    }
  };

  const continueLegacyLesson = () => {
    if (!activeLesson || !activeContent) return;
    if (lessonStep === 0 || lessonStep < activeContent.activities.length) {
      setLessonStep((step) => step + 1);
      setSelectedAnswer("");
      setFeedback("idle");
      return;
    }
    const following = allLessons[allLessons.findIndex((lesson) => lesson.id === activeLesson.id) + 1];
    if (following) {
      setSelectedLevel(following.level);
      setActiveLesson(following);
      setLessonStep(0);
      setSelectedAnswer("");
      setFeedback("idle");
    } else {
      setActiveLesson(null);
    }
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
    window.history.replaceState(null, "", "#inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showRoute = (section = "ruta") => {
    setActiveView("route");
    setMenuOpen(false);
    window.history.replaceState(null, "", `#${section}`);
    window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const showPractice = () => {
    setActiveView("practice");
    setMenuOpen(false);
    window.history.replaceState(null, "", "#practica");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextA1Lesson = () => {
    if (!activeLesson) return;
    const following = getLevelLessons("A1")[activeLesson.number];
    if (following) openLesson(following);
    else setActiveLesson(null);
  };

  return {
    completed, selectedLevel, setSelectedLevel, activeLesson, activeA1Entry, activeContent, activeActivity,
    lessonStep, selectedAnswer, setSelectedAnswer, feedback, setFeedback, displayedOptions,
    menuOpen, setMenuOpen, activeView, studentName, nameDraft, setNameDraft, editingName,
    courseCompleted, totalProgress, openLesson, closeLesson, completeA1Lesson, exitA1Lesson, nextA1Lesson,
    checkLegacyAnswer, continueLegacyLesson, saveStudentName, startEditingName, cancelEditingName,
    showHome, showRoute, showPractice,
  };
}
