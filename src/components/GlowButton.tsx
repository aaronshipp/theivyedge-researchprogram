import { motion } from 'motion/react';

interface GlowButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export function GlowButton({ label, onClick, className }: GlowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={className ?? "cursor-pointer rounded-lg border border-neon-cyan bg-neon-cyan/10 px-5 py-2 font-mono text-sm font-bold uppercase tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan/20"}
      style={{ animation: 'neon-pulse 2s ease-in-out infinite' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.button>
  );
}
