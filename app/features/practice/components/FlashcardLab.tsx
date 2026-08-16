"use client";

import type { EnglishSpeaker } from "../../academy/types";
import type { PracticeCard } from "../types";

type FlashcardLabProps = {
  card: PracticeCard;
  position: number;
  total: number;
  flipped: boolean;
  mastered: boolean;
  onFlip: () => void;
  onMove: (direction: number) => void;
  onMix: () => void;
  onToggleMastered: () => void;
  onSpeak: EnglishSpeaker;
};

export function FlashcardLab({ card, position, total, flipped, mastered, onFlip, onMove, onMix, onToggleMastered, onSpeak }: FlashcardLabProps) {
  return <article className="flashcard-lab">
    <header><div><span className="eyebrow dark">TARJETAS EN INGLÉS</span><h3>Palabra del momento</h3></div><div className="bank-actions"><span>{position} / {total}</span><button onClick={onMix}>↻ Mezclar</button></div></header>
    <div className="card-stage">
      <div className={`english-card ${flipped ? "flipped" : ""}`} role="button" tabIndex={0} onClick={onFlip} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") onFlip(); }} aria-label="Voltear tarjeta">
        {!flipped
          ? <div className="card-front"><span>{card.emoji}</span><small>ENGLISH</small><h2>{card.word}</h2><p>Toca para descubrir el significado</p></div>
          : <div className="card-back"><small>EN ESPAÑOL</small><h2>{card.translation}</h2><p>“{card.example}”</p><button className="example-audio" onKeyDown={(event) => event.stopPropagation()} onClick={(event) => { event.stopPropagation(); onSpeak(card.example, "sentence"); }}>🔊 Escuchar frase completa</button><span>Toca fuera del botón para volver</span></div>}
      </div>
    </div>
    <div className="card-controls"><button onClick={() => onMove(-1)} aria-label="Tarjeta anterior">←</button><button className="listen-word" onClick={() => onSpeak(card.word, "word")}>🔊 Escuchar “{card.word}”</button><button onClick={() => onMove(1)} aria-label="Tarjeta siguiente">→</button></div>
    <button className={`master-card ${mastered ? "mastered" : ""}`} onClick={onToggleMastered}>{mastered ? "✓ Ya la dominas" : "☆ Marcar como aprendida"}</button>
  </article>;
}
