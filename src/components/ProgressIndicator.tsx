import { motion } from 'motion/react';

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          layout
          className={`h-2 rounded-full ${
            i + 1 === current
              ? 'bg-neon-cyan glow-cyan'
              : i + 1 < current
                ? 'bg-neon-cyan/50'
                : 'bg-void-lighter'
          }`}
          animate={{
            width: i + 1 === current ? 24 : 8,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        />
      ))}
    </div>
  );
}
