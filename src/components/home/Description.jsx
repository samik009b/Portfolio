export default function Description() {
  return (
    <div className="flex flex-col justify-center bg-neutral-primary-soft p-8 border-2 border-double border-brand/60 w-full relative">
      <span className="absolute top-0 right-6 transform -translate-y-1/2 bg-neutral-primary px-2 text-xs font-mono text-brand">
        [ SYS_READY ]
      </span>
      
      <div className="flex flex-col justify-between md:p-2 leading-normal">
        <h5 className="mb-4 text-3xl font-bold tracking-tight text-heading font-mono uppercase retro-glow-heading">
          Hello, I'm Samik.
        </h5>
        <p className="text-base text-body font-mono leading-relaxed max-w-2xl">
          I am a web engineer and systems architect dedicated to software craft and digital minimalism. I build clean, robust, and highly available applications using modern web technologies and lightweight server structures. Focused on absolute system resilience.
        </p>
      </div>
    </div>
  );
}
