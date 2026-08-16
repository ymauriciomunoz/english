import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const legacyCoursePaths = ["a2", "b1", "b2", "c1"];

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the BrightUp academy home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>BrightUp/);
  assert.match(html, /Tu academia de ingl/);
  assert.match(html, /122/);
  assert.match(html, /Práctica guiada|Pr&#xE1;ctica guiada/);
  assert.match(html, /Progreso guardado/);
  assert.match(html, /Comenzar A1/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("ships the complete roadmap-driven A1 course and keeps A2-C1 intact", async () => {
  const [roadmapSource, a1CourseIndex, ...legacyCourses] = await Promise.all([
    readFile(new URL("../app/data/en/roadmap.json", import.meta.url), "utf8"),
    readFile(new URL("../app/a1-expanded-course.ts", import.meta.url), "utf8"),
    ...legacyCoursePaths.map((level) => readFile(new URL(`../app/${level}-course.ts`, import.meta.url), "utf8")),
  ]);

  const roadmap = JSON.parse(roadmapSource);
  assert.equal(roadmap.lessons.length, 42);
  assert.deepEqual(roadmap.lessons.map((lesson) => lesson.position), Array.from({ length: 42 }, (_, index) => index));
  assert.equal(roadmap.lessons[25].title_target, "Salud y enfermedades");
  assert.equal(roadmap.lessons[31].title_target, "Describir objetos e imágenes");

  const lessonSources = await Promise.all(roadmap.lessons.map((entry) => readFile(new URL(`../app/data/en/${entry.id}.json`, import.meta.url), "utf8")));
  for (const [index, source] of lessonSources.entries()) {
    const lesson = JSON.parse(source);
    assert.equal(lesson.id, roadmap.lessons[index].id);
    assert.ok(Array.isArray(lesson.learning_objectives));
    assert.ok(Array.isArray(lesson.exercises));
    assert.ok(Array.isArray(lesson.quiz));
    assert.ok(lesson.quiz.every((quiz) => Array.isArray(quiz.questions)));
    for (const activity of [...lesson.exercises, ...lesson.quiz.flatMap((quiz) => quiz.questions)]) {
      if (Array.isArray(activity.options) && !Array.isArray(activity.correct_answer) && activity.kind !== "ordering" && activity.kind !== "matching") {
        assert.ok(activity.options.includes(activity.correct_answer), `${lesson.id}/${activity.id} debe incluir su respuesta`);
      }
    }
  }

  for (const [index, source] of legacyCourses.entries()) {
    assert.equal((source.match(/\bvocabulary:\s*\[/g) ?? []).length, 20, `${legacyCoursePaths[index].toUpperCase()} debe conservar 20 lecciones`);
    assert.equal((source.match(/\banswer:\s*"/g) ?? []).length, 40, `${legacyCoursePaths[index].toUpperCase()} debe conservar 40 respuestas`);
  }
  assert.match(a1CourseIndex, /roadmap\.lessons/);
  assert.match(a1CourseIndex, /lessonFiles/);
});

test("uses a feature-based component architecture without changing the product surface", async () => {
  const [page, app, controller, courseData, home, route, practice, flashcards, listening, a1Page, a1Sections, a1Input, a1Utils, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/BrightUpApp.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/hooks/use-academy-state.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/course-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/components/HomeView.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/components/LearningRoute.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/practice/PracticeView.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/practice/components/FlashcardLab.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/practice/components/ListeningLab.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/A1LessonPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/components/LessonSections.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/components/ActivityInput.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/lesson-utils.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.ok(page.split("\n").length <= 8, "page.tsx debe ser solo el punto de entrada");
  assert.match(page, /BrightUpApp/);
  assert.match(app, /HomeView/);
  assert.match(app, /LearningRoute/);
  assert.match(app, /PracticeView/);
  assert.match(app, /LegacyLessonModal/);
  assert.match(controller, /usePersistentState/);
  assert.match(controller, /courseCompleted/);
  assert.match(courseData, /a1Roadmap/);
  assert.match(home, /Seguir practicando/);
  assert.match(route, /Dominaste las/);
  assert.match(practice, /brightup-practice-xp/);
  assert.match(practice, /FlashcardLab/);
  assert.match(flashcards, /Palabra del momento/);
  assert.match(listening, /RETO DE ESCUCHA/);
  assert.match(a1Page, /lesson\.quiz\.flatMap/);
  assert.match(a1Page, /LessonIntroduction/);
  assert.match(a1Sections, /lesson\.grammar_explanations/);
  assert.match(a1Sections, /lesson\.vocabulary/);
  assert.match(a1Sections, /lesson\.flashcards/);
  assert.match(a1Input, /orderingOptions/);
  assert.match(a1Input, /distributeCorrectOption/);
  assert.match(a1Utils, /uniqueLabels/);
  assert.match(a1Utils, /prerequisiteSummary/);
  assert.match(a1Utils, /replace\(\/\[\^\\p\{L\}\\p\{N\}=\]\+\/gu/);
  assert.match(layout, /BrightUp/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
