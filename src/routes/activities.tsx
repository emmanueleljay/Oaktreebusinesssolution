import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Activities, CtaBand } from "@/components/site/Sections";
import heroCommodity from "@/assets/hero-commodity-trading.jpg";

const title = "Our Activities | Oaktree Business Solutions";
const description =
  "Where opportunity meets strategy: a look at Oaktree's activities across finance, property, hospitality, energy, markets and global trade.";

export const Route = createFileRoute("/activities")({
  component: ActivitiesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/activities" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/activities" }],
  }),
});

function ActivitiesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Activities"
        title="Where Opportunity Meets Strategy"
        description="A visual view of the sectors Oaktree Business Solutions operates in across Nigeria and international markets."
        image={heroCommodity}
      />
      <Activities />
      <CtaBand />
    </Layout>
  );
}
