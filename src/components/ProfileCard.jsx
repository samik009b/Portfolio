export default function ProfileCard() {
  return (
    <div className="bg-neutral-primary-soft w-full p-8 border-2 border-double border-brand/60 flex flex-col items-center justify-center text-center shadow-sm relative">
      <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs font-mono text-brand">
        [ PROFILE ]
      </span>

      <img
        className="w-24 h-24 mb-6 rounded-full border-2 border-brand/50 object-cover shadow-[0_0_8px_rgba(57,255,20,0.15)]"
        src="hero1.png"
        alt="Samik Biswas"
      />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-heading font-mono uppercase">
        Samik Biswas
      </h5>
      <span className="text-xs text-brand font-semibold tracking-widest font-mono">
        WEB ENGINEER / CLOUD ARCHITECT
      </span>
    </div>
  );
}
