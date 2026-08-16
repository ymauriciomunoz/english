"use client";

import type { A1CourseEntry, A1FullLesson } from "../../../a1-expanded-course";
import type { EnglishSpeaker } from "../../academy/types";
import { cleanMarkdown, prerequisiteSummary, readableFocus } from "../lesson-utils";

export function LessonIntroduction({ entry, lesson, objectives, prerequisiteLabels, questionCount, onNext }: { entry: A1CourseEntry; lesson: A1FullLesson; objectives: string[]; prerequisiteLabels: string[]; questionCount: number; onNext: () => void }) {
  return <section className="a1-cover">
    <div className="a1-cover-copy">
      <span className="a1-pill">{entry.is_pre_a1 ? "PRE-A1" : "A1"} · UNIDAD {entry.unit}</span><h1>{entry.title_target}</h1><h2>{entry.title_form}</h2><p className="a1-theme-focus"><strong>Enfoque:</strong> {lesson.theme_focus}</p><p>{cleanMarkdown(lesson.introduction_md)}</p>
      {lesson.intro_target && <details><summary>Leer introducción en inglés</summary><p>{cleanMarkdown(lesson.intro_target)}</p></details>}
      <div className="a1-objectives"><strong>Al terminar podrás</strong>{objectives.map((objective) => <span key={objective}>✓ {objective}</span>)}</div>
      <button className="a1-primary" onClick={onNext}>Comenzar la lección <span>→</span></button>
    </div>
    <aside><span>ESCENARIO DE LA LECCIÓN</span><p>{lesson.scenario}</p><div className="a1-cover-stats"><div><strong>{lesson.examples.length}</strong><small>ejemplos</small></div><div><strong>{lesson.exercises.length}</strong><small>ejercicios</small></div><div><strong>{questionCount}</strong><small>preguntas</small></div></div>{prerequisiteLabels.length > 0 && <div className="a1-prerequisites"><strong>Antes de empezar</strong><p>{prerequisiteSummary(prerequisiteLabels)}</p></div>}</aside>
  </section>;
}

export function LessonTheory({ entry, lesson, grammarFocus, onSpeak, onNext }: { entry: A1CourseEntry; lesson: A1FullLesson; grammarFocus: string[]; onSpeak: EnglishSpeaker; onNext: () => void }) {
  return <section className="a1-content-section">
    <header className="a1-section-title"><span>01 · COMPRENDE</span><h2>Explicación y ejemplos</h2><p className="a1-long-copy">{cleanMarkdown(lesson.notes_md_form)}</p></header>
    {(grammarFocus.length > 0 || (entry.vocabulary.meta_skills?.length ?? 0) > 0) && <div className="a1-focus-strip"><strong>En esta lección</strong>{grammarFocus.map((focus) => <span key={focus}>{readableFocus(focus)}</span>)}{entry.vocabulary.meta_skills?.map((skill) => <span key={skill}>Habilidad: {readableFocus(skill)}</span>)}</div>}
    <div className="a1-examples">{lesson.examples.map((example) => <article key={example.id}><button onClick={() => onSpeak(example.text_target)} aria-label={`Escuchar ${example.text_target}`}>🔊</button><div><strong>{example.text_target}</strong><p>{example.translation_form}</p>{example.reading_target && <small>{example.reading_target}</small>}</div></article>)}</div>
    {lesson.grammar_explanations.length > 0 ? <div className="a1-grammar-list">{lesson.grammar_explanations.map((grammar) => <article key={grammar.slug}>
      <span>GRAMÁTICA</span><h3>{grammar.title_form}</h3>{grammar.title_target && <small>{grammar.title_target}</small>}{grammar.grammar_structure && <code>{grammar.grammar_structure}</code>}<p className="a1-long-copy">{cleanMarkdown(grammar.description_md_form)}</p>
      {grammar.conjugation_table?.rows && <div className="a1-table">{grammar.conjugation_table.name && <strong className="a1-table-title">{grammar.conjugation_table.name}</strong>}{grammar.conjugation_table.rows.map((row, index) => <div key={index}>{Object.values(row).filter(Boolean).map((value, valueIndex) => <span key={valueIndex}>{value}</span>)}</div>)}</div>}
      {grammar.examples && <div className="a1-grammar-examples">{grammar.examples.map((example) => <p key={example.id}><button onClick={() => onSpeak(example.text_target)} aria-label={`Escuchar ${example.text_target}`}>🔊</button><strong>{example.text_target}</strong><span>{example.translation_form}</span>{example.reading_target && <small>{example.reading_target}</small>}</p>)}</div>}
      {grammar.callouts?.map((callout, index) => <blockquote key={index} className={callout.type}>{cleanMarkdown(callout.text_md)}</blockquote>)}
      {grammar.common_errors_es && grammar.common_errors_es.length > 0 && <details><summary>Errores comunes</summary>{grammar.common_errors_es.map((error) => <p key={error}>• {error}</p>)}</details>}
      {grammar.description_md_target && <details><summary>Ver explicación en inglés</summary><p className="a1-long-copy">{cleanMarkdown(grammar.description_md_target)}</p></details>}
    </article>)}</div> : <div className="a1-empty"><span>✨</span><h3>Lección de consolidación</h3><p>No introduce gramática nueva: integra y practica lo aprendido anteriormente.</p></div>}
    <button className="a1-next-section" onClick={onNext}>Continuar a vocabulario →</button>
  </section>;
}

