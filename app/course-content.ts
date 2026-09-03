/// <reference types="vite/client" />

import a1RoadmapJson from "./data/lessons_A1-20260901T222255Z-1-001/lessons_A1/roadmap.approved.json";
import a2RoadmapJson from "./data/lessons_A2-20260901T222257Z-1-001/lessons_A2/roadmap.approved.json";
import b1RoadmapJson from "./data/lessons_B1-20260901T222300Z-1-001/lessons_B1/roadmap.approved.json";
import b2RoadmapJson from "./data/lessons_B2-20260901T222302Z-1-001/lessons_B2/roadmap.approved.json";
import c1RoadmapJson from "./data/lessons_C1/roadmap.approved.json";

export type ContentLevel = "A1" | "A2" | "B1" | "B2" | "C1";
export type LessonAnswer = string | string[];

export type LessonExample = {
  id: string;
  text_target: string;
  translation_form: string;
  highlight_words?: string[];
  reading_target?: string | null;
};

export type LessonActivity = {
  id: string;
  kind: string;
  prompt_md: string;
  options?: string[] | null;
  correct_answer: LessonAnswer;
  explanation_md?: string | null;
  difficulty?: string | null;
  passage_md?: string | null;
  transcript?: string | null;
  sample_answers?: string[];
  reading_target?: string | null;
};

export type LessonQuizQuestion = {
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
  passage_md?: string | null;
  transcript?: string | null;
  sample_answers?: string[];
  reading_target?: string | null;
  references_exercise_id?: string | null;
  references_lesson_topics?: string[];
};

export type LessonQuiz = {
  id: string;
  title_form: string;
  title_target?: string | null;
  questions: LessonQuizQuestion[];
  passing_score: number;
};

export type LessonVocabulary = {
  target_word: string;
  reading?: string | null;
  translation: string;
  pos?: string | null;
  example?: string | null;
  example_translation?: string | null;
};

export type LessonVocabularyItem = {
  term: string;
  role?: string;
  status?: string;
  translation?: string;
  source?: string;
};

export type LessonGrammarExplanation = {
  slug: string;
  title_form: string;
  title_target?: string | null;
  description_md_form: string;
  description_md_target?: string | null;
  grammar_structure?: string | null;
  conjugation_table?: {
    name?: string;
    headers?: string[];
    rows?: Array<string[] | Record<string, string | null>>;
  } | null;
  examples?: LessonExample[];
  callouts?: Array<{ type: string; text_md: string }>;
  common_errors_es?: string[];
};

export type LessonFlashcard = {
  id: string;
  front: string;
  back: string;
  hint?: string | null;
  reading?: string | null;
};

export type TargetVocabulary = {
  term: string;
  role?: string;
  rationale?: string;
};

export type VocabularyFocus = {
  new_vocabulary?: { lexeme_ids?: string[]; chunk_ids?: string[] };
  complementary_vocabulary?: { lexeme_ids?: string[]; chunk_ids?: string[] };
  bridge_vocabulary?: { lexeme_ids?: string[]; chunk_ids?: string[] };
  target_vocabulary?: TargetVocabulary[];
};

export type FullLesson = {
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
  vocabulary_focus_mirror?: VocabularyFocus;
  scenario: string;
  introduction_md: string;
  intro_target?: string | null;
  examples: LessonExample[];
  grammar_explanations: LessonGrammarExplanation[];
  exercises: LessonActivity[];
  flashcards: LessonFlashcard[];
  vocabulary: LessonVocabulary[];
  lesson_vocabulary?: LessonVocabularyItem[];
  quiz: LessonQuiz[];
  notes_md_form: string;
  notes_md_target?: string | null;
};

export type LessonBrief = {
  situation?: string;
  can_do?: string;
  central_grammar?: string;
  output?: string;
  activity?: string;
  target_vocabulary?: TargetVocabulary[];
};

export type CourseRoadmapEntry = {
  id: string;
  position: number;
  unit_id: number | string;
  title_form: string;
  title_target: string;
  theme_focus: string;
  learning_objectives: string[];
  vocabulary_focus: VocabularyFocus;
  grammar_focus: string[];
  prerequisites: string[];
  estimated_minutes: number;
  lesson_brief?: LessonBrief;
};

