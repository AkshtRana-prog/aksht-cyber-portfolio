import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, Cpu, CheckCircle } from "lucide-react";

export default function BootScreen({ finish }) {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  const [accessGranted, setAccessGranted] = useState(false);

  const bootLogs = [
    "INITIALIZING AKSHT_SECURITY CORE",
    "LOADING ENCRYPTION MODULES",
    "CONNECTING WAZUH SIEM NODE",
    "VERIFYING ENDPOINT TELEMETRY",
    "CALIBRATING THREAT DETECTION ENGINE",
    "SYSTEM INTEGRITY VERIFIED",
  ];

  useEffect(() => {
    let currentProgress = 0;
    let logIndex = 0;

    const progressInterval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 12) + 6;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(progressInterval);

        setTimeout(() => {
          setAccessGranted(true);
          setTimeout(() => {
            finish();
          }, 1200);
        }, 500);
      }
      setProgress(currentProgress);

      if (logIndex < bootLogs.length && Math.random() > 0.3) {
        setLogs((prev) => [...prev, bootLogs[logIndex]]);
        logIndex++;
      }
    }, 180);

    return () => clearInterval(progressInterval);
  }, [finish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#040706] text-white font-mono flex items-center justify-center p-4 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <AnimatePresence>
        {!accessGranted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md rounded-2xl bg-[#080d0b]/90 border border-emerald-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] relative flex flex-col items-center text-center"
          >
            {/* CENTRAL SECURITY CORE ICON */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <Shield className="w-10 h-10 text-emerald-400 animate-pulse" />
              </div>
              <div className="absolute inset-0 rounded-2xl border border-emerald-400/50 animate-ping opacity-25" />
            </div>

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-bold text-white font-sans tracking-wide">
              AKSHT RANA <span className="text-emerald-400">SECURITY OS</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              INITIALIZING SOC ENVIRONMENT
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full mt-6">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400 mb-2">
                <span>SYSTEM BOOT</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#050907] border border-emerald-500/20 overflow-hidden p-0.5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* LOG STREAM */}
            <div className="w-full mt-6 h-24 p-3 rounded-xl bg-[#030605] border border-emerald-500/15 overflow-hidden text-left text-[11px] text-emerald-400/90 leading-relaxed font-mono">
              {logs.map((log, i) => (
                <div key={i} className="flex items-center gap-1.5 truncate">
                  <span className="text-emerald-400">✓</span>
                  <span>{log}</span>
                </div>
              ))}
              <span className="animate-pulse text-emerald-400">_</span>
            </div>

            {/* STATUS FOOTER */}
            <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              VERIFYING SOC TELEMETRY NODES
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center z-10"
          >
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.5)] mb-6">
              <CheckCircle className="w-12 h-12 text-emerald-400 animate-bounce" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-widest font-sans">
              ACCESS <span className="text-emerald-400">GRANTED</span>
            </h1>
            <p className="text-emerald-400 font-mono text-sm mt-3 tracking-wide">
              WELCOME TO AKSHT RANA PORTFOLIO
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}