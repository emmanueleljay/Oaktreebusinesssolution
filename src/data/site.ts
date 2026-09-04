import heroProjectFinance from "@/assets/hero-project-finance.jpg";
import heroRealEstate from "@/assets/hero-real-estate.jpg";
import heroHospitality from "@/assets/hero-hospitality.jpg";
import heroOilGas from "@/assets/hero-oil-gas.jpg";
import heroFinancialTrading from "@/assets/hero-financial-trading.jpg";
import heroCommodityTrading from "@/assets/hero-commodity-trading.jpg";
import heroImportExport from "@/assets/hero-import-export.jpg";

export type HeroSlide = {
  id: string;
  label: string;
  headline: string;
  description: string;
  cta: string;
  image: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "project-finance",
    label: "Project Finance",
    headline: "Funding Ideas. Building Possibilities.",
    description:
      "We connect viable projects with strategic financing opportunities designed to support growth and development.",
    cta: "Explore Project Finance",
    image: heroProjectFinance,
  },
  {
    id: "real-estate",
    label: "Real Estate Development",
    headline: "Developing Spaces. Creating Value.",
    description:
      "Strategic real estate development focused on opportunities with long-term value and growth potential.",
    cta: "Explore Real Estate",
    image: heroRealEstate,
  },
  {
    id: "hospitality",
    label: "Hospitality",
    headline: "Creating Experiences That Matter.",
    description:
      "Exploring opportunities in hospitality, accommodation and premium lifestyle development.",
    cta: "Discover Hospitality",
    image: heroHospitality,
  },
  {
    id: "oil-gas",
    label: "Oil & Gas",
    headline: "Connecting Opportunity With Energy.",
    description: "Strategic participation in opportunities across the oil and gas value chain.",
    cta: "Explore Oil & Gas",
    image: heroOilGas,
  },
  {
    id: "financial-trading",
    label: "Financial Trading",
    headline: "Navigating Markets. Unlocking Opportunities.",
    description:
      "Strategic financial trading activities focused on identifying and pursuing market opportunities.",
    cta: "Explore Financial Trading",
    image: heroFinancialTrading,
  },
  {
    id: "commodity-trading",
    label: "Commodity Trading",
    headline: "Connecting Markets. Moving Value.",
    description:
      "Strategic commodity trading solutions connecting suppliers, markets and opportunities.",
    cta: "Explore Commodity Trading",
    image: heroCommodityTrading,
  },
  {
    id: "import-export",
    label: "Import & Export",
    headline: "Bridging Markets Across Borders.",
    description: "Facilitating international trade and cross-border business opportunities.",
    cta: "Explore International Trade",
    image: heroImportExport,
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Project Finance",
    description:
      "Structuring and connecting viable projects with strategic financing partners and capital pathways.",
    icon: "Landmark",
    image: heroProjectFinance,
  },
  {
    number: "02",
    title: "Real Estate Development",
    description:
      "Identifying and developing property opportunities designed for long-term value creation.",
    icon: "Building2",
    image: heroRealEstate,
  },
  {
    number: "03",
    title: "Hospitality",
    description:
      "Pursuing opportunities in accommodation, leisure and premium lifestyle developments.",
    icon: "Hotel",
    image: heroHospitality,
  },
  {
    number: "04",
    title: "Oil & Gas",
    description: "Strategic participation in opportunities across the energy value chain.",
    icon: "Fuel",
    image: heroOilGas,
  },
  {
    number: "05",
    title: "Financial Trading",
    description:
      "Market-focused trading activity built around disciplined research and opportunity.",
    icon: "LineChart",
    image: heroFinancialTrading,
  },
  {
    number: "06",
    title: "Commodity Trading",
    description: "Connecting suppliers, buyers and markets across physical commodity flows.",
    icon: "Boxes",
    image: heroCommodityTrading,
  },
  {
    number: "07",
    title: "Import & Export",
    description:
      "Facilitating cross-border trade, logistics coordination and international partnerships.",
    icon: "Ship",
    image: heroImportExport,
  },
];

export const pillars = [
  {
    number: "01",
    title: "Strategic Thinking",
    description: "Identifying opportunities with a clear focus on sustainable value.",
    icon: "Compass",
  },
  {
    number: "02",
    title: "Diversified Expertise",
    description: "Operating across multiple sectors and business activities.",
    icon: "Layers",
  },
  {
    number: "03",
    title: "Strong Partnerships",
    description: "Building meaningful relationships that create mutual value.",
    icon: "Handshake",
  },
  {
    number: "04",
    title: "Value Creation",
    description: "Focused on turning opportunities into sustainable business outcomes.",
    icon: "TrendingUp",
  },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Activities", href: "#activities" },
  { label: "Why Oaktree", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const company = {
  name: "Oaktree Business Solutions",
  tagline: "Project Finance | Real Estate Development | Hospitality",
  address: "Lekki/Epe Expressway, Ikate, Lagos, Nigeria",
};
