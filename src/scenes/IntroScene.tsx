import { motion } from 'motion/react';
import { GlowButton } from '../components/GlowButton';
import { siteContent } from '../data/content';

interface IntroSceneProps {
  onNext: () => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const { intro } = siteContent;

export function IntroScene({ onNext }: IntroSceneProps) {
  const parts = intro.heading.split('creators');

  return (
    <motion.div
      className="flex max-w-2xl flex-col items-center gap-8 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan"
      >
        {intro.label}
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="font-heading text-4xl font-bold leading-tight text-text-primary text-glow-cyan md:text-5xl lg:text-6xl"
      >
        {parts.length > 1 ? (
          <>{parts[0]}<em>creators</em>{parts[1]}</>
        ) : (
          intro.heading
        )}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-lg text-lg leading-relaxed text-text-secondary"
      >
        {intro.subtext}
      </motion.p>

      <motion.div variants={itemVariants}>
        <GlowButton label={intro.cta} onClick={onNext} />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="font-mono text-xs text-text-muted"
      >
        {intro.footer}
      </motion.p>
    </motion.div>
  );
}
