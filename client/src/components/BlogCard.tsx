// BlogCard — Juris Ledger
// Design: Counsel & Craft — Editorial financial services
// Used on the blog index grid and the "More from the blog" strip on each post
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blogData";
import { formatPostDate } from "@/lib/blogData";
import { staggerItem } from "@/lib/animations";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(7,92,91,0.10)" }}
      transition={{ duration: 0.22 }}
      className="h-full"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full bg-white border border-[#e6e0da] rounded-sm overflow-hidden"
      >
        <div className="aspect-[16/9] overflow-hidden bg-[#e6e0da]">
          <img
            src={post.image}
            alt={post.imageAlt}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>
        <div className="flex flex-col flex-1 p-6 lg:p-7">
          <div className="flex items-center gap-4 text-[#2a2825]/50 text-xs font-['DM_Sans'] tracking-wide mb-3">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} className="text-[#075c5b]" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} className="text-[#075c5b]" />
              {post.readingMinutes} min read
            </span>
          </div>
          <h3 className="font-['Cormorant_Garamond'] text-2xl font-600 text-[#2a2825] leading-snug mb-3 group-hover:text-[#075c5b] transition-colors duration-200">
            {post.title}
          </h3>
          <p className="text-[#2a2825]/65 text-base font-['DM_Sans'] leading-relaxed line-clamp-3 mb-5">
            {post.excerpt}
          </p>
          <span className="mt-auto text-[#075c5b] text-sm font-['DM_Sans'] font-600 tracking-wide inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200">
            Read Article <ArrowRight size={13} />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
