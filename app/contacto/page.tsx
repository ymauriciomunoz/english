import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "../features/academy/components/BrandLogo";
import { SiteFooter } from "../features/academy/components/SiteFooter";

const issueUrl = "https://github.com/ymauriciomunoz/english/issues/new";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta al equipo de Learno Languages para comunicar sugerencias, errores o consultas sobre la academia de inglés.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return <main className="info-page">
    <header className="info-header"><Link href="/" aria-label="Volver al inicio"><BrandLogo /></Link><nav><Link href="/cursos">Cursos</Link><Link href="/nosotros">Sobre Learno</Link></nav></header>
    <article>
      <span className="eyebrow dark">CONTACTO</span>
      <h1>Cuéntanos cómo podemos mejorar</h1>
      <p>Utilizamos el repositorio público del proyecto como canal verificable de contacto. Allí puedes informar errores, proponer mejoras, hacer preguntas o compartir sugerencias sobre el contenido académico.</p>
      <h2>Enviar una consulta</h2>
      <p>Abre una solicitud en GitHub, escribe un título claro y explica lo ocurrido o la mejora que propones. No incluyas contraseñas, datos financieros ni información personal sensible.</p>
      <a className="info-cta" href={issueUrl} target="_blank" rel="noreferrer">Abrir formulario de contacto →</a>
      <h2>Transparencia</h2>
      <p>Las consultas públicas permiten dar seguimiento a cada solicitud y conocer cuándo fue respondida o resuelta. El código y el historial de cambios de Learno Languages también se encuentran disponibles en el mismo repositorio.</p>
    </article>
    <SiteFooter />
  </main>;
}
