import { motion } from "framer-motion";
import { Shield, Server, Terminal, Cpu, CheckCircle2, Lock, ArrowUpRight } from "lucide-react";

export default function About() {
  const profileDetails = [
    { label: "Role", value: "Cybersecurity Developer & SOC Analyst Aspirant", icon: Shield },
    { label: "Core Focus", value: "Threat Detection, SOC Operations, Security Automation, SIEM", icon: Lock },
    { label: "Environment", value: "Linux (Ubuntu/Debian), Wazuh SIEM, Security Labs, Splunk", icon: Server },
    { label: "Active Learning", value: "Threat Intelligence, Blue Team Operations, Incident Response", icon: Cpu },
  ];

  const highlights = [
    "Hands-on SIEM monitoring and endpoint log analysis",
    "Rule-based phishing and malicious URL detection systems",
    "Defensive security scripts & Python automation tools",
    "Linux system administration & network security principles",
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>PROFILE & BACKGROUND</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          ABOUT <span className="text-emerald-400">ME</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Passionate about defensive security, security engineering, and building automated threat detection systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT COLUMN - PROFESSIONAL INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mb-4">
              Building & Defending Digital Environments
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              I am a Cybersecurity Developer with a strong passion for defensive security, threat monitoring, and Security Operations Center (SOC) workflows. My journey combines practical software development with deep curiosity about system defense and security engineering.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I focus on building custom security tooling—such as phishing detection engines and security monitoring environments using Wazuh SIEM. Rather than viewing security as a static checklist, I approach defensive security by building systems that automate detection, streamline analysis, and provide clear visibility into security events.
            </p>

            {/* HIGHLIGHT LIST */}
            <div className="mt-6 space-y-3 pt-6 border-t border-emerald-500/15">
              <h4 className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-3">
                KEY COMPETENCIES
              </h4>
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-500/15 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              LOCATION: INDIA
            </span>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - SECURITY PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col rounded-2xl bg-[#0a110e]/90 border border-emerald-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              <span className="text-xs font-mono font-bold text-slate-200 tracking-wider">
                SECURITY_PROFILE.JSON
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              VERIFIED
            </span>
          </div>

          <div className="space-y-5 flex-1">
            {profileDetails.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-[#050907] border border-emerald-500/15 flex items-start gap-4 hover:border-emerald-500/35 transition-colors">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400/90 uppercase tracking-wider block mb-1">
                      {detail.label}
                    </span>
                    <p className="text-slate-200 text-sm font-sans font-medium leading-snug">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CARD FOOTER */}
          <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>STATUS: ACTIVE & EXPLORING</span>
            <span className="text-emerald-400">SOC READY</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
