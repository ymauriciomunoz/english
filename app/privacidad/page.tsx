import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "../features/academy/components/BrandLogo";
import { SiteFooter } from "../features/academy/components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Consulta cómo Learno Languages guarda el progreso, utiliza funciones del navegador y prepara el uso responsable de publicidad.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return <main className="info-page">
    <header className="info-header"><Link href="/" aria-label="Volver al inicio"><BrandLogo /></Link><nav><Link href="/cursos">Cursos</Link><Link href="/nosotros">Sobre Learno</Link></nav></header>
    <article>
      <span className="eyebrow dark">INFORMACIÓN Y TRANSPARENCIA</span>
      <h1>Política de privacidad</h1>
      <p className="info-updated">Última actualización: 17 de septiembre de 2026.</p>
      <h2>Datos guardados en tu dispositivo</h2>
      <p>Learno Languages guarda localmente el nombre elegido y el progreso de las lecciones mediante el almacenamiento del navegador. Esta información permite continuar desde donde lo dejaste y no requiere crear una cuenta.</p>
      <h2>Audio y funciones del navegador</h2>
      <p>La pronunciación utiliza las voces disponibles en el navegador mediante su función de síntesis de voz. El sitio no graba la voz del usuario ni necesita acceder al micrófono para reproducir los audios generados.</p>
      <h2 id="cookies">Publicidad, cookies y consentimiento</h2>
      <p>Los anuncios permanecen desactivados mientras se completa la configuración. Si se activa Google AdSense, proveedores externos, incluido Google, podrán utilizar cookies para mostrar, limitar y medir anuncios basándose en visitas anteriores a este u otros sitios.</p>
      <p>Podrás aceptar o rechazar el almacenamiento no esencial desde los controles del sitio. Cuando resulte exigible en el EEE, Reino Unido o Suiza, utilizaremos una plataforma de gestión del consentimiento certificada por Google antes de servir publicidad personalizada.</p>
      <p className="info-inline-link"><a href="https://adssettings.google.com/" target="_blank" rel="noreferrer">Administrar la personalización de anuncios de Google</a> · <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">Cómo utiliza Google los datos de sitios asociados</a></p>
      <h2>Servicios y enlaces externos</h2>
      <p>El sitio puede utilizar infraestructura de alojamiento y enlazar a servicios externos. Cada proveedor procesa la información conforme a sus propias políticas. No vendemos la información guardada por la experiencia de aprendizaje.</p>
      <h2>Cambios en esta política</h2>
      <p>Esta página se actualizará cuando cambien las funciones, los proveedores o las obligaciones aplicables. La fecha superior permite identificar la versión vigente.</p>
      <h2>Contacto</h2>
      <p>Para solicitar información o comunicar una inquietud relacionada con privacidad, utiliza nuestro <Link href="/contacto">canal público de contacto</Link>.</p>
      <Link className="info-cta" href="/">Volver al inicio →</Link>
    </article>
    <SiteFooter />
  </main>;
}
