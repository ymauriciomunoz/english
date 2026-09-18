"use client";

import Link from "next/link";
import type { AppView } from "../types";
import { academyVisibility } from "../academy-visibility";
import { BrandLogo } from "./BrandLogo";

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
    <Link className="brand" href="/" onClick={(event) => { event.preventDefault(); onHome(); }} aria-label="Ir al inicio de Learno Languages">
      <BrandLogo />
    </Link>
    <nav className="main-nav" aria-label="Navegación principal">
      <Link className={activeView === "home" ? "active" : ""} href="/" onClick={(event) => { event.preventDefault(); onHome(); }}><span>⌂</span> Inicio</Link>
      <Link className={activeView === "route" ? "active" : ""} href="/cursos" onClick={(event) => { event.preventDefault(); onRoute("ruta"); }}><span>♢</span> Cursos</Link>
      <Link className={activeView === "practice" ? "active" : ""} href="/practica" onClick={(event) => { event.preventDefault(); onPractice(); }}><span>◎</span> Práctica</Link>
      {academyVisibility.achievements && <button onClick={() => onRoute("logros")}><span>☆</span> Logros</button>}
    </nav>
    {academyVisibility.sidebarStatus && <>
      <div className="sidebar-card"><span className="mini-label">RACHA ACTUAL</span><strong><span className="flame">🔥</span> 5 días</strong><p>¡Una lección más y rompes tu récord!</p></div>
      <div className="profile"><div className="avatar">{studentInitials}</div><div><strong>{studentName}</strong><span>Nivel A1 · Liga Sol</span></div><button onClick={onEditName} aria-label="Editar nombre">•••</button></div>
    </>}
  </aside>;
}
