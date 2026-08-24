import { motion } from "framer-motion";
import { ShieldCheck, Activity, Cpu, Radio, ChevronRight, Terminal, Lock, AlertCircle } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* LEFT COLUMN - PERSONAL IDENTITY & CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* TOP TAG */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono tracking-wider mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>CYBERSECURITY ENGINEER / SOC ASPIRANT</span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white font-sans">
            AKSHT <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">RANA</span>
          </h1>

          {/* SUBHEADING */}
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-slate-200 tracking-wide font-sans leading-snug">
            Cybersecurity Developer focused on <br className="hidden sm:inline" />
            <span className="text-emerald-400">Threat Detection</span>, <span className="text-emerald-400">SOC Operations</span> & <span className="text-emerald-400">Security Automation</span>.
          </h2>

          {/* PROFESSIONAL DESCRIPTION */}
          <p className="mt-5 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl">
            I build defensive security tools, monitoring environments and automation systems while continuously exploring how systems fail, detect threats and defend themselves.
          </p>

          {/* CURRENT RESEARCH BADGES */}
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-500 font-sans">Focus Areas:</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0b120f] border border-emerald-500/20 text-emerald-400">SOC Operations</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0b120f] border border-emerald-500/20 text-emerald-400">SIEM & Wazuh</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0b120f] border border-emerald-500/20 text-emerald-400">Security Automation</span>
          </div>

          {/* BUTTON GROUP */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollTo("projects")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold font-sans text-sm tracking-wide transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>VIEW PROJECTS</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("lab")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0c1210] hover:bg-[#121c19] text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 font-mono text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>EXPLORE SECURITY LAB</span>
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-slate-700/50 font-sans text-sm tracking-wide transition-all duration-200 cursor-pointer"
            >
              CONTACT ME
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN - SECURITY OPERATIONS PANEL (SOC DASHBOARD) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 w-full"
        >
          <div className="w-full rounded-2xl bg-[#080d0b]/90 border border-emerald-500/30 p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden group">
            {/* Ambient Panel Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* PANEL HEADER */}
            <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white font-sans tracking-wide">
                    SECURITY OPERATIONS PANEL
                  </h3>
                  <p className="text-[11px] font-mono text-emerald-400/80">SOC COMMAND CENTER</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* METRICS GRID */}
            <div className="grid grid-cols-2 gap-3 my-5">
              <div className="p-3.5 rounded-xl bg-[#0c1411] border border-emerald-500/15 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Threat Level</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-base font-mono font-bold text-emerald-400">LOW</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400/70" />
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-emerald-400 w-1/4 rounded-full" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1411] border border-emerald-500/15 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">SIEM Core</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-base font-mono font-bold text-emerald-400">CONNECTED</span>
                  <Activity className="w-4 h-4 text-emerald-400/70" />
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-emerald-400 w-full rounded-full animate-pulse" />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1411] border border-emerald-500/15 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Endpoints</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-base font-mono font-bold text-slate-200">ACTIVE ●</span>
                  <Cpu className="w-4 h-4 text-emerald-400/70" />
                </div>
                <span className="text-[10px] text-emerald-400 font-mono">Wazuh Monitoring</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c1411] border border-emerald-500/15 flex flex-col gap-1">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Automation</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-base font-mono font-bold text-emerald-400">READY</span>
                  <Lock className="w-4 h-4 text-emerald-400/70" />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">Rule Engine OK</span>
              </div>
            </div>

            {/* ANIMATED RADAR / NETWORK TELEMETRY */}
            <div className="mt-4 p-4 rounded-xl bg-[#060a08] border border-emerald-500/20 relative">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  LIVE NETWORK RADAR
                </span>
                <span className="text-[10px] text-slate-500">192.168.1.101</span>
              </div>

              <div className="h-28 w-full relative flex items-center justify-center overflow-hidden rounded-lg bg-[#030605] border border-emerald-950">
                {/* Radar Rings */}
                <div className="absolute w-24 h-24 rounded-full border border-emerald-500/20" />
                <div className="absolute w-16 h-16 rounded-full border border-emerald-500/30" />
                <div className="absolute w-8 h-8 rounded-full border border-emerald-500/40" />

                {/* Radar Sweep Line */}
                <div className="absolute w-28 h-28 rounded-full animate-radar-sweep pointer-events-none">
                  <div className="w-1/2 h-1/2 bg-gradient-to-br from-emerald-500/40 to-transparent rounded-tl-full" />
                </div>

                {/* Simulated Nodes */}
                <div className="absolute top-6 left-8 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                <div className="absolute bottom-8 right-10 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                <div className="absolute top-10 right-14 h-1.5 w-1.5 rounded-full bg-teal-300" />
                <div className="absolute bottom-6 left-16 h-2 w-2 rounded-full bg-emerald-500 animate-ping" />

                {/* Center Node */}
                <div className="z-10 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_15px_#10b981]" />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Ingest Rate: 1.4 KB/s</span>
                <span className="text-emerald-400">0 Critical Vulnerabilities</span>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px] text-emerald-400/80">
                SYS_VERIFIED: AKSHT_CORE
              </span>
              <button
                onClick={() => scrollTo("lab")}
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <span>OPEN CONSOLE</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}