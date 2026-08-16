"use client";

import type { A1CourseEntry } from "../../../a1-expanded-course";
import { lessonSections, type LessonSectionId } from "../types";

export function LessonTopbar({ entry, lessonNumber, totalLessons, progress, onExit }: { entry: A1CourseEntry; lessonNumber: number; totalLessons: number; progress: number; onExit: () => void }) {
  return <header className="a1-lesson-topbar">
    <button onClick={onExit} aria-label="Volver a la ruta">←</button>
    <div className="a1-lesson-brand"><span>B</span><div><strong>BrightUp</strong><small>A1 · Unidad {entry.unit}</small></div></div>
    <div className="a1-global-progress"><span><strong>Lección {lessonNumber}</strong> de {totalLessons}</span><div><i style={{ width: `${progress}%` }} /></div><b>{progress}%</b></div>
    <button onClick={onExit} aria-label="Cerrar lección">×</button>
  </header>;
}

export function LessonSidebar({ entry, activeSection, activeIndex, completed, onSection }: { entry: A1CourseEntry; activeSection: LessonSectionId; activeIndex: number; completed: boolean; onSection: (section: LessonSectionId) => void }) {
  return <aside className="a1-lesson-sidebar">
    <span>CONTENIDO</span>
    <nav aria-label="Secciones de la lección">{lessonSections.map((item, index) => <button key={item.id} className={activeSection === item.id ? "active" : ""} onClick={() => onSection(item.id)}><i>{activeIndex > index || completed ? "✓" : index + 1}</i><span><small>{item.eyebrow}</small>{item.label}</span></button>)}</nav>
    <div className="a1-lesson-resume"><span>UNIDAD {entry.unit}</span><strong>{entry.title_target}</strong><small>◷ {entry.estimated_minutes} minutos</small></div>
  </aside>;
}
