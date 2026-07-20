// About Frances Joseph — page
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  scaleUp, viewport, buttonTap,
} from "@/lib/animations";

const credentials = [
  "Profit First Certified Professional",
  "QuickBooks Certified ProAdvisor",
  "Relay Certified Banking Partner",
  "Clio Affiliate Partner",
  "Caret Legal Partner",
  "Military Spouse Owned Business",
];

const approach = [
  {
    step: "01",
    title: "Understand Your Business",
    body: "Every engagement starts with a consultation to understand your industry, financial situation, and specific needs.",
  },
  {
    step: "02",
    title: "Build the Right Systems",
    body: "Frances designs the accounting structure, reporting, and processes that fit your business, not a generic template.",
  },
  {
    step: "03",
    title: "Deliver Ongoing Support",
    body: "Monthly financial support, reporting, and strategic guidance keep your business on track and your numbers reliable.",
  },
];

export default function AboutFrances() {
  return (
    <div>
      <PageHero
        eyebrow="About Frances Joseph"
        headline="Meet the Founder of Juris Ledger"
        subtext="Frances Joseph founded Juris Ledger to provide specialized accounting and financial support for the businesses that need it most — law firms, contractors, and business owners who need more than a generalist firm."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Frances Joseph" },
        ]}
        cta="Schedule a Consultation"
      />

      {/* Bio section */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <motion.div
              className="relative"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#e6e0da] max-w-md">
                <img
                  src="/manus-storage/Frances-Joseph.jpg"
                  alt="Frances Joseph, Founder of Juris Ledger"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-[#075c5b] text-white p-5 rounded-sm shadow-xl max-w-[200px]"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <p className="font-['Cormorant_Garamond'] text-xl font-600 text-[#e9ff89] leading-none mb-1">
                  Profit First
                </p>
                <p className="text-white/70 text-xs font-['DM_Sans'] leading-snug">
                  Certified Professional
                </p>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="pt-4"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="jl-eyebrow mb-4">Frances Joseph</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight mb-6">
                Founder &amp; Principal, Juris Ledger LLC
              </h2>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                Frances Joseph is the founder and principal of Juris Ledger LLC, a specialized accounting and financial services firm based in Hanover, Maryland. She founded Juris Ledger with a clear purpose: to provide law firms, contractors, and business owners with the kind of specialized financial support that generalist accounting firms simply cannot offer.
              </p>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                As a Profit First Certified Professional, Frances brings a structured, cash-flow-focused approach to every client engagement. The Profit First methodology helps businesses build profitability into their financial structure from the ground up, rather than treating profit as what is left over after expenses.
              </p>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-8">
                Frances works closely with law firms on trust accounting, IOLTA reconciliation, and financial organization. She also provides project accounting and job costing support for mechanical, electrical, and plumbing contractors who need project-level financial visibility.
              </p>

              <motion.div
                className="space-y-3 mb-8"
                variants={staggerContainerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {credentials.map((item) => (
                  <motion.div key={item} variants={staggerItem} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#075c5b] flex-shrink-0" />
                    <span className="text-[#2a2825]/75 text-base font-['DM_Sans']">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div whileTap={buttonTap}>
                <Link href="/contact" className="jl-btn-primary">
                  Schedule a Consultation with Frances
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach section */}
      <section className="bg-[#e6e0da] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="jl-eyebrow mb-4">How Frances Works</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-[#2a2825] leading-tight mb-6">
                A Collaborative, Structured Approach to Financial Support
              </h2>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                Frances takes a collaborative approach with every client. She works directly with business owners, firm partners, and management teams to understand their financial situation, identify challenges, and build the systems and processes that create lasting financial clarity.
              </p>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                Her background spans CFO-level financial oversight, trust accounting for legal practices, project accounting for contractors, and bookkeeping for small to mid-sized businesses.
              </p>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed">
                As a military spouse, Frances understands the value of discipline, structure, and reliability. These are qualities she brings to every client engagement at Juris Ledger.
              </p>
            </motion.div>
            <motion.div
              className="space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {approach.map((item) => (
                <motion.div
                  key={item.step}
                  variants={staggerItem}
                  className="bg-white border border-[#e6e0da] rounded-sm p-7 flex gap-6"
                  whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(7,92,91,0.08)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-[#075c5b]/20 leading-none flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-['DM_Sans'] font-600 text-[#2a2825] text-lg mb-2">{item.title}</h4>
                    <p className="text-[#2a2825]/65 font-['DM_Sans'] text-base leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section className="bg-[#f8f7f5] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-center jl-eyebrow mb-8">Affiliations &amp; Certifications</p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 lg:gap-10"
              variants={staggerContainerFast}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                { src: "https://jurisledger.com/wp-content/uploads/2024/04/Profit-First-Logo.png", alt: "Profit First Certified Professional", h: "h-12 lg:h-14" },
                { src: "https://jurisledger.com/wp-content/uploads/2024/04/QuickBooks-1.png", alt: "QuickBooks Certified ProAdvisor", h: "h-12 lg:h-14" },
                { src: "https://jurisledger.com/wp-content/uploads/2024/04/RelayCertifiedBankingPartner-large-colour.webp", alt: "Relay Certified Banking Partner", h: "h-10 lg:h-12" },
                { src: "https://jurisledger.com/wp-content/uploads/2024/04/2-300x107.png", alt: "Clio Affiliate Partner", h: "h-8 lg:h-10" },
                { src: "https://jurisledger.com/wp-content/uploads/2024/04/Military-Spouse-1.png", alt: "Military Spouse Owned Business", h: "h-12 lg:h-14" },
              ].map(({ src, alt, h }) => (
                <motion.img
                  key={alt}
                  variants={staggerItem}
                  src={src}
                  alt={alt}
                  className={`${h} object-contain opacity-70 hover:opacity-100 transition-opacity duration-300`}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work Directly With Frances?"
        subtext="Schedule a consultation to discuss your business's financial needs and how Juris Ledger can help you gain clarity, structure, and confidence in your numbers."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="About Juris Ledger"
        secondaryHref="/about"
      />
    </div>
  );
}
