"use client";

import type { LessonActivity, LessonQuizQuestion } from "../../../course-content";
import type { EnglishSpeaker } from "../../academy/types";
import { cleanMarkdown } from "../lesson-utils";
import type { LessonFeedback } from "../types";
import { ActivityInput } from "./ActivityInput";

type QuestionCardProps = {
  item: LessonActivity | LessonQuizQuestion;
  index: number;
  total: number;
  answer: string;
  feedback: LessonFeedback;
  nextLabel: string;
  onAnswer: (answer: string) => void;
  onFeedback: (feedback: LessonFeedback) => void;
  onVerify: (item: LessonActivity | LessonQuizQuestion) => void;
  onNext: () => void;
  onSpeak: EnglishSpeaker;
};

export function QuestionCard({ item, index, total, answer, feedback, nextLabel, onAnswer, onFeedback, onVerify, onNext, onSpeak }: QuestionCardProps) {
  const exercise = "prompt_md" in item;
  const prompt = exercise ? cleanMarkdown(item.prompt_md) : item.prompt_form;
  const promptTarget = exercise ? item.reading_target : item.prompt_target;
  const readingTarget = exercise ? undefined : item.reading_target;
  const explanation = exercise ? item.explanation_md : item.explanation_form;
  const explanationTarget = exercise ? undefined : item.explanation_target;
  const production = item.kind === "free_production";

  return <article className="a1-question-card">
    <div className="a1-question-meta"><div><span>{item.kind.replaceAll("_", " ")}</span>{item.difficulty && <span>{item.difficulty}</span>}{"points" in item && item.points && <span>{item.points} puntos</span>}</div><strong>{index + 1} / {total}</strong></div>
    <h3>{prompt}</h3>{promptTarget && <small>{promptTarget}</small>}{readingTarget && <small>Pronunciación: {readingTarget}</small>}
    {item.passage_md && <section className="a1-activity-source reading"><span>LECTURA</span><p>{cleanMarkdown(item.passage_md)}</p></section>}
    {item.transcript && <section className="a1-activity-source listening"><div><span>AUDIO EN INGLÉS</span><button onClick={() => onSpeak(item.transcript ?? "", "sentence")}>🔊 Escuchar audio</button></div><details><summary>Ver guion después de escuchar</summary><p>{item.transcript}</p></details></section>}
    <ActivityInput key={item.id} item={item} answer={answer} feedback={feedback} onAnswer={onAnswer} onFeedback={onFeedback} />
    {feedback !== "idle" && <div className={`a1-feedback ${feedback}`}><span>{feedback === "correct" ? "✓" : "↻"}</span><div><strong>{feedback === "correct" ? production ? "¡Producción registrada!" : "¡Respuesta correcta!" : production ? "Desarrolla un poco más tu respuesta." : "Todavía no. Revisa la explicación."}</strong><p>{cleanMarkdown(explanation)}</p>{explanationTarget && <small>{cleanMarkdown(explanationTarget)}</small>}{production && feedback === "correct" && (item.sample_answers?.length ?? 0) > 0 && <details><summary>Comparar con respuestas modelo</summary>{item.sample_answers?.map((sample) => <p key={sample}>• {sample}</p>)}</details>}</div></div>}
    <footer>{feedback === "correct" ? <button onClick={onNext}>{nextLabel}</button> : <button onClick={() => onVerify(item)} disabled={!answer}>Comprobar respuesta</button>}</footer>
  </article>;
}
