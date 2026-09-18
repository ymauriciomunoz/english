import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { normalizeAnswer, orderingOptions } from "../app/features/a1/lesson-utils.ts";

const coursePackages = [
  { level: "A1", count: 55, path: "lessons_A1-20260901T222255Z-1-001/lessons_A1" },
  { level: "A2", count: 64, path: "lessons_A2-20260901T222257Z-1-001/lessons_A2" },
  { level: "B1", count: 33, path: "lessons_B1-20260901T222300Z-1-001/lessons_B1" },
  { level: "B2", count: 34, path: "lessons_B2-20260901T222302Z-1-001/lessons_B2" },
  { level: "C1", count: 31, path: "lessons_C1" },
];

async function render() {
  const html = await readFile(
    new URL("../.next/server/app/index.html", import.meta.url),
    "utf8",
  );

  return new Response(html, {
    status: 200,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

test("server-renders the Learno Languages academy with the expanded course total", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>Aprende ingl[^<]+Learno Languages/);
  assert.match(html, /<h1[^>]*>Aprende ingl/i);
  assert.match(html, /rel="canonical" href="https:\/\/learnolanguages\.com\/?"/);
  assert.match(html, /tu academia de ingl/i);
  assert.match(html, /217/);
  assert.match(html, /Práctica guiada|Pr&#xE1;ctica guiada/);
  assert.match(html, /Progreso guardado/);
  assert.doesNotMatch(html, /pagead2\.googlesyndication\.com/, "AdSense debe permanecer inactivo hasta configurar la cuenta");
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("keeps general-audience AdSense placements ready but disabled", async () => {
  const [config, component, app, home, route, practice] = await Promise.all([
    readFile(new URL("../app/features/adsense/adsense-config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/features/adsense/AdSenseSlot.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/LearnoLanguagesApp.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/components/HomeView.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/components/LearningRoute.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/practice/PracticeView.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(config, /enabled:\s*false/);
  assert.match(config, /\^ca-pub-/);
  assert.doesNotMatch(component, /data-tag-for-age-treatment/);
  assert.match(component, /AdSenseLoader/);
  assert.match(app, /<AdSenseLoader/);
  assert.match(home, /AdSenseSlot placement="home"/);
  assert.match(route, /AdSenseSlot placement="route"/);
  assert.match(practice, /AdSenseSlot placement="practice"/);
});

test("exposes indexable SEO routes, metadata and trust pages", async () => {
  const [layout, robots, sitemap, manifest, courses, levelPage, practice, about, privacy, sidebar] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/manifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/cursos/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/cursos/[nivel]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/practica/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/nosotros/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/privacidad/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/components/AppSidebar.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /EducationalOrganization/);
  assert.match(layout, /WebSite/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /cursos\/\$\{level\}/);
  assert.match(sitemap, /privacidad/);
  assert.match(manifest, /Learno Languages/);
  assert.match(courses, /alternates:\s*\{ canonical: "\/cursos"/);
  assert.match(levelPage, /generateStaticParams/);
  assert.match(levelPage, /"@type": "Course"/);
  assert.match(practice, /canonical: "\/practica"/);
  assert.match(about, /<h1>/);
  assert.match(privacy, /Publicidad y cookies/);
  assert.match(sidebar, /href="\/cursos"/);
  assert.match(sidebar, /href="\/practica"/);
});

test("validates every roadmap and all 217 lesson files", async () => {
  let totalLessons = 0;
  let totalActivities = 0;
  const observedKinds = new Set();

  for (const course of coursePackages) {
    const base = `../app/data/${course.path}/`;
    const roadmap = JSON.parse(await readFile(new URL(`${base}roadmap.approved.json`, import.meta.url), "utf8"));
    totalLessons += roadmap.lessons.length;

    assert.equal(roadmap.lessons.length, course.count, `${course.level} debe conservar todas sus lecciones`);
    assert.deepEqual(roadmap.lessons.map((lesson) => lesson.position), Array.from({ length: course.count }, (_, index) => index + 1));
    assert.ok(roadmap.units.length > 0, `${course.level} debe incluir unidades`);
    assert.deepEqual(
      roadmap.units.flatMap((unit) => unit.lesson_ids),
      roadmap.lessons.map((lesson) => lesson.id),
      `${course.level} debe mantener el orden de unidades y lecciones`,
    );

    for (const entry of roadmap.lessons) {
      const lesson = JSON.parse(await readFile(new URL(`${base}${entry.id}.json`, import.meta.url), "utf8"));
      assert.equal(lesson.id, entry.id);
      assert.equal(lesson.position, entry.position);
      assert.equal(String(lesson.unit_id), String(entry.unit_id));
      assert.ok(entry.title_target.trim());
      assert.ok(lesson.title_target.trim());
      assert.ok(lesson.introduction_md.trim());
      assert.ok(lesson.scenario.trim());
      assert.ok(lesson.learning_objectives.length > 0);
      assert.ok(lesson.examples.length > 0);
      assert.ok(lesson.exercises.length > 0);
      assert.ok(lesson.flashcards.length > 0);
      assert.ok(lesson.quiz.length > 0);

      const activities = [...lesson.exercises, ...lesson.quiz.flatMap((quiz) => quiz.questions)];
      totalActivities += activities.length;

      for (const activity of activities) {
        observedKinds.add(activity.kind);
        assert.ok((activity.prompt_md ?? activity.prompt_form ?? "").trim(), `${course.level}/${entry.id}/${activity.id} necesita consigna`);

        if (activity.kind === "ordering" && !Array.isArray(activity.correct_answer)) {
          const mixed = orderingOptions(activity.options, activity.correct_answer, activity.id);
          const repeated = orderingOptions(activity.options, activity.correct_answer, activity.id);
          const answerTokens = activity.correct_answer.trim().split(/\s+/).flatMap((token) => normalizeAnswer(token).split(" ")).filter(Boolean).sort();
          const mixedTokens = mixed.flatMap((token) => normalizeAnswer(token).split(" ")).filter(Boolean).sort();
          assert.deepEqual(mixed, repeated, `${course.level}/${entry.id}/${activity.id} debe mantener la mezcla durante el intento`);
          assert.deepEqual(mixedTokens, answerTokens, `${course.level}/${entry.id}/${activity.id} debe conservar todas las palabras`);
          if (new Set(answerTokens).size > 1) assert.notEqual(normalizeAnswer(mixed.join(" ")), normalizeAnswer(activity.correct_answer), `${course.level}/${entry.id}/${activity.id} debe iniciar desordenado`);
        }

        if (activity.kind === "matching") {
          assert.ok(Array.isArray(activity.correct_answer));
          assert.ok(activity.correct_answer.every((pair) => pair.includes("=")));
        } else if (Array.isArray(activity.options) && activity.kind !== "ordering") {
          assert.ok(activity.options.includes(activity.correct_answer), `${course.level}/${entry.id}/${activity.id} debe incluir su respuesta entre las opciones`);
        }

        if (activity.kind === "listening_comprehension") assert.ok(activity.transcript?.trim(), `${course.level}/${entry.id}/${activity.id} necesita guion de audio`);
        if (activity.kind === "reading_comprehension") assert.ok(activity.passage_md?.trim(), `${course.level}/${entry.id}/${activity.id} necesita texto de lectura`);
        if (activity.kind === "free_production") assert.equal(activity.options, null, `${course.level}/${entry.id}/${activity.id} debe permitir escritura libre`);
      }
    }
  }

  assert.equal(totalLessons, 217);
  assert.ok(totalActivities > 4000);
  assert.deepEqual([...observedKinds].sort(), [
    "fill_in_blank", "flashcard_recognition", "free_production", "listening_comprehension", "matching",
    "multiple_choice", "ordering", "reading_comprehension", "translation_form_to_target", "translation_target_to_form",
  ]);
});

test("lazy-loads the first and last lesson of every new level", async () => {
  const { createServer } = await import("vite");
  const server = await createServer({
    root: fileURLToPath(new URL("..", import.meta.url)),
    configFile: false,
    server: { middlewareMode: true },
    appType: "custom",
    logLevel: "silent",
  });

  try {
    const catalog = await server.ssrLoadModule("/app/course-content.ts");
    for (const course of coursePackages) {
      const first = await catalog.loadCourseEntry(course.level, "lesson_001");
      const lastId = `lesson_${String(course.count).padStart(3, "0")}`;
      const last = await catalog.loadCourseEntry(course.level, lastId);
      assert.equal(first.content.id, "lesson_001");
      assert.equal(last.content.id, lastId);
    }
  } finally {
    await server.close();
  }
});

test("uses one full-page lesson component for A1 through C1", async () => {
  const [app, controller, courseData, catalog, lessonPage, sections, questionCard, activityInput] = await Promise.all([
    readFile(new URL("../app/features/academy/LearnoLanguagesApp.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/hooks/use-academy-state.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/course-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/course-content.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/A1LessonPage.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/components/LessonSections.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/components/QuestionCard.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/a1/components/ActivityInput.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(catalog, /roadmap\.approved\.json/);
  assert.match(catalog, /await import\(`/);
  assert.doesNotMatch(catalog, /import\.meta\.glob/);
  assert.doesNotMatch(catalog, /data\/en/);
  assert.match(courseData, /courseRoadmaps\[level\]/);
  assert.match(controller, /activeCourseEntry/);
  assert.match(controller, /loadCourseEntry\(lesson\.level/);
  assert.doesNotMatch(app, /activeLesson\.level !== "C1"/);
  assert.doesNotMatch(app, /LegacyLessonModal/);
  assert.match(lessonPage, /courseEntries/);
  assert.match(lessonPage, /free_production/);
  assert.match(sections, /lesson\.lesson_vocabulary/);
  assert.match(sections, /entry\.lesson_brief/);
  assert.match(sections, /lesson\.notes_md_target/);
  assert.match(questionCard, /Escuchar audio/);
  assert.match(questionCard, /item\.passage_md/);
  assert.match(activityInput, /a1-production-answer/);
  assert.match(courseData, /"A1", "A2", "B1", "B2", "C1"/);
});

test("keeps the suggested lesson order visual without blocking free access", async () => {
  const [route, controller, styles] = await Promise.all([
    readFile(new URL("../app/features/academy/components/LearningRoute.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/features/academy/hooks/use-academy-state.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(route, /!sequentiallyUnlocked \? "locked"/);
  assert.match(route, /href=\{`\/cursos\/\$\{level\.toLowerCase\(\)\}`\}/);
  assert.match(route, /onSelectLevel\(level\)/);
  assert.match(route, /\? "Empezar" : "Abrir"/);
  assert.doesNotMatch(route, /disabled=\{!sequentiallyUnlocked\}/);
  assert.doesNotMatch(controller, /if \(!isLessonUnlocked/);
  assert.match(styles, /\.lrail-item\.locked\{cursor:pointer/);
});

test("keeps the feature-based shell and removes the old A1 data dependency", async () => {
  const [page, compatibility, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/a1-expanded-course.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.ok(page.split("\n").length <= 8, "page.tsx debe seguir siendo solo el punto de entrada");
  assert.match(page, /LearnoLanguagesApp/);
  assert.match(compatibility, /course-content/);
  assert.doesNotMatch(compatibility, /data\/en/);
  assert.match(layout, /Learno Languages/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
