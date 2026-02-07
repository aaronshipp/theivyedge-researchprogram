import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { IconOrb } from './IconOrb';

interface OptionCardProps {
  icon: ReactNode;
  label: string;
  description?: string;
  onClick: () => void;
  selected?: boolean;
  dimmed?: boolean;
}

const expoOut = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: expoOut },
  },
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
      className={`relative flex w-full cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-xl border p-6 md:p-8 text-center transition-colors ${
        selected
          ? 'border-neon-cyan bg-neon-cyan/15 glow-cyan-strong'
          : 'border-neon-cyan-dim bg-void-light hover:border-neon-cyan/40 hover:bg-void-lighter'
      } ${dimmed ? 'pointer-events-none opacity-30' : ''}`}
      whileHover={
        !selected && !dimmed
          ? {
              scale: 1.04,
              boxShadow:
                '0 0 20px rgba(0,255,255,0.3), 0 0 40px rgba(0,255,255,0.1)',
            }
          : {}
      }
      whileTap={!selected && !dimmed ? { scale: 0.97 } : {}}
    >
      {/* Scan-line sweep on hover */}
      {!selected && !dimmed && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div
            className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent"
            style={{ animation: 'scan-line 2s ease-in-out infinite' }}
          />
        </motion.div>
      )}

      <div className="relative z-10">
        <IconOrb selected={selected} dimmed={dimmed}>
          {icon}
        </IconOrb>
      </div>
      <h3 className="relative z-10 font-heading text-xl font-bold text-text-primary">
        {label}
      </h3>
      {description && (
        <p className="relative z-10 text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </motion.button>
  );
}
