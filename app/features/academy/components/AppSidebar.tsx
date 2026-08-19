"use client";

import type { AppView } from "../types";
import { academyVisibility } from "../academy-visibility";

type AppSidebarProps = {
  activeView: AppView;
  menuOpen: boolean;
  studentName: string;
  studentInitials: string;
  onHome: () => void;
  onRoute: (section?: string) => void;
  onPractice: () => void;
  onEditName: () => void;
};

export function AppSidebar({ activeView, menuOpen, studentName, studentInitials, onHome, onRoute, onPractice, onEditName }: AppSidebarProps) {
  return <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
    <a className="brand" href="#inicio" onClick={(event) => { event.preventDefault(); onHome(); }} aria-label="BrightUp inicio">
      <span className="brand-mark">B</span><span>Bright<span>Up</span></span>
    </a>
    <nav className="main-nav" aria-label="Navegación principal">
      <button className={activeView === "home" ? "active" : ""} onClick={onHome}><span>⌂</span> Inicio</button>
      <button className={activeView === "route" ? "active" : ""} onClick={() => onRoute("ruta")}><span>♢</span> Mi ruta</button>
      <button className={activeView === "practice" ? "active" : ""} onClick={onPractice}><span>◎</span> Práctica</button>
      {academyVisibility.achievements && <button onClick={() => onRoute("logros")}><span>☆</span> Logros</button>}
    </nav>
    {academyVisibility.sidebarStatus && <>
      <div className="sidebar-card"><span className="mini-label">RACHA ACTUAL</span><strong><span className="flame">🔥</span> 5 días</strong><p>¡Una lección más y rompes tu récord!</p></div>
      <div className="profile"><div className="avatar">{studentInitials}</div><div><strong>{studentName}</strong><span>Nivel A1 · Liga Sol</span></div><button onClick={onEditName} aria-label="Editar nombre">•••</button></div>
    </>}
  </aside>;
}
