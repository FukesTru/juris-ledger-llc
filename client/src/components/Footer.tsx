// Footer — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — staggered column reveal on scroll
import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { FIRM, SERVICES, LOCATIONS, INDUSTRIES } from "@/lib/siteData";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-[#054443] text-white">
      <motion.div
        className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm overflow-hidden flex-shrink-0">
                <img
                  src="/manus-storage/jl-logo-mark_2ec4061a.png"
                  alt="Juris Ledger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="block font-['Cormorant_Garamond'] font-600 text-white leading-none tracking-wide text-xl">
                  JURIS LEDGER
                </span>
                <span className="block text-[0.65rem] font-['DM_Sans'] tracking-[0.12em] uppercase text-white/50 leading-none mt-0.5">
                  Accountants
                </span>
              </div>
            </Link>
            <p className="text-white/65 text-base font-['DM_Sans'] leading-relaxed mb-6">
              Specialized accounting, CFO services, and financial support for law firms, contractors, and business owners in Maryland, DC, and Virginia.
            </p>
            <div className="space-y-3">
              <a href={`tel:${FIRM.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                <Phone size={14} className="flex-shrink-0 text-[#e9ff89]" />
                {FIRM.phone}
              </a>
              <a href={`mailto:${FIRM.email}`} className="flex items-center gap-3 text-white/70 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                <Mail size={14} className="flex-shrink-0 text-[#e9ff89]" />
                {FIRM.email}
              </a>
              <div className="flex items-start gap-3 text-white/70 text-base font-['DM_Sans']">
                <MapPin size={14} className="flex-shrink-0 text-[#e9ff89] mt-0.5" />
                <span>{FIRM.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-white/70 text-base font-['DM_Sans']">
                <Clock size={14} className="flex-shrink-0 text-[#e9ff89]" />
                {FIRM.hours}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href={FIRM.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#e9ff89] transition-colors duration-200" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={FIRM.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#e9ff89] transition-colors duration-200" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={FIRM.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#e9ff89] transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          {/* Column 2: Services + Industries */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-['DM_Sans'] font-600 text-xs tracking-[0.1em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <h4 className="text-white font-['DM_Sans'] font-600 text-xs tracking-[0.1em] uppercase mb-5">
                Industries
              </h4>
              <ul className="space-y-3">
                {INDUSTRIES.map((ind) => (
                  <li key={ind.slug}>
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200"
                    >
                      {ind.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 3: Locations */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-['DM_Sans'] font-600 text-xs tracking-[0.1em] uppercase mb-5">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200"
                  >
                    {loc.city}, {loc.state}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Company links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-white font-['DM_Sans'] font-600 text-xs tracking-[0.1em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                  About Juris Ledger
                </Link>
              </li>
              <li>
                <Link href="/about/frances-joseph" className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                  About Frances Joseph
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-white/60 hover:text-white text-base font-['DM_Sans'] transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm font-['DM_Sans']">
            &copy; {new Date().getFullYear()} Juris Ledger LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white/70 text-sm font-['DM_Sans'] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/40 hover:text-white/70 text-sm font-['DM_Sans'] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
