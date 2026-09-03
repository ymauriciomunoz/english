"use client";

import { useMemo, useState } from "react";
import type { EnglishSpeaker, Feedback, VoiceAccent } from "../academy/types";
import { usePersistentState } from "../academy/hooks/use-persistent-state";
import { listeningChallenges, practiceCardBank, usefulPhraseBank } from "./practice-data";
import { getDailySeed, shuffledWithSeed } from "./practice-utils";
import { FlashcardLab } from "./components/FlashcardLab";
import { ListeningLab } from "./components/ListeningLab";
import { UsefulPhrases } from "./components/UsefulPhrases";
import { AdSenseSlot } from "../adsense/AdSenseSlot";

type PracticeViewProps = {
  voiceAccent: VoiceAccent;
  speechMessage: string;
  onAccentChange: (accent: VoiceAccent) => void;
  onSpeechMessage: (message: string) => void;
  onSpeak: EnglishSpeaker;
};

export function PracticeView({ voiceAccent, speechMessage, onAccentChange, onSpeechMessage, onSpeak }: PracticeViewProps) {
  const dailySeed = getDailySeed();
  const [cardMixSeed, setCardMixSeed] = useState(dailySeed);
  const [phraseMixSeed, setPhraseMixSeed] = useState(dailySeed + 41);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = usePersistentState<string[]>("brightup-mastered-cards", []);
  const [practiceXp, setPracticeXp] = usePersistentState<number>("brightup-practice-xp", 0);
  const [listeningIndex, setListeningIndex] = useState(0);
  const [listeningAnswer, setListeningAnswer] = useState("");
  const [listeningResult, setListeningResult] = useState<Exclude<Feedback, "idle"> | null>(null);

  const cards = useMemo(() => shuffledWithSeed(practiceCardBank, cardMixSeed).slice(0, 10), [cardMixSeed]);
  const phrases = useMemo(() => shuffledWithSeed(usefulPhraseBank, phraseMixSeed).slice(0, 3), [phraseMixSeed]);
  const challenges = useMemo(() => shuffledWithSeed(listeningChallenges, phraseMixSeed + 19), [phraseMixSeed]);
  const card = cards[cardIndex];
  const challenge = challenges[listeningIndex];

  const moveCard = (direction: number) => {
    setCardIndex((index) => (index + direction + cards.length) % cards.length);
    setCardFlipped(false);
  };

  const mixCards = () => {
    setCardMixSeed((seed) => seed + 97);
    setCardIndex(0);
    setCardFlipped(false);
    onSpeechMessage("Nueva colección preparada");
  };

  const mixPhrases = () => {
    setPhraseMixSeed((seed) => seed + 53);
    setListeningIndex(0);
    setListeningAnswer("");
    setListeningResult(null);
    onSpeechMessage("Nuevas frases preparadas");
  };

  const toggleMastered = () => setMasteredCards((current) => current.includes(card.word)
    ? current.filter((word) => word !== card.word)
    : [...current, card.word]);

  const chooseAnswer = (answer: string) => {
    setListeningAnswer(answer);
    const correct = answer === challenge.phrase;
    if (correct && listeningResult !== "correct") setPracticeXp((xp) => xp + 5);
    setListeningResult(correct ? "correct" : "wrong");
  };

  const nextChallenge = () => {
    setListeningIndex((index) => (index + 1) % challenges.length);
    setListeningAnswer("");
    setListeningResult(null);
    onSpeechMessage("Toca el botón para escuchar");
  };

  return <section className="practice-page" id="practica">
    <div className="practice-hero">
      <div>
        <span className="eyebrow">LABORATORIO DE INGLÉS</span>
        <h2>Escucha, juega y haz que el inglés se quede.</h2>
        <p>Practica sin presión con tarjetas, pronunciación y pequeños retos de oído. Cada sesión suma confianza.</p>
        <div className="practice-stats"><span><strong>{masteredCards.length}</strong> tarjetas dominadas</span><span><strong>{practiceXp}</strong> XP de práctica</span><span><strong>{practiceCardBank.length}</strong> palabras en el banco</span></div>
        <div className="voice-selector"><span>Elige pronunciación</span><button className={voiceAccent === "US" ? "active" : ""} onClick={() => onAccentChange("US")}>🇺🇸 Natural US</button><button className={voiceAccent === "UK" ? "active" : ""} onClick={() => onAccentChange("UK")}>🇬🇧 British</button></div>
      </div>
      <div className="sound-world" aria-hidden="true"><span>🎧</span><i className="wave w1" /><i className="wave w2" /><i className="wave w3" /><b>Hello!</b></div>
    </div>

    <div className="practice-grid">
      <FlashcardLab card={card} position={cardIndex + 1} total={cards.length} flipped={cardFlipped} mastered={masteredCards.includes(card.word)} onFlip={() => setCardFlipped((flipped) => !flipped)} onMove={moveCard} onMix={mixCards} onToggleMastered={toggleMastered} onSpeak={onSpeak} />
      <ListeningLab challenge={challenge} answer={listeningAnswer} result={listeningResult} speechMessage={speechMessage} onAnswer={chooseAnswer} onNext={nextChallenge} onSpeak={onSpeak} />
    </div>

    <UsefulPhrases phrases={phrases} onMix={mixPhrases} onSpeak={onSpeak} />
    <AdSenseSlot placement="practice" />
  </section>;
}
