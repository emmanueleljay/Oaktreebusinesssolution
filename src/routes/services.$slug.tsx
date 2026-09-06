import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Layout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Sections";
import { Reveal } from "@/components/site/Reveal";
import { africaGallery, getServiceDetail, services, serviceDetails } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  component: ServiceDetailPage,
  loader: ({ params }) => {
    const detail = getServiceDetail(params.slug);
    if (!detail) throw notFound();
    return { detail };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service not found | Oaktree Business Solutions" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.detail.title} | Oaktree Business Solutions`;
    const description = loaderData.detail.intro;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/services/${loaderData.detail.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${loaderData.detail.slug}` }],
    };
  },
  notFoundComponent: ServiceNotFound,
});

function ServiceNotFound() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-5 py-40 text-center lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          We couldn&rsquo;t find that service.
        </h1>
        <p className="mt-5 text-muted-foreground">
          The page you are looking for may have moved. Browse all seven Oaktree services instead.
        </p>
        <Link to="/services" className="btn-lime mt-10">
          View All Services
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </Layout>
  );
}

function ServiceDetailPage() {
  const { detail } = Route.useLoaderData();
  const service = services.find((s) => s.slug === detail.slug)!;
  const others = serviceDetails.filter((d) => d.slug !== detail.slug).slice(0, 3);

  return (
    <Layout>
      <PageHero
        eyebrow={detail.eyebrow}
        title={detail.headline}
        description={detail.intro}
        image={service.image}
      />

      {/* Overview */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-8">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
              <span className="h-px w-8 bg-primary" />
              Overview
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {detail.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{detail.body}</p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {detail.approach.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm font-medium">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary">
                    <Check className="size-3 stroke-[3] text-primary-ink" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-lime mt-10">
              Discuss This Service
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <Reveal delay={100} className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={africaGallery[1].src}
                alt={africaGallery[1].alt}
                width={1600}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <dl className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-3">
              {detail.stats.map((s) => (
                <div key={s.label} className="bg-background p-5">
                  <dt className="font-display text-2xl font-bold text-primary-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
              <span className="h-px w-8 bg-primary" />
              What We Do
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              How we support {detail.title.toLowerCase()}.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {detail.offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 60}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary">
                  <span className="font-display text-2xl font-bold text-muted-foreground/35 transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                    {o.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {o.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-20 text-inverse sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" />
              On The Ground
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Built for <span className="text-primary">African markets.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {africaGallery.map((g, i) => (
              <Reveal key={g.src} delay={i * 60}>
                <figure className="group relative overflow-hidden rounded-2xl">
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={1600}
                    height={1000}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Explore other services
            </h2>
            <Link to="/services" className="btn-outline">
              <ArrowLeft className="size-4" />
              All Services
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group block h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">{o.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.intro}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-ink">
                    View Service
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </Layout>
  );
}