export type CourseUnit = {
  id: number | string;
  title_form: string;
  lesson_ids: string[];
};

type CourseRoadmapFile = {
  course_id: string;
  units: CourseUnit[];
  lessons: CourseRoadmapEntry[];
};

export type CourseCatalogEntry = CourseRoadmapEntry & {
  level: ContentLevel;
  unit_title: string;
};

export type CourseEntry = CourseCatalogEntry & {
  content: FullLesson;
};

const lessonModules = import.meta.glob<FullLesson>(
  [
    "./data/lessons_*/lessons_*/lesson_*.json",
    "./data/lessons_C1/lesson_*.json",
  ],
  { import: "default" },
);

const roadmapFiles: Record<ContentLevel, CourseRoadmapFile> = {
  A1: a1RoadmapJson as unknown as CourseRoadmapFile,
  A2: a2RoadmapJson as unknown as CourseRoadmapFile,
  B1: b1RoadmapJson as unknown as CourseRoadmapFile,
  B2: b2RoadmapJson as unknown as CourseRoadmapFile,
  C1: c1RoadmapJson as unknown as CourseRoadmapFile,
};

const lessonLoaders: Record<ContentLevel, Record<string, () => Promise<FullLesson>>> = {
  A1: {},
  A2: {},
  B1: {},
  B2: {},
  C1: {},
};

for (const [filePath, loadLesson] of Object.entries(lessonModules)) {
  const levelMatch = filePath.match(/\/lessons_(A1|A2|B1|B2|C1)\/lesson_\d+\.json$/);
  const lessonMatch = filePath.match(/(lesson_\d+)\.json$/);
  if (levelMatch && lessonMatch) lessonLoaders[levelMatch[1] as ContentLevel][lessonMatch[1]] = loadLesson;
}

function buildCourse(level: ContentLevel) {
  const roadmap = roadmapFiles[level];
  const unitTitles = new Map(roadmap.units.map((unit) => [String(unit.id), unit.title_form]));

  return [...roadmap.lessons]
    .sort((first, second) => first.position - second.position)
    .map((entry) => {
      return {
        ...entry,
        level,
        unit_title: unitTitles.get(String(entry.unit_id)) ?? `Unidad ${entry.unit_id}`,
      } satisfies CourseCatalogEntry;
    });
}

export const courseRoadmaps: Record<ContentLevel, CourseCatalogEntry[]> = {
  A1: buildCourse("A1"),
  A2: buildCourse("A2"),
  B1: buildCourse("B1"),
  B2: buildCourse("B2"),
  C1: buildCourse("C1"),
};

export async function loadCourseEntry(level: ContentLevel, lessonId: string): Promise<CourseEntry> {
  const entry = courseRoadmaps[level].find((candidate) => candidate.id === lessonId);
  const loadLesson = lessonLoaders[level][lessonId];
  if (!entry || !loadLesson) throw new Error(`No se encontró el contenido de ${level} / ${lessonId}`);
  return { ...entry, content: await loadLesson() };
}

export const courseUnits: Record<ContentLevel, CourseUnit[]> = {
  A1: roadmapFiles.A1.units,
  A2: roadmapFiles.A2.units,
  B1: roadmapFiles.B1.units,
  B2: roadmapFiles.B2.units,
  C1: roadmapFiles.C1.units,
};

export const a1Roadmap = courseRoadmaps.A1;

// Compatibility aliases while the visual lesson feature keeps its existing file names.
export type A1Example = LessonExample;
export type A1Activity = LessonActivity;
export type A1QuizQuestion = LessonQuizQuestion;
export type A1Quiz = LessonQuiz;
export type A1Vocabulary = LessonVocabulary;
export type A1GrammarExplanation = LessonGrammarExplanation;
export type A1Flashcard = LessonFlashcard;
export type A1FullLesson = FullLesson;
export type A1RoadmapEntry = CourseRoadmapEntry;
export type A1CourseEntry = CourseEntry;
