export type WorkCategory =
  | 'website'
  | 'platform'
  | 'erp'
  | 'ecommerce'
  | 'brand-search'
  | 'lab'

export type WorkStatus = 'live' | 'private' | 'in-build' | 'concept'

export interface WorkProject {
  slug: string
  number: string
  name: string
  client?: string
  category: WorkCategory
  categoryLabel: string
  industries: string[]
  year: string
  status: WorkStatus
  shortDescription: string
  thesis?: string
  scope: string[]
  cover: string
  coverAlt: string
  caseStudyAvailable: boolean
  externalUrl?: string
  featured?: boolean
  homepageFeatured?: boolean
  private?: boolean
  // For ecosystem projects — child modules shown inside parent case study
  ecosystemOf?: string
}

const projects: WorkProject[] = [
  // ─── HOMEPAGE + FEATURED ───────────────────────────────────────────────────

  {
    slug: 'goldvault-erp',
    number: '01',
    name: 'GoldVault ERP',
    category: 'erp',
    categoryLabel: 'ERP / Jewellery Operations / Desktop Software',
    industries: ['Jewellery Manufacturing'],
    year: '2024',
    status: 'private',
    thesis:
      'An air-gapped operational system built around the realities of jewellery manufacturing and gold accounting.',
    shortDescription:
      'An encrypted, air-gapped desktop ERP for jewellery manufacturing, smith ledgers, refinery settlements, stock, cashbooks and private operational records.',
    scope: [
      'Smith and karigar ledgers',
      'Gold purity and weight calculations',
      'Refinery and assay settlement',
      'Stock purchase, sale and transfer',
      'Cashbook',
      'Reporting',
      'Private Ledger Mode',
      'Encrypted local database',
      'Backup and restore',
      'Role-based access',
    ],
    cover: '/work/gold vault.png',
    coverAlt: 'GoldVault ERP — anonymised system interface',
    caseStudyAvailable: true,
    featured: true,
    homepageFeatured: true,
    private: true,
  },

  {
    slug: 'nixtudio',
    number: '02',
    name: 'NIXTUDIO',
    client: 'Nixtudio by Nikita Liby',
    category: 'brand-search',
    categoryLabel: 'Brand Website / Search / Conversion',
    industries: ['Beauty', 'Bridal', 'Salon'],
    year: '2025',
    status: 'live',
    thesis:
      'An editorial salon and bridal website designed around portfolio discovery, local search and direct enquiry pathways.',
    shortDescription:
      'An editorial bridal studio website with local SEO, Google Business Profile and WhatsApp AI enquiry automation.',
    scope: [
      'Brand strategy and content structure',
      'Custom Next.js website',
      'Portfolio and gallery system',
      'Local search architecture',
      'Google Business Profile setup',
      'WhatsApp AI enquiry automation',
      'n8n workflow',
    ],
    cover: '/work/nixtudio.png',
    coverAlt: 'NIXTUDIO bridal studio website',
    caseStudyAvailable: true,
    externalUrl: 'https://nixtudio.in',
    featured: true,
    homepageFeatured: true,
  },

  {
    slug: 'christ-study-centre',
    number: '03',
    name: 'Christ Study Centre',
    category: 'platform',
    categoryLabel: 'Education Website / Lead System',
    industries: ['Education'],
    year: '2025',
    status: 'live',
    thesis:
      'An education experience combining course discovery, an interactive batch finder, parent-focused messaging and enquiry conversion.',
    shortDescription:
      'An education platform with interactive batch finder, course discovery, parent communication and WhatsApp enquiry flows.',
    scope: [
      'Batch finder',
      'Course discovery',
      'WhatsApp enquiry flow',
      'Parent-facing messaging',
      'Testimonials',
      'Location and contact pathways',
    ],
    cover: '/work/christ study centre.png',
    coverAlt: 'Christ Study Centre education website',
    caseStudyAvailable: true,
    externalUrl: 'https://christ-study-centre.vercel.app',
    featured: true,
    homepageFeatured: true,
  },

  // ─── FULL ARCHIVE ──────────────────────────────────────────────────────────

  {
    slug: 'moozhayil',
    number: '04',
    name: 'Moozhayil Gold & Diamonds',
    category: 'platform',
    categoryLabel: 'Platform / Ecommerce / Operations',
    industries: ['Jewellery'],
    year: '2024',
    status: 'in-build',
    thesis:
      'A connected jewellery ecosystem spanning customer savings, ecommerce, payments and internal operations.',
    shortDescription:
      'A full-stack jewellery ecosystem: Flutter customer app, ecommerce catalogue, gold savings schemes, grams ledger, KYC, Razorpay payments, CRM and ERP integration.',
    scope: [
      'Flutter customer application',
      'Ecommerce catalogue',
      'Cart and purchasing',
      'Gold savings schemes',
      'Grams ledger',
      'KYC',
      'Razorpay payments',
      'Customer notifications',
      'CRM and administration',
      'ERP integration',
      'Operational dashboards',
      'AI-assisted customer support',
    ],
    cover: '/work/moozhayil gold and diamonds.png',
    coverAlt: 'Moozhayil Gold & Diamonds — system architecture',
    caseStudyAvailable: true,
    featured: true,
    private: false,
  },

  {
    slug: 'revolqnexus',
    number: '05',
    name: 'REVOLQNEXUS',
    category: 'platform',
    categoryLabel: 'Platform / Education / Exam Prep',
    industries: ['Education', 'Exam Preparation'],
    year: '2024',
    status: 'live',
    shortDescription:
      'A study platform built around previous-paper analysis, high-yield topic ranking, marks-specific answers, rapid revision and controlled student access.',
    scope: [
      'Previous-paper analysis',
      'High-yield topic ranking',
      'Marks-specific answer system',
      'Rapid revision tools',
      'Controlled student access',
      'Credential and device binding',
    ],
    cover: '/work/revolqnexus.png',
    coverAlt: 'REVOLQNEXUS exam preparation platform',
    caseStudyAvailable: true,
    externalUrl: 'https://revolqexams.vercel.app',
  },

  {
    slug: 'blue-moon',
    number: '06',
    name: 'Blue Moon Bar & Kitchen',
    category: 'website',
    categoryLabel: 'Website / Brand Experience',
    industries: ['Hospitality'],
    year: '2025',
    status: 'live',
    shortDescription:
      'An atmosphere-led hospitality website combining cinematic storytelling, menu discovery, location information and visit conversion.',
    scope: [
      'Cinematic editorial design',
      'Menu discovery',
      'Atmosphere storytelling',
      'Location and visit conversion',
    ],
    cover: '/work/bluemoon.png',
    coverAlt: 'Blue Moon Bar & Kitchen website',
    caseStudyAvailable: true,
    externalUrl: 'https://bluemoonpala.vercel.app',
  },

  {
    slug: 'smile-architects',
    number: '07',
    name: 'Smile Architects',
    category: 'website',
    categoryLabel: 'Website / Healthcare',
    industries: ['Healthcare', 'Dental', 'Orthodontics'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A specialist dental website designed around clinical authority, treatment discovery, doctor positioning and consultation conversion.',
    scope: [
      'Clinical authority positioning',
      'Treatment discovery pages',
      'Doctor profiles',
      'Consultation conversion',
      'Local SEO',
    ],
    cover: '/work/smile architects.png',
    coverAlt: 'Smile Architects dental website',
    caseStudyAvailable: false,
    externalUrl: 'https://smile-architects-gamma.vercel.app',
  },

  {
    slug: 'virtue-dental',
    number: '08',
    name: 'Virtue Dental',
    category: 'website',
    categoryLabel: 'Website / Healthcare',
    industries: ['Healthcare', 'Dental', 'Endodontics'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A specialist healthcare website focused on treatment education, clinical credibility and consultation enquiries.',
    scope: [
      'Treatment education pages',
      'Clinical credibility design',
      'Consultation enquiry flow',
      'Local SEO',
    ],
    cover: '/work/virtue.png',
    coverAlt: 'Virtue Dental website',
    caseStudyAvailable: false,
    externalUrl: 'https://virtue-dental.vercel.app',
  },

  {
    slug: 'al-infotech-tours',
    number: '09',
    name: 'AL-Infotech Tours & Travels',
    category: 'website',
    categoryLabel: 'Website / Lead Generation',
    industries: ['Travel', 'Umrah', 'Domestic Tours'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A travel website built around Umrah packages, domestic tours, package comparison, trust-building information and structured enquiry capture.',
    scope: [
      'Umrah-package discovery',
      'Domestic-tour packages',
      'Package pricing and inclusions',
      'Travel itinerary presentation',
      'Trust and certification messaging',
      'WhatsApp conversion',
      'Enquiry form',
      'Location and contact information',
    ],
    cover: '/work/alinfotech.png',
    coverAlt: 'AL-Infotech Tours & Travels website',
    caseStudyAvailable: false,
    externalUrl: 'https://www.alinfotechtoursandtravels.com',
  },

  {
    slug: 'vimala-silks',
    number: '10',
    name: 'Vimala Silks',
    category: 'ecommerce',
    categoryLabel: 'Ecommerce / Website',
    industries: ['Fashion Retail'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A Shopify-based fashion retail experience with editorial image-led presentation and catalogue discovery.',
    scope: [
      'Shopify custom theme',
      'Editorial catalogue presentation',
      'Bridal storytelling',
      'Collection discovery',
    ],
    cover: '/work/vimala.png',
    coverAlt: 'Vimala Silks fashion ecommerce',
    caseStudyAvailable: false,
  },

  {
    slug: 'holy-family-dental',
    number: '11',
    name: 'Holy Family Dental Care',
    category: 'website',
    categoryLabel: 'Website / Healthcare',
    industries: ['Healthcare', 'Dental'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A specialist dental clinic website with treatment discovery, doctor profiles, patient testimonials and WhatsApp consultation booking.',
    scope: [
      'Clinical authority positioning',
      'Treatment pages',
      'Doctor profiles',
      'Patient testimonials',
      'Photo gallery',
      'WhatsApp consultation',
      'Local SEO',
    ],
    cover: '/work/holy family.png',
    coverAlt: 'Holy Family Dental Care website',
    caseStudyAvailable: false,
    externalUrl: 'https://holy-family-dental-clinic.vercel.app',
  },

  {
    slug: 'honeys-bridal',
    number: '12',
    name: "Honey's Bridal Studio",
    category: 'website',
    categoryLabel: 'Website / Bridal / Beauty',
    industries: ['Beauty', 'Bridal', 'Makeup'],
    year: '2025',
    status: 'live',
    shortDescription:
      'A luxury bridal makeup artist portfolio with service showcase, bridal transformations gallery, celebrity testimonial and consultation booking.',
    scope: [
      'Artist portfolio',
      'Service showcase',
      'Bridal gallery',
      'Celebrity testimonials',
      'Client reviews',
      'WhatsApp consultation',
      'Instagram integration',
    ],
    cover: '/work/honeys.png',
    coverAlt: "Honey's Bridal Studio website",
    caseStudyAvailable: false,
    externalUrl: 'https://honeysbridal.vercel.app',
  },

  // ─── LABS ──────────────────────────────────────────────────────────────────

  {
    slug: 'smb-compliance-vault',
    number: 'L01',
    name: 'SMB Compliance Vault',
    category: 'lab',
    categoryLabel: 'Internal Tool / Concept',
    industries: ['Operations', 'Compliance'],
    year: '2025',
    status: 'concept',
    shortDescription:
      'A central system for ISO documents, insurance, GDPR, bank guarantees, business-continuity records, expiry alerts and secure sharing.',
    scope: [
      'Document repository',
      'Expiry alert system',
      'ISO and GDPR management',
      'Secure sharing',
      'Business-continuity records',
    ],
    cover: '/work/smb.png',
    coverAlt: 'SMB Compliance Vault — concept',
    caseStudyAvailable: false,
  },

  {
    slug: 'lore-platform',
    number: 'L02',
    name: 'Lore Platform',
    category: 'lab',
    categoryLabel: 'Internal / Concept',
    industries: ['Creative Technology'],
    year: '2025',
    status: 'concept',
    shortDescription:
      'A multi-agent worldbuilding and mythology platform using Wanderer, Gatekeeper, Lorekeeper, Archivist, Storyweaver and other specialised agents.',
    scope: [
      'Multi-agent architecture',
      'Worldbuilding tools',
      'Mythology and narrative systems',
      'Specialised agent roles',
    ],
    cover: '/work/lore.png',
    coverAlt: 'Lore Platform — concept',
    caseStudyAvailable: false,
  },

  {
    slug: 'adryal',
    number: 'L03',
    name: 'ADRYAL Digital Ecosystem',
    category: 'lab',
    categoryLabel: 'Internal / Concept',
    industries: ['Fashion', 'Creative Direction'],
    year: '2025',
    status: 'concept',
    shortDescription:
      'A digital identity, editorial magazine, product-release experience and puzzle-led campaign system for the ADRYAL fashion house.',
    scope: [
      'Digital identity system',
      'Editorial magazine',
      'Product-release experiences',
      'Puzzle-led campaign system',
    ],
    cover: '/work/adryal.png',
    coverAlt: 'ADRYAL — concept',
    caseStudyAvailable: false,
  },
]

export default projects

// ─── Helpers ───────────────────────────────────────────────────────────────

export function getHomepageFeatured(): WorkProject[] {
  return projects.filter((p) => p.homepageFeatured)
}

export function getArchiveProjects(): WorkProject[] {
  return projects.filter((p) => !p.ecosystemOf)
}

export function getByCategory(cat: WorkCategory | 'all'): WorkProject[] {
  if (cat === 'all') return getArchiveProjects()
  return getArchiveProjects().filter((p) => p.category === cat)
}

export const STATUS_LABELS: Record<WorkStatus, string> = {
  live: 'LIVE',
  private: 'PRIVATE DEPLOYMENT',
  'in-build': 'IN BUILD',
  concept: 'CONCEPT',
}

export const STATUS_COLORS: Record<WorkStatus, string> = {
  live: '#22c55e',
  private: 'var(--cobalt2)',
  'in-build': '#f59e0b',
  concept: 'var(--dim)',
}
