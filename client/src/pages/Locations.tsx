// Locations overview page — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { LOCATIONS } from "@/lib/siteData";
import {
  fadeUp, staggerContainer, staggerItem,
  viewport,
} from "@/lib/animations";

const STATE_GROUPS = [
  { label: "Maryland", states: ["MD"] },
  { label: "Washington, DC", states: ["DC"] },
  { label: "Virginia", states: ["VA"] },
];

export default function Locations() {
  return (
    <div>
      <PageHero
        eyebrow="Service Areas"
        headline="Serving Businesses Across Maryland, DC, and Virginia"
        subtext="Juris Ledger is headquartered in Hanover, Maryland and provides specialized accounting services to law firms, contractors, and business owners throughout the region."
        breadcrumbs={[{ label: "Locations" }]}
        cta="Schedule a Consultation"
      />

      <section className="bg-[#f8f7f5] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Intro paragraph */}
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16 lg:mb-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-5 h-px bg-[#075c5b]" />
              <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">Where We Work</p>
              <div className="w-5 h-px bg-[#075c5b]" />
            </div>
            <p className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-500 text-[#2a2825] leading-snug mb-4">
              Remote-first. Regionally focused. Built for businesses that need more than a generalist.
            </p>
            <p className="text-[#2a2825]/65 font-['DM_Sans'] text-lg leading-relaxed">
              Juris Ledger serves clients virtually and in-person across the mid-Atlantic region. Our office is located at 1344 Ashton Rd, Suite 205, Hanover, MD 21076. We do not claim physical offices in other cities, but we actively serve law firms, contractors, and business owners throughout the following areas.
            </p>
          </motion.div>

          {STATE_GROUPS.map((group) => {
            const groupLocations = LOCATIONS.filter((loc) => group.states.includes(loc.state));
            if (groupLocations.length === 0) return null;
            return (
              <div key={group.label} className="mb-14 lg:mb-16">
                <motion.div
                  className="flex items-center gap-4 mb-8"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-600 text-[#2a2825]">
                    {group.label}
                  </h2>
                  <div className="flex-1 h-px bg-[#e6e0da]" />
                </motion.div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {groupLocations.map((loc) => (
                    <motion.div
                      key={loc.slug}
                      variants={staggerItem}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={`/locations/${loc.slug}`}
                        className="group bg-white border border-[#e6e0da] rounded-sm p-6 hover:bg-[#075c5b] hover:border-[#075c5b] transition-all duration-300 shadow-sm hover:shadow-lg block"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <MapPin size={18} className="text-[#075c5b] group-hover:text-[#e9ff89] transition-colors duration-200 flex-shrink-0 mt-0.5" />
                          <ArrowRight size={14} className="text-[#b6afa8] group-hover:text-[#e9ff89] transition-colors duration-200 flex-shrink-0" />
                        </div>
                        <h3 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#2a2825] group-hover:text-white transition-colors duration-200 mb-2 leading-tight">
                          {loc.city}, {loc.state}
                        </h3>
                        <p className="text-[#b6afa8] text-sm font-['DM_Sans'] leading-relaxed line-clamp-2 group-hover:text-white/65 transition-colors duration-200">
                          Specialized accounting services for businesses in {loc.city}.
                        </p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        headline="Serving Your Area with Specialized Accounting Support"
        subtext="Schedule a consultation with Juris Ledger to discuss how we can support your business, wherever you are in the region."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View Our Services"
        secondaryHref="/services"
      />
    </div>
  );
}
