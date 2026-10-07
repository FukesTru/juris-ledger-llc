// BlogPost — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Renders an imported article. Body HTML is first-party content authored by
// the firm (migrated from the previous site), so it is rendered as HTML.
import { useCallback, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import NotFound from "./NotFound";
import { FIRM } from "@/lib/siteData";
import { SORTED_POSTS, findPost, formatPostDate } from "@/lib/blogData";
import { fadeUp, scaleUp, staggerContainer, viewport, viewportTall } from "@/lib/animations";

const DEFAULT_TITLE = "Juris Ledger | Specialized Accounting for Law Firms & Contractors";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const post = findPost(params.slug);

  // Old Squarespace slugs still resolve; swap the URL for the canonical one.
  useEffect(() => {
    if (post && params.slug !== post.slug) {
      navigate(`/blog/${post.slug}`, { replace: true });
    }
  }, [post, params.slug, navigate]);

  useEffect(() => {
    if (post) document.title = `${post.title} | Juris Ledger LLC`;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [post]);

  const html = useMemo(() => {
    if (!post) return "";
    const phoneLink = `<a href="tel:${FIRM.phone}">${FIRM.phone}</a>`;
    return post.body.replace(/\{\{PHONE\}\}/g, phoneLink);
  }, [post]);

  // Internal links inside the article should navigate client-side.
  const handleArticleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      navigate(href);
    },
    [navigate]
  );

  if (!post) return <NotFound />;

  const more = SORTED_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        headline={post.title}
        breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      {/* Cover image pulled up over the hero edge */}
      <section className="bg-[#f8f7f5] pb-16 lg:pb-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.figure
            className="-mt-10 lg:-mt-16 relative z-10 aspect-[16/9] rounded-sm overflow-hidden shadow-[0_24px_60px_rgba(5,68,67,0.25)] bg-[#e6e0da]"
            variants={scaleUp}
            initial="hidden"
            animate="visible"
          >
            <img src={post.image} alt={post.imageAlt} className="w-full h-full object-cover" />
          </motion.figure>

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 mb-10 lg:mb-14 text-[#2a2825]/55 text-sm font-['DM_Sans'] tracking-wide"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2">
              <User size={14} className="text-[#075c5b]" />
              <Link href="/about/frances-joseph" className="hover:text-[#075c5b] transition-colors">
                {post.author}
              </Link>
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar size={14} className="text-[#075c5b]" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={14} className="text-[#075c5b]" />
              {post.readingMinutes} min read
            </span>
          </motion.div>

          {/* Article body — revealed on load, not on scroll, so long articles
              are never left hidden on short viewports */}
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            <p className="font-['Cormorant_Garamond'] text-2xl lg:text-[1.7rem] italic text-[#2a2825]/80 leading-snug border-l-3 border-[#075c5b] pl-6 mb-10">
              {post.excerpt}
            </p>
            <div
              className="jl-article"
              onClick={handleArticleClick}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </motion.div>

          {/* Author card */}
          <motion.aside
            className="max-w-3xl mx-auto mt-14 bg-white border border-[#e6e0da] rounded-sm p-7 lg:p-8 flex flex-col sm:flex-row gap-6 items-start"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              src="/manus-storage/Frances-Joseph.jpg"
              alt="Frances Joseph, founder of Juris Ledger"
              className="w-20 h-20 rounded-full object-cover flex-shrink-0 border-2 border-[#e6e0da]"
            />
            <div>
              <p className="jl-eyebrow mb-2">Written by</p>
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#2a2825] mb-2">
                {post.author}
              </h3>
              <p className="text-[#2a2825]/65 font-['DM_Sans'] text-base leading-relaxed mb-4">
                Founder of Juris Ledger. Frances helps law firms and specialized businesses in Maryland, DC, and Virginia gain financial clarity through accounting, CFO services, and trust accounting support.
              </p>
              <Link
                href="/about/frances-joseph"
                className="text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide hover:underline underline-offset-4"
              >
                More about Frances
              </Link>
            </div>
          </motion.aside>

          <div className="max-w-3xl mx-auto mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide hover:gap-3 transition-all duration-200"
            >
              <ArrowLeft size={14} /> Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* More from the blog */}
      {more.length > 0 && (
        <section className="bg-[#e6e0da] py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <motion.div
              className="flex items-center gap-4 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="font-['Cormorant_Garamond'] text-3xl lg:text-4xl font-600 text-[#2a2825]">
                More From the Blog
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
              {more.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      <CTASection
        headline="Questions About Your Firm's Finances?"
        subtext="Schedule a consultation with Juris Ledger and get clear, practical answers from an accountant who works with law firms every day."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Read More Articles"
        secondaryHref="/blog"
      />
    </div>
  );
}
