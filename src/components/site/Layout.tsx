import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[320px] overflow-hidden bg-ink pb-20 pt-36 text-inverse sm:pb-28 sm:pt-44 lg:pt-48">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-hero-veil" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:max-w-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-inverse/75 sm:text-base lg:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
