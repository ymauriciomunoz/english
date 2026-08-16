"use client";

import { useCallback, useState } from "react";
import type { SpeechMode, VoiceAccent } from "../types";

const preferredVoices: Record<VoiceAccent, RegExp[]> = {
  US: [/Aria/i, /Jenny/i, /Ava/i, /Samantha/i, /Google US English/i, /Zira/i],
  UK: [/Sonia/i, /Libby/i, /Ryan/i, /Daniel/i, /Google UK English/i, /Hazel/i],
};

export function useEnglishSpeech() {
  const [voiceAccent, setVoiceAccent] = useState<VoiceAccent>("US");
  const [speechMessage, setSpeechMessage] = useState("Toca el botón para escuchar");

  const speakEnglish = useCallback((text: string, mode: SpeechMode = "sentence") => {
    if (!("speechSynthesis" in window)) {
      setSpeechMessage("El audio no está disponible en este navegador");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceAccent === "US" ? "en-US" : "en-GB";
    utterance.rate = mode === "word" ? 0.72 : 0.84;
    utterance.pitch = 1;

    const locale = voiceAccent === "US" ? "en-us" : "en-gb";
    const voices = window.speechSynthesis.getVoices().filter((voice) => voice.lang.toLowerCase().startsWith(locale));
    const naturalVoice = preferredVoices[voiceAccent]
      .map((pattern) => voices.find((voice) => pattern.test(voice.name)))
      .find(Boolean) ?? voices[0];
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => setSpeechMessage(mode === "word" ? `Escuchando “${text}”…` : "Escuchando la frase completa…");
    utterance.onend = () => setSpeechMessage("Puedes escucharlo otra vez");
    window.speechSynthesis.speak(utterance);
  }, [voiceAccent]);

  return { voiceAccent, setVoiceAccent, speechMessage, setSpeechMessage, speakEnglish };
}
