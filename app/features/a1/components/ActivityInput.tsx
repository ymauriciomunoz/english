"use client";

import { useState } from "react";
import type { A1Activity, A1QuizQuestion } from "../../../a1-expanded-course";
import { distributeCorrectOption, normalizeAnswer, orderingOptions, uniqueOptions } from "../lesson-utils";
import type { LessonFeedback } from "../types";

type ActivityInputProps = {
  item: A1Activity | A1QuizQuestion;
  answer: string;
  feedback: LessonFeedback;
  onAnswer: (answer: string) => void;
  onFeedback: (feedback: LessonFeedback) => void;
};

export function ActivityInput({ item, answer, feedback, onAnswer, onFeedback }: ActivityInputProps) {
  const [order, setOrder] = useState<string[]>([]);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const resetFeedback = () => onFeedback("idle");

  if (item.kind === "matching" && Array.isArray(item.correct_answer)) {
    const pairs = item.correct_answer.map((pair) => {
      const [left, ...right] = pair.split("=");
      return { left, right: right.join("=") };
    });
    const choices = [...new Set(pairs.map((pair) => pair.right))].reverse();
    return <div className="a1-match-list">{pairs.map((pair) => <label key={pair.left}>
      <strong>{pair.left}</strong><span>→</span>
      <select value={matches[pair.left] ?? ""} onChange={(event) => {
        const next = { ...matches, [pair.left]: event.target.value };
        setMatches(next);
        onAnswer(Object.entries(next).map(([left, right]) => `${left}=${right}`).join("|"));
        resetFeedback();
      }}><option value="">Elige una pareja</option>{choices.map((choice) => <option key={choice} value={choice}>{choice}</option>)}</select>
    </label>)}</div>;
  }

  if (item.kind === "ordering") {
    const options = orderingOptions(item.options, item.correct_answer);
    if (options.length) return <div className="a1-order-builder">
      <div className="a1-order-result">{order.length ? order.map((value) => value.replace(/-\d+$/, "")).join(" ") : "Selecciona las palabras en el orden correcto"}</div>
      <div className="a1-order-options">{options.map((option, index) => {
        const token = `${option}-${index}`;
        const selected = order.includes(token);
        return <button key={token} className={selected ? "used" : ""} disabled={selected} onClick={() => {
          const next = [...order, token];
          setOrder(next);
          onAnswer(next.map((value) => value.replace(/-\d+$/, "")).join(" "));
          resetFeedback();
        }}>{option}</button>;
      })}</div>
      <button className="a1-reset-order" onClick={() => { setOrder([]); onAnswer(""); resetFeedback(); }}>↻ Volver a ordenar</button>
    </div>;
  }

  const options = distributeCorrectOption(uniqueOptions(item.options, item.correct_answer), item);
  if (options.length) return <div className="a1-answer-grid">{options.map((option, index) => {
    const correct = normalizeAnswer(option) === normalizeAnswer(item.correct_answer);
    return <button key={`${option}-${index}`} onClick={() => { onAnswer(option); resetFeedback(); }} className={(answer === option ? "selected " : "") + (feedback !== "idle" && correct ? "right" : "")}><span>{index + 1}</span>{option}</button>;
  })}</div>;

  return <label className="a1-text-answer"><span>Escribe tu respuesta</span><input value={answer} onChange={(event) => { onAnswer(event.target.value); resetFeedback(); }} placeholder="Tu respuesta…" autoComplete="off" /></label>;
}
