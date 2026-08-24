import { motion } from "framer-motion";
import { FolderGit2, Award, Shield, Wrench } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      number: "03+",
      title: "SECURITY PROJECTS",
      desc: "Security tools, labs & research platforms",
      icon: FolderGit2,
    },
    {
      number: "06",
      title: "CERTIFICATIONS",
      desc: "CEH | LetsDefend | Cisco | Deloitte",
      icon: Award,
    },
    {
      number: "01",
      title: "SOC INTERNSHIP",
      desc: "Craw Security cybersecurity internship",
      icon: Shield,
    },
    {
      number: "12+",
      title: "TOOLS & TECH",
      desc: "Wazuh | Linux | SIEM | Python | Nmap",
      icon: Wrench,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-[#080d0b]/80 border border-emerald-500/20 p-6 backdrop-blur-xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.12)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-xs font-mono text-emerald-400/80">#0{index + 1}</span>
              </div>

              <div className="mt-6">
                <p className="text-4xl font-bold font-sans text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {item.number}
                </p>
                <p className="mt-2 text-xs font-mono font-semibold text-emerald-400 tracking-wider">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-slate-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}