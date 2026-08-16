"use client";

import type { EnglishSpeaker, Feedback } from "../../academy/types";
import type { ListeningChallenge } from "../types";

type ListeningLabProps = {
  challenge: ListeningChallenge;
  answer: string;
  result: Exclude<Feedback, "idle"> | null;
  speechMessage: string;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onSpeak: EnglishSpeaker;
};

export function ListeningLab({ challenge, answer, result, speechMessage, onAnswer, onNext, onSpeak }: ListeningLabProps) {
  return <article className="listening-lab">
    <header><div><span className="eyebrow dark">RETO DE ESCUCHA</span><h3>¿Qué frase escuchaste?</h3></div><span>+5 XP</span></header>
    <div className="listen-zone"><button className={speechMessage.startsWith("Escuchando") ? "playing" : ""} onClick={() => onSpeak(challenge.phrase)} aria-label="Reproducir frase en inglés">🔊<i /><i /><i /></button><p>{speechMessage}</p><small>Escúchala las veces que necesites</small></div>
    <div className="listening-options">{challenge.options.map((option, index) => <button key={option} onClick={() => onAnswer(option)} className={`${answer === option ? "selected" : ""} ${result && option === challenge.phrase ? "correct" : ""}`}><span>{index + 1}</span>{option}</button>)}</div>
    {result && <div className={`listening-feedback ${result}`}><span>{result === "correct" ? "✓" : "↻"}</span><p><strong>{result === "correct" ? "¡Lo escuchaste muy bien!" : "Casi. Escucha una vez más."}</strong>{result === "correct" ? challenge.translation : "Presta atención al inicio y al final de la frase."}</p></div>}
    {result === "correct" && <button className="next-listening" onClick={onNext}>Siguiente audio →</button>}
  </article>;
}
