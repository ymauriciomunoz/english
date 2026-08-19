import type { A1Activity, A1CourseEntry, A1QuizQuestion, LessonAnswer } from "../../a1-expanded-course";

export function cleanMarkdown(value?: string | null) {
  return (value ?? "")
    .replace(/#{1,6}\s?/g, "")
    .replace(/\*\*/g, "")
    .split(String.fromCharCode(96)).join("")
    .replace(/^[-*]\s+/gm, "• ")
    .trim();
}

export function normalizeAnswer(answer: LessonAnswer) {
  const normalizeText = (value: string) => value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/['’]/g, "")
    .replace(/[-–—]/g, " ")
    .replace(/[^\p{L}\p{N}=]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ")
    .toLocaleLowerCase();
  return Array.isArray(answer)
    ? answer.map(normalizeText).sort().join("|")
    : normalizeText(answer);
}

export function readableFocus(value: string) {
  return value.replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function uniqueLabels(values: string[]) {
  const labels = new Map<string, string>();
  for (const value of values) {
    const label = value.trim();
    if (label) labels.set(normalizeAnswer(label), label);
  }
  return [...labels.values()];
}

export function getPrerequisiteLabels(entry: A1CourseEntry, courseEntries: A1CourseEntry[]) {
  const prerequisites = [...new Set([...entry.prerequisites, ...entry.content.prerequisites])];
  const titles = new Map(courseEntries.map((courseEntry) => [courseEntry.id, courseEntry.title_target]));
  return prerequisites.map((id) => titles.get(id) ?? fallbackLessonLabel(id));
}

function fallbackLessonLabel(id: string) {
  const preparation = id.match(/^lesson_pre_(\d+)$/);
  if (preparation) return `Preparación ${Number(preparation[1])}`;
  const lesson = id.match(/^lesson_(\d+)$/);
  if (lesson) return `Lección ${Number(lesson[1])}`;
  return readableFocus(id);
}

export function prerequisiteSummary(labels: string[]) {
  if (labels.length <= 3) return labels.join(" · ");
  return `${labels.slice(0, 3).join(" · ")} · y ${labels.length - 3} lecciones más`;
}

function answerLabel(answer: LessonAnswer) {
  return Array.isArray(answer) ? answer.join(" | ") : answer;
}

export function uniqueOptions(options: string[] | null | undefined, answer: LessonAnswer) {
  const values = [...(options ?? []).map(String)];
  const correct = answerLabel(answer);
  if (!Array.isArray(answer) && !values.includes(correct)) values.push(correct);
  return [...new Set(values)];
}

export function orderingOptions(options: string[] | null | undefined, answer: LessonAnswer, itemId = "") {
  const sourceTokens = (options ?? []).flatMap((option) => String(option).trim().split(/\s+/).filter(Boolean));
  const values: string[] = [];
  if (Array.isArray(answer)) values.push(...sourceTokens);
  else {
    const remaining = new Map<string, number>();
    for (const key of normalizeAnswer(answer).split(" ").filter(Boolean)) {
      remaining.set(key, (remaining.get(key) ?? 0) + 1);
    }
    for (const option of sourceTokens) {
      const parts = normalizeAnswer(option).split(" ").filter(Boolean);
      if (!parts.length) {
        values.push(option);
        continue;
      }
      const requested = new Map<string, number>();
      const fitsAnswer = parts.every((part) => {
        const count = (requested.get(part) ?? 0) + 1;
        requested.set(part, count);
        return count <= (remaining.get(part) ?? 0);
      });
      if (!fitsAnswer) continue;
      values.push(option);
      for (const [part, count] of requested) remaining.set(part, (remaining.get(part) ?? 0) - count);
    }
    for (const answerToken of answer.trim().split(/\s+/)) {
      const normalizedParts = normalizeAnswer(answerToken).split(" ").filter(Boolean);
      for (const part of normalizedParts) {
        const count = remaining.get(part) ?? 0;
        if (count <= 0) continue;
        values.push(normalizedParts.length === 1 ? answerToken : part);
        remaining.set(part, count - 1);
      }
    }
  }
  const mixed = deterministicShuffle(values, `${itemId}|${answerLabel(answer)}|${values.join("|")}`);
  if (Array.isArray(answer) || normalizeAnswer(mixed.join(" ")) !== normalizeAnswer(answer)) return mixed;

  const firstWord = mixed.findIndex((value) => Boolean(normalizeAnswer(value)));
  const secondWord = mixed.findIndex((value, index) => index > firstWord && Boolean(normalizeAnswer(value)) && normalizeAnswer(value) !== normalizeAnswer(mixed[firstWord]));
  if (firstWord >= 0 && secondWord > firstWord) [mixed[firstWord], mixed[secondWord]] = [mixed[secondWord], mixed[firstWord]];
  return mixed;
}

function optionSeed(value: string) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function deterministicShuffle(values: string[], seedValue: string) {
  const shuffled = [...values];
  let state = optionSeed(seedValue) || 0x9e3779b9;
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
    const target = state % (index + 1);
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

export function distributeCorrectOption(options: string[], item: A1Activity | A1QuizQuestion) {
  if (options.length < 2 || Array.isArray(item.correct_answer)) return options;
  const correctIndex = options.findIndex((option) => normalizeAnswer(option) === normalizeAnswer(item.correct_answer));
  if (correctIndex < 0) return options;
  const prompt = "prompt_md" in item ? item.prompt_md : item.prompt_form;
  const targetIndex = optionSeed(`${item.id}|${prompt}|${item.correct_answer}`) % options.length;
  const distributed = [...options];
  const [correctOption] = distributed.splice(correctIndex, 1);
  distributed.splice(targetIndex, 0, correctOption);
  return distributed;
}
