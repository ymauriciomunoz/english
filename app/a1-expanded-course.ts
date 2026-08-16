import roadmapJson from "./data/en/roadmap.json";
import lessonPre001 from "./data/en/lesson_pre_001.json";
import lessonPre002 from "./data/en/lesson_pre_002.json";
import lesson001 from "./data/en/lesson_001.json";
import lesson002 from "./data/en/lesson_002.json";
import lesson003 from "./data/en/lesson_003.json";
import lesson004 from "./data/en/lesson_004.json";
import lesson005 from "./data/en/lesson_005.json";
import lesson006 from "./data/en/lesson_006.json";
import lesson007 from "./data/en/lesson_007.json";
import lesson008 from "./data/en/lesson_008.json";
import lesson009 from "./data/en/lesson_009.json";
import lesson010 from "./data/en/lesson_010.json";
import lesson011 from "./data/en/lesson_011.json";
import lesson012 from "./data/en/lesson_012.json";
import lesson013 from "./data/en/lesson_013.json";
import lesson014 from "./data/en/lesson_014.json";
import lesson015 from "./data/en/lesson_015.json";
import lesson016 from "./data/en/lesson_016.json";
import lesson017 from "./data/en/lesson_017.json";
import lesson018 from "./data/en/lesson_018.json";
import lesson019 from "./data/en/lesson_019.json";
import lesson020 from "./data/en/lesson_020.json";
import lesson021 from "./data/en/lesson_021.json";
import lesson022 from "./data/en/lesson_022.json";
import lesson023 from "./data/en/lesson_023.json";
import lesson024 from "./data/en/lesson_024.json";
import lesson025 from "./data/en/lesson_025.json";
import lesson026 from "./data/en/lesson_026.json";
import lesson027 from "./data/en/lesson_027.json";
import lesson028 from "./data/en/lesson_028.json";
import lesson029 from "./data/en/lesson_029.json";
import lesson030 from "./data/en/lesson_030.json";
import lesson031 from "./data/en/lesson_031.json";
import lesson032 from "./data/en/lesson_032.json";
import lesson033 from "./data/en/lesson_033.json";
import lesson034 from "./data/en/lesson_034.json";
import lesson035 from "./data/en/lesson_035.json";
import lesson036 from "./data/en/lesson_036.json";
import lesson037 from "./data/en/lesson_037.json";
import lesson038 from "./data/en/lesson_038.json";
import lesson039 from "./data/en/lesson_039.json";
import lesson040 from "./data/en/lesson_040.json";

export type LessonAnswer = string | string[];

export type A1Example = {
  id: string;
  text_target: string;
  translation_form: string;
  highlight_words?: string[];
  reading_target?: string | null;
};

export type A1Activity = {
  id: string;
  kind: string;
  prompt_md: string;
  options?: string[] | null;
  correct_answer: LessonAnswer;
  explanation_md?: string | null;
  difficulty?: string | null;
  reading_target?: string | null;
};

export type A1QuizQuestion = {
  id: string;
  kind: string;
  prompt_form: string;
  prompt_target?: string | null;
  options?: string[] | null;
  correct_answer: LessonAnswer;
  explanation_form?: string | null;
  explanation_target?: string | null;
  points?: number | null;
  difficulty?: string | null;
  reading_target?: string | null;
  references_exercise_id?: string | null;
  references_lesson_topics?: string[];
};

export type A1Quiz = {
  id: string;
  title_form: string;
  title_target?: string | null;
  questions: A1QuizQuestion[];
  passing_score: number;
};

export type A1Vocabulary = {
  target_word: string;
  reading?: string | null;
  translation: string;
  pos?: string | null;
  example?: string | null;
  example_translation?: string | null;
};

export type A1GrammarExplanation = {
  slug: string;
  title_form: string;
  title_target?: string | null;
  description_md_form: string;
  description_md_target?: string | null;
  grammar_structure?: string | null;
  conjugation_table?: {
    name?: string;
    rows?: Array<Record<string, string | null>>;
  } | null;
  examples?: A1Example[];
  callouts?: Array<{ type: string; text_md: string }>;
  common_errors_es?: string[];
};

export type A1Flashcard = {
  id: string;
  front: string;
  back: string;
  hint?: string | null;
  reading?: string | null;
};

