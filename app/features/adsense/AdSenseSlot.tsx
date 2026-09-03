"use client";

import { useEffect, useRef } from "react";
import { adsenseSettings, isAdSenseConfigured, type AdSensePlacement } from "./adsense-config";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, never>>;
  }
}

const ADSENSE_SCRIPT_ID = "brightup-adsense-script";

export function AdSenseLoader() {
  const anyPlacementReady = (Object.keys(adsenseSettings.slots) as AdSensePlacement[])
    .some(isAdSenseConfigured);

  useEffect(() => {
    if (!anyPlacementReady || document.getElementById(ADSENSE_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = ADSENSE_SCRIPT_ID;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseSettings.clientId}`;
    document.head.appendChild(script);
  }, [anyPlacementReady]);

  return null;
}

export function AdSenseSlot({ placement }: { placement: AdSensePlacement }) {
  const initialized = useRef(false);
  const configured = isAdSenseConfigured(placement);

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
      data-tag-for-age-treatment="1"
    />
  </aside>;
}
