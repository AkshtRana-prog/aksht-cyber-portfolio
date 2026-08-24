export default function CyberHints() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block opacity-40">
      <p className="absolute top-48 left-12 text-emerald-400/60 font-mono text-[11px] tracking-widest">
        &gt; try: sudo
      </p>
      <p className="absolute top-96 right-16 text-emerald-400/60 font-mono text-[11px] tracking-widest">
        &gt; run: scan
      </p>
      <p className="absolute bottom-64 left-16 text-emerald-400/60 font-mono text-[11px] tracking-widest">
        &gt; /root/encrypted_message.log
      </p>
      <p className="absolute bottom-32 right-24 text-emerald-400/60 font-mono text-[11px] tracking-widest">
        &gt; recruiter_channel.exe
      </p>
    </div>
  );
}