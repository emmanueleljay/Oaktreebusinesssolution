import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import { Contact } from "@/components/site/Sections";
import heroImportExport from "@/assets/hero-import-export.jpg";

const title = "Contact | Oaktree Business Solutions";
const description =
  "Talk to Oaktree Business Solutions about a project, partnership or business opportunity. Lekki/Epe Expressway, Ikate, Lagos, Nigeria.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk Business."
        description="Have a project, partnership or business opportunity? We'd love to hear from you."
        image={heroImportExport}
      />
      <Contact />
    </Layout>
  );
}
