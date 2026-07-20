// Industries overview page — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { INDUSTRIES, SERVICES } from "@/lib/siteData";
import {
  staggerContainer, staggerItem,
  viewport, buttonTap,
} from "@/lib/animations";

export default function Industries() {
  return (
    <div>
      <PageHero
        eyebrow="Industries We Serve"
        headline="Accounting Built for the Industries That Need It Most"
        subtext="Juris Ledger focuses on the specific industries where specialized accounting expertise makes the biggest difference: law firms, mechanical contractors, electrical contractors, and plumbing contractors."
        breadcrumbs={[{ label: "Industries" }]}
        cta="Schedule a Consultation"
      />

      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {INDUSTRIES.map((industry) => {
              const relatedServices = SERVICES.filter((s) => industry.services.includes(s.slug));
              return (
                <motion.div
                  key={industry.slug}
                  variants={staggerItem}
                  className="jl-card"
                  whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(7,92,91,0.10)" }}
                  transition={{ duration: 0.22 }}
                >
                  <p className="jl-eyebrow mb-3">{industry.shortTitle}</p>
                  <h2 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825] mb-4 leading-tight">
                    {industry.headline}
                  </h2>
                  <p className="text-[#2a2825]/70 font-['DM_Sans'] text-base lg:text-lg leading-relaxed mb-6">
                    {industry.intro}
                  </p>
                  <div className="space-y-2.5 mb-7">
                    {relatedServices.map((s) => (
                      <div key={s.slug} className="flex items-center gap-2.5 text-[#2a2825]/70 text-base font-['DM_Sans']">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#075c5b] flex-shrink-0" />
                        {s.shortTitle}
                      </div>
                    ))}
                  </div>
                  <motion.div whileTap={buttonTap}>
                    <Link href={`/industries/${industry.slug}`} className="jl-btn-primary">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Serving Specialized Businesses in Maryland, DC, and Virginia"
        subtext="Schedule a consultation with Juris Ledger to discuss how our industry-specific accounting support can help your business."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View Our Services"
        secondaryHref="/services"
      />
    </div>
  );
}
