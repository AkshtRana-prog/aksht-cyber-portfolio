import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Terminal, Shield, CheckCircle, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EasterEggPopup from "./EasterEggPopup";
import Footer from "./Footer";

export default function Contact() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("Type 'help' to see available commands or use quick links below...");
  const [popup, setPopup] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      window.location.href = `mailto:align.akshtrana@gmail.com?subject=Contact%20from%20${encodeURIComponent(
        formData.name || "Portfolio Visitor"
      )}&body=${encodeURIComponent(formData.message || "Hello Aksht, I would like to connect.")}`;
    }, 1500);
  };

  const runCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = command.toLowerCase().trim();
      let response = "";

      switch (cmd) {
        case "help":
          response = `
AVAILABLE COMMANDS:
  about             - Summary of background
  github            - Open GitHub profile
  linkedin          - Open LinkedIn profile
  email             - Display email address
  skills            - Display technical skills
  hire              - Open recruiter email channel
  recruiter_channel - Recruiter protocol
  clear             - Clear terminal
`;
          break;

        case "about":
          response = `
Aksht Rana
Cybersecurity Developer | SOC Analyst Aspirant
Focus: Threat Detection, Security Automation, SIEM, Wazuh
`;
          break;

        case "github":
          response = "Opening GitHub profile: github.com/AkshtRana-prog";
          window.open("https://github.com/AkshtRana-prog", "_blank");
          break;

        case "linkedin":
          response = "Opening LinkedIn profile: linkedin.com/in/aksht-rana-009515373";
          window.open("https://www.linkedin.com/in/aksht-rana-009515373", "_blank");
          break;

        case "email":
          response = "Email: align.akshtrana@gmail.com";
          break;

        case "skills":
          response = "[✓] Python  [✓] Linux  [✓] Wazuh  [✓] SIEM  [✓] Threat Detection";
          break;

        case "recruiter_channel.exe":
        case "recruiter_channel":
          response = "Executing recruiter_channel.exe... Connection established ✓ Type 'hire' to proceed.";
          break;

        case "hire":
          response = "Recruiter protocol activated. Preparing email client...";
          setPopup(true);
          setTimeout(() => {
            window.location.href = "mailto:align.akshtrana@gmail.com?subject=Security%20Opportunity%20for%20Aksht";
          }, 3000);
          break;

        case "secret":
          response = "ACCESS GRANTED 🚀 System owner verified. Welcome to Aksht's lab.";
          break;

        case "clear":
          setOutput("");
          setCommand("");
          return;

        default:
          response = `Command not found: ${cmd}. Type 'help' for options.`;
      }

      setOutput(response);
      setCommand("");
    }
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-12 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>DIRECT CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-sans tracking-tight">
          LET'S BUILD <span className="text-emerald-400">SOMETHING SECURE.</span>
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          Open to cybersecurity opportunities, SOC Analyst roles, security automation projects, and collaborative research.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* LEFT COLUMN - QUICK CONTACT CARDS & FORM */}
        <div className="lg:col-span-6 space-y-6">
          {/* SOCIAL LINKS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="mailto:align.akshtrana@gmail.com"
              className="p-4 rounded-xl bg-[#080d0b]/80 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex flex-col justify-between group backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Email</span>
                <p className="text-xs font-mono font-medium text-slate-200 truncate">align.akshtrana</p>
              </div>
            </a>

            <a
              href="https://github.com/AkshtRana-prog"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#080d0b]/80 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex flex-col justify-between group backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <FaGithub className="w-5 h-5 text-emerald-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">GitHub</span>
                <p className="text-xs font-mono font-medium text-slate-200">AkshtRana-prog</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/aksht-rana-009515373"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#080d0b]/80 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all flex flex-col justify-between group backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <FaLinkedin className="w-5 h-5 text-emerald-400" />
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn</span>
                <p className="text-xs font-mono font-medium text-slate-200">Aksht Rana</p>
              </div>
            </a>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white font-sans mb-1">
              Send Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out the details below to initiate direct email transmission.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
              <div>
                <label className="text-xs font-mono text-emerald-400 block mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Security Lead"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040706] border border-emerald-500/20 text-slate-200 text-xs focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-emerald-400 block mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. recruiter@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040706] border border-emerald-500/20 text-slate-200 text-xs focus:outline-none focus:border-emerald-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-emerald-400 block mb-1.5">
                  MESSAGE
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe opportunity, project, or collaboration request..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#040706] border border-emerald-500/20 text-slate-200 text-xs focus:outline-none focus:border-emerald-400 transition-colors font-sans resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-sans tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                {formSent ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-black" />
                    <span>LAUNCHING MAIL CLIENT...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SEND TRANSMISSION</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN - CONTACT TERMINAL CONSOLE */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl bg-[#030605] border border-emerald-500/30 p-6 backdrop-blur-xl font-mono shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-emerald-500/20">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-xs text-slate-400 ml-3">
                aksht-contact-terminal ~ bash
              </span>
            </div>

            <p className="text-xs text-emerald-400 font-semibold mb-2">
              root@aksht-contact:~$
            </p>

            <p className="text-slate-300 text-xs leading-relaxed whitespace-pre-line min-h-[140px] bg-[#050907] p-4 rounded-xl border border-emerald-500/15">
              {output}
            </p>

            <div className="flex items-center mt-4 bg-[#040706] p-2.5 rounded-xl border border-emerald-500/20">
              <span className="text-emerald-400 font-bold text-xs">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={runCommand}
                placeholder="type command (e.g. hire, email, skills)..."
                className="bg-transparent outline-none ml-2 flex-1 text-emerald-300 text-xs font-mono"
              />
              <span className="text-emerald-400 animate-pulse">█</span>
            </div>

            <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between text-[11px] text-slate-400">
              <span>TRY: hire</span>
              <span className="text-emerald-400">READY</span>
            </div>
          </div>
        </div>

      </div>

      {/* POPUP NOTIFICATION */}
      {popup && (
        <div className="fixed top-10 right-10 z-50 bg-black border border-emerald-500 p-6 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.5)] font-mono text-emerald-400 animate-pulse">
          <h3 className="font-bold text-sm">EMAIL_CLIENT_ACTIVATED</h3>
          <p className="mt-2 text-xs text-white">
            Message prepared ✓<br />
            Opening mail transmission...
          </p>
        </div>
      )}

      {/* MINIMAL FOOTER */}
      <Footer />
    </section>
  );
}