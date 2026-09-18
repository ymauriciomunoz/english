"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import { AdSenseSlot } from "../../adsense/AdSenseSlot";

type HomeViewProps = {
  studentName: string;
  studentInitials: string;
  nameDraft: string;
  editingName: boolean;
  completedCount: number;
  totalLessons: number;
  totalProgress: number;
  courseCompleted: boolean;
  onNameDraft: (name: string) => void;
  onStartEditingName: () => void;
  onCancelEditingName: () => void;
  onSaveName: (event: FormEvent<HTMLFormElement>) => void;
  onRoute: () => void;
  onPractice: () => void;
};

export function HomeView({ studentName, studentInitials, nameDraft, editingName, completedCount, totalLessons, totalProgress, courseCompleted, onNameDraft, onStartEditingName, onCancelEditingName, onSaveName, onRoute, onPractice }: HomeViewProps) {
  return <>
    <section className="academy-home" aria-labelledby="academy-title">
      <div className="academy-copy">
        <span className="eyebrow">APRENDE INGLÉS PASO A PASO</span>
        <h1 id="academy-title">Aprende inglés online de A1 a C1, paso a paso.</h1>
        <p>Learno Languages es una academia de inglés en línea para aprender desde A1 hasta C1. Sigue una ruta ordenada de lecciones, estudia gramática y vocabulario, practica comprensión y pronunciación, y comprueba lo aprendido con ejercicios interactivos.</p>
        <div className="academy-benefits"><span>✓ Niveles A1–C1</span><span>✓ {totalLessons} lecciones</span><span>✓ Práctica guiada</span><span>✓ Progreso guardado</span></div>
        <Link className="academy-link" href="/cursos" onClick={(event) => { event.preventDefault(); onRoute(); }}>Ver los cursos y empezar <span>→</span></Link>
      </div>
      <div className="name-card">
        <div className="name-card-top"><div className="avatar name-avatar">{studentInitials}</div><div className="mini-progress"><strong>{completedCount}</strong><span>de {totalLessons}</span></div></div>
        <span className="name-label">TU NOMBRE EN LEARNO LANGUAGES</span>
        {editingName ? <form onSubmit={onSaveName}>
          <label htmlFor="student-name">¿Cómo quieres que te llamemos?</label>
          <input id="student-name" value={nameDraft} onChange={(event) => onNameDraft(event.target.value)} maxLength={24} placeholder="Escribe tu nombre" />
          <div><button type="submit">Guardar</button><button type="button" onClick={onCancelEditingName}>Cancelar</button></div>
        </form> : <>
          <h3>{studentName}</h3>
          <button className="edit-name" onClick={onStartEditingName}>✎ Editar nombre</button>
          <small>Tu nombre y progreso se guardan en este dispositivo.</small>
        </>}
      </div>
    </section>

    <section className="home-overview" aria-label="Cómo funciona Learno Languages">
      <article className="how-card">
        <div className="home-section-title"><span className="eyebrow dark">TODO EN UN SOLO LUGAR</span><h2>¿Qué puedes hacer en Learno Languages?</h2></div>
        <div className="how-steps">
          <div><span>1</span><i>🧭</i><strong>Sigue una ruta completa</strong><p>Avanza por los niveles A1, A2, B1, B2 y C1 con un orden claro.</p></div>
          <div><span>2</span><i>💬</i><strong>Aprende y practica</strong><p>Trabaja vocabulario, gramática, lectura, escucha y pronunciación.</p></div>
          <div><span>3</span><i>🌟</i><strong>Comprueba tu avance</strong><p>Resuelve actividades y continúa desde donde lo dejaste.</p></div>
        </div>
      </article>
      <article className="home-progress-card">
        <div className="progress-orb" style={{ background: `conic-gradient(#6c5ce7 ${totalProgress * 3.6}deg, #eceaf8 0deg)` }}><span><strong>{totalProgress}%</strong><small>completado</small></span></div>
        <div><span className="eyebrow dark">TU AVANCE</span><h3>{completedCount === 0 ? "Tu aventura empieza hoy" : courseCompleted ? "¡Completaste Learno Languages!" : "¡Sigue con esa energía!"}</h3><p>{courseCompleted ? `Terminaste las ${totalLessons} lecciones. Sigue practicando para mantener tu inglés activo.` : `${completedCount} de ${totalLessons} lecciones completadas`}</p></div>
        <button onClick={courseCompleted ? onPractice : onRoute}>{completedCount === 0 ? "Comenzar A1" : courseCompleted ? "Seguir practicando" : "Continuar mi ruta"} <span>→</span></button>
      </article>
    </section>
    <AdSenseSlot placement="home" />
  </>;
}
