import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/site";

const title = "Completed Projects | Oaktree Business Solutions";
const description =
  "Some of the projects Oaktree Business Solutions has completed across Lagos, including developments in Victoria Island, Ikeja GRA and Lekki Phase 1.";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
});

function ProjectsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Track Record"
        title="Some completed projects."
        description="A selection of developments delivered across Lagos — from Victoria Island high-rise construction to completed residential estates in Ikeja GRA and Lekki Phase 1."
        image={projects[5]!.image}
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
              <span className="h-px w-8 bg-primary" />
              Delivered
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Projects completed and handed over.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every project below was taken through planning, construction and delivery with the
              same discipline: verified partners, clear programmes and finishes built to last in
              the Lagos climate.
            </p>
          </Reveal>

          <div className="mt-16 space-y-16 lg:space-y-24">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="overflow-hidden rounded-[2rem]">
                    <img
                      src={p.image}
                      alt={p.alt}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>

                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-ink">
                      {p.status}
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {p.name}
                    </h3>
                    <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-4 text-primary-ink" />
                        {p.location}
                      </span>
                      <span>{p.type}</span>
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {p.summary}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm font-medium">
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary">
                            <Check className="size-3 stroke-[3] text-primary-ink" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-20 text-center">
            <p className="text-base text-muted-foreground">
              Planning a development of your own?
            </p>
            <Link to="/contact" className="btn-lime mt-6">
              Talk To Our Team
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
