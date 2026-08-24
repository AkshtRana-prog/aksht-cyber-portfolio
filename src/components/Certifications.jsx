import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, X, CheckCircle, Terminal } from "lucide-react";

export default function Certifications() {
  const [selected, setSelected] = useState(null);

  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "Cryptus Cyber Security",
      image: "/CEH.png",
    },
    {
      name: "Introduction to Blue Teaming",
      issuer: "LetsDefend",
      image: "/Lets.jpeg",
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      image: "/intro.jpeg",
    },
    {
      name: "Basic Networking",
      issuer: "Cisco Networking Academy",
      image: "/networking.png",
    },
    {
      name: "Cyber Job Simulation",
      issuer: "Deloitte - Forage",
      image: "/deloitte.png",
    },
    {
      name: "SOC L1",
      issuer: "TryHackMe",
      image: "/THMSOCL1.png",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certifications" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          CERTIFICATIONS & <span className="text-emerald-400">TRAINING</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Formal credentials and practical lab certifications in ethical hacking, blue teaming, networking, and SOC operations.
        </p>
      </div>

      {/* CERTIFICATIONS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            onClick={() => setSelected(cert)}
            className="rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-5 flex flex-col justify-between cursor-pointer hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.12)] transition-all duration-300 group backdrop-blur-xl"
          >
            <div>
              {/* IMAGE CONTAINER */}
              <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-emerald-500/20 relative group-hover:border-emerald-500/40 transition-colors bg-[#050907]">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/90 text-black text-xs font-semibold font-sans flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    VIEW CREDENTIAL
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mb-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>ISSUER: {cert.issuer}</span>
              </div>

              <h3 className="text-lg font-bold text-white font-sans group-hover:text-emerald-400 transition-colors leading-snug">
                {cert.name}
              </h3>
            </div>

            <div className="mt-5 pt-3 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-emerald-400 font-semibold group-hover:text-emerald-300">
              <span>VIEW FULL CERTIFICATE</span>
              <span>→</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl bg-[#080e0c] border border-emerald-500/30 p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col items-center"
            >
              {/* MODAL HEADER */}
              <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-emerald-500/20">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    {selected.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    ISSUED BY: {selected.issuer}
                  </p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close image modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* CERTIFICATE IMAGE DISPLAY */}
              <div className="w-full flex justify-center items-center overflow-hidden rounded-xl border border-emerald-500/20 bg-black max-h-[75vh]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              {/* MODAL FOOTER */}
              <div className="w-full mt-4 pt-3 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>VERIFIED ACCREDITATION</span>
                <button
                  onClick={() => setSelected(null)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}