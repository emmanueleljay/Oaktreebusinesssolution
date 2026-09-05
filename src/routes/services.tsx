import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { CtaBand, Services } from "@/components/site/Sections";
import heroProjectFinance from "@/assets/hero-project-finance.jpg";

const title = "Our Services | Oaktree Business Solutions";
const description =
  "Project finance, real estate development, hospitality, oil & gas, financial trading, commodity trading and import & export services from Oaktree Business Solutions, Lagos.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Services"
        title="Strategic solutions across high-growth sectors."
        description="Seven core areas of activity, each focused on identifying opportunity and turning it into sustainable value."
        image={heroProjectFinance}
      />
      <Services />
      <CtaBand />
    </Layout>
  );
}
