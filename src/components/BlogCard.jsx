import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export default function BlogCard({ blog, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full h-full rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 flex flex-col justify-between cursor-pointer hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] transition-all duration-300 group backdrop-blur-xl"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/25 uppercase">
            <Tag className="w-3 h-3" />
            {blog.tag || blog.category || "SECURITY REPORT"}
          </span>
          <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {blog.date || "2026"}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors leading-snug">
          {blog.title}
        </h3>

        <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3 font-sans">
          {blog.description || "Click to open technical writeup and detailed security breakdown..."}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold group-hover:text-emerald-300">
        <span>READ REPORT</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}