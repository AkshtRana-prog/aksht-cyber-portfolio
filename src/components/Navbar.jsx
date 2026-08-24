import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Terminal as TerminalIcon } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "SKILLS", id: "skills" },
    { name: "CERTIFICATIONS", id: "certifications" },
    { name: "TIMELINE", id: "timeline" },
    { name: "BLOG", id: "blogs" },
    { name: "SECURITY LAB", id: "lab" },
    { name: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 180;
          const height = section.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActive(link.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function navigate(link) {
    const section = document.getElementById(link.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActive(link.name);
    setOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-2xl transition-all duration-300 border ${
          scrolled
            ? "bg-[#060b09]/80 backdrop-blur-xl border-emerald-500/25 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-[#080d0b]/60 backdrop-blur-md border-emerald-500/15"
        } px-5 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <button
            onClick={() => navigate({ id: "home", name: "HOME" })}
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all duration-300">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wider font-sans text-sm group-hover:text-emerald-400 transition-colors">
                AKSHT RANA
              </span>
              <span className="text-[10px] text-emerald-400/80 font-mono tracking-widest uppercase">
                SECURITY ENGINEER
              </span>
            </div>
          </button>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link)}
                className={`relative px-3 py-1.5 rounded-lg text-xs tracking-wider transition-all duration-200 cursor-pointer font-sans ${
                  active === link.name
                    ? "text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* RIGHT STATUS INDICATOR */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="hidden xl:inline">AVAILABLE FOR OPPORTUNITIES</span>
              <span className="xl:hidden">AVAILABLE</span>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* MOBILE TOGGLE (WHEN STATUS HIDDEN ON VERY SMALL SCREENS) */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mt-3 border-t border-emerald-500/20 pt-3"
            >
              <div className="flex flex-col gap-1.5 pb-2">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => navigate(link)}
                    className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs tracking-wider text-left transition-all ${
                      active === link.name
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-medium"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.name === "SECURITY LAB" && (
                      <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                    )}
                  </button>
                ))}
                
                <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between px-4 py-2 text-xs font-mono text-emerald-400/90">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    STATUS: ONLINE
                  </span>
                  <span className="text-[10px] text-slate-400">SOC READY</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}