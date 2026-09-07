import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Terminal, Layers } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full h-full rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 flex flex-col justify-between cursor-pointer hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] transition-all duration-300 group backdrop-blur-xl relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all pointer-events-none" />

      <div>
        {/* IMAGE PREVIEW IF AVAILABLE */}
        {project.image ? (
          <div className="w-full h-44 rounded-xl overflow-hidden mb-5 border border-emerald-500/20 relative group-hover:border-emerald-500/40 transition-colors">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                if (!e.target.src.endsWith('.png.png')) {
                  e.target.src = '/phishing-detector.png.png';
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b] via-transparent to-transparent opacity-80" />
          </div>
        ) : (
          <div className="w-full h-28 rounded-xl bg-[#050907] border border-emerald-500/15 mb-5 flex items-center justify-center relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 text-emerald-400/80 font-mono text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>SECURITY CASE FILE</span>
            </div>
          </div>
        )}

        {/* TOP META ROW */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide uppercase">
            {project.category}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {project.status || "ACTIVE"}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3 font-sans">
          {project.description}
        </p>
      </div>

      {/* FOOTER & TECH TAGS */}
      <div className="mt-6 pt-4 border-t border-emerald-500/15 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech &&
            project.tech.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-[#0c1411] border border-emerald-500/20 text-emerald-400 text-[11px] font-mono"
              >
                {tag}
              </span>
            ))}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold group-hover:text-emerald-300">
          <span>VIEW CASE STUDY</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}