// ============================================================
// JURIS LEDGER — Site-wide Content Data
// All confirmed client information. Do not invent or fabricate.
// ============================================================

export const FIRM = {
  name: "Juris Ledger",
  legalName: "Juris Ledger LLC",
  tagline: "Specialized Accounting for Law Firms and Contractors",
  shortTagline: "Financial Clarity for Specialized Businesses",
  owner: "Frances Joseph",
  phone: "(240) 203-8339",
  email: "profits@jurisledger.com",
  address: {
    street: "1344 Ashton Rd, Suite 205",
    city: "Hanover",
    state: "MD",
    zip: "21076",
    full: "1344 Ashton Rd, Suite 205, Hanover, MD 21076",
  },
  hours: "Monday – Friday, 9:00 AM – 5:00 PM",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61552514909061",
    instagram: "https://www.instagram.com/juris_ledger_llc",
    linkedin: "https://www.linkedin.com/in/francesjoseph1",
  },
  googleBusiness: "https://share.google/dJe3QkRYVGXXtUlZj",
  scheduleUrl: "/contact",
  // Acuity Scheduling page where leads book their consultation
  bookingUrl: "https://JurisLedgerFrances.as.me/",
};

export const SERVICES = [
  {
    slug: "cfo-services",
    title: "CFO Services",
    shortTitle: "CFO Services",
    icon: "TrendingUp",
    summary:
      "Strategic financial oversight and decision-making support, without the cost of a full-time CFO.",
    description:
      "Juris Ledger provides fractional CFO services that give business owners the financial insight, forecasting, and strategic clarity they need to make confident decisions and grow sustainably.",
    forWhom: "Business owners, law firms, and contractors who need executive-level financial guidance without a full-time hire.",
    painPoints: [
      "Making major financial decisions without clear data",
      "Uncertain about cash flow, profitability, or growth trajectory",
      "Spending too much time on finances instead of running the business",
      "No structured financial reporting or forecasting",
    ],
    whatWeHelp: [
      "Monthly financial review and reporting",
      "Cash flow forecasting and planning",
      "Budgeting and financial goal-setting",
      "Strategic decision support",
      "Profit First implementation and oversight",
    ],
  },
  {
    slug: "controllership",
    title: "Controllership",
    shortTitle: "Controllership",
    icon: "ClipboardCheck",
    summary:
      "Financial oversight, accurate reporting, and internal controls that keep your business on solid ground.",
    description:
      "Juris Ledger's controllership services provide the financial oversight and reporting structure that growing businesses need, ensuring accuracy, compliance, and clarity across your books.",
    forWhom: "Growing businesses and professional firms that need structured financial oversight without a full internal accounting department.",
    painPoints: [
      "Inconsistent or unreliable financial reports",
      "Lack of internal financial controls",
      "Difficulty closing the books accurately each month",
      "No clear picture of financial performance",
    ],
    whatWeHelp: [
      "Monthly close and financial statement preparation",
      "Internal controls and process oversight",
      "Account reconciliation and accuracy review",
      "Financial reporting for owners and stakeholders",
      "Coordination with external CPAs and auditors",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    shortTitle: "Bookkeeping",
    icon: "BookOpen",
    summary:
      "Clean, organized books and reliable monthly financials, the foundation every business needs.",
    description:
      "Accurate bookkeeping is the foundation of every sound financial decision. Juris Ledger keeps your records clean, your accounts reconciled, and your monthly financials ready when you need them.",
    forWhom: "Small to mid-sized businesses, law firms, and contractors who need reliable, organized financial records.",
    painPoints: [
      "Disorganized or outdated books",
      "Falling behind on reconciliations",
      "Unclear picture of income and expenses",
      "Scrambling at tax time due to poor records",
    ],
    whatWeHelp: [
      "Monthly transaction categorization and reconciliation",
      "Accounts payable and receivable tracking",
      "Monthly financial statements",
      "QuickBooks setup and management",
      "Year-end preparation for tax filing",
    ],
  },
  {
    slug: "tax-services",
    title: "Tax Services",
    shortTitle: "Tax Services",
    icon: "FileText",
    summary:
      "Professional tax support for businesses, organized, timely, and handled with care.",
    description:
      "Juris Ledger provides professional tax services for businesses, helping owners stay organized, meet deadlines, and approach tax season with confidence. We do not make unsupported promises about savings or outcomes.",
    forWhom: "Business owners, law firms, and contractors who need professional tax support and organized financial records.",
    painPoints: [
      "Disorganized records making tax prep difficult",
      "Uncertainty about business tax obligations",
      "Missing deadlines or filing extensions unnecessarily",
      "Lack of coordination between bookkeeping and tax preparation",
    ],
    whatWeHelp: [
      "Business tax return preparation and filing",
      "Tax planning and calendar management",
      "Coordination between bookkeeping and tax records",
      "Estimated tax payment guidance",
      "Year-end financial organization",
    ],
  },
  {
    slug: "robs-accounting",
    title: "ROBS Accounting",
    shortTitle: "ROBS Accounting",
    icon: "Shield",
    summary:
      "Specialized accounting support for businesses funded through a Rollover for Business Startups (ROBS) arrangement.",
    description:
      "ROBS (Rollover for Business Startups) arrangements come with specific accounting and compliance requirements. Juris Ledger provides the specialized bookkeeping and financial support that ROBS-funded businesses need to stay organized and compliant.",
    forWhom: "Business owners who used a ROBS arrangement to fund their business and need accounting support that understands the structure.",
    painPoints: [
      "Confusion about ROBS-specific accounting requirements",
      "Difficulty maintaining proper records for ROBS compliance",
      "Lack of accountants familiar with ROBS structures",
      "Uncertainty about financial reporting obligations",
    ],
    whatWeHelp: [
      "ROBS-specific bookkeeping and record-keeping",
      "Financial statement preparation for ROBS-funded businesses",
      "Coordination with ROBS plan administrators",
      "Ongoing accounting support tailored to ROBS requirements",
    ],
  },
  {
    slug: "trust-accounting-law-firms",
    title: "Trust Accounting for Law Firms",
    shortTitle: "Trust Accounting",
    icon: "Scale",
    summary:
      "Organized, compliant, and reliable trust accounting support built specifically for law firms.",
    description:
      "Trust accounting is one of the most critical and compliance-sensitive areas of law firm finances. Juris Ledger provides specialized trust accounting support to help law firms maintain organized, accurate, and compliant client trust accounts.",
    forWhom: "Law firms of all sizes that need reliable trust accounting support and financial organization.",
    painPoints: [
      "Difficulty maintaining accurate and compliant trust account records",
      "Risk of commingling client funds with operating accounts",
      "Lack of accountants who understand law firm trust accounting rules",
      "Time-consuming manual reconciliation of IOLTA and trust accounts",
    ],
    whatWeHelp: [
      "IOLTA and client trust account reconciliation",
      "Three-way reconciliation support",
      "Trust account record-keeping and reporting",
      "Coordination with law firm management software (Clio, Caret Legal)",
      "Ongoing trust accounting oversight",
    ],
  },
  {
    slug: "project-accounting-contractors",
    title: "Project Accounting for Contractors",
    shortTitle: "Project Accounting",
    icon: "HardHat",
    summary:
      "Job costing, project tracking, and financial visibility for mechanical, electrical, and plumbing contractors.",
    description:
      "Contractors need more than standard bookkeeping. They need financial visibility by project. Juris Ledger provides project accounting services that help MEP contractors track job costs, monitor profitability, and make better financial decisions.",
    forWhom: "Mechanical, electrical, and plumbing (MEP) contractors who need project-level financial tracking and better visibility into job profitability.",
    painPoints: [
      "No clear picture of profitability by project or job",
      "Difficulty tracking labor, materials, and overhead by project",
      "Cash flow challenges tied to project billing cycles",
      "Disorganized financial records across multiple active jobs",
    ],
    whatWeHelp: [
      "Job costing and project-level financial tracking",
      "Work-in-progress (WIP) reporting",
      "Cash flow management for project-based billing",
      "Monthly financial statements by project",
      "Coordination with contractor management software",
    ],
  },
];

export const INDUSTRIES = [
  {
    slug: "law-firms",
    title: "Accounting for Law Firms",
    shortTitle: "Law Firms",
    icon: "Scale",
    summary:
      "Trust accounting, financial organization, and reliable reporting for law firms of all sizes.",
    headline: "Financial Support Built for Law Firms",
    intro:
      "Law firms operate under strict financial and ethical obligations. This is especially true when it comes to client trust accounts. Juris Ledger understands the specific accounting needs of legal practices and provides the organized, reliable financial support that law firms require.",
    services: ["trust-accounting-law-firms", "bookkeeping", "controllership", "cfo-services"],
  },
  {
    slug: "mechanical-contractors",
    title: "Accounting for Mechanical Contractors",
    shortTitle: "Mechanical Contractors",
    icon: "Wrench",
    summary:
      "Project accounting, job costing, and financial clarity for mechanical contractors.",
    headline: "Project Accounting for Mechanical Contractors",
    intro:
      "Mechanical contractors manage complex, multi-phase projects with tight margins. Juris Ledger provides the project accounting and financial visibility that mechanical contractors need to track job costs, manage cash flow, and understand profitability by project.",
    services: ["project-accounting-contractors", "bookkeeping", "cfo-services", "tax-services"],
  },
  {
    slug: "electrical-contractors",
    title: "Accounting for Electrical Contractors",
    shortTitle: "Electrical Contractors",
    icon: "Zap",
    summary:
      "Cost tracking, project accounting, and financial clarity for electrical contractors.",
    headline: "Project Accounting for Electrical Contractors",
    intro:
      "Electrical contractors face the same financial challenges as any project-based business: tracking costs, managing cash flow, and understanding which jobs are actually profitable. Juris Ledger provides specialized project accounting support built for electrical contractors.",
    services: ["project-accounting-contractors", "bookkeeping", "cfo-services", "tax-services"],
  },
  {
    slug: "plumbing-contractors",
    title: "Accounting for Plumbing Contractors",
    shortTitle: "Plumbing Contractors",
    icon: "Droplets",
    summary:
      "Bookkeeping, project accounting, and cash flow organization for plumbing contractors.",
    headline: "Financial Clarity for Plumbing Contractors",
    intro:
      "Plumbing contractors need organized books, clear project financials, and reliable cash flow visibility. Juris Ledger provides the accounting support that helps plumbing contractors stay organized, understand their numbers, and run a more profitable business.",
    services: ["project-accounting-contractors", "bookkeeping", "cfo-services", "tax-services"],
  },
];

export const LOCATIONS = [
  {
    slug: "hanover-md",
    city: "Hanover",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Hanover, MD",
    intro:
      "Juris Ledger is headquartered in Hanover, Maryland, serving law firms, contractors, and business owners throughout the area with specialized accounting, bookkeeping, CFO services, and financial support.",
    localContext:
      "Hanover is home to a growing business community in Anne Arundel County, with proximity to Baltimore, Columbia, and the BWI corridor. Businesses in Hanover range from professional services firms and law practices to mechanical, electrical, and plumbing contractors. Juris Ledger works directly with these businesses to provide clean books, organized financials, and the strategic financial guidance needed to grow with confidence. Our office is located at 1344 Ashton Rd, Suite 205, Hanover, MD 21076, and we serve clients both in-person and virtually.",
    whyUs:
      "As a Hanover-based firm, Juris Ledger understands the local business environment and the financial challenges that come with running a law firm, contracting business, or growing company in the region. We bring specialized expertise in Profit First methodology, trust accounting, project accounting, and CFO-level financial guidance to every client engagement.",
    seoTitle: "Accounting Services in Hanover, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Hanover, MD. Schedule a consultation today.",
  },
  {
    slug: "baltimore-md",
    city: "Baltimore",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Baltimore, MD",
    intro:
      "Juris Ledger serves law firms, contractors, and business owners throughout Baltimore with specialized accounting, trust accounting, project accounting, bookkeeping, and CFO services.",
    localContext:
      "Baltimore is Maryland's largest city and a major hub for law firms, professional services, and construction contractors. The city's diverse business landscape includes legal practices that require trust accounting compliance, mechanical and electrical contractors managing complex project finances, and business owners who need more than basic bookkeeping. Juris Ledger provides the industry-specific financial expertise that Baltimore businesses need to stay organized, profitable, and positioned for growth.",
    whyUs:
      "Baltimore businesses deserve an accounting partner who understands their industry. Whether you run a law firm that needs clean trust account management, a contracting company that needs project-level cost tracking, or a growing business that needs CFO-level financial guidance, Juris Ledger brings the specialized knowledge to support you. We serve Baltimore clients virtually and through our Hanover, MD office.",
    seoTitle: "Accounting Services in Baltimore, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Baltimore, MD. Schedule a consultation today.",
  },
  {
    slug: "columbia-md",
    city: "Columbia",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Columbia, MD",
    intro:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and financial support for law firms, contractors, and business owners in Columbia, Maryland.",
    localContext:
      "Columbia is one of Maryland's most dynamic business communities, located in Howard County between Baltimore and Washington, DC. The area is home to a strong mix of professional services firms, law practices, and contractors who need reliable, specialized financial support. Juris Ledger works with Columbia-area businesses to provide clean monthly financials, Profit First-based cash flow management, and strategic CFO guidance that helps owners make better financial decisions.",
    whyUs:
      "Columbia businesses benefit from Juris Ledger's focused expertise in the industries that drive the local economy. From law firms managing client trust accounts to MEP contractors tracking project profitability, we provide the accounting structure and financial clarity that growing businesses in Howard County need. We serve Columbia clients virtually and through our nearby Hanover, MD office.",
    seoTitle: "Accounting Services in Columbia, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Columbia, MD. Schedule a consultation today.",
  },
  {
    slug: "annapolis-md",
    city: "Annapolis",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Annapolis, MD",
    intro:
      "Juris Ledger supports law firms, contractors, and business owners in Annapolis with specialized accounting, trust accounting, bookkeeping, and financial services tailored to their industries.",
    localContext:
      "Annapolis is Maryland's state capital and home to a strong legal and professional services community. Law firms in Annapolis operate under strict financial and ethical obligations, particularly around client trust accounts. Contractors working in the greater Annapolis area face the financial complexity of managing project costs, payroll, and cash flow across multiple jobs. Juris Ledger provides the specialized accounting support that Annapolis businesses need to stay compliant, organized, and financially healthy.",
    whyUs:
      "Annapolis law firms trust Juris Ledger for accurate trust accounting, clean monthly financials, and the kind of organized bookkeeping that keeps their practice running smoothly. Contractors in the area rely on us for project-level cost tracking and cash flow management. Whatever your industry, Juris Ledger brings focused expertise and a Profit First approach to every client engagement.",
    seoTitle: "Accounting Services in Annapolis, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Annapolis, MD. Schedule a consultation today.",
  },
  {
    slug: "silver-spring-md",
    city: "Silver Spring",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Silver Spring, MD",
    intro:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and financial support for law firms, contractors, and business owners in Silver Spring, Maryland.",
    localContext:
      "Silver Spring is a major business hub in Montgomery County, just north of Washington, DC. The area has a dense concentration of professional services firms, legal practices, and contractors serving the broader DC metro market. Businesses in Silver Spring often face the same financial complexity as larger DC firms but without the resources of a big-city accounting department. Juris Ledger fills that gap with specialized, boutique-level financial support designed for the industries that need it most.",
    whyUs:
      "Silver Spring businesses benefit from Juris Ledger's deep expertise in law firm accounting, contractor project finances, and Profit First cash flow management. We serve clients virtually and through our Hanover, MD office, making it easy for Silver Spring businesses to access the specialized financial support they need without the overhead of a large accounting firm.",
    seoTitle: "Accounting Services in Silver Spring, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Silver Spring, MD. Schedule a consultation today.",
  },
  {
    slug: "washington-dc",
    city: "Washington",
    state: "DC",
    stateFullName: "Washington, DC",
    headline: "Accounting Services in Washington, DC",
    intro:
      "Juris Ledger serves law firms, contractors, and business owners in Washington, DC with specialized accounting, trust accounting, project accounting, bookkeeping, and CFO services.",
    localContext:
      "Washington, DC is home to one of the largest concentrations of law firms and professional services businesses in the country. DC law firms operate under strict bar association rules regarding client trust accounts, and the consequences of mismanaged IOLTA accounts are severe. Contractors working in the District manage complex project finances across government and private sector jobs. Juris Ledger provides the specialized financial expertise that DC-area businesses need to stay compliant, profitable, and organized.",
    whyUs:
      "Juris Ledger understands the unique financial obligations that come with running a law firm or contracting business in Washington, DC. Our trust accounting expertise, project cost tracking, and Profit First methodology give DC clients a financial foundation that supports long-term growth. We serve Washington, DC clients virtually and through our Hanover, MD office, just outside the Beltway.",
    seoTitle: "Accounting Services in Washington, DC | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Washington, DC. Schedule a consultation today.",
  },
  {
    slug: "arlington-va",
    city: "Arlington",
    state: "VA",
    stateFullName: "Virginia",
    headline: "Accounting Services in Arlington, VA",
    intro:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and financial support for law firms, contractors, and business owners in Arlington, Virginia.",
    localContext:
      "Arlington is a major business center in Northern Virginia, directly across the Potomac from Washington, DC. The area has a strong concentration of law firms, professional services companies, and contractors serving both the public and private sectors. Arlington businesses benefit from proximity to the DC market but often need accounting support that understands the specific financial structure of legal practices and project-based businesses. Juris Ledger provides that specialized support.",
    whyUs:
      "Arlington law firms rely on Juris Ledger for accurate trust accounting, organized monthly financials, and the financial oversight that keeps their practice running cleanly. Contractors in the area benefit from our project accounting expertise and Profit First cash flow management. We serve Arlington clients virtually and through our Hanover, MD office, making specialized accounting support accessible across Northern Virginia.",
    seoTitle: "Accounting Services in Arlington, VA | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Arlington, VA. Schedule a consultation today.",
  },
  {
    slug: "alexandria-va",
    city: "Alexandria",
    state: "VA",
    stateFullName: "Virginia",
    headline: "Accounting Services in Alexandria, VA",
    intro:
      "Juris Ledger supports law firms, contractors, and business owners in Alexandria, Virginia with specialized accounting, trust accounting, bookkeeping, and financial services.",
    localContext:
      "Alexandria is a historic city in Northern Virginia with a strong professional services and legal community. Law firms in Alexandria manage complex client trust accounts and need accounting support that understands the ethical and regulatory requirements of legal practice. Contractors in the area face the financial challenges of managing project costs, subcontractor payments, and cash flow across multiple active jobs. Juris Ledger provides the financial structure and expertise that Alexandria businesses need.",
    whyUs:
      "Juris Ledger brings specialized expertise in trust accounting, project accounting, and CFO-level financial guidance to Alexandria businesses. Whether you are a law firm that needs clean IOLTA management, a contractor that needs job-cost visibility, or a business owner who needs a Profit First framework, we provide the focused support that makes a real difference in your bottom line.",
    seoTitle: "Accounting Services in Alexandria, VA | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Alexandria, VA. Schedule a consultation today.",
  },
  {
    slug: "germantown-md",
    city: "Germantown",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Germantown, MD",
    intro:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and financial support for law firms, contractors, and business owners in Germantown, Maryland.",
    localContext:
      "Germantown is one of Montgomery County's largest communities, with a growing business base that includes mechanical, electrical, and plumbing contractors, professional services firms, and small business owners. Contractors in Germantown often manage multiple active projects and need project-level financial visibility to understand which jobs are profitable. Business owners need clean books and reliable monthly financials to make confident decisions. Juris Ledger provides the specialized accounting support that Germantown businesses need to grow.",
    whyUs:
      "Juris Ledger serves Germantown contractors with project accounting, job-cost tracking, and Profit First cash flow management that brings real clarity to their finances. We also support law firms and professional services businesses in the area with trust accounting, bookkeeping, and CFO-level financial guidance. We serve Germantown clients virtually and through our Hanover, MD office.",
    seoTitle: "Accounting Services in Germantown, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Germantown, MD. Schedule a consultation today.",
  },
  {
    slug: "frederick-md",
    city: "Frederick",
    state: "MD",
    stateFullName: "Maryland",
    headline: "Accounting Services in Frederick, MD",
    intro:
      "Juris Ledger serves law firms, contractors, and business owners in Frederick, Maryland with specialized accounting, bookkeeping, project accounting, and CFO services.",
    localContext:
      "Frederick is a fast-growing city in western Maryland with a strong contractor and small business community. The area has seen significant growth in construction, professional services, and legal practices over the past decade. Contractors in Frederick need project-level financial visibility and cash flow management to stay profitable as their businesses scale. Law firms need clean trust accounting and organized financials. Business owners need a financial partner who understands their industry. Juris Ledger provides all of this.",
    whyUs:
      "Juris Ledger brings specialized expertise in contractor project accounting, law firm trust accounting, and Profit First financial management to Frederick businesses. We understand the financial challenges that come with running a growing business in western Maryland, and we provide the accounting structure and strategic guidance that helps our clients build lasting profitability. We serve Frederick clients virtually and through our Hanover, MD office.",
    seoTitle: "Accounting Services in Frederick, MD | Juris Ledger",
    metaDescription:
      "Juris Ledger provides specialized accounting, bookkeeping, CFO services, and tax support for law firms, contractors, and business owners in Frederick, MD. Schedule a consultation today.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "As a leader, Frances exhibited strong leadership qualities that inspired and motivated her team. She leads by example, setting high standards and encouraging everyone to strive for excellence. Her ability to communicate and delegate tasks efficiently ensured that projects were completed on time with high standards. Having the opportunity to work with Frances has been a privilege and I am glad to have her as a resource as she is always willing to help.",
    author: "Anayansi",
    role: "",
  },
  {
    quote:
      "We have worked with Frances for three months now. Within the first thirty days our cash flow situation improved and there was less anxiety. At this point, we are able to see some profit growth and we are meeting our targets. I am happy with the service and she is pleasant to work with.",
    author: "Toyosi Solanke",
    role: "",
  },
  {
    quote:
      "I have worked with Frances on a temporary basis and she has been a great asset. She takes on any project and does a great job working through any challenges and closing out assignments.",
    author: "Shelly Volek",
    role: "",
  },
];

export const TRUST_BADGES = [
  { label: "Profit First Certified Professional", key: "profit-first" },
  { label: "QuickBooks Certified ProAdvisor", key: "quickbooks" },
  { label: "Relay Certified Banking Partner", key: "relay" },
  { label: "Clio Affiliate Partner", key: "clio" },
  { label: "Caret Legal", key: "caret" },
  { label: "Military Spouse Owned Business", key: "military-spouse" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Juris Ledger", href: "/about" },
      { label: "About Frances Joseph", href: "/about/frances-joseph" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "CFO Services", href: "/services/cfo-services" },
      { label: "Controllership", href: "/services/controllership" },
      { label: "Bookkeeping", href: "/services/bookkeeping" },
      { label: "Tax Services", href: "/services/tax-services" },
      { label: "ROBS Accounting", href: "/services/robs-accounting" },
      { label: "Trust Accounting for Law Firms", href: "/services/trust-accounting-law-firms" },
      { label: "Project Accounting for Contractors", href: "/services/project-accounting-contractors" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "All Industries", href: "/industries" },
      { label: "Law Firms", href: "/industries/law-firms" },
      { label: "Mechanical Contractors", href: "/industries/mechanical-contractors" },
      { label: "Electrical Contractors", href: "/industries/electrical-contractors" },
      { label: "Plumbing Contractors", href: "/industries/plumbing-contractors" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "All Locations", href: "/locations" },
      { label: "Hanover, MD", href: "/locations/hanover-md" },
      { label: "Baltimore, MD", href: "/locations/baltimore-md" },
      { label: "Columbia, MD", href: "/locations/columbia-md" },
      { label: "Annapolis, MD", href: "/locations/annapolis-md" },
      { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
      { label: "Washington, DC", href: "/locations/washington-dc" },
      { label: "Arlington, VA", href: "/locations/arlington-va" },
      { label: "Alexandria, VA", href: "/locations/alexandria-va" },
      { label: "Germantown, MD", href: "/locations/germantown-md" },
      { label: "Frederick, MD", href: "/locations/frederick-md" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
