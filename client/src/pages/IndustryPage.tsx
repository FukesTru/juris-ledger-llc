// IndustryPage — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES, SERVICES } from "@/lib/siteData";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import NotFound from "./NotFound";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  scaleUp, viewport, buttonTap,
} from "@/lib/animations";

const INDUSTRY_CONTENT: Record<string, {
  focusPoints: string[];
  whyJL: string;
  softwareNote?: string;
}> = {
  "law-firms": {
    focusPoints: [
      "Trust accounting and IOLTA reconciliation",
      "Financial organization and clean monthly books",
      "Reliable reporting for firm partners and management",
      "Law firm management software familiarity (Clio, Caret Legal)",
      "Better visibility into firm-wide financial performance",
      "Coordination between trust accounts and operating accounts",
    ],
    whyJL:
      "Law firms have unique financial obligations that most accountants are not equipped to handle. Juris Ledger understands trust accounting rules, IOLTA requirements, and the financial structure of legal practices. We work with law firm management platforms including Clio and Caret Legal to keep your records organized and your accounts compliant.",
    softwareNote: "Juris Ledger is a Clio Affiliate Partner and works with Caret Legal, two of the leading law firm management platforms.",
  },
  "mechanical-contractors": {
    focusPoints: [
      "Project accounting and job costing by project",
      "Cash flow visibility across active jobs",
      "Organized financial records for multiple concurrent projects",
      "Work-in-progress (WIP) reporting",
      "Better tracking of labor, materials, and overhead by job",
      "Monthly financial statements for business owners",
    ],
    whyJL:
      "Mechanical contractors manage complex projects with tight margins and variable cash flow. Standard bookkeeping is not enough. You need project-level financial visibility. Juris Ledger provides the specialized project accounting support that helps mechanical contractors understand which jobs are profitable and where their money is going.",
  },
  "electrical-contractors": {
    focusPoints: [
      "Project accounting and cost tracking by job",
      "Contractor-specific bookkeeping and financial records",
      "Cash flow management for project-based billing cycles",
      "Financial clarity for growing electrical businesses",
      "Monthly financial statements and reporting",
      "Tax preparation coordination for contractor businesses",
    ],
    whyJL:
      "Electrical contractors face the same financial challenges as any project-based business: tracking costs, managing cash flow, and understanding which jobs are actually profitable. Juris Ledger provides specialized project accounting support built for electrical contractors who need more than basic bookkeeping.",
  },
  "plumbing-contractors": {
    focusPoints: [
      "Project accounting and bookkeeping support",
      "Cash flow organization for project-based work",
      "Better insight into profitability by job",
      "Organized financial records for growing businesses",
      "Monthly financial statements and reporting",
      "Tax preparation and year-end financial organization",
    ],
    whyJL:
      "Plumbing contractors need organized books, clear project financials, and reliable cash flow visibility to run a profitable business. Juris Ledger provides the accounting support that helps plumbing contractors stay on top of their numbers without spending time they do not have on financial administration.",
  },
};

export default function IndustryPage() {
  const params = useParams<{ slug: string }>();
  const industry = INDUSTRIES.find((ind) => ind.slug === params.slug);

  if (!industry) return <NotFound />;

  const content = INDUSTRY_CONTENT[industry.slug];
  const relatedServices = SERVICES.filter((s) => industry.services.includes(s.slug));
  const otherIndustries = INDUSTRIES.filter((ind) => ind.slug !== industry.slug);

  return (
    <div>
      <PageHero
        eyebrow="Industries We Serve"
        headline={industry.headline}
        subtext={industry.intro}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.shortTitle },
        ]}
        cta="Schedule a Consultation"
      />

      {/* Main content */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Why JL */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl xl:text-5xl font-600 text-[#2a2825] mb-6">
                  Why {industry.shortTitle} Choose Juris Ledger
                </h2>
                <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed">
                  {content?.whyJL}
                </p>
              </motion.div>

              {/* Focus points */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6e0da]">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825]">
                    What We Focus On for {industry.shortTitle}
                  </h3>
                </div>
                <motion.div
                  className="space-y-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {content?.focusPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="flex items-start gap-6 py-6 border-b border-[#e6e0da]"
                    >
                      <span className="font-['Cormorant_Garamond'] text-3xl font-600 text-[#075c5b]/30 leading-none flex-shrink-0 w-9">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[#2a2825]/75 font-['DM_Sans'] text-base lg:text-lg leading-relaxed pt-0.5">{point}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Software note */}
              {content?.softwareNote && (
                <motion.div
                  className="bg-[#075c5b]/6 border border-[#075c5b]/15 rounded-sm p-7"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <p className="text-[#075c5b] font-['DM_Sans'] text-base leading-relaxed font-500">
                    {content.softwareNote}
                  </p>
                </motion.div>
              )}

              {/* Related services */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6e0da]">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825]">
                    Services Available for {industry.shortTitle}
                  </h3>
                </div>
                <motion.div
                  className="space-y-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {relatedServices.map((service, i) => (
                    <motion.div key={service.slug} variants={staggerItem}>
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(7,92,91,0.03)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-6 py-6 border-b border-[#e6e0da] transition-colors duration-200"
                        >
                          <span className="font-['Cormorant_Garamond'] text-3xl font-600 text-[#075c5b]/20 leading-none flex-shrink-0 w-9 group-hover:text-[#075c5b]/40 transition-colors duration-200">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2 mb-2">
                              <h4 className="font-['DM_Sans'] font-600 text-[#2a2825] text-base lg:text-lg group-hover:text-[#075c5b] transition-colors duration-200">
                                {service.title}
                              </h4>
                              <ArrowRight size={13} className="text-[#075c5b]/0 group-hover:text-[#075c5b] transition-all duration-200 flex-shrink-0" />
                            </div>
                            <p className="text-[#2a2825]/55 text-base font-['DM_Sans'] leading-relaxed">
                              {service.summary}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div
                className="bg-[#075c5b] rounded-sm p-7 lg:p-8 text-white"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22 }}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-600 mb-3 leading-snug">
                  Serving {industry.shortTitle} in Maryland, DC &amp; Virginia
                </h3>
                <p className="text-white/70 font-['DM_Sans'] text-base leading-relaxed mb-6">
                  Schedule a consultation to discuss how Juris Ledger can support your business with specialized accounting and financial services.
                </p>
                <motion.div whileTap={buttonTap}>
                  <Link href="/contact" className="jl-btn-lime w-full text-center block">
                    Schedule a Consultation
                  </Link>
                </motion.div>
                <a
                  href="tel:2402038339"
                  className="block text-center text-white/60 hover:text-white text-sm font-['DM_Sans'] mt-3 transition-colors"
                >
                  Or call (240) 203-8339
                </a>
              </motion.div>

              <motion.div
                className="bg-white border border-[#e6e0da] rounded-sm p-6"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h4 className="font-['DM_Sans'] font-600 text-[#075c5b] text-xs uppercase tracking-[0.1em] mb-4">
                  Other Industries We Serve
                </h4>
                <div className="space-y-3">
                  {otherIndustries.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={`/industries/${ind.slug}`}
                      className="flex items-center gap-2 text-[#2a2825]/70 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors"
                    >
                      <ArrowRight size={13} className="text-[#075c5b]" />
                      {ind.shortTitle}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Accounting Support for ${industry.shortTitle}`}
        subtext="Juris Ledger provides specialized accounting and financial services for businesses that need more than a generalist firm. Schedule a consultation to learn more."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View All Industries"
        secondaryHref="/industries"
      />
    </div>
  );
}
