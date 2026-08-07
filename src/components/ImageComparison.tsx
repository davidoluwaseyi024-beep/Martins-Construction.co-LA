"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

/**
 * Drag-to-reveal before/after slider. Both images are next/image (lazy
 * loaded by default, priority opt-in via props) so this stays cheap even
 * with many instances on a filtered portfolio grid. Position is plain
 * React state driven by Pointer Events — no drag library needed.
 */
export default function ImageComparison({
  before,
  after,
  beforeAlt,
  afterAlt,
  aspectClassName = "aspect-4/3",
  priority = false,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  aspectClassName?: string;
  priority?: boolean;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
    if (e.key === "Home") setPosition(0);
    if (e.key === "End") setPosition(100);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl ${aspectClassName} ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (base layer, full width) */}
      <Image
        src={after}
        alt={afterAlt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="pointer-events-none object-cover"
      />

      {/* Before (clip-path reveals only the left `position`% — no DOM
          measurement needed, so this stays SSR-safe and resize-proof) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-espresso/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-soft">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-espresso/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cream-soft">
        After
      </span>

      {/* Drag handle */}
      <div
        className="absolute inset-y-0 z-10 flex w-0 -translate-x-1/2 cursor-ew-resize items-center justify-center"
        style={{ left: `${position}%` }}
      >
        <div className="absolute inset-y-0 w-0.5 bg-paper/90" />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Before/after comparison position"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          className="flex h-10 w-10 cursor-ew-resize items-center justify-center rounded-full border-2 border-paper bg-clay text-paper shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-gold-soft"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden>
            <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
