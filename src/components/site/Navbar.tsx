import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-background",
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Oaktree home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) =>
            "children" in l && l.children ? (
              <div key={l.to} className="group relative">
                <Link
                  to={l.to}
                  aria-haspopup="menu"
                  activeProps={{ className: "text-foreground after:w-full" }}
                  className="relative flex items-center gap-1 text-sm font-medium tracking-tight text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
                >
                  {l.label}
                  <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-64 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-border bg-background p-2 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)]">
                    {l.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        params={c.params}
                        activeProps={{ className: "bg-surface text-primary-ink" }}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-primary-ink"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground after:w-full" }}
                className="relative text-sm font-medium tracking-tight text-foreground/75 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
              >
                {l.label}
              </Link>
            ),
          )}
          <Link to="/contact" className="btn-lime">
            Let&rsquo;s Talk
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-y-auto border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-5" aria-label="Mobile">
          {navLinks.map((l) => (
            <div key={l.to} className="border-b border-border/70">
              <div className="flex items-center justify-between">
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-primary-ink" }}
                  className="flex-1 py-3 font-display text-lg font-semibold tracking-tight text-foreground"
                >
                  {l.label}
                </Link>
                {"children" in l && l.children ? (
                  <button
                    type="button"
                    aria-label={`Toggle ${l.label} submenu`}
                    aria-expanded={openGroup === l.to}
                    onClick={() => setOpenGroup((g) => (g === l.to ? null : l.to))}
                    className="grid size-9 place-items-center rounded-full border border-border text-foreground"
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-300",
                        openGroup === l.to && "rotate-180",
                      )}
                    />
                  </button>
                ) : null}
              </div>
              {"children" in l && l.children ? (
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height,opacity] duration-300",
                    openGroup === l.to ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="flex flex-col pb-3 pl-4">
                    {l.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        params={c.params}
                        onClick={() => setOpen(false)}
                        activeProps={{ className: "text-primary-ink" }}
                        className="py-2 text-base font-medium text-muted-foreground"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-lime mt-4 justify-center">
            Let&rsquo;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}
