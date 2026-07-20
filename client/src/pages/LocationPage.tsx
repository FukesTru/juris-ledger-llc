// LocationPage — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import { ArrowRight, MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { LOCATIONS, SERVICES, INDUSTRIES, FIRM } from "@/lib/siteData";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import NotFound from "./NotFound";
import {
  fadeUp, fadeLeft, fadeRight,
  staggerContainer, staggerContainerFast, staggerItem,
  scaleUp, viewport, buttonTap,
} from "@/lib/animations";

export default function LocationPage() {
  const params = useParams<{ slug: string }>();
  const location = LOCATIONS.find((loc) => loc.slug === params.slug);

  if (!location) return <NotFound />;

  const isHeadquarters = location.slug === "hanover-md";
  const nearbyLocations = LOCATIONS.filter((loc) => loc.slug !== location.slug).slice(0, 5);
  const loc = location as typeof location & { whyUs?: string };

  const keyServices = [
    "Bookkeeping & Monthly Financials",
    "Tax Preparation & Planning",
    "CFO Services & Financial Strategy",
    "Payroll Processing",
    "Trust Accounting (Law Firms)",
    "Project Accounting (Contractors)",
  ];

  return (
    <div>
      <PageHero
        eyebrow={`${location.state} Service Area`}
        headline={location.headline}
        subtext={location.intro}
        breadcrumbs={[
          { label: "Locations", href: "/locations" },
          { label: `${location.city}, ${location.state}` },
        ]}
        cta="Schedule a Consultation"
      />

      {/* Main content */}
      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main column */}
            <div className="lg:col-span-2 space-y-12">
              {/* About serving this area */}
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl xl:text-5xl font-600 text-[#2a2825] mb-6">
                  Accounting Services for Businesses in {location.city}
                </h2>
                <p className="text-[#2a2825]/72 font-['DM_Sans'] text-lg leading-relaxed mb-4">
                  {location.localContext}
                </p>
                {isHeadquarters ? (
                  <motion.div
                    className="flex items-start gap-3 bg-[#075c5b]/6 border border-[#075c5b]/15 rounded-sm p-6 mt-5"
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <MapPin size={16} className="text-[#075c5b] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-['DM_Sans'] font-600 text-[#075c5b] text-base mb-1">
                        Juris Ledger Headquarters
                      </p>
                      <p className="text-[#2a2825]/70 font-['DM_Sans'] text-base">{FIRM.address.full}</p>
                    </div>
                  </motion.div>
                ) : (
                  <p className="text-[#2a2825]/72 font-['DM_Sans'] text-lg leading-relaxed mt-4">
                    Juris Ledger serves businesses in {location.city} remotely and virtually, providing the same specialized accounting support available to clients throughout the region. Our firm is headquartered in Hanover, MD and serves clients across Maryland, Washington, DC, and Virginia.
                  </p>
                )}
              </motion.div>

              {/* Why Juris Ledger for this area */}
              {loc.whyUs && (
                <motion.div
                  className="bg-white border border-[#e6e0da] rounded-sm p-8 lg:p-10"
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <p className="text-[#075c5b] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase mb-4">
                    Why {location.city} Businesses Choose Juris Ledger
                  </p>
                  <p className="text-[#2a2825]/75 font-['DM_Sans'] text-lg leading-relaxed mb-7">
                    {loc.whyUs}
                  </p>
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    variants={staggerContainerFast}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    {keyServices.map((svc) => (
                      <motion.div key={svc} variants={staggerItem} className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-[#075c5b] flex-shrink-0" />
                        <span className="text-[#2a2825]/75 font-['DM_Sans'] text-base">{svc}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Services available */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6e0da]">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825]">
                    Services Available to {location.city} Businesses
                  </h3>
                </div>
                <motion.div
                  className="space-y-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {SERVICES.map((service, i) => (
                    <motion.div key={service.slug} variants={staggerItem}>
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(7,92,91,0.03)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          className="group flex items-start gap-6 py-6 border-b border-[#e6e0da] transition-colors duration-200"
                        >
                          <span className="font-['Cormorant_Garamond'] text-3xl font-600 text-[#075c5b]/15 leading-none flex-shrink-0 w-9 group-hover:text-[#075c5b]/30 transition-colors duration-200">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <p className="font-['DM_Sans'] font-600 text-[#2a2825] text-base lg:text-lg group-hover:text-[#075c5b] transition-colors duration-200">
                                {service.title}
                              </p>
                              <ArrowRight size={13} className="text-[#075c5b]/0 group-hover:text-[#075c5b] transition-all duration-200 flex-shrink-0" />
                            </div>
                            <p className="text-[#2a2825]/50 text-base font-['DM_Sans'] leading-relaxed">
                              {service.summary}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Industries served */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#e6e0da]">
                  <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl xl:text-4xl font-600 text-[#2a2825]">
                    Industries Served in {location.city}
                  </h3>
                </div>
                <motion.div
                  className="space-y-0"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  {INDUSTRIES.map((industry) => (
                    <motion.div key={industry.slug} variants={staggerItem}>
                      <motion.div
                        whileHover={{ backgroundColor: "rgba(7,92,91,0.03)" }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={`/industries/${industry.slug}`}
                          className="group flex items-center justify-between gap-4 py-5 border-b border-[#e6e0da] transition-colors duration-200"
                        >
                          <div>
                            <p className="font-['DM_Sans'] font-600 text-[#2a2825] text-base lg:text-lg group-hover:text-[#075c5b] transition-colors duration-200 mb-1">
                              {industry.shortTitle}
                            </p>
                            <p className="text-[#2a2825]/50 text-base font-['DM_Sans']">{industry.summary}</p>
                          </div>
                          <ArrowRight size={14} className="text-[#075c5b]/30 flex-shrink-0 group-hover:text-[#075c5b] transition-colors duration-200" />
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
                  Serving Businesses in {location.city}
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

              {/* Contact info */}
              <motion.div
                className="bg-white border border-[#e6e0da] rounded-sm p-6"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h4 className="font-['DM_Sans'] font-600 text-[#075c5b] text-xs uppercase tracking-[0.1em] mb-5">
                  Contact Juris Ledger
                </h4>
                <div className="space-y-4">
                  {[
                    { icon: <Phone size={14} />, label: "Phone", content: <a href="tel:2402038339" className="text-[#2a2825] text-base font-['DM_Sans'] hover:text-[#075c5b] transition-colors">(240) 203-8339</a> },
                    { icon: <Mail size={14} />, label: "Email", content: <a href="mailto:profits@jurisledger.com" className="text-[#2a2825] text-base font-['DM_Sans'] hover:text-[#075c5b] transition-colors">profits@jurisledger.com</a> },
                    { icon: <MapPin size={14} />, label: "Office", content: <p className="text-[#2a2825] text-base font-['DM_Sans']">{FIRM.address.full}</p> },
                    { icon: <Clock size={14} />, label: "Hours", content: <p className="text-[#2a2825] text-base font-['DM_Sans']">{FIRM.hours}</p> },
                  ].map(({ icon, label, content }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="text-[#075c5b] flex-shrink-0 mt-0.5">{icon}</div>
                      <div>
                        <p className="text-[#b6afa8] text-[0.6rem] font-['DM_Sans'] tracking-wider uppercase mb-0.5">{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Nearby locations */}
              <motion.div
                className="bg-white border border-[#e6e0da] rounded-sm p-6"
                variants={scaleUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <h4 className="font-['DM_Sans'] font-600 text-[#075c5b] text-xs uppercase tracking-[0.1em] mb-4">
                  Other Service Areas
                </h4>
                <div className="space-y-3">
                  {nearbyLocations.map((nearLoc) => (
                    <Link
                      key={nearLoc.slug}
                      href={`/locations/${nearLoc.slug}`}
                      className="flex items-center gap-2 text-[#2a2825]/70 hover:text-[#075c5b] text-base font-['DM_Sans'] transition-colors"
                    >
                      <MapPin size={12} className="text-[#075c5b]" />
                      {nearLoc.city}, {nearLoc.state}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Accounting Services for ${location.city} Businesses`}
        subtext={`Juris Ledger serves law firms, contractors, and business owners in ${location.city} with specialized accounting, bookkeeping, CFO services, and financial support. Schedule a consultation to get started.`}
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View All Locations"
        secondaryHref="/locations"
      />
    </div>
  );
}
