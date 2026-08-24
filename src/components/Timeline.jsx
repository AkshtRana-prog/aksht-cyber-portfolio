import { motion } from "framer-motion";
import { Briefcase, Terminal, Calendar, Building2 } from "lucide-react";

export default function Timeline() {
  const timelineEvents = [
    {
      year: "2026",
      title: "Cyber Security Internship",
      company: "Craw Security",
      desc: "Working on practical cybersecurity operations, security tools, vulnerability analysis and defensive security practices.",
      type: "INTERNSHIP",
    },
    {
      year: "2026",
      title: "Cybersecurity Portfolio",
      company: "Personal Project",
      desc: "Built an interactive cybersecurity portfolio featuring security command center, project case studies, and security automation concepts.",
      type: "PROJECT",
    },
    {
      year: "2026",
      title: "Wazuh Home Lab",
      company: "Self Learning",
      desc: "Created SIEM based monitoring environment using Wazuh for threat detection, log analysis and security monitoring.",
      type: "LAB SETUP",
    },
    {
      year: "2025",
      title: "Phishing Detector",
      company: "Security Project",
      desc: "Developed a rule based phishing detection system to analyze suspicious URLs and identify potential phishing attempts.",
      type: "DEVELOPMENT",
    },
  ];

  return (
    <section id="timeline" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>CAREER ROADMAP</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          CAREER & <span className="text-emerald-400">TIMELINE</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Key milestones, internships, security engineering projects, and hands-on laboratory setups.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative pl-6 sm:pl-10 border-l border-emerald-500/25 space-y-10">
        {timelineEvents.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* GLOWING CONNECTOR NODE */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#040706] border-2 border-emerald-400 shadow-[0_0_15px_#10b981] group-hover:scale-125 transition-transform flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>

            {/* CARD */}
            <div className="rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.year}</span>
                  <span className="text-slate-600">•</span>
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-slate-300 font-sans">{item.company}</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono">
                  {item.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-sans group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400 text-sm leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}