import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className = "", compact = false }: BrandLogoProps) {
  const classes = ["brand-logo", compact ? "brand-logo-compact" : "", className]
    .filter(Boolean)
    .join(" ");

  return <span className={classes} role="img" aria-label="Learno Languages">
    <Image className="brand-symbol-image" src="/brand/learno-symbol.png" width={512} height={512} alt="" aria-hidden="true" priority />
    {!compact && <Image className="brand-wordmark-image" src="/brand/learno-wordmark.png" width={760} height={303} alt="" aria-hidden="true" priority />}
  </span>;
}
