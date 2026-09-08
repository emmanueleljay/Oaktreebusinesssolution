import { Reveal } from "./Reveal";
import { team, teamIntro } from "@/data/site";

export function ManagementTeam() {
  return (
    <section id="team" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
            <span className="h-px w-8 bg-primary" />
            Leadership
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Our Management Team
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {teamIntro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/60">
                <div className="relative mx-auto size-36 overflow-hidden rounded-full ring-2 ring-primary/40 ring-offset-4 ring-offset-surface">
                  <img
                    src={m.image}
                    alt={m.alt}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="size-full scale-105 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-7 text-center font-display text-xl font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-ink">
                  {m.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {m.bio}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
