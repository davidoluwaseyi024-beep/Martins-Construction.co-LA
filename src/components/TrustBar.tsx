"use client";

import Counter from "@/components/motion/Counter";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { stats } from "@/lib/content";

export default function TrustBar() {
  return (
    <div className="border-y border-line bg-cream-soft">
      <StaggerGroup
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:px-8"
        stagger={0.12}
      >
        {stats.map((stat) => (
          <StaggerItem key={stat.label} className="text-center sm:text-left">
            <Counter
              to={stat.to}
              prefix={"prefix" in stat ? stat.prefix : ""}
              suffix={stat.suffix}
              decimals={stat.decimals}
              className="font-display text-3xl text-espresso sm:text-4xl"
            />
            <p className="mt-1.5 text-xs uppercase tracking-wide text-stone">
              {stat.label}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
