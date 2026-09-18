import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "../features/academy/components/BrandLogo";
import { SiteFooter } from "../features/academy/components/SiteFooter";

export const metadata: Metadata = {
  title: "Términos de uso",
  description: "Términos aplicables al acceso y uso educativo de Learno Languages.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return <main className="info-page">
    <header className="info-header"><Link href="/" aria-label="Volver al inicio"><BrandLogo /></Link><nav><Link href="/cursos">Cursos</Link><Link href="/contacto">Contacto</Link></nav></header>
    <article>
      <span className="eyebrow dark">CONDICIONES DEL SERVICIO</span>
      <h1>Términos de uso</h1>
      <p className="info-updated">Última actualización: 17 de septiembre de 2026.</p>
      <h2>Uso educativo</h2>
      <p>Learno Languages ofrece materiales y actividades para estudiar y practicar inglés. El contenido es informativo y educativo; no constituye una certificación oficial ni garantiza un resultado académico específico.</p>
      <h2>Acceso y disponibilidad</h2>
      <p>Puedes utilizar las lecciones disponibles respetando estos términos y la legislación aplicable. Las funciones, rutas y contenidos pueden actualizarse, corregirse o interrumpirse temporalmente para mantenimiento.</p>
      <h2>Uso responsable</h2>
      <p>No debes intentar alterar el funcionamiento del sitio, acceder a sistemas sin autorización, automatizar tráfico abusivo ni utilizar el contenido para actividades ilegales o que perjudiquen a otras personas.</p>
      <h2>Propiedad y reutilización</h2>
      <p>La marca, el diseño y la organización del contenido pertenecen a sus respectivos titulares. No se autoriza presentar copias sustanciales del sitio como un producto propio. Los recursos externos conservan las condiciones de sus proveedores.</p>
      <h2>Enlaces y servicios externos</h2>
      <p>Algunos enlaces llevan a plataformas externas. Learno Languages no controla su disponibilidad ni sus prácticas, por lo que debes consultar las condiciones y políticas de esos servicios.</p>
      <h2>Limitación de responsabilidad</h2>
      <p>El servicio se ofrece según disponibilidad. Procuramos mantener el contenido correcto y funcional, pero pueden existir errores o interrupciones. Si detectas un problema, comunícalo mediante la página de contacto.</p>
      <h2>Cambios y contacto</h2>
      <p>Podemos actualizar estos términos para reflejar cambios del producto o requisitos aplicables. La versión vigente siempre estará publicada en esta dirección.</p>
      <Link className="info-cta" href="/contacto">Ir a contacto →</Link>
    </article>
    <SiteFooter />
  </main>;
}
