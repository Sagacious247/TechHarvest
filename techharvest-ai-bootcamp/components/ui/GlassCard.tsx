interface Props {
  children: React.ReactNode;
}

export default function GlassCard({ children }: Props) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-md
      border
      border-white/10
      rounded-3xl
      p-8
      hover:border-green-500
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >
      {children}
    </div>
  );
}