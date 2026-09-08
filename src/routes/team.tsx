import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { CtaBand } from "@/components/site/Sections";
import { ManagementTeam } from "@/components/site/Team";
import heroImage from "@/assets/africa-team.jpg";

const title = "Management Team | Oaktree Business Solutions";
const description =
  "Meet the management team behind Oaktree Business Solutions — seasoned professionals across estate management, engineering, administration, energy and international trade.";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
});

function TeamPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Leadership"
        title="Our Management Team"
        description="Business technocrats with an average of over 30 years of professional experience in business and corporate management."
        image={heroImage}
      />
      <ManagementTeam />
      <CtaBand />
    </Layout>
  );
}
