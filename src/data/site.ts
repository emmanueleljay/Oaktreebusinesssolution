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
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "project-finance",
    title: "Project Finance",
    description:
      "Structuring and connecting viable projects with strategic financing partners and capital pathways.",
    icon: "Landmark",
    image: heroProjectFinance,
  },
  {
    number: "02",
    slug: "real-estate",
    title: "Real Estate Development",
    description:
      "Identifying and developing property opportunities designed for long-term value creation.",
    icon: "Building2",
    image: heroRealEstate,
  },
  {
    number: "03",
    slug: "hospitality",
    title: "Hospitality",
    description:
      "Pursuing opportunities in accommodation, leisure and premium lifestyle developments.",
    icon: "Hotel",
    image: heroHospitality,
  },
  {
    number: "04",
    slug: "oil-gas",
    title: "Oil & Gas",
    description: "Strategic participation in opportunities across the energy value chain.",
    icon: "Fuel",
    image: heroOilGas,
  },
  {
    number: "05",
    slug: "financial-trading",
    title: "Financial Trading",
    description:
      "Market-focused trading activity built around disciplined research and opportunity.",
    icon: "LineChart",
    image: heroFinancialTrading,
  },
  {
    number: "06",
    slug: "commodity-trading",
    title: "Commodity Trading",
    description: "Connecting suppliers, buyers and markets across physical commodity flows.",
    icon: "Boxes",
    image: heroCommodityTrading,
  },
  {
    number: "07",
    slug: "import-export",
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
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Team", to: "/team" },
      { label: "Our Activities", to: "/activities" },
      { label: "Why Oaktree", to: "/why-oaktree" },
    ],
  },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;



export const company = {
  name: "Oaktree Business Solutions",
  tagline: "Project Finance | Real Estate Development | Hospitality",
  address: "Lekki/Epe Expressway, Ikate, Lagos, Nigeria",
};

import missionImage from "@/assets/mission.jpg";
import visionImage from "@/assets/vision.jpg";
import valuesImage from "@/assets/values.jpg";

export const purpose = [
  {
    key: "mission",
    eyebrow: "Our Mission",
    title: "To create sustainable value across every sector we touch.",
    description:
      "We identify credible opportunities, structure them properly and deliver them with partners who share our standards — turning ideas in project finance, real estate, hospitality, energy and trade into businesses that last.",
    points: [
      "Structure opportunities that stand up to scrutiny",
      "Deliver projects that outlive the transaction",
      "Put partnership and integrity ahead of quick wins",
    ],
    image: missionImage,
    alt: "Oaktree executives reviewing a strategy plan in a Lagos boardroom",
  },
  {
    key: "vision",
    eyebrow: "Our Vision",
    title: "To be Africa's most trusted diversified business solutions company.",
    description:
      "We are building a company that global partners look to first when they want to invest, build or trade in Nigeria and across the continent — known for judgement, discipline and results.",
    points: [
      "A trusted gateway into African markets",
      "Excellence across every sector we operate in",
      "Long-term growth that benefits our communities",
    ],
    image: visionImage,
    alt: "African business leaders looking out over a city skyline at sunset",
  },
] as const;

export const coreValues = [
  {
    number: "01",
    title: "Integrity",
    description: "We do what we say. Every commitment we make is one we intend to keep.",
    icon: "ShieldCheck",
  },
  {
    number: "02",
    title: "Excellence",
    description: "We hold every project, partnership and process to a high standard.",
    icon: "Award",
  },
  {
    number: "03",
    title: "Partnership",
    description: "We grow by building relationships that create value on both sides.",
    icon: "Handshake",
  },
  {
    number: "04",
    title: "Innovation",
    description: "We look for smarter structures and better routes to the same goal.",
    icon: "Lightbulb",
  },
  {
    number: "05",
    title: "Accountability",
    description: "We take ownership of outcomes, not just of effort.",
    icon: "Target",
  },
  {
    number: "06",
    title: "Impact",
    description: "We measure success by the lasting value we leave behind.",
    icon: "Sprout",
  },
] as const;

export const valuesImageAsset = {
  src: valuesImage,
  alt: "Oaktree team shaking hands with partners in a modern African office",
};



