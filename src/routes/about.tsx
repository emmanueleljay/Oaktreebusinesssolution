import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { About, CtaBand, WhyOaktree } from "@/components/site/Sections";
import { CoreValues, MissionVision } from "@/components/site/MissionVision";
import heroRealEstate from "@/assets/hero-real-estate.jpg";


const title = "About Us | Oaktree Business Solutions";
const description =
  "Oaktree Business Solutions is a diversified Nigerian company creating value across project finance, real estate, hospitality, energy, trading and international trade.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title="Strategic Solutions. Sustainable Value."
        description="A diversified business solutions company built around opportunity, partnership and long-term value creation from Lagos, Nigeria."
        image={heroRealEstate}
      />
      <About />
      <MissionVision />
      <CoreValues />
      <WhyOaktree />
      <CtaBand />

    </Layout>
  );
}
