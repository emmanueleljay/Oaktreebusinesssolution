import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Building2,
  Compass,
  Fuel,
  Handshake,
  Hotel,
  Landmark,
  Layers,
  LineChart,
  Mail,
  MapPin,
  Phone,
  Ship,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import aboutImage from "@/assets/about-oaktree.jpg";
import { company, pillars, services } from "@/data/site";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  Landmark,
  Building2,
  Hotel,
  Fuel,
  LineChart,
  Boxes,
  Ship,
  Compass,
  Layers,
  Handshake,
  TrendingUp,
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary-ink">
      <span className="h-px w-8 bg-primary" />
      {children}
    </p>
  );
}

export function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={aboutImage}
              alt="Oaktree Business Solutions team in a Lagos boardroom"
              width={1000}
              height={1250}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-ink px-7 py-6 text-inverse sm:block lg:-right-8">
            <p className="font-display text-3xl font-bold text-primary">07</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-inverse/70">
              Core sectors
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Eyebrow>About Oaktree Business Solutions</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Strategic Solutions. <span className="text-primary-ink">Sustainable Value.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Oaktree Business Solutions is a diversified business solutions company focused on
            identifying opportunities, developing strategic partnerships and creating value across
            key sectors of the economy.
          </p>
          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="flex items-start gap-2.5 text-sm font-medium">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {s.title}
              </li>
            ))}
          </ul>
          <Link to="/why-oaktree" className="btn-outline mt-10">
            Learn More About Us
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Strategic solutions across high-growth sectors.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Landmark;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <article id={s.slug} className="group h-full scroll-mt-28 rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.4)]">
                  <div className="flex items-start justify-between">
                    <Icon className="size-7 stroke-[1.4] text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary-ink" />
                    <span className="font-display text-2xl font-bold text-muted-foreground/35 transition-colors group-hover:text-primary">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-ink"
                  >
                    Learn More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Activities() {
  return (
    <section id="activities" className="bg-ink py-20 text-inverse sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our Activities</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Where Opportunity Meets <span className="text-primary">Strategy</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <figure
                className={
                  "group relative overflow-hidden rounded-2xl " +
                  (i === 0 ? "lg:col-span-2" : "")
                }
              >
                <img
                  src={s.image}
                  alt={s.title}
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-primary">
                    {s.number}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-inverse">
                    {s.title}
                  </h3>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyOaktree() {
  return (
    <section id="why" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why Oaktree</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Why Oaktree?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = icons[p.icon] ?? Compass;
            return (
              <Reveal key={p.number} delay={i * 70}>
                <div className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-surface">
                  <p className="font-display text-4xl font-bold text-muted-foreground/25 transition-colors group-hover:text-primary">
                    {p.number}
                  </p>
                  <Icon className="mt-7 size-6 stroke-[1.4] text-primary-ink transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-inverse sm:py-32">
      <div className="pointer-events-none absolute -left-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-gold/15 blur-[110px]" />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Your Next Opportunity <span className="text-primary">Starts Here.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-inverse/75 sm:text-base">
            Let&rsquo;s explore how Oaktree Business Solutions can help turn your next opportunity
            into something valuable.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-lime">
              Start a Conversation
              <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/services" className="btn-ghost-inverse">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const fields = [
  { id: "name", label: "Full Name", type: "text", autoComplete: "name", required: true },
  { id: "email", label: "Email Address", type: "email", autoComplete: "email", required: true },
  { id: "phone", label: "Phone Number", type: "tel", autoComplete: "tel", required: false },
  {
    id: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
    required: false,
  },
  { id: "subject", label: "Subject", type: "text", autoComplete: "off", required: true },
];

const serviceOptions = [
  { value: "", label: "Select a service" },
  ...services.map((s) => ({ value: s.slug, label: s.title })),
];

const WEB3FORMS_KEY = "a4b676e4-fbcd-447b-970d-c04b8982efde";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setFeedback("");

    try {
      const formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_KEY);
      formData.append("subject", String(formData.get("subject") ?? "New enquiry"));
      formData.append("from_name", "Oaktree Business Solutions Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        form.reset();
        setStatus("sent");
        setFeedback("Thank you — your message has been sent. We'll be in touch shortly.");
      } else {
        setStatus("error");
        setFeedback(result.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  }

  return (
    <section id="contact" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Let&rsquo;s Talk Business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Have a project, partnership or business opportunity? We&rsquo;d love to hear from you.
          </p>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 stroke-[1.5] text-primary-ink" />
              <span>
                <strong className="block font-semibold">{company.name}</strong>
                <span className="text-muted-foreground">{company.address}</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 stroke-[1.5] text-primary-ink" />
              <span>
                <strong className="block font-semibold">Phone</strong>
                <span className="text-muted-foreground">+2348088819924</span>
              </span>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 stroke-[1.5] text-primary-ink" />
              <span>
                <strong className="block font-semibold">Email</strong>
                <span className="text-muted-foreground">info@oaktreebusinesssolution.org</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form
            className="rounded-2xl border border-border bg-card p-6 sm:p-9"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.id} className={f.id === "subject" ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={f.id}
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    className="field"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Service Interested In
                </label>
                <select id="service" name="service" required className="field">
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value} disabled={!option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea id="message" name="message" rows={5} required className="field" />
              </div>
            </div>
            <input type="hidden" name="botcheck" className="hidden" style={{ display: "none" }} />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-lime mt-7 w-full justify-center disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              <ArrowRight className="size-4" />
            </button>
            {feedback ? (
              <p
                role="status"
                aria-live="polite"
                className={
                  "mt-4 text-sm " +
                  (status === "error" ? "text-destructive" : "text-primary-ink")
                }
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
