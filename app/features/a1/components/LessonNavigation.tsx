"use client";

import type { CourseEntry } from "../../../course-content";
import type { CourseContentLevel } from "../../academy/types";
import { lessonSections, type LessonSectionId } from "../types";

export function LessonTopbar({ level, entry, lessonNumber, totalLessons, progress, onExit }: { level: CourseContentLevel; entry: CourseEntry; lessonNumber: number; totalLessons: number; progress: number; onExit: () => void }) {
  return <header className="a1-lesson-topbar">
    <button onClick={onExit} aria-label="Volver a la ruta">←</button>
    <div className="a1-lesson-brand"><span>B</span><div><strong>BrightUp</strong><small>{level} · Unidad {entry.unit_id}</small></div></div>
    <div className="a1-global-progress"><span><strong>Lección {lessonNumber}</strong> de {totalLessons}</span><div><i style={{ width: `${progress}%` }} /></div><b>{progress}%</b></div>
    <button onClick={onExit} aria-label="Cerrar lección">×</button>
  </header>;
}

export function LessonSidebar({ level, entry, activeSection, activeIndex, completed, onSection }: { level: CourseContentLevel; entry: CourseEntry; activeSection: LessonSectionId; activeIndex: number; completed: boolean; onSection: (section: LessonSectionId) => void }) {
  return <aside className="a1-lesson-sidebar">
    <span>CONTENIDO</span>
    <nav aria-label="Secciones de la lección">{lessonSections.map((item, index) => <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => onSection(item.id)}><i>{activeIndex > index || completed ? "✓" : index + 1}</i><span><small>{item.eyebrow}</small>{item.label}</span></button>)}</nav>
    <div className="a1-lesson-resume"><span>{level} · UNIDAD {entry.unit_id}</span><strong>{entry.unit_title}</strong><small>{entry.title_target} · ◷ {entry.estimated_minutes} minutos</small></div>
  </aside>;
}
