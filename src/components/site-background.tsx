export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.25]">
        <defs>
          <pattern id="dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" className="fill-border" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" />
      </svg>

      <div className="absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent opacity-[0.10] blur-[110px] dark:opacity-[0.16]" />
      <div className="absolute top-[55%] left-[-15%] h-[28rem] w-[28rem] rounded-full bg-accent opacity-[0.06] blur-[120px] dark:opacity-[0.10]" />
      <div className="absolute bottom-[-15%] right-[10%] h-[24rem] w-[24rem] rounded-full bg-code opacity-[0.05] blur-[110px] dark:opacity-[0.08]" />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    </div>
  );
}
