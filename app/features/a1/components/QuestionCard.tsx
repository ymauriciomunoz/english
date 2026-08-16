"use client";

import type { A1Activity, A1QuizQuestion, LessonAnswer } from "../../../a1-expanded-course";
import { cleanMarkdown } from "../lesson-utils";
import type { LessonFeedback } from "../types";
import { ActivityInput } from "./ActivityInput";

type QuestionCardProps = {
  item: A1Activity | A1QuizQuestion;
  index: number;
  total: number;
  answer: string;
  feedback: LessonFeedback;
  nextLabel: string;
  onAnswer: (answer: string) => void;
  onFeedback: (feedback: LessonFeedback) => void;
  onVerify: (correctAnswer: LessonAnswer) => void;
  onNext: () => void;
};

export function QuestionCard({ item, index, total, answer, feedback, nextLabel, onAnswer, onFeedback, onVerify, onNext }: QuestionCardProps) {
  const exercise = "prompt_md" in item;
  const prompt = exercise ? cleanMarkdown(item.prompt_md) : item.prompt_form;
  const promptTarget = exercise ? item.reading_target : item.prompt_target;
  const readingTarget = exercise ? undefined : item.reading_target;
  const explanation = exercise ? item.explanation_md : item.explanation_form;
  const explanationTarget = exercise ? undefined : item.explanation_target;

  return <article className="a1-question-card">
    <div className="a1-question-meta"><div><span>{item.kind.replaceAll("_", " ")}</span>{item.difficulty && <span>{item.difficulty}</span>}{"points" in item && item.points && <span>{item.points} puntos</span>}</div><strong>{index + 1} / {total}</strong></div>
    <h3>{prompt}</h3>{promptTarget && <small>{promptTarget}</small>}{readingTarget && <small>Pronunciación: {readingTarget}</small>}
    <ActivityInput key={item.id} item={item} answer={answer} feedback={feedback} onAnswer={onAnswer} onFeedback={onFeedback} />
    {feedback !== "idle" && <div className={`a1-feedback ${feedback}`}><span>{feedback === "correct" ? "✓" : "↻"}</span><div><strong>{feedback === "correct" ? "¡Respuesta correcta!" : "Todavía no. Revisa la explicación."}</strong><p>{cleanMarkdown(explanation)}</p>{explanationTarget && <small>{cleanMarkdown(explanationTarget)}</small>}</div></div>}
    <footer>{feedback === "correct" ? <button onClick={onNext}>{nextLabel}</button> : <button onClick={() => onVerify(item.correct_answer)} disabled={!answer}>Comprobar respuesta</button>}</footer>
  </article>;
}
