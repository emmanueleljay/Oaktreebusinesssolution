import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { heroSlides } from "@/data/site";
import { cn } from "@/lib/utils";

const DURATION = 6000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const startRef = useRef(Date.now());

  const go = useCallback((next: number) => {
    setIndex((next + heroSlides.length) % heroSlides.length);
    startRef.current = Date.now();
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / DURATION, 1);
      setProgress(pct);
      if (pct >= 1) {
        setIndex((i) => (i + 1) % heroSlides.length);
        startRef.current = Date.now();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  useEffect(() => {
    startRef.current = Date.now();
  }, [index]);

  const active = heroSlides[index]!;

  return (
    <section
      id="home"
      aria-label="Oaktree service highlights"
      className="relative h-[78vh] min-h-[560px] w-full overflow-hidden bg-ink text-inverse md:h-[88vh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.label}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover transition-transform duration-[8000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div className="absolute inset-0 bg-hero-veil" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-28 pt-36 sm:pb-32 sm:pt-40 lg:px-8 lg:pt-44">
        <div key={active.id} className="max-w-4xl animate-fade-in xl:max-w-5xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            <span className="h-px w-8 bg-primary" />
            {active.label}
          </p>
          <h1 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-inverse sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            {active.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-inverse/80 sm:text-base lg:text-lg">
            {active.description}
          </p>
          <Link
            to="/services/$slug"
            params={{ slug: active.id }}
            className="btn-lime mt-8"
          >
            {active.cta}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2 font-display text-inverse">
              <span className="text-2xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-inverse/50">
                / {String(heroSlides.length).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-3 flex gap-1.5">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.label}`}
                  aria-current={i === index}
                  className="group h-6 flex-1 max-w-16"
                >
                  <span className="block h-[3px] w-full overflow-hidden rounded-full bg-inverse/25">
                    <span
                      className="block h-full rounded-full bg-primary transition-[width]"
                      style={{
                        width: i < index ? "100%" : i === index ? `${progress * 100}%` : "0%",
                      }}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous slide"
              className="grid size-11 place-items-center rounded-full border border-inverse/30 text-inverse transition-colors hover:border-primary hover:bg-primary hover:text-ink"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next slide"
              className="grid size-11 place-items-center rounded-full border border-inverse/30 text-inverse transition-colors hover:border-primary hover:bg-primary hover:text-ink"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
