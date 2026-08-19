"use client";

import { Fragment, type CSSProperties } from "react";
import { academyVisibility } from "../academy-visibility";
import { a1Lessons, allLessons, levelData, levels, levelSummaries, levelVisuals } from "../course-data";
import { getLevelCompleted, getLevelLessons, isLessonUnlocked, isLevelUnlocked } from "../course-utils";
import type { Lesson, Level } from "../types";

type LearningRouteProps = {
  completed: string[];
  selectedLevel: Level;
  onSelectLevel: (level: Level) => void;
  onOpenLesson: (lesson: Lesson) => void;
  onPractice: () => void;
};

export function LearningRoute({ completed, selectedLevel, onSelectLevel, onOpenLesson, onPractice }: LearningRouteProps) {
  const visibleLessons = getLevelLessons(selectedLevel);
  const totalProgress = Math.round((completed.length / allLessons.length) * 100);
  const selectedCompleted = getLevelCompleted(selectedLevel, completed);
  const selectedTotal = visibleLessons.length;
  const a1Completed = getLevelCompleted("A1", completed);
  const courseCompleted = allLessons.every((lesson) => completed.includes(lesson.id));
  const nextLesson = allLessons.find((lesson) => !completed.includes(lesson.id)) ?? null;

  return <>
    <section className={`hero-grid ${academyVisibility.dailyGoal ? "" : "hero-grid-single"}`}>
      <div className={`mission-card ${courseCompleted ? "course-complete" : ""}`} style={{ background: courseCompleted ? "linear-gradient(125deg,#008f7e,#32c6ad)" : nextLesson ? `linear-gradient(125deg,${levelData[nextLesson.level].color},${levelVisuals[nextLesson.level].secondary})` : undefined }}>
        {courseCompleted ? <div className="mission-copy"><span className="eyebrow">RUTA COMPLETADA</span><h2>¡Dominaste las {allLessons.length} lecciones!</h2><p>Terminaste los niveles A1, A2, B1, B2 y C1. Mantén lo aprendido fresco con una sesión de práctica.</p>
          <div className="mission-meta"><span>✓ 5 niveles</span><span>⚡ {allLessons.length * 20} XP</span><span>◆ {allLessons.length} lecciones</span></div>
          <button className="primary-button" onClick={onPractice}>Ir a Práctica <span>→</span></button>
        </div> : nextLesson && <div className="mission-copy"><span className="eyebrow">TU SIGUIENTE MISIÓN</span><h2>{nextLesson.title}</h2><p>{nextLesson.summary}</p>
          <div className="mission-meta"><span>◷ {nextLesson.duration ?? 8} min</span><span>⚡ +20 XP</span><span>◆ Lección {nextLesson.number}</span></div>
          <button className="primary-button" onClick={() => { onSelectLevel(nextLesson.level); onOpenLesson(nextLesson); }}>Continuar aprendiendo <span>→</span></button>
        </div>}
        <div className="mission-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet">🌍</div><div className="rocket">🚀</div><span className="star s1">✦</span><span className="star s2">✦</span><span className="star s3">✦</span></div>
      </div>
      {academyVisibility.dailyGoal && <aside className="daily-card" id="practica">
        <div className="daily-head"><span><i>⚡</i><strong>Meta diaria</strong></span><b>60%</b></div><div className="daily-progress"><span /></div><div className="xp-row"><span>60 XP</span><span>100 XP</span></div>
        <div className="week-row">{["L", "M", "X", "J", "V", "S", "D"].map((day, index) => <div key={day}><span className={index < 3 ? "done" : index === 3 ? "today" : ""}>{index < 3 ? "✓" : day}</span><small>{day}</small></div>)}</div>
        <p>¡Vas genial! Completa una lección para alcanzar tu meta.</p>
      </aside>}
    </section>

    <section className="ruta-section" id="ruta">
      <div className="ruta-head"><div><span className="eyebrow dark">TU CAMINO</span><h2>Ruta de aprendizaje</h2></div><div className="ruta-progress-row"><span className="ruta-progress-label">{completed.length}/{allLessons.length}</span><div className="ruta-bar" role="progressbar" aria-valuenow={totalProgress} aria-valuemin={0} aria-valuemax={100}><i style={{ width: `${totalProgress}%` }} /></div><span className="ruta-progress-pct">{totalProgress}%</span></div></div>

      <div className="level-rail" role="tablist" aria-label="Niveles de inglés">
        {levels.map((level) => {
          const unlocked = isLevelUnlocked(level, completed);
          const count = getLevelCompleted(level, completed);
          const total = getLevelLessons(level).length;
          const percentage = Math.round((count / total) * 100);
          return <button key={level} className={`lrail-item ${selectedLevel === level ? "active" : ""} ${!unlocked ? "locked" : ""}`} onClick={() => unlocked && onSelectLevel(level)} style={{ "--lc": levelData[level].color, "--ls": levelVisuals[level].secondary } as CSSProperties} role="tab" aria-selected={selectedLevel === level} aria-label={`${level}, ${levelData[level].label}${!unlocked ? ", bloqueado" : ""}`}>
            <span className="lrail-badge">{unlocked ? levelVisuals[level].icon : "◆"}</span><div className="lrail-meta"><strong>{level}</strong><small>{levelData[level].label}</small></div><div className="lrail-count">{unlocked ? `${count}/${total}` : "—"}</div><div className="lrail-bar"><i style={{ width: `${percentage}%` }} /></div>
          </button>;
        })}
      </div>

      <div className="level-banner" style={{ "--lc": levelData[selectedLevel].color, "--ls": levelVisuals[selectedLevel].secondary } as CSSProperties}>
        <div className="lb-deco" aria-hidden="true">{levelVisuals[selectedLevel].icon}</div><div className="lb-emblem">{selectedLevel}</div>
        <div className="lb-copy"><span className="lb-stage">{levelVisuals[selectedLevel].stage} · NIVEL {selectedLevel}</span><h3>{levelData[selectedLevel].label}</h3><em>{levelVisuals[selectedLevel].motto}</em><p>{levelSummaries[selectedLevel]}</p></div>
        <div className="lb-stats"><div className="lb-stat"><div className="lb-orb" style={{ background: `conic-gradient(rgba(255,255,255,.9) ${(selectedCompleted / selectedTotal) * 360}deg, rgba(255,255,255,.18) 0deg)` }}><span><strong>{selectedCompleted}</strong><small>/{selectedTotal}</small></span></div><p>lecciones</p></div><div className="lb-divider" /><div className="lb-kpi"><strong>{selectedCompleted * 20}</strong><span>XP ganados</span></div><div className="lb-kpi"><strong>{selectedTotal - selectedCompleted}</strong><span>restantes</span></div></div>
      </div>

      <div className="lesson-deck">
        {visibleLessons.map((lesson, index) => {
          const done = completed.includes(lesson.id);
          const unlocked = isLessonUnlocked(lesson, completed);
          const current = unlocked && !done && (index === 0 || completed.includes(visibleLessons[index - 1].id));
          const showUnitHeading = lesson.level === "A1" && (index === 0 || visibleLessons[index - 1].unit !== lesson.unit);
          return <Fragment key={lesson.id}>
            {showUnitHeading && <div className="a1-unit-divider"><span>{lesson.unit === "pre-A1" ? "PREPARACIÓN" : `UNIDAD ${lesson.unit}`}</span><div /><small>{visibleLessons.filter((item) => item.unit === lesson.unit).length} lecciones</small></div>}
            <article className={`lesson-tile ${done ? "done" : ""} ${current ? "current" : ""} ${!unlocked ? "locked" : ""}`} style={{ "--lc": levelData[selectedLevel].color, "--ls": levelVisuals[selectedLevel].secondary } as CSSProperties}>
              <div className="lt-accent" />
              <div className="lt-header"><div className={`lt-num ${done ? "done" : current ? "cur" : ""}`}>{done ? "✓" : !unlocked ? "◆" : lesson.number}</div><span className="lt-label">{lesson.level === "A1" ? `UNIDAD ${lesson.unit} · ` : ""}LECCIÓN {String(lesson.number).padStart(2, "0")}</span>{done && <span className="xp-tag">+20 XP</span>}{current && <span className="current-badge">EN CURSO</span>}</div>
              <div className="lt-icon-row"><div className="lt-icon">{unlocked ? lesson.icon : "·"}</div><div className="lt-text"><h3>{lesson.title}</h3><p>{lesson.summary}</p>{lesson.level === "A1" && <small className="lt-duration">◷ {lesson.duration} min · Lección completa</small>}</div></div>
              <div className="lt-foot"><button onClick={() => onOpenLesson(lesson)} disabled={!unlocked} className={`lt-btn ${current ? "primary" : done ? "review" : "default"}`} aria-label={`${done ? "Repasar" : "Empezar"} ${lesson.title}`}>{done ? "Repasar" : current ? "Empezar" : unlocked ? "Ver" : "Bloqueado"}{unlocked && <span className="lt-arrow">→</span>}</button></div>
            </article>
          </Fragment>;
        })}
      </div>
    </section>

    {academyVisibility.achievements && <section className="achievements" id="logros"><div><span className="eyebrow dark">TUS LOGROS</span><h2>Pequeños pasos, grandes victorias</h2></div><div className="achievement-grid"><article><span>🔥</span><div><strong>En llamas</strong><p>5 días de práctica</p></div></article><article><span>⚡</span><div><strong>Con energía</strong><p>140 XP esta semana</p></div></article><article className={a1Completed >= a1Lessons.length ? "" : "muted"}><span>🏆</span><div><strong>Maestro A1</strong><p>{a1Completed}/{a1Lessons.length} lecciones</p></div></article></div></section>}
  </>;
}
