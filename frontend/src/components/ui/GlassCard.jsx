export default function GlassCard({
    children,
    className = "",
  }) {
    return (
      <div
        className={`rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl ${className}`}
      >
        {children}
      </div>
    );
  }