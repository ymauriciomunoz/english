"use client";

import type { FormEvent } from "react";

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
        <span className="eyebrow">BIENVENIDO A BRIGHTUP</span>
        <h2 id="academy-title">Tu academia de inglés, simple y a tu ritmo.</h2>
        <p>Practica con lecciones cortas, supera retos y guarda cada paso de tu avance. Puedes cerrar y volver cuando quieras: tu ruta te estará esperando.</p>
        <div className="academy-benefits"><span>✓ {totalLessons} lecciones</span><span>✓ Práctica guiada</span><span>✓ Progreso guardado</span></div>
        <button className="academy-link" onClick={onRoute}>Explorar mi ruta <span>→</span></button>
      </div>
      <div className="name-card">
        <div className="name-card-top"><div className="avatar name-avatar">{studentInitials}</div><div className="mini-progress"><strong>{completedCount}</strong><span>de {totalLessons}</span></div></div>
        <span className="name-label">TU NOMBRE EN BRIGHTUP</span>
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

    <section className="home-overview" aria-label="Cómo funciona BrightUp">
      <article className="how-card">
        <div className="home-section-title"><span className="eyebrow dark">EMPIEZA EN TRES PASOS</span><h2>Aprender aquí es muy fácil</h2></div>
        <div className="how-steps">
          <div><span>1</span><i>🎯</i><strong>Elige tu lección</strong><p>Tu ruta te muestra siempre cuál sigue.</p></div>
          <div><span>2</span><i>💬</i><strong>Practica jugando</strong><p>Aprende con ejemplos y retos cortos.</p></div>
          <div><span>3</span><i>🌟</i><strong>Mira cómo avanzas</strong><p>Cada logro queda guardado automáticamente.</p></div>
        </div>
      </article>
      <article className="home-progress-card">
        <div className="progress-orb" style={{ background: `conic-gradient(#6c5ce7 ${totalProgress * 3.6}deg, #eceaf8 0deg)` }}><span><strong>{totalProgress}%</strong><small>completado</small></span></div>
        <div><span className="eyebrow dark">TU AVANCE</span><h3>{completedCount === 0 ? "Tu aventura empieza hoy" : courseCompleted ? "¡Completaste BrightUp!" : "¡Sigue con esa energía!"}</h3><p>{courseCompleted ? `Terminaste las ${totalLessons} lecciones. Sigue practicando para mantener tu inglés activo.` : `${completedCount} de ${totalLessons} lecciones completadas`}</p></div>
        <button onClick={courseCompleted ? onPractice : onRoute}>{completedCount === 0 ? "Comenzar A1" : courseCompleted ? "Seguir practicando" : "Continuar mi ruta"} <span>→</span></button>
      </article>
    </section>
  </>;
}
