"use client";

import { useEffect, useRef, useState } from "react";
import { COOKIE_CONSENT_KEY, type CookieConsentValue } from "../preferences/CookieConsent";
import { adsenseSettings, isAdSenseConfigured, type AdSensePlacement } from "./adsense-config";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, never>>;
  }
}

const ADSENSE_SCRIPT_ID = "learno-adsense-script";

function hasAdvertisingConsent() {
  try {
    const stored = JSON.parse(localStorage.getItem(COOKIE_CONSENT_KEY) ?? "null") as { value?: CookieConsentValue } | null;
    return stored?.value === "all";
  } catch {
    return false;
  }
}

export function AdSenseLoader() {
  const anyPlacementReady = (Object.keys(adsenseSettings.slots) as AdSensePlacement[])
    .some(isAdSenseConfigured);

  useEffect(() => {
    const loadScript = () => {
      if (!anyPlacementReady || !hasAdvertisingConsent() || document.getElementById(ADSENSE_SCRIPT_ID)) return;
      const script = document.createElement("script");
      script.id = ADSENSE_SCRIPT_ID;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseSettings.clientId}`;
      document.head.appendChild(script);
    };
    loadScript();
    window.addEventListener("learno:cookie-consent", loadScript);
    return () => window.removeEventListener("learno:cookie-consent", loadScript);
  }, [anyPlacementReady]);

  return null;
}

export function AdSenseSlot({ placement }: { placement: AdSensePlacement }) {
  const initialized = useRef(false);
  const [consent, setConsent] = useState(false);
  const configured = isAdSenseConfigured(placement) && consent;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setConsent(hasAdvertisingConsent()));
    const updateConsent = () => setConsent(hasAdvertisingConsent());
    window.addEventListener("learno:cookie-consent", updateConsent);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("learno:cookie-consent", updateConsent);
    };
  }, []);

  useEffect(() => {
    if (!configured || initialized.current) return;
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      initialized.current = true;
    } catch {
      // Ad blockers or a delayed network response must never interrupt learning.
    }
  }, [configured]);

  if (!configured) return null;

  return <aside className={`adsense-placement adsense-placement-${placement}`} aria-label="Publicidad">
    <span>PUBLICIDAD</span>
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adsenseSettings.clientId}
      data-ad-slot={adsenseSettings.slots[placement]}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  </aside>;
}
