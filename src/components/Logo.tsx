import Image from "next/image";

/**
 * Icon (cropped from the client's real logo artwork) stacked above a real
 * HTML wordmark, matching the original lockup's layout. The wordmark is
 * text, not part of the image, so it stays crisp and bold at any size
 * instead of degrading into illegible pixels the way a raster "CONSTRUCTION"
 * does once it's scaled down to nav-bar height.
 */
export default function Logo({
  className,
  iconHeight = 44,
  iconClassName,
  wordmarkSize = "text-sm",
  wordmarkClassName = "text-espresso",
  accentClassName = "text-clay",
}: {
  className?: string;
  iconHeight?: number;
  iconClassName?: string;
  wordmarkSize?: string;
  wordmarkClassName?: string;
  accentClassName?: string;
}) {
  return (
    <span className={`inline-flex flex-col items-center ${className ?? ""}`}>
      <Image
        src="/images/logo-icon.png"
        alt="Martins Construction"
        width={iconHeight * 1.86}
        height={iconHeight}
        className={`w-auto object-contain ${iconClassName ?? ""}`}
        style={iconClassName ? undefined : { height: iconHeight }}
        priority
      />
      <span
        className={`mt-0.5 font-display font-bold uppercase tracking-wide whitespace-nowrap ${wordmarkSize} ${wordmarkClassName}`}
      >
        Martins <span className={accentClassName}>Construction</span>
      </span>
    </span>
  );
}
