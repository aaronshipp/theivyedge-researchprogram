import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface IconOrbProps {
  children: ReactNode;
  selected?: boolean;
  dimmed?: boolean;
}

export function IconOrb({ children, selected = false, dimmed = false }: IconOrbProps) {
  return (
    <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24">
      {/* Breathing glow ring */}
      <motion.div
        className={`absolute inset-0 rounded-full border ${
          selected
            ? 'border-neon-cyan glow-cyan-strong'
            : 'border-neon-cyan/20'
        }`}
        animate={
          dimmed
            ? { opacity: 0.2 }
            : selected
              ? { opacity: 1 }
              : { opacity: [0.3, 0.6, 0.3] }
        }
        transition={
          selected
            ? { duration: 0.3 }
            : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' as const }
        }
      />
      {/* Radial gradient background */}
      <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-void-lighter to-void" />
      {/* Icon */}
      <motion.span
        className="relative z-10 text-5xl md:text-6xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: dimmed ? 0.3 : 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      >
        {children}
      </motion.span>
    </div>
  );
}
