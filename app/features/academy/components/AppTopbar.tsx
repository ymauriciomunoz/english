"use client";

import { academyVisibility } from "../academy-visibility";
import { BrandLogo } from "./BrandLogo";

export function AppTopbar({ studentName, studentInitials, onMenu, onHome }: { studentName: string; studentInitials: string; onMenu: () => void; onHome: () => void }) {
  return <header className="topbar">
    <button className="menu-button" onClick={onMenu} aria-label="Abrir menú">☰</button>
    <button className="mobile-brand-button" onClick={onHome} aria-label="Ir al inicio de Learno Languages"><BrandLogo compact /></button>
    <div className="welcome"><span>TU ACADEMIA DE INGLÉS</span><h1>¡Hola, {studentName}! <i>👋</i></h1></div>
    {academyVisibility.topActions && <div className="top-actions"><button className="streak-pill" aria-label="Racha de 5 días">🔥 <strong>5</strong></button><button className="notification" aria-label="Notificaciones">♢<span /></button><div className="avatar small">{studentInitials}</div></div>}
  </header>;
}
