import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#040706]">
      {/* Subtle Radial Glow Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-950/20 rounded-full blur-[160px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Subtle Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 35,
              density: {
                enable: true,
                area: 1000,
              },
            },
            color: {
              value: "#10b981",
            },
            links: {
              enable: true,
              distance: 160,
              color: "#10b981",
              opacity: 0.12,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
            size: {
              value: {
                min: 1,
                max: 2.5,
              },
            },
            opacity: {
              value: 0.35,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}