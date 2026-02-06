interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-2 rounded-full transition-all ${
            i + 1 === current
              ? 'w-6 bg-neon-cyan glow-cyan'
              : i + 1 < current
                ? 'w-2 bg-neon-cyan/50'
                : 'w-2 bg-void-lighter'
          }`}
        />
      ))}
    </div>
  );
}