export type A1FullLesson = {
  id: string;
  position: number;
  unit_id: number | string;
  course_id: string;
  title_form: string;
  title_target: string;
  theme_focus: string;
  learning_objectives: string[];
  estimated_minutes: number;
  prerequisites: string[];
  grammar_focus: string[];
  vocabulary_focus_mirror?: {
    new_vocabulary?: string[];
    complementary_vocabulary?: string[];
  };
  scenario: string;
  introduction_md: string;
  intro_target?: string | null;
  examples: A1Example[];
  grammar_explanations: A1GrammarExplanation[];
  exercises: A1Activity[];
  flashcards: A1Flashcard[];
  vocabulary: A1Vocabulary[];
  quiz: A1Quiz[];
  notes_md_form: string;
};

export type A1RoadmapEntry = {
  id: string;
  position: number;
  is_pre_a1?: boolean;
  title_form: string;
  title_target: string;
  can_do: string;
  vocabulary: {
    new_lexeme_ids?: string[];
    meta_skills?: string[];
  };
  grammar: {
    new?: string[];
    review?: string[];
  };
  prerequisites: string[];
  estimated_minutes: number;
  unit: number | string;
};

const lessonFiles: Record<string, A1FullLesson> = {
  lesson_pre_001: lessonPre001 as unknown as A1FullLesson,
  lesson_pre_002: lessonPre002 as unknown as A1FullLesson,
  lesson_001: lesson001 as unknown as A1FullLesson,
  lesson_002: lesson002 as unknown as A1FullLesson,
  lesson_003: lesson003 as unknown as A1FullLesson,
  lesson_004: lesson004 as unknown as A1FullLesson,
  lesson_005: lesson005 as unknown as A1FullLesson,
  lesson_006: lesson006 as unknown as A1FullLesson,
  lesson_007: lesson007 as unknown as A1FullLesson,
  lesson_008: lesson008 as unknown as A1FullLesson,
  lesson_009: lesson009 as unknown as A1FullLesson,
  lesson_010: lesson010 as unknown as A1FullLesson,
  lesson_011: lesson011 as unknown as A1FullLesson,
  lesson_012: lesson012 as unknown as A1FullLesson,
  lesson_013: lesson013 as unknown as A1FullLesson,
  lesson_014: lesson014 as unknown as A1FullLesson,
  lesson_015: lesson015 as unknown as A1FullLesson,
  lesson_016: lesson016 as unknown as A1FullLesson,
  lesson_017: lesson017 as unknown as A1FullLesson,
  lesson_018: lesson018 as unknown as A1FullLesson,
  lesson_019: lesson019 as unknown as A1FullLesson,
  lesson_020: lesson020 as unknown as A1FullLesson,
  lesson_021: lesson021 as unknown as A1FullLesson,
  lesson_022: lesson022 as unknown as A1FullLesson,
  lesson_023: lesson023 as unknown as A1FullLesson,
  lesson_024: lesson024 as unknown as A1FullLesson,
  lesson_025: lesson025 as unknown as A1FullLesson,
  lesson_026: lesson026 as unknown as A1FullLesson,
  lesson_027: lesson027 as unknown as A1FullLesson,
  lesson_028: lesson028 as unknown as A1FullLesson,
  lesson_029: lesson029 as unknown as A1FullLesson,
  lesson_030: lesson030 as unknown as A1FullLesson,
  lesson_031: lesson031 as unknown as A1FullLesson,
  lesson_032: lesson032 as unknown as A1FullLesson,
  lesson_033: lesson033 as unknown as A1FullLesson,
  lesson_034: lesson034 as unknown as A1FullLesson,
  lesson_035: lesson035 as unknown as A1FullLesson,
  lesson_036: lesson036 as unknown as A1FullLesson,
  lesson_037: lesson037 as unknown as A1FullLesson,
  lesson_038: lesson038 as unknown as A1FullLesson,
  lesson_039: lesson039 as unknown as A1FullLesson,
  lesson_040: lesson040 as unknown as A1FullLesson,
};

const roadmap = roadmapJson as unknown as { lessons: A1RoadmapEntry[] };

export const a1Roadmap = [...roadmap.lessons]
  .sort((first, second) => first.position - second.position)
  .map((entry) => ({ ...entry, content: lessonFiles[entry.id] }))
  .filter((entry): entry is A1RoadmapEntry & { content: A1FullLesson } => Boolean(entry.content));

export type A1CourseEntry = (typeof a1Roadmap)[number];
