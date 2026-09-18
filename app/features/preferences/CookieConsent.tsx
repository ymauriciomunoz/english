"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const COOKIE_CONSENT_KEY = "learno-cookie-consent-v1";
export const COOKIE_SETTINGS_EVENT = "learno:open-cookie-settings";
export type CookieConsentValue = "necessary" | "all";

function saveConsent(value: CookieConsentValue) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ value, updatedAt: new Date().toISOString() }));
  window.dispatchEvent(new CustomEvent("learno:cookie-consent", { detail: value }));
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setOpen(!localStorage.getItem(COOKIE_CONSENT_KEY));
    });
    const reopen = () => setOpen(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, reopen);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener(COOKIE_SETTINGS_EVENT, reopen);
    };
  }, []);

  const choose = (value: CookieConsentValue) => {
    saveConsent(value);
    setOpen(false);
  };

  if (!open) return null;
  return <aside className="cookie-consent" aria-label="Preferencias de privacidad" aria-live="polite">
    <div><strong>Tú decides sobre las cookies</strong><p>Usamos almacenamiento necesario para guardar tu nombre, tema y progreso. La publicidad está desactivada; si se habilita, respetaremos tu elección y mostraremos los controles exigidos para tu región.</p><Link href="/privacidad#cookies">Leer la política de privacidad</Link></div>
    <div className="cookie-actions"><button type="button" className="cookie-secondary" onClick={() => choose("necessary")}>Solo necesarias</button><button type="button" className="cookie-primary" onClick={() => choose("all")}>Aceptar todas</button></div>
  </aside>;
}

export function CookieSettingsButton() {
  return <button className="footer-link-button" type="button" onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}>Configurar cookies</button>;
}
