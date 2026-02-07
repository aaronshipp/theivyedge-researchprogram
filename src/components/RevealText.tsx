import { motion } from 'motion/react';

interface RevealTextProps {
  text: string;
  by?: 'word' | 'sentence';
  staggerDelay?: number;
  delay?: number;
  className?: string;
}

const containerVariants = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const tokenVariants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function RevealText({
  text,
  by = 'word',
  staggerDelay = 0.06,
  delay = 0,
  className = '',
}: RevealTextProps) {
  const tokens =
    by === 'sentence'
      ? text.match(/[^.!?]+[.!?]+\s*/g) || [text]
      : text.split(/(\s+)/);

  return (
    <motion.span
      className={`inline ${className}`}
      variants={containerVariants(staggerDelay, delay)}
      initial="hidden"
      animate="visible"
    >
      {tokens.map((token, i) => {
        // Whitespace tokens render as-is (no animation needed)
        if (by === 'word' && /^\s+$/.test(token)) {
          return <span key={i}>{token}</span>;
        }
        return (
          <motion.span
            key={i}
            variants={tokenVariants}
            className="inline-block"
          >
            {token}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
