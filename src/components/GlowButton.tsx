import { motion } from 'motion/react';

interface GlowButtonProps {
  label: string;
  onClick: () => void;
}

export function GlowButton({ label, onClick }: GlowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="cursor-pointer rounded-lg border border-neon-cyan bg-neon-cyan/10 px-10 py-4 font-mono text-base font-bold uppercase tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan/20"
      style={{ animation: 'neon-pulse 2s ease-in-out infinite' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.button>
  );
}
