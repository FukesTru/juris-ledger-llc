// Services overview page — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, BookOpen, FileText, Shield, Scale, HardHat, ClipboardCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/siteData";
import {
  fadeUp, staggerContainer, staggerItem,
  viewport, buttonTap,
} from "@/lib/animations";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  TrendingUp: <TrendingUp size={24} />,
  ClipboardCheck: <ClipboardCheck size={24} />,
  BookOpen: <BookOpen size={24} />,
  FileText: <FileText size={24} />,
  Shield: <Shield size={24} />,
  Scale: <Scale size={24} />,
  HardHat: <HardHat size={24} />,
};

export default function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Our Services"
        headline="Specialized Accounting Services for Your Business"
        subtext="Juris Ledger offers a focused range of accounting, financial, and advisory services designed for law firms, contractors, and business owners who need more than generalist support."
        breadcrumbs={[{ label: "Services" }]}
        cta="Schedule a Consultation"
      />

      <section className="bg-[#f8f7f5] py-16 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.slug}
                variants={staggerItem}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(7,92,91,0.10)" }}
                transition={{ duration: 0.22 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group jl-card flex gap-6 items-start"
                >
                  <div className="w-14 h-14 rounded-sm bg-[#075c5b]/10 flex items-center justify-center text-[#075c5b] flex-shrink-0 group-hover:bg-[#075c5b] group-hover:text-white transition-all duration-250">
                    {SERVICE_ICONS[service.icon]}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['DM_Sans'] font-600 text-[#2a2825] text-xl mb-3 group-hover:text-[#075c5b] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[#2a2825]/65 text-base font-['DM_Sans'] leading-relaxed mb-4">
                      {service.summary}
                    </p>
                    <span className="text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Not Sure Which Service Is Right for You?"
        subtext="Schedule a consultation with Juris Ledger and we will help you identify the accounting and financial support your business needs."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="View Industries We Serve"
        secondaryHref="/industries"
      />
    </div>
  );
}
