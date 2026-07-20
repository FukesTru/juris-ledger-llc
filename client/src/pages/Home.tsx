// Home — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
// Section order: Hero → Intro Strip → Frances → Services (2-col) → Industries → Testimonials → Locations → Badges → CTA
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Quote, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { SERVICES, INDUSTRIES, TESTIMONIALS, LOCATIONS } from "@/lib/siteData";
import {
  fadeUp, fadeIn, fadeLeft, fadeRight,
  heroHeadline, heroSubtext, heroButtons, heroTrust,
  staggerContainer, staggerContainerFast, staggerItem,
  sectionLabel, scaleUp,
  viewport, buttonTap, cardHover,
} from "@/lib/animations";

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('/manus-storage/jl-hero-bg_c978ca4f.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#075c5b]/95 via-[#075c5b]/82 to-[#075c5b]/30" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-4 mb-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <motion.div
                className="w-8 h-px bg-[#e9ff89]/60"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              />
              <p className="text-[#e9ff89]/80 text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.2em] uppercase">
                Specialized Accounting &amp; Financial Services
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl xl:text-[4.75rem] font-600 text-white leading-[1.04] mb-5"
              variants={heroHeadline}
              initial="hidden"
              animate="visible"
            >
              Stop Overpaying the IRS &amp; Maximize Your Profits.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-white/85 font-['DM_Sans'] text-xl lg:text-2xl font-500 leading-snug mb-4 max-w-xl"
              variants={heroSubtext}
              initial="hidden"
              animate="visible"
            >
              Specialized accounting and CFO services for law firms, contractors, and business owners in Maryland, DC, and Virginia.
            </motion.p>

            <motion.p
              className="text-white/65 font-['DM_Sans'] text-base lg:text-lg leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.38 }}
            >
              Juris Ledger is not a generalist firm. We serve the industries we know best, with financial clarity, Profit First methodology, and hands-on support that moves your numbers in the right direction.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={heroButtons}
              initial="hidden"
              animate="visible"
            >
              <motion.div whileTap={buttonTap}>
                <Link href="/contact" className="jl-btn-lime">
                  Schedule a Consultation
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
              <motion.div whileTap={buttonTap}>
                <Link href="/services" className="jl-btn-outline-light">
                  Explore Our Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="mt-14 pt-8 border-t border-white/15 flex flex-wrap gap-x-7 gap-y-3"
              variants={heroTrust}
              initial="hidden"
              animate="visible"
            >
              {[
                "Profit First Certified Professional",
                "QuickBooks Certified ProAdvisor",
                "Clio Affiliate Partner",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#e9ff89]" />
                  <span className="text-white/65 text-sm font-['DM_Sans']">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ──────────────────────────────────── */}
      <section className="bg-[#075c5b] py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between gap-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="font-['Cormorant_Garamond'] text-2xl lg:text-3xl font-500 text-white leading-snug text-center lg:text-left max-w-2xl">
              Not a generalist firm. A specialized financial partner for the industries that need it most.
            </p>
            <motion.div whileTap={buttonTap}>
              <Link href="/about" className="jl-btn-outline-light flex-shrink-0">
                About Juris Ledger
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT FRANCES ────────────────────────────────── */}
      <section className="bg-[#f8f7f5] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#e6e0da] max-w-md">
                <motion.img
                  src="/manus-storage/Frances-Joseph.jpg"
                  alt="Frances Joseph, Founder of Juris Ledger"
                  className="w-full h-full object-cover object-top"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 lg:-right-6 bg-[#075c5b] text-white p-5 rounded-sm shadow-xl max-w-[200px]"
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
              >
                <p className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#e9ff89] leading-none mb-1">
                  Profit First
                </p>
                <p className="text-white/70 text-xs font-['DM_Sans'] leading-snug">
                  Certified Professional
                </p>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.div className="flex items-center gap-3 mb-4" variants={sectionLabel}>
                <div className="w-5 h-px bg-[#075c5b]" />
                <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">Meet Frances Joseph</p>
              </motion.div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight mb-6">
                A Financial Partner Who Understands Your Business
              </h2>
              <p className="text-[#2a2825]/65 font-['DM_Sans'] text-lg leading-relaxed mb-5">
                Frances Joseph founded Juris Ledger with a clear purpose: to provide law firms, contractors, and business owners with the kind of specialized financial support that generalist accounting firms simply cannot offer.
              </p>
              <p className="text-[#2a2825]/65 font-['DM_Sans'] text-lg leading-relaxed mb-8">
                As a Profit First Certified Professional, Frances brings a structured, cash-flow-focused approach to every client engagement, helping businesses build profitability into their financial structure from the ground up.
              </p>

              <motion.div
                className="border-t border-[#e6e0da] pt-6 space-y-3 mb-8"
                variants={staggerContainerFast}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                {[
                  "Profit First Certified Professional",
                  "QuickBooks Certified ProAdvisor",
                  "Relay Certified Banking Partner",
                  "Clio &amp; Caret Legal Affiliate Partner",
                  "Military Spouse Owned Business",
                ].map((item) => (
                  <motion.div key={item} variants={staggerItem} className="flex items-center gap-3 py-1.5 border-b border-[#e6e0da]/50 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#075c5b] flex-shrink-0" />
                    <span className="text-[#2a2825]/70 text-base font-['DM_Sans']" dangerouslySetInnerHTML={{__html: item}} />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div whileTap={buttonTap}>
                <Link href="/about/frances-joseph" className="jl-btn-primary">
                  About Frances
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4 pb-8 border-b border-[#e6e0da]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-[#075c5b]" />
                <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">What We Do</p>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight max-w-lg">
                Services Built Around Your Business
              </h2>
            </div>
            <motion.div whileTap={buttonTap}>
              <Link href="/services" className="jl-btn-outline flex-shrink-0">
                View All Services
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e6e0da]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {SERVICES.map((service, i) => {
              const isLeftCol = i % 2 === 0;
              const isLastRow = i >= SERVICES.length - 2;
              const isLastItem = i === SERVICES.length - 1;
              return (
                <motion.div
                  key={service.slug}
                  variants={staggerItem}
                  className={`
                    ${isLastItem && SERVICES.length % 2 === 1 ? "md:col-span-2 md:max-w-[50%] md:mx-auto md:w-full border-t border-[#e6e0da]" : ""}
                    ${!isLastItem && isLeftCol ? "md:border-r border-[#e6e0da]" : ""}
                    ${!isLastRow ? "border-b border-[#e6e0da]" : ""}
                  `}
                >
                  <motion.div whileHover={{ backgroundColor: "rgba(7,92,91,0.04)" }} transition={{ duration: 0.2 }}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex items-start gap-5 p-6 lg:p-8 transition-colors duration-200"
                    >
                      <span className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-600 text-[#075c5b]/30 leading-none flex-shrink-0 w-9 group-hover:text-[#075c5b]/55 transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="font-['DM_Sans'] font-600 text-[#2a2825] text-base lg:text-lg group-hover:text-[#075c5b] transition-colors duration-200 leading-snug">
                            {service.title}
                          </h3>
                          <ArrowRight size={13} className="text-[#075c5b]/0 group-hover:text-[#075c5b] transition-all duration-200 flex-shrink-0 mt-1" />
                        </div>
                        <p className="text-[#2a2825]/60 text-sm lg:text-base font-['DM_Sans'] leading-relaxed">
                          {service.summary}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section className="bg-[#075c5b] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-[#e9ff89]/60" />
                <p className="text-[#e9ff89]/70 text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">Who We Serve</p>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-white leading-tight mb-6">
                Accounting Built for Specific Industries
              </h2>
              <p className="text-white/65 font-['DM_Sans'] text-lg leading-relaxed mb-8">
                Juris Ledger does not try to be everything to everyone. We focus on the industries where our specialized expertise makes the most difference.
              </p>
              <motion.div whileTap={buttonTap}>
                <Link href="/industries" className="jl-btn-outline-light">
                  View All Industries <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-0 border-t border-white/15"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {INDUSTRIES.map((industry, i) => (
                <motion.div key={industry.slug} variants={staggerItem}>
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group flex items-start gap-5 py-7 border-b border-white/15 -mx-5 lg:-mx-0 px-5 lg:px-0"
                    >
                      <span className="font-['Cormorant_Garamond'] text-3xl font-600 text-white/15 leading-none flex-shrink-0 w-8 group-hover:text-[#e9ff89]/40 transition-colors duration-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h3 className="font-['DM_Sans'] font-600 text-white text-lg group-hover:text-[#e9ff89] transition-colors duration-200">
                            {industry.shortTitle}
                          </h3>
                          <ArrowRight size={14} className="text-white/30 flex-shrink-0 group-hover:text-[#e9ff89] transition-colors duration-200" />
                        </div>
                        <p className="text-white/50 font-['DM_Sans'] text-base leading-relaxed">
                          {industry.summary}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────── */}
      <section className="bg-[#e6e0da] py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-[#b6afa8]/30 gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-[#075c5b]" />
                <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">Client Feedback</p>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-[#2a2825] leading-tight max-w-xl">
                What Clients Say About Working With Frances
              </h2>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#b6afa8]/30"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ backgroundColor: "rgba(7,92,91,0.03)" }}
                transition={{ duration: 0.2 }}
                className={`p-8 lg:p-10 ${i < TESTIMONIALS.length - 1 ? "border-b md:border-b-0 md:border-r border-[#b6afa8]/30" : ""}`}
              >
                <Quote size={20} className="text-[#075c5b]/25 mb-6" />
                <p className="text-[#2a2825]/75 font-['DM_Sans'] text-base lg:text-lg leading-relaxed mb-7 italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-[#b6afa8]/30 pt-4">
                  <p className="font-['DM_Sans'] font-600 text-[#075c5b] text-base">{t.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────── */}
      <section className="bg-[#f8f7f5] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 pb-6 border-b border-[#e6e0da] gap-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-[#075c5b]" />
                <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase">Where We Serve</p>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl font-600 text-[#2a2825] leading-tight">
                Serving Maryland, DC, and Virginia
              </h2>
            </div>
            <motion.div whileTap={buttonTap}>
              <Link href="/locations" className="jl-btn-outline flex-shrink-0">
                View All Locations
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border border-[#e6e0da]"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {LOCATIONS.map((loc, i) => (
              <motion.div key={loc.slug} variants={staggerItem}>
                <Link
                  href={`/locations/${loc.slug}`}
                  className={`group flex items-center gap-2 px-4 py-4 hover:bg-[#075c5b] transition-colors duration-200 ${
                    i % 5 !== 4 ? "border-r border-[#e6e0da]" : ""
                  } ${i >= 5 ? "border-t border-[#e6e0da]" : ""}`}
                >
                  <MapPin size={12} className="text-[#075c5b] flex-shrink-0 group-hover:text-[#e9ff89] transition-colors duration-200" />
                  <span className="text-[#2a2825] text-sm font-['DM_Sans'] group-hover:text-white transition-colors duration-200">
                    {loc.city}, {loc.state}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TRUST BADGES — seamless infinite ticker ──────── */}
      <section className="bg-[#e6e0da] py-12 lg:py-16 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-5 lg:px-8 mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="flex-1 h-px bg-[#b6afa8]/40 max-w-24" />
            <p className="text-[#b6afa8] text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.18em] uppercase whitespace-nowrap">
              Affiliations &amp; Certifications
            </p>
            <div className="flex-1 h-px bg-[#b6afa8]/40 max-w-24" />
          </div>
        </motion.div>

        <style>{`
          @keyframes jlTickerLoop {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .jl-ticker-wrap {
            overflow: hidden;
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          }
          .jl-ticker-track {
            display: flex;
            align-items: center;
            width: max-content;
            animation: jlTickerLoop 32s linear infinite;
            will-change: transform;
          }
          .jl-ticker-track:hover { animation-play-state: paused; }
          .jl-ticker-set {
            display: flex;
            align-items: center;
            gap: 5rem;
            padding: 0 2.5rem;
            flex-shrink: 0;
          }
          .jl-ticker-logo {
            height: 5rem;
            width: auto;
            object-fit: contain;
            opacity: 0.68;
            transition: opacity 0.35s ease, transform 0.35s ease;
            flex-shrink: 0;
            display: block;
          }
          .jl-ticker-logo:hover { opacity: 1; transform: scale(1.12); }
        `}</style>

        <div className="jl-ticker-wrap">
          <div className="jl-ticker-track">
            {[0, 1, 2, 3].map((set) => (
              <div key={set} className="jl-ticker-set">
                <img src="https://jurisledger.com/wp-content/uploads/2024/04/Profit-First-Logo.png" alt="Profit First Certified Professional" className="jl-ticker-logo" />
                <img src="https://jurisledger.com/wp-content/uploads/2024/04/QuickBooks-1.png" alt="QuickBooks Certified ProAdvisor" className="jl-ticker-logo" />
                <img src="https://jurisledger.com/wp-content/uploads/2024/04/RelayCertifiedBankingPartner-large-colour.webp" alt="Relay Certified Banking Partner" className="jl-ticker-logo" style={{height:'4.25rem'}} />
                <img src="https://jurisledger.com/wp-content/uploads/2024/04/2-300x107.png" alt="Clio Affiliate Partner" className="jl-ticker-logo" style={{height:'3.75rem'}} />
                <img src="https://jurisledger.com/wp-content/uploads/2024/04/Military-Spouse-1.png" alt="Military Spouse Owned Business" className="jl-ticker-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <CTASection
        headline="Ready to Bring Clarity to Your Business Finances?"
        subtext="Schedule a consultation with Juris Ledger and find out how specialized accounting support can help your business move forward with confidence."
        bgImage={true}
      />
    </div>
  );
}
