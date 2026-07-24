import ParallaxImage from "@/components/motion/ParallaxImage";
import Reveal from "@/components/motion/Reveal";

export default function ImageBanner({
  src,
  alt,
  eyebrow,
  heading,
  height = "min-h-[60vh]",
}: {
  src: string;
  alt: string;
  eyebrow?: string;
  heading: string;
  height?: string;
}) {
  return (
    <section className={`relative isolate flex ${height} items-center justify-center overflow-hidden`}>
      <ParallaxImage src={src} alt={alt} strength={0.15} />
      <div className="absolute inset-0 bg-espresso/55" />
      <Reveal className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {eyebrow}
          </p>
        )}
        <p className="mt-3 font-display text-3xl leading-snug text-paper sm:text-4xl">
          {heading}
        </p>
      </Reveal>
    </section>
  );
}
