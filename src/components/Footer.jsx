import { Shield, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-20 pt-10 pb-8 border-t border-emerald-500/20 text-slate-400 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT - IDENTITY */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-white font-bold tracking-wider font-sans text-sm">
              AKSHT RANA
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Cybersecurity Developer • SOC Analyst Aspirant
          </p>
          <p className="text-[11px] font-mono text-emerald-400/80 mt-0.5">
            SOC • Threat Detection • Security Automation
          </p>
        </div>

        {/* CENTER - SOCIAL LINKS */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href="https://github.com/AkshtRana-prog"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaGithub className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aksht-rana-009515373"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaLinkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:align.akshtrana@gmail.com"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>

        {/* RIGHT - SYSTEM STATUS & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SYSTEM ONLINE ●</span>
          </div>
          <span className="mt-1 text-[11px] text-slate-500 font-sans">
            © 2026 Aksht Rana | All Rights Reserved
          </span>
        </div>

      </div>
    </footer>
  );
}