import africaSkyline from "@/assets/africa-skyline.jpg";
import africaTeam from "@/assets/africa-team.jpg";
import africaPort from "@/assets/africa-port.jpg";
import africaDevelopment from "@/assets/africa-development.jpg";

export const africaGallery = [
  { src: africaSkyline, alt: "Aerial view of a modern African city skyline at golden hour" },
  { src: africaTeam, alt: "African business executives meeting in a modern Lagos office" },
  { src: africaPort, alt: "Containers and cranes at a busy West African seaport" },
  { src: africaDevelopment, alt: "Tower cranes over a large African property development site" },
];

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  body: string;
  offerings: { title: string; description: string }[];
  approach: string[];
  stats: { value: string; label: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "project-finance",
    title: "Project Finance",
    eyebrow: "Service 01",
    headline: "Funding ideas. Building possibilities.",
    intro:
      "We structure, package and connect viable projects with financing partners and capital pathways suited to their stage, sector and risk profile.",
    body:
      "From early concept to financial close, Oaktree works alongside sponsors to shape a project into something a funder can understand and back. That means disciplined feasibility work, clear financial modelling, credible documentation and the right introductions across our network of institutional and private capital partners in Africa and beyond.",
    offerings: [
      { title: "Project Structuring", description: "Shaping ownership, cash flow and security structures that investors can underwrite." },
      { title: "Feasibility & Modelling", description: "Independent review of assumptions, returns and downside scenarios before capital is committed." },
      { title: "Capital Raising Support", description: "Preparing information memoranda and introducing projects to suitable funding partners." },
      { title: "Transaction Advisory", description: "Guidance through negotiation, due diligence and financial close." },
    ],
    approach: [
      "Assess viability with an honest, evidence-led review",
      "Structure the opportunity around bankable fundamentals",
      "Match the project to the right class of capital",
      "Stay engaged through execution and drawdown",
    ],
    stats: [
      { value: "07", label: "Sectors covered" },
      { value: "360°", label: "Concept to close" },
      { value: "NG", label: "Lagos based, globally connected" },
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate Development",
    eyebrow: "Service 02",
    headline: "Developing spaces. Creating value.",
    intro:
      "We identify, structure and develop property opportunities designed for long-term value in fast-growing African urban markets.",
    body:
      "Lagos and comparable African cities are expanding quickly, and the projects that endure are the ones planned properly. Oaktree focuses on site selection, development planning and delivery partnerships for residential, commercial and mixed-use schemes, with an emphasis on locations where infrastructure and demand are moving in the same direction.",
    offerings: [
      { title: "Site Sourcing & Appraisal", description: "Locating land and assets with genuine development upside and clean title pathways." },
      { title: "Development Planning", description: "Concept, phasing and cost planning aligned to realistic market demand." },
      { title: "Delivery Partnerships", description: "Working with contractors, consultants and co-investors through construction." },
      { title: "Asset Positioning", description: "Sales, leasing and repositioning strategies that protect long-term value." },
    ],
    approach: [
      "Start with the location and the demand behind it",
      "Plan phases that can be funded and delivered",
      "Partner with proven delivery teams",
      "Hold value through quality, not shortcuts",
    ],
    stats: [
      { value: "Mixed", label: "Residential, commercial, mixed-use" },
      { value: "Lagos", label: "Core development market" },
      { value: "Long", label: "Long-term value focus" },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    eyebrow: "Service 03",
    headline: "Creating experiences that matter.",
    intro:
      "We pursue opportunities across accommodation, leisure and premium lifestyle developments serving Africa's growing travel and business economy.",
    body:
      "Hospitality succeeds where service, design and operations meet commercial discipline. Oaktree explores hotel, serviced apartment and lifestyle opportunities, working with operators and partners to shape properties that guests return to and that perform for their owners.",
    offerings: [
      { title: "Concept Development", description: "Defining the guest proposition, positioning and service standard." },
      { title: "Operator Partnerships", description: "Identifying and structuring arrangements with capable operators." },
      { title: "Investment Structuring", description: "Aligning capital, returns and operating economics from the outset." },
      { title: "Lifestyle Projects", description: "Leisure, dining and premium lifestyle offerings tied to the wider development." },
    ],
    approach: [
      "Understand the guest before designing the building",
      "Match the concept to a credible operating model",
      "Build operational discipline into the plan",
      "Measure performance, not just occupancy",
    ],
    stats: [
      { value: "Premium", label: "Positioning focus" },
      { value: "Guest", label: "Experience led" },
      { value: "Growth", label: "Africa travel economy" },
    ],
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    eyebrow: "Service 04",
    headline: "Connecting opportunity with energy.",
    intro:
      "We participate strategically in opportunities across the oil and gas value chain, from supply and services to trading-linked arrangements.",
    body:
      "Energy remains central to the African economy. Oaktree engages selectively across the value chain, working with established partners and prioritising transactions that are transparent, compliant and commercially sound. Our role is to connect credible counterparties and structure participation that manages risk properly.",
    offerings: [
      { title: "Supply Arrangements", description: "Structured product supply and offtake linkages with verified counterparties." },
      { title: "Service Partnerships", description: "Collaboration with technical and logistics providers across the chain." },
      { title: "Opportunity Origination", description: "Identifying and screening participation opportunities in the sector." },
      { title: "Compliance & Risk Review", description: "Documentation, counterparty checks and risk assessment before commitment." },
    ],
    approach: [
      "Verify counterparties before anything else",
      "Structure transactions with clear documentation",
      "Manage exposure deliberately, not optimistically",
      "Work with partners who bring real technical capability",
    ],
    stats: [
      { value: "Chain", label: "Across the value chain" },
      { value: "Checked", label: "Counterparty verification" },
      { value: "Africa", label: "Regional focus" },
    ],
  },
  {
    slug: "financial-trading",
    title: "Financial Trading",
    eyebrow: "Service 05",
    headline: "Navigating markets. Unlocking opportunities.",
    intro:
      "Market-focused trading activity built around disciplined research, defined risk limits and a long-term view of capital.",
    body:
      "Oaktree approaches financial markets the way it approaches every other sector: with research, structure and restraint. Positions are taken on the basis of analysis rather than sentiment, sized within clear limits and reviewed continuously as conditions change.",
    offerings: [
      { title: "Market Research", description: "Macro and sector analysis that informs every position taken." },
      { title: "Strategy Execution", description: "Disciplined execution within pre-agreed mandates and limits." },
      { title: "Risk Management", description: "Exposure limits, monitoring and review as part of daily practice." },
      { title: "Portfolio Review", description: "Regular assessment of performance against objectives." },
    ],
    approach: [
      "Research first, position second",
      "Size every position against defined limits",
      "Review continuously as markets move",
      "Protect capital before chasing return",
    ],
    stats: [
      { value: "Data", label: "Research driven" },
      { value: "Limits", label: "Defined risk framework" },
      { value: "Daily", label: "Continuous review" },
    ],
  },
  {
    slug: "commodity-trading",
    title: "Commodity Trading",
    eyebrow: "Service 06",
    headline: "Connecting markets. Moving value.",
    intro:
      "We connect suppliers, buyers and markets across physical commodity flows, with logistics and documentation handled properly end to end.",
    body:
      "Physical trade works when sourcing, inspection, logistics and payment terms all line up. Oaktree coordinates those moving parts across agricultural and industrial commodities, drawing on relationships with producers, inspection agents, freight partners and buyers in African and international markets.",
    offerings: [
      { title: "Sourcing & Aggregation", description: "Working with producers and suppliers to secure verified volumes." },
      { title: "Quality & Inspection", description: "Independent inspection and certification before shipment." },
      { title: "Logistics Coordination", description: "Inland transport, port handling and freight scheduling." },
      { title: "Trade Documentation", description: "Contracts, payment instruments and shipping paperwork managed carefully." },
    ],
    approach: [
      "Verify product and supplier at source",
      "Inspect before shipment, every time",
      "Plan logistics ahead of the contract, not after",
      "Keep documentation clean and traceable",
    ],
    stats: [
      { value: "Physical", label: "Real goods, real flows" },
      { value: "Port", label: "Sea and inland logistics" },
      { value: "Global", label: "African and international buyers" },
    ],
  },
  {
    slug: "import-export",
    title: "Import & Export",
    eyebrow: "Service 07",
    headline: "Bridging markets across borders.",
    intro:
      "We facilitate cross-border trade, logistics coordination and international partnerships between African and global markets.",
    body:
      "Cross-border trade rewards partners who understand both ends of the route. Oaktree supports importers and exporters with sourcing, freight, customs coordination and partner introductions, so goods move on schedule and obligations are met on both sides.",
    offerings: [
      { title: "Supplier Sourcing", description: "Identifying and vetting suppliers in international markets." },
      { title: "Freight & Customs", description: "Coordinating shipping, clearing and regulatory requirements." },
      { title: "Trade Finance Support", description: "Structuring payment and documentary credit arrangements with partners." },
      { title: "Partnership Development", description: "Building durable relationships between African and global counterparties." },
    ],
    approach: [
      "Understand both markets before quoting a route",
      "Vet every supplier and buyer",
      "Plan clearance and compliance early",
      "Deliver on schedule and on paper",
    ],
    stats: [
      { value: "Borders", label: "Cross-border expertise" },
      { value: "Ports", label: "Sea and air freight" },
      { value: "Partners", label: "Vetted global network" },
    ],
  },
];

export const getServiceDetail = (slug: string) =>
  serviceDetails.find((d) => d.slug === slug);

import ahmoduTijani from "@/assets/ahmodu-tijani-victoria-island.jpg";
import ikejaGraTerraces from "@/assets/ikeja-gra-terraces-new.jpg";
import lekkiPhase1 from "@/assets/lekki-phase-1-development.jpg";
import ikejaGraEstate from "@/assets/ikeja-gra-estate-new.jpg";
import ikejaGraApartments from "@/assets/ikeja-gra-apartments.jpg";
import ikejaGraResidences from "@/assets/ikeja-gra-residences.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  status: string;
  summary: string;
  highlights: string[];
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    slug: "ahmodu-tijani-vi",
    name: "Ahmodu Tijani, Victoria Island",
    location: "Victoria Island, Lagos",
    type: "Multi-storey residential development",
    status: "Completed",
    summary:
      "A multi-storey residential building on Ahmodu Tijani Close in the heart of Victoria Island, delivered through the full construction cycle from substructure to finishing.",
    highlights: [
      "Reinforced concrete frame across multiple floors",
      "Tower crane logistics on a tight island site",
      "Coordinated structural, mechanical and electrical delivery",
    ],
    image: ahmoduTijani,
    alt: "Multi-storey residential building under construction with a tower crane at Ahmodu Tijani, Victoria Island",
  },
  {
    slug: "ikeja-gra-terraces",
    name: "Ikeja GRA Terraces",
    location: "Ikeja GRA, Lagos",
    type: "Terraced homes",
    status: "Completed",
    summary:
      "Contemporary terraced homes in Ikeja GRA, finished in a warm brick and cream palette with private parking and secure access.",
    highlights: [
      "Clean contemporary elevations",
      "Private driveway and secure gated access",
      "Handed over fully finished",
    ],
    image: ikejaGraTerraces,
    alt: "Completed terraced homes with brick and cream finishes in Ikeja GRA, Lagos",
  },
  {
    slug: "lekki-phase-1",
    name: "Lekki Phase 1 Development",
    location: "Lekki Phase 1, Lagos",
    type: "Residential development",
    status: "Completed",
    summary:
      "A residential development in Lekki Phase 1 delivered by an in-house and partner site team working to programme and to specification.",
    highlights: [
      "Experienced site supervision team",
      "Strict site safety standards",
      "Curved balcony architecture and quality external finishes",
    ],
    image: lekkiPhase1,
    alt: "Project team in safety gear on site at the Lekki Phase 1 development in Lagos",
  },
  {
    slug: "ikeja-gra-estate",
    name: "Ikeja GRA Estate",
    location: "Ikeja GRA, Lagos",
    type: "Apartment estate",
    status: "Completed",
    summary:
      "An estate of low-rise apartment blocks in Ikeja GRA arranged around landscaped shared grounds and generous resident parking.",
    highlights: [
      "Multiple low-rise apartment blocks",
      "Landscaped communal grounds",
      "Ample on-site resident parking",
    ],
    image: ikejaGraEstate,
    alt: "Completed low-rise apartment blocks with parking at an estate in Ikeja GRA, Lagos",
  },
  {
    slug: "ikeja-gra-apartments",
    name: "Ikeja GRA Apartments",
    location: "Ikeja GRA, Lagos",
    type: "Apartment block",
    status: "Completed",
    summary:
      "A three-storey apartment block with balconied units, delivered to a durable external finish suited to the Lagos climate.",
    highlights: [
      "Balconied units on every floor",
      "Durable weather-resistant external finish",
      "Delivered ready for occupation",
    ],
    image: ikejaGraApartments,
    alt: "Three-storey apartment block with balconies in Ikeja GRA, Lagos",
  },
  {
    slug: "ikeja-gra-aerial",
    name: "Ikeja GRA Residences",
    location: "Ikeja GRA, Lagos",
    type: "Residential scheme",
    status: "Completed",
    summary:
      "A completed residential scheme in Ikeja GRA, seen from above: repeated blocks, planned circulation and organised parking across the site.",
    highlights: [
      "Master-planned site layout",
      "Organised internal roads and parking",
      "Consistent architecture across blocks",
    ],
    image: ikejaGraResidences,
    alt: "Aerial view of a completed residential scheme with parking courts in Ikeja GRA, Lagos",
  },
];

