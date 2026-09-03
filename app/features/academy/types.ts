import type { Activity, A1LessonContent } from "../../a1-course";

export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type CourseContentLevel = Level;
export type AppView = "home" | "route" | "practice";
export type Feedback = "idle" | "correct" | "wrong";
export type VoiceAccent = "US" | "UK";
export type SpeechMode = "word" | "sentence";

export type Lesson = {
  id: string;
  level: Level;
  number: number;
  title: string;
  summary: string;
  icon: string;
  unit?: number | string;
  unitTitle?: string;
  duration?: number;
  sourceId?: string;
};

export type LevelInfo = {
  label: string;
  color: string;
  topics: string[];
};

export type LevelVisual = {
  icon: string;
  motto: string;
  stage: string;
  secondary: string;
};

export type EnglishSpeaker = (text: string, mode?: SpeechMode) => void;

export type LegacyLessonContent = A1LessonContent;
export type LegacyActivity = Activity;
