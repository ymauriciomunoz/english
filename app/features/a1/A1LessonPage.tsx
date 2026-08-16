"use client";

import { useMemo, useState } from "react";
import type { A1CourseEntry, LessonAnswer } from "../../a1-expanded-course";
import type { EnglishSpeaker } from "../academy/types";
import { getPrerequisiteLabels, normalizeAnswer, uniqueLabels } from "./lesson-utils";
import { lessonSections, type LessonFeedback, type LessonSectionId } from "./types";
import { LessonSidebar, LessonTopbar } from "./components/LessonNavigation";
import { QuestionCard } from "./components/QuestionCard";
import { LessonCompletion, LessonFlashcards, LessonIntroduction, LessonTheory, LessonVocabulary } from "./components/LessonSections";

type A1LessonPageProps = {
  entry: A1CourseEntry;
  courseEntries: A1CourseEntry[];
  lessonNumber: number;
  totalLessons: number;
  onExit: () => void;
  onComplete: () => void;
  onNextLesson: () => void;
  onSpeak: EnglishSpeaker;
};

export default function A1LessonPage({ entry, courseEntries, lessonNumber, totalLessons, onExit, onComplete, onNextLesson, onSpeak }: A1LessonPageProps) {
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
  const grammarFocus = [...new Set([...lesson.grammar_focus, ...(entry.grammar.new ?? []), ...(entry.grammar.review ?? [])])];
  const objectives = uniqueLabels([entry.can_do, ...lesson.learning_objectives]);
  const prerequisiteLabels = getPrerequisiteLabels(entry, courseEntries);

  const changeSection = (next: LessonSectionId) => {
    setSection(next);
    setAnswer("");
    setFeedback("idle");
  };

  const verify = (correctAnswer: LessonAnswer) => {
    if (!answer) return;
    const selected = Array.isArray(correctAnswer) ? answer.split("|").filter(Boolean) : answer;
    setFeedback(normalizeAnswer(selected) === normalizeAnswer(correctAnswer) ? "correct" : "wrong");
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

  return <main className="a1-lesson-page">
    <LessonTopbar entry={entry} lessonNumber={lessonNumber} totalLessons={totalLessons} progress={progress} onExit={onExit} />
    <div className="a1-lesson-layout">
      <LessonSidebar entry={entry} activeSection={section} activeIndex={sectionIndex} completed={completed} onSection={changeSection} />
      <article className="a1-lesson-canvas">
        {section === "inicio" && <LessonIntroduction entry={entry} lesson={lesson} objectives={objectives} prerequisiteLabels={prerequisiteLabels} questionCount={questions.length} onNext={() => changeSection("teoria")} />}
        {section === "teoria" && <LessonTheory entry={entry} lesson={lesson} grammarFocus={grammarFocus} onSpeak={onSpeak} onNext={() => changeSection("vocabulario")} />}
        {section === "vocabulario" && <LessonVocabulary lesson={lesson} onSpeak={onSpeak} onNext={() => changeSection("ejercicios")} />}
        {section === "ejercicios" && exercise && <section className="a1-challenge-section"><header className="a1-section-title"><span>03 · PRACTICA</span><h2>Ejercicios guiados</h2><p>Resuelve cada actividad para continuar.</p></header><QuestionCard item={exercise} index={exerciseIndex} total={lesson.exercises.length} answer={answer} feedback={feedback} nextLabel={exerciseIndex === lesson.exercises.length - 1 ? "Continuar a tarjetas →" : "Siguiente →"} onAnswer={setAnswer} onFeedback={setFeedback} onVerify={verify} onNext={nextExercise} /><div className="a1-step-progress"><i style={{ width: `${((exerciseIndex + (feedback === "correct" ? 1 : 0)) / lesson.exercises.length) * 100}%` }} /></div></section>}
        {section === "tarjetas" && <LessonFlashcards lesson={lesson} onSpeak={onSpeak} onNext={() => changeSection("evaluacion")} />}
        {section === "evaluacion" && !completed && question && <section className="a1-challenge-section"><header className="a1-section-title"><span>05 · DEMUESTRA</span><h2>{lesson.quiz[0]?.title_form || "Evaluación final"}</h2>{lesson.quiz[0]?.title_target && <p><strong>{lesson.quiz[0].title_target}</strong></p>}<p>Necesitas {lesson.quiz[0]?.passing_score ?? 80}% para completar la lección. Puedes corregir cada respuesta antes de continuar.</p></header><QuestionCard item={question} index={quizIndex} total={questions.length} answer={answer} feedback={feedback} nextLabel={quizIndex === questions.length - 1 ? "Completar la lección →" : "Siguiente →"} onAnswer={setAnswer} onFeedback={setFeedback} onVerify={verify} onNext={nextQuestion} /><div className="a1-step-progress"><i style={{ width: `${((quizIndex + (feedback === "correct" ? 1 : 0)) / questions.length) * 100}%` }} /></div></section>}
        {section === "evaluacion" && completed && <LessonCompletion entry={entry} questionCount={questions.length} lessonNumber={lessonNumber} totalLessons={totalLessons} onNextLesson={onNextLesson} onExit={onExit} />}
      </article>
    </div>
  </main>;
}
