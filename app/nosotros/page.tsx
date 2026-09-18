import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "../features/academy/components/BrandLogo";
import { SiteFooter } from "../features/academy/components/SiteFooter";

export const metadata: Metadata = {
  title: "Sobre Learno Languages",
  description: "Conoce el propósito y el método de Learno Languages, una plataforma para aprender inglés online desde A1 hasta C1.",
  alternates: { canonical: "/nosotros" },
};

export default function AboutPage() {
  return <main className="info-page">
    <header className="info-header"><Link href="/" aria-label="Volver al inicio"><BrandLogo /></Link><nav><Link href="/cursos">Cursos</Link><Link href="/practica">Práctica</Link></nav></header>
    <article>
      <span className="eyebrow dark">SOBRE LEARNO LANGUAGES</span>
      <h1>Una ruta clara para aprender inglés de verdad</h1>
      <p>Learno Languages es una plataforma educativa creada para que cualquier persona pueda estudiar inglés con una progresión comprensible, práctica constante y libertad para avanzar a su propio ritmo.</p>
      <h2>Nuestro propósito</h2>
      <p>Queremos convertir un temario amplio en pasos concretos. Por eso organizamos el contenido en los niveles A1, A2, B1, B2 y C1, desde las bases del idioma hasta la comunicación avanzada.</p>
      <h2>Cómo se aprende aquí</h2>
      <p>Cada lección combina objetivos, explicaciones, ejemplos, vocabulario, ejercicios, tarjetas y evaluación. La sección de práctica refuerza escucha, pronunciación y expresiones útiles, mientras el progreso queda guardado en el dispositivo del estudiante.</p>
      <h2>Contenido centrado en el estudiante</h2>
      <p>El contenido está diseñado para ayudar a aprender y practicar, no para rellenar páginas. Revisamos la estructura académica y la experiencia de uso para mantener una ruta útil, ordenada y fácil de recorrer.</p>
      <h2>Quién mantiene el proyecto</h2>
      <p>Learno Languages es un proyecto educativo independiente. Su código, decisiones de producto e historial de actualizaciones se mantienen públicamente para que los usuarios puedan comprobar su evolución y comunicar observaciones.</p>
      <p className="info-inline-link"><a href="https://github.com/ymauriciomunoz/english" target="_blank" rel="noreferrer">Consultar el proyecto público en GitHub</a> · <Link href="/contacto">Contactar al equipo</Link></p>
      <Link className="info-cta" href="/cursos">Explorar los cursos →</Link>
    </article>
    <SiteFooter />
  </main>;
}