import davidSokoya from "@/assets/david-sokoya.jpg";
import michealHovarth from "@/assets/micheal-hovarth.jpg";
import elizabethEtete from "@/assets/elizabeth-etete.jpg";
import fataiYusuf from "@/assets/fatai-yusuf.jpg";
import dexterKackus from "@/assets/dexter-kackus.jpg";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  alt: string;
};

export const teamIntro =
  "Our management team is made up of seasoned professionals and experts from various fields and disciplines with an orientation that reflects consistent improvement. The team is made up of business technocrats with an average of over 30 years professional experience in business and corporate management, gainfully engaged to ensure that the company's operations maintain sustainability of customer service and satisfaction.";

export const team: TeamMember[] = [
  {
    slug: "david-olayinka-sokoya",
    name: "David Olayinka Sokoya",
    role: "Group Managing Director",
    bio: "David Olayinka Olutayo Sokoya is currently serving as the Group Managing Director of Northfield Resource Management Limited. He holds a double degree in Estate Management and Law, is a member of several professional bodies, and has well over 17 years of professional and business experience.",
    image: davidSokoya,
    alt: "Portrait of David Olayinka Sokoya, Group Managing Director",
  },
  {
    slug: "micheal-hovarth",
    name: "Micheal Hovarth",
    role: "Executive Director, International Operations",
    bio: "A citizen and resident of the United States of America, Micheal handles business transactions across the USA and European countries. With BSc and MSc degrees in Economics and over 20 years of experience in exportation, he runs our international operations from our Florida office.",
    image: michealHovarth,
    alt: "Portrait of Micheal Hovarth, Executive Director of International Operations",
  },
  {
    slug: "elizabeth-etete",
    name: "Elizabeth Etete",
    role: "Director",
    bio: "Elizabeth holds a degree in Mechanical and Aerospace Engineering with over 25 years of experience in executive management and ten years in procurement. Versatile and widely travelled, she has lived across Africa, Europe and America and is fluent in German, English and French. She is a director at Northfield Resource Management Limited and MD of Crown Lotus Boutique Hotels.",
    image: elizabethEtete,
    alt: "Portrait of Elizabeth Etete, Director",
  },
  {
    slug: "fatai-m-b-yusuf",
    name: "Fatai M. B. Yusuf",
    role: "General Manager, Administration",
    bio: "A graduate of Urban and Regional Planning and a member of the Nigerian Institute of Management, Fatai is General Manager, Administration and also COO of Greg Foods and Farms Limited. He has served the company diligently since inception.",
    image: fataiYusuf,
    alt: "Portrait of Fatai M. B. Yusuf, General Manager of Administration",
  },
  {
    slug: "dexter-martin-kackus",
    name: "Dexter Martin Kackus",
    role: "International Executive Director",
    bio: "Resident in the United States of America, Dexter handles business transactions across the US and European countries covering crude oil, refineries, tanker vessels and international trading. He brings over 25 years of experience in Civil Engineering, AutoCAD, database and system administration, and runs international operations from our Florida office.",
    image: dexterKackus,
    alt: "Portrait of Dexter Martin Kackus, International Executive Director",
  },
];
