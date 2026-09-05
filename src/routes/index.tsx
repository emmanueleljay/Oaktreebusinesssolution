import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { About, CtaBand, Services } from "@/components/site/Sections";

const title =
  "Oaktree Business Solutions | Project Finance, Real Estate & Business Solutions";
const description =
  "Oaktree Business Solutions provides strategic solutions across project finance, real estate development, hospitality, oil & gas, financial trading, commodity trading and international trade in Lagos, Nigeria.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Oaktree Business Solutions",
          description,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lekki/Epe Expressway, Ikate",
            addressLocality: "Lagos",
            addressCountry: "NG",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <CtaBand />
    </Layout>
  );
}
