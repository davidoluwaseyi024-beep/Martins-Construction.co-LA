import Image from "next/image";
import type { services } from "@/lib/content";

export default function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-espresso/10">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={service.homeImage}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso/70 via-espresso/0 to-espresso/0" />
      </div>
      <div className="p-7">
        <h3 className="font-display text-xl text-espresso">{service.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-espresso-soft/80">
          {service.short}
        </p>
      </div>
    </div>
  );
}
