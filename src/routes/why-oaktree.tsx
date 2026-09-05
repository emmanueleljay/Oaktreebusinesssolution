import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { CtaBand, WhyOaktree } from "@/components/site/Sections";
import heroFinancial from "@/assets/hero-financial-trading.jpg";

const title = "Why Oaktree | Oaktree Business Solutions";
const description =
  "Strategic thinking, diversified expertise, strong partnerships and value creation — the four pillars behind Oaktree Business Solutions.";

export const Route = createFileRoute("/why-oaktree")({
  component: WhyPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-oaktree" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-oaktree" }],
  }),
});

function WhyPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Why Oaktree"
        title="Built on strategy, partnership and value."
        description="Four pillars that shape how we identify, structure and pursue every opportunity."
        image={heroFinancial}
      />
      <WhyOaktree />
      <CtaBand />
    </Layout>
  );
}
