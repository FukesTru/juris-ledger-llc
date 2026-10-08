// Blog — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Animations: Framer Motion — premium, subtle, trustworthy
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import { SORTED_POSTS, formatPostDate } from "@/lib/blogData";
import { fadeUp, staggerContainer, viewport, viewportTall } from "@/lib/animations";

const DEFAULT_TITLE = "Juris Ledger | Specialized Accounting for Law Firms & Contractors";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Juris Ledger LLC";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  const [featured, ...rest] = SORTED_POSTS;

  return (
    <div>
      <PageHero
        eyebrow="Insights"
        headline="The Juris Ledger Blog"
        subtext="Practical guidance on law firm finances, trust accounting, cash flow, and profitability from Frances Joseph."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Featured (latest) article */}
      {featured && (
        <section className="bg-[#f8f7f5] pt-16 lg:pt-24 pb-10 lg:pb-14">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 bg-white border border-[#e6e0da] rounded-sm overflow-hidden hover:shadow-[0_16px_40px_rgba(7,92,91,0.10)] transition-shadow duration-300"
              >
                <div className="aspect-[16/9] lg:aspect-auto lg:min-h-[380px] overflow-hidden bg-[#e6e0da]">
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="jl-eyebrow mb-4">Latest Article</p>
                  <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl xl:text-[2.75rem] font-600 text-[#2a2825] leading-tight mb-4 group-hover:text-[#075c5b] transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-[#2a2825]/65 font-['DM_Sans'] text-base lg:text-lg leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-[#2a2825]/50 text-xs font-['DM_Sans'] tracking-wide mb-7">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#075c5b]" />
                      <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} className="text-[#075c5b]" />
                      {featured.readingMinutes} min read
                    </span>
                    <span>By {featured.author}</span>
                  </div>
                  <span className="text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
                    Read Article <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* All other articles */}
      <section className="bg-[#f8f7f5] pb-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            className="flex items-center gap-4 mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-600 text-[#2a2825]">
              All Articles
            </h2>
            <hr className="jl-rule flex-1" />
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTall}
          >
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Want Help Putting These Ideas Into Practice?"
        subtext="Schedule a consultation with Juris Ledger and we will help you turn clear numbers into confident decisions for your firm."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Explore Our Services"
        secondaryHref="/services"
      />
    </div>
  );
}
