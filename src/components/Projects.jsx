import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ShieldCheck, X, ExternalLink, Terminal, CheckCircle2, Layers, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projects";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  // Fallback initial project list preserving inline structure if needed
  const defaultProjects = [
    {
      title: "Phishing Detector",
      category: "Cybersecurity Tool",
      image: "/phishing-detector.png",
      status: "ACTIVE",
      description:
        "A rule based phishing detection system designed to identify suspicious URLs and phishing patterns. The system analyzes URL structure, keywords, domain behavior and known indicators to detect possible phishing attempts. Built with defensive security approach focusing on threat detection and awareness.",
      tech: ["Python", "Rule Engine", "Threat Detection", "Cyber Security"],
      overview: "Rule based phishing detection system analyzing malicious URLs.",
      purpose: "Detect phishing threats before users interact with malicious links.",
      solution: "Implemented URL structure inspection, keyword analysis, domain validation & risk scoring.",
      github: "https://github.com/AkshtRana-prog",
    },
    {
      title: "Wazuh Home Lab",
      category: "SOC Environment",
      image: "",
      status: "ONLINE",
      description:
        "A personal security monitoring laboratory built using Wazuh SIEM. The lab focuses on log collection, security monitoring, alert generation and endpoint visibility. Used for learning SOC operations and defensive security workflows.",
      tech: ["Wazuh", "SIEM", "Linux", "Monitoring"],
      overview: "Personal security monitoring environment for learning SOC operations.",
      purpose: "Log collection, security alert generation, and endpoint visibility.",
      solution: "Configured Wazuh manager and agent nodes across Linux virtual environments.",
      github: "https://github.com/AkshtRana-prog",
    },
    {
      title: "Cyber Portfolio",
      category: "Security Interface",
      image: "",
      status: "RUNNING",
      description:
        "An interactive cybersecurity portfolio built as a terminal inspired security environment. Includes hidden commands, easter eggs, live security feed and cyber themed interface. Designed to showcase security mindset and development skills.",
      tech: ["React", "Tailwind", "JavaScript", "UI/UX"],
      overview: "Interactive cybersecurity portfolio with security lab, animations and easter eggs.",
      purpose: "Showcase cybersecurity skills and development projects in a real-world command dashboard.",
      solution: "Built modular React components with Framer Motion and integrated command shell terminal.",
      github: "https://github.com/AkshtRana-prog",
    },
  ];

  const projectsList = projectsData && projectsData.length > 0 ? projectsData : defaultProjects;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>SECURITY TOOLING & LABS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          FEATURED <span className="text-emerald-400">PROJECTS</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Defensive security platforms, threat detection engines, and SOC lab environments built with practical engineering rigor.
        </p>
      </div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projectsList.map((project, index) => (
          <div key={index} className="h-full">
            <ProjectCard project={project} onClick={() => setSelected(project)} />
          </div>
        ))}
      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl bg-[#080e0c] border border-emerald-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto relative"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* MODAL HEADER */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-emerald-400 font-medium tracking-wide uppercase px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/25">
                  {selected.category || "CYBERSECURITY TOOL"}
                </span>
                <span className="text-xs font-mono text-slate-300">
                  STATUS: <span className="text-emerald-400 font-bold">{selected.status || "ACTIVE"}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans pr-10">
                {selected.title}
              </h2>

              {/* IMAGE IF AVAILABLE */}
              {selected.image && (
                <div className="my-6 rounded-xl overflow-hidden border border-emerald-500/20 max-h-60">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    onError={(e) => {
                      if (!e.target.src.endsWith('.png.png')) {
                        e.target.src = '/phishing-detector.png.png';
                      }
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* DETAILED OVERVIEW */}
              <div className="mt-6 space-y-6 text-slate-300 text-sm leading-relaxed font-sans">
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Project Overview
                  </h4>
                  <p className="bg-[#040706] p-4 rounded-xl border border-emerald-500/15 text-slate-300">
                    {selected.description || selected.overview}
                  </p>
                </div>

                {/* PURPOSE & SECURITY GOAL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0b120f] border border-emerald-500/15">
                    <h5 className="text-xs font-mono text-emerald-400 uppercase mb-1">Security Objective</h5>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selected.purpose || "Building defensive visibility and detection capabilities against real-world attack vectors."}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0b120f] border border-emerald-500/15">
                    <h5 className="text-xs font-mono text-emerald-400 uppercase mb-1">Key Takeaway</h5>
                    <p className="text-xs text-slate-300 leading-normal">
                      {selected.solution || "Hands-on experience configuring detection rules, log management, and defensive response workflows."}
                    </p>
                  </div>
                </div>

                {/* TECH STACK */}
                <div>
                  <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5">
                    Technologies & Security Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech &&
                      selected.tech.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              {/* MODAL ACTIONS */}
              <div className="mt-8 pt-6 border-t border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://github.com/AkshtRana-prog"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-sans tracking-wide transition-colors flex items-center gap-2"
                >
                  <FaGithub className="w-4 h-4" />
                  <span>VIEW ON GITHUB</span>
                </a>

                <button
                  onClick={() => setSelected(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-slate-700/50 text-xs font-mono tracking-wide transition-colors cursor-pointer"
                >
                  CLOSE CASE STUDY
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}