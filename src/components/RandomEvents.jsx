import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Activity } from "lucide-react";

export default function RandomEvents() {
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    const messages = [
      "Firewall monitoring active",
      "Threat intelligence sync completed ✓",
      "SIEM correlation engine running",
      "Endpoint protection status: OPTIMAL",
      "Network packet inspection active",
    ];

    const timer = setInterval(() => {
      setMsg(messages[Math.floor(Math.random() * messages.length)]);

      setTimeout(() => {
        setMsg(null);
      }, 5000);
    }, 28000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {msg && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 max-w-sm rounded-xl bg-[#080d0b]/90 border border-emerald-500/30 p-3.5 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-3 font-mono text-xs text-emerald-400"
        >
          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
            <Activity className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <span className="text-[10px] text-slate-500 block uppercase">Telemetry Stream</span>
            <span className="text-slate-200 font-sans font-medium">{msg}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}