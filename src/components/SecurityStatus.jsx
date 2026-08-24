import { Shield, Activity, Radio } from "lucide-react";

export default function SecurityStatus() {
  return (
    <div className="fixed bottom-5 left-5 z-40 hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#080d0b]/90 border border-emerald-500/30 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] font-mono text-xs text-slate-300">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <span className="text-emerald-400 font-bold">SYSTEM ONLINE</span>
      </div>

      <span className="text-slate-600">|</span>

      <div className="flex items-center gap-1.5 text-slate-300">
        <Shield className="w-3.5 h-3.5 text-emerald-400" />
        <span>THREAT LEVEL:</span>
        <span className="text-emerald-400 font-bold">LOW</span>
      </div>

      <span className="text-slate-600">|</span>

      <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
        <span>IP: 192.168.1.101</span>
      </div>
    </div>
  );
}