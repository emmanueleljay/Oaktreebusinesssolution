import { Link } from "@tanstack/react-router";
import { company, services } from "@/data/site";
import { Logo } from "./Logo";

const companyLinks = [
  { label: "About Us", to: "/about" as const },
  { label: "Our Services", to: "/services" as const },
  { label: "Our Activities", to: "/activities" as const },
  { label: "Completed Projects", to: "/projects" as const },

  { label: "Why Oaktree", to: "/why-oaktree" as const },
  { label: "Contact", to: "/contact" as const },
];

const socials = ["LinkedIn", "Instagram", "Facebook", "X", "WhatsApp"];

export function Footer() {
  return (
    <footer className="bg-ink text-inverse">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div>
          <div className="inline-block rounded-xl bg-white px-4 py-3">
            <Logo className="h-12" />
          </div>
          <p className="mt-5 text-sm text-inverse/70">{company.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-inverse/50">{company.address}</p>
        </div>

        <nav aria-label="Company">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Company
          </h2>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm text-inverse/70 transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.title}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-inverse/70 transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Connect">
          <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Connect
          </h2>
          <ul className="mt-5 space-y-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-sm text-inverse/70 transition-colors hover:text-primary"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-inverse/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-inverse/50 lg:px-8">
          &copy; 2026 {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
