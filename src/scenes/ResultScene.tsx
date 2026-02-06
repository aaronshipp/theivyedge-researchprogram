import { motion } from 'motion/react';
import type { ArchetypeResult } from '../types';
import { GlowButton } from '../components/GlowButton';
import { siteContent } from '../data/content';

interface ResultSceneProps {
  archetype: ArchetypeResult;
}

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || siteContent.result.calendlyFallbackUrl;

const { result } = siteContent;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function ResultScene({ archetype }: ResultSceneProps) {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col items-center gap-8 py-12 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={itemVariants}
        className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan"
      >
        {result.preTitle}
      </motion.p>

      <motion.h1
        className="font-heading text-4xl font-black text-text-primary text-glow-cyan md:text-5xl lg:text-6xl"
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 }}
      >
        {result.titlePrefix} {archetype.name}
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="max-w-xl text-lg leading-relaxed text-text-secondary"
      >
        {archetype.description}
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="w-full rounded-xl border border-neon-cyan-dim bg-void-light p-6"
      >
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
          {result.projectConceptLabel}
        </p>
        <p className="font-heading text-xl font-bold leading-relaxed text-text-primary">
          &ldquo;{archetype.projectConcept}&rdquo;
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
        {archetype.universities.map((uni) => (
          <span
            key={uni}
            className="rounded-full border border-neon-cyan-dim bg-void-light px-3 py-1 font-mono text-xs text-neon-cyan"
          >
            {uni}
          </span>
        ))}
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="max-w-lg text-base italic text-text-secondary"
      >
        {archetype.gapHook}
      </motion.p>

      <motion.div variants={itemVariants}>
        <GlowButton
          label={result.ctaLabel}
          onClick={() => window.open(CALENDLY_URL, '_blank')}
        />
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="font-mono text-xs text-text-muted"
      >
        {archetype.mentorField}
      </motion.p>
    </motion.div>
  );
}
