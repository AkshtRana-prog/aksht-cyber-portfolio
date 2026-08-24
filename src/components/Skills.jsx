import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Wrench, Code2, Server, Users, Terminal, X, Check } from "lucide-react";

export default function Skills() {
  const [selected, setSelected] = useState(null);

  const skillCategories = [
    {
      title: "SECURITY OPERATIONS",
      icon: Shield,
      items: ["SOC Operations", "SIEM Monitoring", "Wazuh SIEM", "Log Analysis", "Threat Monitoring"],
      desc: "Focused on defensive security operations, log aggregation, event investigation, and building SOC workflow automation.",
    },
    {
      title: "THREAT & VULNERABILITY",
      icon: Lock,
      items: ["Threat Detection", "Vulnerability Management", "Phishing Analysis", "Security Assessment"],
      desc: "Understanding attack tactics, identifying indicators of compromise (IOCs), and analyzing malicious URL behaviors.",
    },
    {
      title: "SECURITY TOOLS",
      icon: Wrench,
      items: ["Linux Administration", "Nmap Scanner", "Wireshark", "Splunk Basics", "Git Version Control"],
      desc: "Hands-on experience utilizing industry-standard network discovery, packet capture, and log investigation utilities.",
    },
    {
      title: "PROGRAMMING & AUTOMATION",
      icon: Code2,
      items: ["Python", "Bash Scripting", "Security Automation", "Security Scripts"],
      desc: "Developing security scripts, automated alert parsing tools, and threat detection workflows.",
    },
    {
      title: "SYSTEMS & NETWORKING",
      icon: Server,
      items: ["Networking Protocols", "Firewalls", "Virtual Machines", "System Administration"],
      desc: "Understanding infrastructure communication, packet flows, virtual environment lab isolation, and OS security.",
    },
    {
      title: "SOFT SKILLS & METHODOLOGY",
      icon: Users,
      items: ["Problem Solving", "Technical Research", "Team Collaboration", "Incident Documentation"],
      desc: "Essential professional competencies for clear communication, thorough technical analysis, and security team workflows.",
    },
  ];

  return (
    <section id="skills" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>TECHNICAL MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          SKILLS & <span className="text-emerald-400">CAPABILITIES</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Core technical proficiencies across security operations, threat detection, development, and system administration.
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(skill)}
              className="rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/80">#0{index + 1}</span>
                </div>

                <h3 className="text-base font-bold text-white font-sans tracking-wide group-hover:text-emerald-400 transition-colors">
                  {skill.title}
                </h3>

                {/* SKILL ITEMS LIST */}
                <div className="mt-4 space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/15 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-emerald-400 transition-colors">
                <span>VIEW CATEGORY DETAILS</span>
                <span>→</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SKILL DETAIL MODAL */}
      <AnimatePresence>
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-[#080e0c] border border-emerald-500/30 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">{selected.title}</h3>
                  <span className="text-[11px] font-mono text-emerald-400">CATEGORY OVERVIEW</span>
                </div>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 bg-[#040706] p-3.5 rounded-xl border border-emerald-500/15">
                {selected.desc}
              </p>

              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2.5">
                INCLUDED PROFICIENCIES
              </h4>

              <div className="space-y-2">
                {selected.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0b120f] border border-emerald-500/15 text-slate-200 text-xs font-sans">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono tracking-wider transition-colors cursor-pointer"
              >
                CLOSE SESSION
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}