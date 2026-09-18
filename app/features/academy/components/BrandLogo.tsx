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
    <Image className="brand-symbol-image" src="/brand/learno-symbol.png" width={512} height={512} sizes="44px" alt="" aria-hidden="true" />
    {!compact && <Image className="brand-wordmark-image" src="/brand/learno-wordmark.png" width={760} height={303} sizes="124px" alt="" aria-hidden="true" />}
  </span>;
}
