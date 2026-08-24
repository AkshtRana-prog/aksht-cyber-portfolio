import { useEffect, useState } from "react";
import Background from "../components/Background";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import SecurityStatus from "../components/SecurityStatus";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Timeline from "../components/Timeline";
import Blogs from "../components/Blogs";
import Terminal from "../components/Terminal";
import Contact from "../components/Contact";
import CyberHints from "../components/CyberHints";
import RandomEvents from "../components/RandomEvents";
import BootScreen from "../components/BootScreen";
import CyberCursor from "../components/CyberCursor";

export default function Home() {
  const [boot, setBoot] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* BOOT ANIMATION SCREEN */}
      {boot && <BootScreen finish={() => setBoot(false)} />}

      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#040706] text-slate-100 font-sans">
        {/* CUSTOM CURSOR */}
        <CyberCursor />

        {/* BACKGROUND EFFECT */}
        <Background />

        {/* SUBTLE AMBIENT HINTS */}
        <CyberHints />

        {/* TELEMETRY STREAM TOAST */}
        <RandomEvents />

        {/* FLOATING SECURITY TELEMETRY */}
        <SecurityStatus />

        {/* MAIN CONTENT SECTIONS */}
        <main className="w-full">
          {/* HERO */}
          <Hero />

          {/* STATS HIGHLIGHTS */}
          <Stats />

          {/* ABOUT SECTION */}
          <About />

          {/* FEATURED PROJECTS */}
          <Projects />

          {/* SKILLS MATRIX */}
          <Skills />

          {/* CERTIFICATIONS */}
          <Certifications />

          {/* CAREER TIMELINE */}
          <Timeline />

          {/* SECURITY REPORTS & BLOGS */}
          <Blogs />

          {/* SECURITY LAB & CONSOLE */}
          <Terminal active={true} />

          {/* CONTACT & FOOTER */}
          <Contact />
        </main>
      </div>
    </>
  );
}