export function LessonVocabulary({ lesson, onSpeak, onNext }: { lesson: A1FullLesson; onSpeak: EnglishSpeaker; onNext: () => void }) {
  return <section className="a1-content-section">
    <header className="a1-section-title"><span>02 · DESCUBRE</span><h2>Vocabulario de la lección</h2><p>Escucha cada palabra y mira cómo funciona dentro de una frase completa.</p></header>
    {lesson.vocabulary.length > 0 ? <div className="a1-vocab-grid">{lesson.vocabulary.map((word, index) => <article key={`${word.target_word}-${index}`}><div><span>{word.pos ?? "word"}</span><button onClick={() => onSpeak(word.target_word, "word")} aria-label={`Escuchar ${word.target_word}`}>🔊</button></div><h3>{word.target_word}</h3>{word.reading && <small>{word.reading}</small>}<strong>{word.translation}</strong>{word.example && <p>{word.example}</p>}{word.example_translation && <em>{word.example_translation}</em>}</article>)}</div> : <div className="a1-empty"><span>🧠</span><h3>Repaso de vocabulario</h3><p>Esta lección reutiliza vocabulario anterior. Continúa con los ejercicios y las tarjetas de repaso.</p></div>}
    <button className="a1-next-section" onClick={onNext}>Ir a los ejercicios →</button>
  </section>;
}

export function LessonFlashcards({ lesson, onSpeak, onNext }: { lesson: A1FullLesson; onSpeak: EnglishSpeaker; onNext: () => void }) {
  return <section className="a1-content-section">
    <header className="a1-section-title"><span>04 · RECUERDA</span><h2>Tarjetas de memoria</h2><p>Repasa todas las tarjetas incluidas en esta lección.</p></header>
    {lesson.flashcards.length > 0 ? <div className="a1-flash-grid">{lesson.flashcards.map((card) => <article key={card.id}><span>ENGLISH</span><h3>{card.front}</h3>{card.reading && <small>{card.reading}</small>}<strong>{card.back}</strong>{card.hint && <p>{card.hint}</p>}<button onClick={() => onSpeak(card.front, "word")}>🔊 Escuchar</button></article>)}</div> : <div className="a1-empty"><span>🗂️</span><h3>Sin tarjetas nuevas</h3><p>Esta lección está enfocada en practicar; puedes continuar con la evaluación.</p></div>}
    <button className="a1-next-section" onClick={onNext}>Comenzar evaluación →</button>
  </section>;
}

export function LessonCompletion({ entry, questionCount, lessonNumber, totalLessons, onNextLesson, onExit }: { entry: A1CourseEntry; questionCount: number; lessonNumber: number; totalLessons: number; onNextLesson: () => void; onExit: () => void }) {
  return <section className="a1-complete"><span>🏆</span><small>LECCIÓN COMPLETADA</small><h2>¡Excelente trabajo!</h2><p>Terminaste <strong>{entry.title_target}</strong>. Tu progreso quedó guardado y el siguiente paso ya está disponible.</p><div><strong>{questionCount}/{questionCount}</strong><span>actividades de evaluación superadas</span></div>{lessonNumber < totalLessons ? <button onClick={onNextLesson}>Continuar con la lección {lessonNumber + 1} →</button> : <button onClick={onExit}>Volver a mi ruta</button>}</section>;
}
