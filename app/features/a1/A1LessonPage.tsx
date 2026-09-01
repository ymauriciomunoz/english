"use client";

import { useMemo, useState, type CSSProperties } from "react";
import type { CourseCatalogEntry, CourseEntry, LessonActivity, LessonQuizQuestion } from "../../course-content";
import { levelData, levelVisuals } from "../academy/course-data";
import type { CourseContentLevel, EnglishSpeaker } from "../academy/types";
import { getPrerequisiteLabels, normalizeAnswer, uniqueLabels } from "./lesson-utils";
import { lessonSections, type LessonFeedback, type LessonSectionId } from "./types";
import { LessonSidebar, LessonTopbar } from "./components/LessonNavigation";
import { QuestionCard } from "./components/QuestionCard";
import { LessonCompletion, LessonFlashcards, LessonIntroduction, LessonTheory, LessonVocabulary } from "./components/LessonSections";

type A1LessonPageProps = {
  level: CourseContentLevel;
  entry: CourseEntry;
  courseEntries: CourseCatalogEntry[];
  lessonNumber: number;
  totalLessons: number;
  onExit: () => void;
  onComplete: () => void;
  onNextLesson: () => void;
  onSpeak: EnglishSpeaker;
};

export default function A1LessonPage({ level, entry, courseEntries, lessonNumber, totalLessons, onExit, onComplete, onNextLesson, onSpeak }: A1LessonPageProps) {
  const lesson = entry.content;
  const [section, setSection] = useState<LessonSectionId>("inicio");
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<LessonFeedback>("idle");
  const [completed, setCompleted] = useState(false);
  const questions = useMemo(() => lesson.quiz.flatMap((quiz) => quiz.questions), [lesson.quiz]);
  const exercise = lesson.exercises[exerciseIndex];
  const question = questions[quizIndex];
  const sectionIndex = lessonSections.findIndex((item) => item.id === section);
  const progress = completed ? 100 : Math.round(((sectionIndex + 1) / lessonSections.length) * 100);
  const grammarFocus = [...new Set([...lesson.grammar_focus, ...entry.grammar_focus])];
  const objectives = uniqueLabels(entry.learning_objectives.length > 0 ? entry.learning_objectives : lesson.learning_objectives);
  const prerequisiteLabels = getPrerequisiteLabels(entry, courseEntries);

  const changeSection = (next: LessonSectionId) => {
    setSection(next);
    setAnswer("");
    setFeedback("idle");
  };

  const verify = (item: LessonActivity | LessonQuizQuestion) => {
    if (!answer) return;
    if (item.kind === "free_production") {
      setFeedback(answer.trim().split(/\s+/).length >= 2 ? "correct" : "wrong");
      return;
    }
    const selected = Array.isArray(item.correct_answer) ? answer.split("|").filter(Boolean) : answer;
    setFeedback(normalizeAnswer(selected) === normalizeAnswer(item.correct_answer) ? "correct" : "wrong");
  };

  const nextExercise = () => {
    if (exerciseIndex < lesson.exercises.length - 1) {
      setExerciseIndex((index) => index + 1);
      setAnswer("");
      setFeedback("idle");
    } else changeSection("tarjetas");
  };

  const nextQuestion = () => {
    if (quizIndex < questions.length - 1) {
      setQuizIndex((index) => index + 1);
      setAnswer("");
      setFeedback("idle");
    } else {
      setCompleted(true);
      onComplete();
    }
  };

  return <main className="a1-lesson-page" style={{ "--lesson-accent": levelData[level].color, "--lesson-secondary": levelVisuals[level].secondary } as CSSProperties}>
    <LessonTopbar level={level} entry={entry} lessonNumber={lessonNumber} totalLessons={totalLessons} progress={progress} onExit={onExit} />
    <div className="a1-lesson-layout">
      <LessonSidebar level={level} entry={entry} activeSection={section} activeIndex={sectionIndex} completed={completed} onSection={changeSection} />
      <article className="a1-lesson-canvas">
        {section === "inicio" && <LessonIntroduction level={level} entry={entry} lesson={lesson} objectives={objectives} prerequisiteLabels={prerequisiteLabels} questionCount={questions.length} onNext={() => changeSection("teoria")} />}
        {section === "teoria" && <LessonTheory entry={entry} lesson={lesson} grammarFocus={grammarFocus} onSpeak={onSpeak} onNext={() => changeSection("vocabulario")} />}
        {section === "vocabulario" && <LessonVocabulary entry={entry} lesson={lesson} onSpeak={onSpeak} onNext={() => changeSection("ejercicios")} />}
        {section === "ejercicios" && exercise && <section className="a1-challenge-section"><header className="a1-section-title"><span>03 · PRACTICA</span><h2>Ejercicios guiados</h2><p>Resuelve cada actividad para continuar.</p></header><QuestionCard item={exercise} index={exerciseIndex} total={lesson.exercises.length} answer={answer} feedback={feedback} nextLabel={exerciseIndex === lesson.exercises.length - 1 ? "Continuar a tarjetas →" : "Siguiente →"} onAnswer={setAnswer} onFeedback={setFeedback} onVerify={verify} onNext={nextExercise} onSpeak={onSpeak} /><div className="a1-step-progress"><i style={{ width: `${((exerciseIndex + (feedback === "correct" ? 1 : 0)) / lesson.exercises.length) * 100}%` }} /></div></section>}
        {section === "tarjetas" && <LessonFlashcards lesson={lesson} onSpeak={onSpeak} onNext={() => changeSection("evaluacion")} />}
        {section === "evaluacion" && !completed && question && <section className="a1-challenge-section"><header className="a1-section-title"><span>05 · DEMUESTRA</span><h2>{lesson.quiz[0]?.title_form || "Evaluación final"}</h2>{lesson.quiz[0]?.title_target && <p><strong>{lesson.quiz[0].title_target}</strong></p>}<p>Meta académica de referencia: {lesson.quiz[0]?.passing_score ?? 80}%. En esta práctica guiada puedes corregir cada respuesta antes de continuar.</p></header><QuestionCard item={question} index={quizIndex} total={questions.length} answer={answer} feedback={feedback} nextLabel={quizIndex === questions.length - 1 ? "Completar la lección →" : "Siguiente →"} onAnswer={setAnswer} onFeedback={setFeedback} onVerify={verify} onNext={nextQuestion} onSpeak={onSpeak} /><div className="a1-step-progress"><i style={{ width: `${((quizIndex + (feedback === "correct" ? 1 : 0)) / questions.length) * 100}%` }} /></div></section>}
        {section === "evaluacion" && completed && <LessonCompletion entry={entry} questionCount={questions.length} lessonNumber={lessonNumber} totalLessons={totalLessons} onNextLesson={onNextLesson} onExit={onExit} />}
      </article>
    </div>
  </main>;
}
