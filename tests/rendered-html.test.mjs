import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const coursePaths = ["a1", "a2", "b1", "b2", "c1"];

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the BrightUp academy home", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es">/i);
  assert.match(html, /<title>BrightUp — Aprende inglés paso a paso<\/title>/i);
  assert.match(html, /Tu academia de inglés, simple y a tu ritmo\./);
  assert.match(html, /100 lecciones/);
  assert.match(html, /Práctica guiada/);
  assert.match(html, /Progreso guardado/);
  assert.match(html, /Comenzar A1/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Building your site/i);
});

test("ships five complete lesson levels, practice, and a finished-course state", async () => {
  const [page, layout, packageJson, ...courses] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    ...coursePaths.map((level) => readFile(new URL(`../app/${level}-course.ts`, import.meta.url), "utf8")),
  ]);

  for (const [index, source] of courses.entries()) {
    assert.equal((source.match(/\bvocabulary:\s*\[/g) ?? []).length, 20, `${coursePaths[index].toUpperCase()} debe tener 20 lecciones`);
    assert.equal((source.match(/\banswer:\s*"/g) ?? []).length, 40, `${coursePaths[index].toUpperCase()} debe tener 40 respuestas`);
  }

  assert.match(page, /const courseCompleted = allLessons\.every/);
  assert.match(page, /¡Dominaste las 100 lecciones!/);
  assert.match(page, /Seguir practicando/);
  assert.match(page, /LABORATORIO DE INGLÉS/);
  assert.match(page, /RETO DE ESCUCHA/);
  assert.match(page, /brightup-practice-xp/);
  assert.match(layout, /BrightUp — Aprende inglés paso a paso/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)));
});
