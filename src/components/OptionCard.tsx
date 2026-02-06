import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface OptionCardProps {
  icon: ReactNode;
  label: string;
  description?: string;
  onClick: () => void;
  selected?: boolean;
  dimmed?: boolean;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function OptionCard({
  icon,
  label,
  description,
  onClick,
  selected = false,
  dimmed = false,
}: OptionCardProps) {
  return (
    <motion.button
      variants={cardVariants}
      onClick={onClick}
      className={`flex w-full cursor-pointer flex-col items-center gap-3 rounded-xl border p-6 text-center transition-colors ${
        selected
          ? 'border-neon-cyan bg-neon-cyan/15 glow-cyan-strong'
          : 'border-neon-cyan-dim bg-void-light hover:border-neon-cyan/40 hover:bg-void-lighter'
      } ${dimmed ? 'pointer-events-none opacity-30' : ''}`}
      whileHover={!selected && !dimmed ? { scale: 1.03 } : {}}
      whileTap={!selected && !dimmed ? { scale: 0.97 } : {}}
    >
      <div className="text-4xl text-neon-cyan">{icon}</div>
      <h3 className="font-heading text-lg font-bold text-text-primary">{label}</h3>
      {description && (
        <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
      )}
    </motion.button>
  );
}
