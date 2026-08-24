import { useState, useEffect, useRef } from "react";
import EasterEggPopup from "./EasterEggPopup";
import { Terminal as TerminalIcon, Play, ShieldAlert, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";

export default function Terminal({ active = true }) {
  const [history, setHistory] = useState([
    "Initializing secure shell...",
    "Loading security modules...",
    "✓ Wazuh SIEM Node ........ ONLINE",
    "✓ Threat Engine .......... CONNECTED",
    "✓ Automation Framework ... READY",
    "",
    "root@aksht-security:~$",
    "Type 'help' or click quick commands below...",
    "",
    "// hidden protocol detected",
    "// maybe try: sudo, scan, or hire",
  ]);

  const [input, setInput] = useState("");
  const [popup, setPopup] = useState(null);
  const [prevActive, setPrevActive] = useState(active);
  const terminalRef = useRef(null);

  if (active !== prevActive) {
    setPrevActive(active);
    if (active) {
      setHistory((prev) => [
        ...prev,
        "",
        "Session unlocked",
        "root access terminal ready",
        "type help for commands",
      ]);
    }
  }

  useEffect(() => {
    terminalRef.current?.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  function executeCommand(commandStr) {
    let cmd = (commandStr || input).trim();
    if (!cmd) return;

    let output = "";

    switch (cmd.toLowerCase()) {
      case "help":
        output = `
Available Commands:
  whoami                  - Display professional identity & focus
  skills                  - List core technical proficiencies
  projects                - Summarize security projects & tools
  status                  - Display real-time SOC system metrics
  contact                 - View contact details & social channels
  scan                    - Run automated security environment audit
  matrix                  - Initiate matrix protocol
  sudo                    - Verify administrator privileges
  decrypt                 - Decrypt secret log entry
  recruiter_channel.exe   - Execute recruiter connection protocol
  hire                    - Open direct recruiter email channel
  hack                    - Defensive posture check
  clear                   - Clear terminal screen
`;
        break;

      case "whoami":
        output = `
Aksht Rana
Cybersecurity Developer | SOC Analyst Aspirant

Focus:
  • Threat Detection & Vulnerability Analysis
  • Security Automation & Python Tooling
  • SIEM (Wazuh) & Endpoint Monitoring
  • Defensive Security Operations
`;
        break;

      case "skills":
        output = `
[✓] Python & Security Automation
[✓] Linux Administration (Ubuntu/Debian)
[✓] Wazuh SIEM & Log Analysis
[✓] Threat Detection & Phishing Analysis
[✓] Nmap, Wireshark & Network Security
[✓] React & Frontend Security Interfaces
`;
        break;

      case "projects":
        output = `
01. Phishing Detector
    Rule-based phishing detection system analyzing malicious URLs.

02. Wazuh Home Lab
    SIEM monitoring environment for log analysis & alert response.

03. Aksht Security Portfolio
    Interactive security dashboard and command center.
`;
        break;

      case "status":
        output = `
SYSTEM STATUS : ONLINE
  Firewall          : ACTIVE
  Threat Level      : LOW
  SIEM Node         : CONNECTED
  Endpoint Monitor  : ENABLED
  SOC Operations    : READY
`;
        break;

      case "contact":
        output = `
Email:
  align.akshtrana@gmail.com

GitHub:
  github.com/AkshtRana-prog

LinkedIn:
  Aksht Rana
`;
        break;

      case "cd ~":
        output = `
Directory changed:
  /home/aksht
`;
        break;

      case "matrix":
        output = `
Initializing secret protocol...
01001011 01010011 01001000 01010010 01000001 01001110 01000001
ACCESS GRANTED ✓
Welcome to the matrix, Operator.
`;
        break;

      case "sudo":
        output = `
Checking privileges...
USER: Aksht Rana
ACCESS LEVEL: ROOT ✓
Welcome back, administrator. Defensive security systems active.
`;
        break;

      case "scan":
        output = `
Running security environment scan...
  [✓] Firewall Rules ...... SECURE
  [✓] SIEM Integration .... CONNECTED
  [✓] Endpoint Monitoring . ONLINE
  [✓] Threat Detection .... ACTIVE

No critical threats detected. System fully operational.
`;
        break;

      case "decrypt":
        output = `
Decrypting hidden security log...
01001011 01010011 01001000

MESSAGE:
"You found the hidden layer. Curiosity and deep exploration define great security engineers."
`;
        break;

      case "hire":
        setPopup(
          "🚀 Recruiter protocol activated\n\nEmail draft prepared.\n\nTransmission complete ✓"
        );
        output = `
Initializing recruiter channel...
Searching contact endpoint: align.akshtrana@gmail.com
Opening mail client...
Message prepared ✓
Transmission complete ✓
`;
        setTimeout(() => {
          window.location.href =
            "mailto:align.akshtrana@gmail.com?subject=We%20need%20you%20for%20our%20team&body=Hello%20Aksht,%0A%0AI%20found%20your%20security%20portfolio.";
        }, 3500);
        break;

      case "hack":
        output = `
ACCESS DENIED 😄
Defensive security only! We build tools to protect systems.
`;
        break;

      case "recruiter_channel.exe":
        output = `
Executing recruiter_channel.exe...
Scanning opportunities...
Connection established ✓
Recruiter profile detected.

Hint:
  Type "hire" or click [ hire ] below to launch communication channel.
`;
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        output = `
bash: ${cmd}: command not found
Type 'help' to see available commands.
`;
    }

    setHistory((prev) => [
      ...prev,
      `root@aksht-security:~$ ${cmd}`,
      output,
    ]);
    setInput("");
  }

  const quickCommands = ["help", "whoami", "status", "scan", "hire", "clear"];

  return (
    <section id="lab" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs tracking-wider mb-3">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>INTERACTIVE COMMAND CONSOLE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans tracking-tight">
          SECURITY <span className="text-emerald-400">LAB</span>
        </h2>
        <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-2xl">
          Test live commands, explore system stats, audit security checks, or trigger easter eggs.
        </p>
      </div>

      {/* TERMINAL CONTAINER */}
      <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#030605] border border-emerald-500/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-xl font-mono">
        
        {/* TERMINAL HEADER BAR */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-emerald-500/20 bg-[#070d0a]/90">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs text-slate-400 ml-3 font-mono">
              aksht-security-lab ~ bash
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-emerald-400">
            <span className="flex items-center gap-1.5 text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              LIVE TTY
            </span>
          </div>
        </div>

        {/* QUICK COMMAND CHIPS */}
        <div className="px-5 py-2.5 bg-[#050907] border-b border-emerald-500/15 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] text-slate-500 font-sans">Quick Exec:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors text-[11px] cursor-pointer flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 text-emerald-400" />
              <span>{cmd}</span>
            </button>
          ))}
        </div>

        {/* TERMINAL OUTPUT BODY */}
        <div
          ref={terminalRef}
          className="p-5 sm:p-6 h-[380px] overflow-y-auto text-xs sm:text-sm leading-relaxed text-slate-300 space-y-1.5"
        >
          {history.map((line, index) => (
            <pre
              key={index}
              className={`whitespace-pre-wrap font-mono ${
                line.includes("$") || line.includes("root@") || line.includes("✓") || line.includes("ACCESS")
                  ? "text-emerald-400 font-semibold"
                  : line.includes("Available Commands") || line.includes("whoami")
                  ? "text-slate-200"
                  : "text-slate-300"
              }`}
            >
              {line}
            </pre>
          ))}

          {/* INPUT PROMPT LINE */}
          <div className="flex items-center pt-2">
            <span className="text-emerald-400 font-semibold shrink-0">
              root@aksht-security:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") executeCommand();
              }}
              className="bg-transparent outline-none ml-2 flex-1 text-emerald-300 font-mono text-xs sm:text-sm"
              placeholder="type command..."
            />
            <span className="animate-pulse text-emerald-400">█</span>
          </div>
        </div>

        {/* TERMINAL FOOTER BAR */}
        <div className="px-5 py-2.5 bg-[#050907] border-t border-emerald-500/15 flex items-center justify-between text-[11px] text-slate-400 font-sans">
          <span>PORT: 22 (SSH) • ENCRYPTION: AES-256</span>
          <span className="text-emerald-400 font-mono">SOC ENVIRONMENT READY</span>
        </div>
      </div>

      {/* EASTER EGG POPUP IF TRIGGERED */}
      {popup && (
        <EasterEggPopup message={popup} onClose={() => setPopup(null)} />
      )}
    </section>
  );
}