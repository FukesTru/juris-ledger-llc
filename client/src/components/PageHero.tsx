// PageHero — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — staggered entrance, premium reveal
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ArrowRight } from "lucide-react";
import { buttonTap } from "@/lib/animations";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  headline: string;
  subtext?: string;
  breadcrumbs?: Breadcrumb[];
  cta?: string;
  ctaHref?: string;
}

const ease = [0.23, 1, 0.32, 1] as const;

export default function PageHero({
  eyebrow,
  headline,
  subtext,
  breadcrumbs,
  cta,
  ctaHref = "/contact",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-[#075c5b] overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-5 lg:px-8 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            className="flex items-center gap-1.5 mb-8 flex-wrap justify-center"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <Link href="/" className="text-white/45 hover:text-white/75 text-xs font-['DM_Sans'] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-white/25" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/45 hover:text-white/75 text-xs font-['DM_Sans'] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/70 text-xs font-['DM_Sans']">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.div
            className="flex items-center gap-3 justify-center mb-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
          >
            <motion.div
              className="w-6 h-px bg-[#e9ff89]/50"
              initial={{ scaleX: 0, originX: 1 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease, delay: 0.15 }}
            />
            <p className="text-[#e9ff89]/75 text-[0.68rem] font-['DM_Sans'] font-600 tracking-[0.2em] uppercase">
              {eyebrow}
            </p>
            <motion.div
              className="w-6 h-px bg-[#e9ff89]/50"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease, delay: 0.15 }}
            />
          </motion.div>
        )}

        <motion.h1
          className="font-['Cormorant_Garamond'] text-4xl lg:text-5xl xl:text-6xl font-600 text-white leading-tight mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
        >
          {headline}
        </motion.h1>

        {subtext && (
          <motion.p
            className="text-white/72 font-['DM_Sans'] text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.2 }}
          >
            {subtext}
          </motion.p>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.3 }}
          >
            <motion.div whileTap={buttonTap} whileHover={{ scale: 1.02 }} className="inline-block">
              <Link href={ctaHref} className="jl-btn-lime inline-flex items-center gap-2">
                {cta}
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
