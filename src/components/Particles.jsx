import { useEffect, useState } from "react";

export default function Particles(){

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute h-1 w-1 bg-green-400 rounded-full animate-pulse"
          style={{
            top: p.top,
            left: p.left
          }}
        />
      ))}
    </div>
  );
}