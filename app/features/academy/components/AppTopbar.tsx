"use client";

import Link from "next/link";
import { academyVisibility } from "../academy-visibility";
import { BrandLogo } from "./BrandLogo";

export function AppTopbar({ studentName, studentInitials, onMenu, onHome }: { studentName: string; studentInitials: string; onMenu: () => void; onHome: () => void }) {
  return <header className="topbar">
    <button className="menu-button" onClick={onMenu} aria-label="Abrir menú">☰</button>
    <Link className="mobile-brand-button" href="/" onClick={(event) => { event.preventDefault(); onHome(); }} aria-label="Ir al inicio de Learno Languages"><BrandLogo compact /></Link>
    <div className="welcome"><span>TU ACADEMIA DE INGLÉS</span><p className="welcome-title">¡Hola, {studentName}! <i>👋</i></p></div>
    {academyVisibility.topActions && <div className="top-actions"><button className="streak-pill" aria-label="Racha de 5 días">🔥 <strong>5</strong></button><button className="notification" aria-label="Notificaciones">♢<span /></button><div className="avatar small">{studentInitials}</div></div>}
  </header>;
}
