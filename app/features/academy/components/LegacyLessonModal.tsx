"use client";

import { levels } from "../course-data";
import type { Feedback, LegacyActivity, LegacyLessonContent, Lesson } from "../types";

type LegacyLessonModalProps = {
  lesson: Lesson;
  content: LegacyLessonContent;
  activity: LegacyActivity | null;
  step: number;
  answer: string;
  feedback: Feedback;
  options: string[];
  onAnswer: (answer: string) => void;
  onFeedback: (feedback: Feedback) => void;
  onCheck: () => void;
  onContinue: () => void;
  onClose: () => void;
};

export function LegacyLessonModal({ lesson, content, activity, step, answer, feedback, options, onAnswer, onFeedback, onCheck, onContinue, onClose }: LegacyLessonModalProps) {
  const finalActivity = step === content.activities.length;
  const finalLevel = lesson.level === "C1";
  const nextLevel = levels[levels.indexOf(lesson.level) + 1];

  return <div className="lesson-overlay" role="dialog" aria-modal="true" aria-labelledby="lesson-title"><section className="lesson-modal">
    <header><button onClick={onClose} aria-label="Cerrar lección">×</button><div className="modal-progress"><span style={{ width: `${((step + 1) / (content.activities.length + 1)) * 100}%` }} /></div><strong>{step + 1} / {content.activities.length + 1}</strong></header>
    <div className="modal-body">
      <div className="modal-kicker"><span>{lesson.icon}</span> LECCIÓN {lesson.number} · {lesson.level}</div>
      {step === 0 ? <>
        <h2 id="lesson-title">{lesson.title}</h2><p className="lesson-objective">{content.objective}</p><div className="learn-card"><span>💡</span><div><small>EJEMPLO</small><strong>{content.example}</strong></div></div><div className="vocabulary-block"><small>PALABRAS CLAVE</small><div>{content.vocabulary.map((word) => <span key={word}>{word}</span>)}</div></div>
      </> : activity && <>
        <span className="challenge-count">RETO {step} DE {content.activities.length}</span><h2 id="lesson-title">{activity.prompt}</h2><div className="phrase-card"><button aria-label="Escuchar frase">🔊</button><strong>{activity.phrase}</strong></div><div className="answers">{options.map((option, index) => <button key={option} onClick={() => { onAnswer(option); onFeedback("idle"); }} className={`${answer === option ? "selected" : ""} ${feedback !== "idle" && option === activity.answer ? "right" : ""}`}><span>{index + 1}</span>{option}</button>)}</div>{feedback === "wrong" && <p className="lesson-tip">💡 {activity.tip}</p>}
      </>}
    </div>
    <footer className={feedback}>
      <div>{feedback === "correct" && <><span>✓</span><p><strong>¡Excelente!</strong>{finalActivity ? " Lección completada: +20 XP." : " Primer reto superado. Sigue así."}</p></>}{feedback === "wrong" && <><span>↻</span><p><strong>Casi lo tienes.</strong> Usa la pista y prueba otra opción.</p></>}</div>
      {step === 0
        ? <button className="primary-button" onClick={onContinue}>Empezar práctica →</button>
        : feedback === "correct"
          ? <button className="primary-button" onClick={onContinue}>{finalActivity ? lesson.number === 20 ? finalLevel ? "Finalizar curso →" : `Desbloquear ${nextLevel} →` : "Siguiente lección →" : "Siguiente reto →"}</button>
          : <button className="primary-button" onClick={onCheck} disabled={!answer}>Comprobar</button>}
    </footer>
  </section></div>;
}
