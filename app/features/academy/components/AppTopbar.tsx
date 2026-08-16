"use client";

export function AppTopbar({ studentName, studentInitials, onMenu }: { studentName: string; studentInitials: string; onMenu: () => void }) {
  return <header className="topbar">
    <button className="menu-button" onClick={onMenu} aria-label="Abrir menú">☰</button>
    <div className="welcome"><span>TU ACADEMIA DE INGLÉS</span><h1>¡Hola, {studentName}! <i>👋</i></h1></div>
    <div className="top-actions"><button className="streak-pill" aria-label="Racha de 5 días">🔥 <strong>5</strong></button><button className="notification" aria-label="Notificaciones">♢<span /></button><div className="avatar small">{studentInitials}</div></div>
  </header>;
}
