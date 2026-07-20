// ServicePage — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowRight, TrendingUp, BookOpen, FileText, Shield, Scale, HardHat, ClipboardCheck } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/siteData";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import NotFound from "./NotFound";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  scaleUp, viewport, buttonTap,
} from "@/lib/animations";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={26} />,
  ClipboardCheck: <ClipboardCheck size={26} />,
  BookOpen: <BookOpen size={26} />,
  FileText: <FileText size={26} />,
  Shield: <Shield size={26} />,
  Scale: <Scale size={26} />,
  HardHat: <HardHat size={26} />,
};

export default function ServicePage() {
  const params = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === params.slug);

  if (!service) return <NotFound />;

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const relatedIndustries = INDUSTRIES.filter((ind) =>
    ind.services.includes(service.slug)
  ).slice(0, 2);

  return (
    <div>
      <PageHero
        eyebrow="Services"
        headline={service.title}
        subtext={service.summary}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        cta="Schedule a Consultation"
      />

      {/* Main content */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Service icon + description */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.div
                  className="w-14 h-14 rounded-sm bg-[#075c5b] flex items-center justify-center text-white mb-7"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.2 }}
                >
                  {SERVICE_ICONS[service.icon]}
                </motion.div>
                <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl xl:text-5xl font-600 text-[#2a2825] mb-5">
                  What Is {service.title}?
                </h2>
                <p className="text-[#2a2825]/70 font-['DM_Sans'] text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              {/* Who it's for */}
              <motion.div
                className="bg-[#e6e0da] rounded-sm p-7 lg:p-8"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h3 className="font-['DM_Sans'] font-600 text-[#075c5b] text-sm uppercase tracking-[0.1em] mb-3">
                  Who This Service Is For
                </h3>
                <p className="text-[#2a2825]/75 font-['DM_Sans'] text-lg leading-relaxed">
                  {service.forWhom}
                </p>
              </motion.div>

              {/* Pain points */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825] mb-7">
                  Common Challenges This Service Addresses
                </h3>
                <motion.div
                  className="space-y-4"
                  variants={staggerContainerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {service.painPoints.map((point, i) => (
                    <motion.div key={i} variants={staggerItem} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full border-2 border-[#075c5b]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#075c5b]" />
                      </div>
                      <p className="text-[#2a2825]/75 font-['DM_Sans'] text-base lg:text-lg leading-relaxed">{point}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* What we help with */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6e0da]">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825]">
                    How Juris Ledger Helps
                  </h3>
                </div>
                <motion.div
                  className="space-y-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {service.whatWeHelp.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="flex items-start gap-6 py-6 border-b border-[#e6e0da]"
                    >
                      <span className="font-['Cormorant_Garamond'] text-3xl font-600 text-[#075c5b]/30 leading-none flex-shrink-0 w-9">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[#2a2825]/75 font-['DM_Sans'] text-base lg:text-lg leading-relaxed pt-0.5">{item}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Quote */}
              <motion.div
                className="border-l-4 border-[#075c5b] pl-7 py-2"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <p className="font-['Cormorant_Garamond'] text-xl lg:text-2xl xl:text-3xl font-500 text-[#2a2825] italic leading-snug">
                  "Specialized accounting support means working with someone who understands your industry's specific financial structure, not just general bookkeeping principles."
                </p>
                <p className="text-[#b6afa8] text-sm font-['DM_Sans'] mt-4">Frances Joseph, Founder — Juris Ledger</p>
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
              {/* CTA card */}
              <motion.div
                className="bg-[#075c5b] rounded-sm p-7 lg:p-8 text-white"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.22 }}
              >
                <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-600 mb-3 leading-snug">
                  Ready to Get Started?
                </h3>
                <p className="text-white/70 font-['DM_Sans'] text-base leading-relaxed mb-6">
                  Schedule a consultation to discuss how {service.title} can support your business.
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

              {/* Related industries */}
              {relatedIndustries.length > 0 && (
                <motion.div
                  className="bg-white border border-[#e6e0da] rounded-sm p-6"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <h4 className="font-['DM_Sans'] font-600 text-[#075c5b] text-xs uppercase tracking-[0.1em] mb-4">
                    Industries We Serve
                  </h4>
                  <div className="space-y-3">
                    {relatedIndustries.map((ind) => (
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
              )}

              {/* Related services */}
              <motion.div
                className="bg-white border border-[#e6e0da] rounded-sm p-6"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h4 className="font-['DM_Sans'] font-600 text-[#075c5b] text-xs uppercase tracking-[0.1em] mb-4">
                  Other Services
                </h4>
                <div className="space-y-3">
                  {related.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-2 text-[#2a2825]/70 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors"
                    >
                      <ArrowRight size={13} className="text-[#075c5b]" />
                      {s.shortTitle}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Questions About ${service.title}?`}
        subtext="Schedule a consultation with Juris Ledger to discuss how we can support your business with specialized accounting and financial services."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View All Services"
        secondaryHref="/services"
      />
    </div>
  );
}
