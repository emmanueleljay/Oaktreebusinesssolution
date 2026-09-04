import { company, services } from "@/data/site";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Why Oaktree", href: "#why" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: services.map((s) => ({ label: s.title, href: "#services" })),
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "X", href: "#" },
      { label: "WhatsApp", href: "#" },
    ],
  },
];

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

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {col.title}
            </h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-inverse/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-inverse/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-inverse/50 lg:px-8">
          &copy; 2026 {company.name}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
