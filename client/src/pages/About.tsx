// About Juris Ledger — page
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICES, TESTIMONIALS } from "@/lib/siteData";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  scaleUp, viewport, buttonTap,
} from "@/lib/animations";

const differentiators = [
  {
    title: "Industry-Specific Expertise",
    body: "We specialize in accounting for law firms, mechanical contractors, electrical contractors, and plumbing contractors. Our knowledge goes beyond general bookkeeping.",
  },
  {
    title: "Profit First Methodology",
    body: "Frances is a certified Profit First Professional. This cash-flow-focused approach helps businesses build profitability into their financial structure from the start.",
  },
  {
    title: "Trust Accounting Knowledge",
    body: "We understand the specific requirements of law firm trust accounting, including IOLTA reconciliation and compliance with state bar financial rules.",
  },
  {
    title: "Project Accounting for Contractors",
    body: "Contractors need job-level financial visibility. We provide project accounting that tracks costs, cash flow, and profitability by individual job.",
  },
  {
    title: "Law Firm Software Familiarity",
    body: "Juris Ledger is a Clio Affiliate Partner and works with Caret Legal, giving law firm clients a seamless connection between their practice management and financial records.",
  },
  {
    title: "Strategic Financial Support",
    body: "Beyond bookkeeping, we offer CFO-level insight and controllership services that help business owners make better decisions with their financial data.",
  },
];

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Juris Ledger"
        headline="A Specialized Firm Built for Specific Businesses"
        subtext="Juris Ledger is not a generalist accounting firm. We are a specialized financial support firm built for law firms, contractors, and business owners who need more than standard bookkeeping."
        breadcrumbs={[{ label: "About Juris Ledger" }]}
        cta="Schedule a Consultation"
      />

      {/* Mission section */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <p className="jl-eyebrow mb-4">Our Purpose</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight mb-6">
                Financial Support That Fits Your Industry
              </h2>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                Juris Ledger was founded to serve businesses that have outgrown generic accounting support. Law firms need trust accounting expertise. Contractors need project-level financial visibility. Business owners need strategic financial guidance, not just a bookkeeper.
              </p>
              <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed mb-8">
                We built Juris Ledger around these specific needs. Every service we offer, every system we use, and every client relationship we build is focused on delivering financial clarity and structure to the businesses that need it most.
              </p>
              <motion.div whileTap={buttonTap}>
                <Link href="/about/frances-joseph" className="jl-btn-primary">
                  Meet Frances Joseph
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="bg-[#075c5b] rounded-sm p-10 text-white"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <p className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-500 italic leading-snug mb-6">
                "We focus on the industries where our specialized expertise makes the most difference, not on being everything to everyone."
              </p>
              <div className="border-t border-white/20 pt-5">
                <p className="font-['DM_Sans'] font-600 text-[#e9ff89] text-base">Frances Joseph</p>
                <p className="text-white/60 text-sm font-['DM_Sans']">Founder, Juris Ledger LLC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What makes JL different */}
      <section className="bg-[#e6e0da] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="jl-eyebrow mb-3">What Sets Us Apart</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight max-w-2xl">
              Why Businesses Choose Juris Ledger
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="jl-card bg-white"
                whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(7,92,91,0.10)" }}
                transition={{ duration: 0.22 }}
              >
                <div className="w-8 h-1 bg-[#075c5b] mb-5 rounded-full" />
                <h3 className="font-['DM_Sans'] font-600 text-[#2a2825] text-lg mb-3">{item.title}</h3>
                <p className="text-[#2a2825]/72 font-['DM_Sans'] text-base leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <p className="jl-eyebrow mb-3">Our Services</p>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-[#2a2825] leading-tight">
                What We Offer
              </h2>
            </div>
            <motion.div whileTap={buttonTap}>
              <Link href="/services" className="jl-btn-outline flex-shrink-0">
                View All Services <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {SERVICES.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <motion.div
                  whileHover={{ borderColor: "#075c5b", y: -2 }}
                  transition={{ duration: 0.18 }}
                >
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 bg-white border border-[#e6e0da] rounded-sm p-5 transition-colors duration-200"
                  >
                    <CheckCircle2 size={15} className="text-[#075c5b] flex-shrink-0" />
                    <span className="text-[#2a2825] font-['DM_Sans'] text-base group-hover:text-[#075c5b] transition-colors duration-200">
                      {s.title}
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#075c5b] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="jl-eyebrow-light mb-3">Client Feedback</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-white leading-tight max-w-xl">
              What Clients Say
            </h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-white/8 border border-white/15 rounded-sm p-7"
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.12)" }}
                transition={{ duration: 0.22 }}
              >
                <Quote size={20} className="text-[#e9ff89]/50 mb-5" />
                <p className="text-white/85 font-['DM_Sans'] text-base lg:text-lg leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <p className="font-['DM_Sans'] font-600 text-[#e9ff89] text-base">{t.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work With a Specialized Accounting Firm?"
        subtext="Schedule a consultation with Juris Ledger to discuss your business's financial needs and how we can help."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Meet Frances Joseph"
        secondaryHref="/about/frances-joseph"
      />
    </div>
  );
}
