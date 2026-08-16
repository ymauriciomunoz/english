"use client";

import type { EnglishSpeaker } from "../../academy/types";
import type { UsefulPhrase } from "../types";

export function UsefulPhrases({ phrases, onMix, onSpeak }: { phrases: UsefulPhrase[]; onMix: () => void; onSpeak: EnglishSpeaker }) {
  return <section className="quick-phrases">
    <div className="quick-phrases-head"><div className="home-section-title"><span className="eyebrow dark">PRONUNCIA CONMIGO</span><h2>Tres frases útiles para hoy</h2></div><button onClick={onMix}>↻ Cambiar frases</button></div>
    <div>{phrases.map((item) => <article key={item.phrase}><span>{item.emoji}</span><div><strong>{item.phrase}</strong><small>{item.translation}</small></div><button onClick={() => onSpeak(item.phrase)} aria-label={`Escuchar ${item.phrase}`}>🔊</button></article>)}</div>
  </section>;
}
