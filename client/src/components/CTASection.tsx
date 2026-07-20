// CTASection — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainerFast, staggerItem, viewport, buttonTap } from "@/lib/animations";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
  bgImage?: boolean;
}

export default function CTASection({
  headline = "Ready to Bring Clarity to Your Business Finances?",
  subtext = "Schedule a consultation with Juris Ledger and find out how specialized accounting support can help your business move forward with confidence.",
  primaryCTA = "Schedule a Consultation",
  primaryHref = "/contact",
  secondaryCTA = "Learn About Our Services",
  secondaryHref = "/services",
  bgImage = false,
}: CTASectionProps) {
  return (
    <section
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: "#075c5b",
        backgroundImage: bgImage
          ? `url('/manus-storage/jl-cta-bg_24e338ae.jpg')`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {bgImage && (
        <div className="absolute inset-0 bg-[#075c5b]/85" />
      )}
      <motion.div
        className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center"
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p variants={staggerItem} className="jl-eyebrow-light mb-5">Take the Next Step</motion.p>
        <motion.h2
          variants={staggerItem}
          className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-white mb-6 leading-tight"
        >
          {headline}
        </motion.h2>
        <motion.p
          variants={staggerItem}
          className="text-white/72 font-['DM_Sans'] text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          {subtext}
        </motion.p>
        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileTap={buttonTap} whileHover={{ scale: 1.02 }}>
            <Link href={primaryHref} className="jl-btn-lime">
              {primaryCTA}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
          <motion.div whileTap={buttonTap}>
            <Link href={secondaryHref} className="jl-btn-outline-light">
              {secondaryCTA}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
