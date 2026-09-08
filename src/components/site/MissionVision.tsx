import {
  Award,
  Check,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sprout,
  Target,
  type LucideIcon,
} from "lucide-react";
import { coreValues, purpose, valuesImageAsset } from "@/data/site";
import { Reveal } from "./Reveal";

const valueIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  Award,
  Handshake,
  Lightbulb,
  Target,
  Sprout,
};

export function MissionVision() {
  return (
    <section id="mission-vision" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl space-y-20 px-5 lg:px-8">
        {purpose.map((p, i) => (
          <div
            key={p.key}
            id={p.key}
            className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  className="aspect-[16/11] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
                <span className="h-px w-8 bg-primary" />
                {p.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {p.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-7 space-y-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/20">
                      <Check className="size-3 stroke-[3] text-primary-ink" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CoreValues() {
  return (
    <section id="core-values" className="scroll-mt-28 bg-ink py-20 text-inverse sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Our Core Values
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              The standards behind <span className="text-primary">every decision.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={valuesImageAsset.src}
                alt={valuesImageAsset.alt}
                width={1600}
                height={1000}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((v, i) => {
            const Icon = valueIcons[v.icon] ?? ShieldCheck;
            return (
              <Reveal key={v.number} delay={i * 60}>
                <div className="group h-full rounded-2xl border border-inverse/12 bg-inverse/5 p-7 transition-colors duration-300 hover:border-primary/60">
                  <div className="flex items-start justify-between">
                    <Icon className="size-6 stroke-[1.4] text-primary transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="font-display text-2xl font-bold text-inverse/25">
                      {v.number}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-inverse">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-inverse/70">{v.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
