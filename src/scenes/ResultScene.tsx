import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { ArchetypeResult } from '../types';
import { GlowButton } from '../components/GlowButton';
import { TypewriterText } from '../components/TypewriterText';
import { RotatingTypewriter } from '../components/RotatingTypewriter';
import { siteContent } from '../data/content';
import ivyEdgeLogo from '../assets/ivy-edge-logo.jpg';

interface ResultSceneProps {
  archetype: ArchetypeResult;
}

const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || siteContent.result.calendlyFallbackUrl;

const { result } = siteContent;

const expoOut = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: expoOut },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

export function ResultScene({ archetype }: ResultSceneProps) {
  const [showCalendly, setShowCalendly] = useState(false);

  return (
    <motion.div
      className="flex w-full max-w-3xl flex-col items-center gap-8 pb-10 pt-16 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="absolute -inset-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            boxShadow:
              '0 0 15px rgba(212, 175, 55, 0.3), 0 0 30px rgba(212, 175, 55, 0.1)',
          }}
        />
        <img
          src={ivyEdgeLogo}
          alt="Ivy Edge"
          className="relative z-10 h-14 w-14 rounded-full border border-gold/30 object-cover"
        />
      </motion.div>

      {/* Pre-title */}
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
        <TypewriterText text={result.preTitle} speed={40} delay={200} />
      </div>

      {/* "You are" — centered between pre-title and archetype */}
      <motion.p
        className="-my-2 font-mono text-sm uppercase tracking-[0.2em] text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        {result.titlePrefix}
      </motion.p>

      {/* Archetype name — the hero */}
      <motion.h1
        className="font-heading text-5xl font-black text-text-primary text-glow-cyan md:text-6xl lg:text-7xl"
        style={{ hyphens: 'none', wordBreak: 'keep-all' }}
        initial={{ opacity: 0, scale: 0.8, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: expoOut, delay: 0.5 }}
      >
        {archetype.name}
      </motion.h1>

      {/* Description — sentences cycle in place */}
      <motion.div
        variants={itemVariants}
        className="max-w-2xl border-l-2 border-neon-cyan/30 pl-5 text-left"
      >
        <RotatingTypewriter
          sentences={archetype.description.split(/(?<=\.)\s+/).filter(s => s.trim())}
          speed={38}
          pauseBetween={3000}
          restartDelay={10000}
          className="text-base italic leading-relaxed text-text-secondary"
        />
      </motion.div>

      {/* Primary: Project Concept card — elevated emphasis */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="relative overflow-hidden rounded-xl border border-neon-cyan/30 bg-void-light p-8 text-left glow-cyan">
          <span className="absolute -left-1 -top-4 font-heading text-7xl leading-none text-neon-cyan/10">
            &ldquo;
          </span>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            {result.projectConceptLabel}
          </p>
          <p className="relative z-10 font-heading text-2xl font-bold leading-relaxed text-text-primary md:text-2xl">
            {archetype.projectConcept}
          </p>
        </div>
      </motion.div>

      {/* Secondary: Mentor Network card */}
      <motion.div variants={itemVariants} className="w-full">
        <div className="rounded-xl border border-neon-cyan-dim/50 bg-void-light/60 p-5 text-left">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan/70">
            Mentor Network
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {archetype.universities.map((uni, i) => (
              <motion.span
                key={uni}
                className="rounded-full border border-neon-cyan-dim bg-void px-3 py-1 font-mono text-xs text-neon-cyan"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  delay: 2.2 + i * 0.08,
                }}
              >
                {uni}
              </motion.span>
            ))}
            <span className="ml-2 text-sm text-text-muted">
              {archetype.mentorField}
            </span>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="https://www.ivyedgeresearchprogram.com/home"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer rounded-lg border border-neon-cyan bg-neon-cyan/10 px-10 py-4 font-mono text-base font-bold uppercase tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan/20"
        style={{ animation: 'neon-pulse 2s ease-in-out infinite' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 2.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Go to Home Page
      </motion.a>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 2.8 }}
      >
        <GlowButton
          label={result.ctaLabel}
          onClick={() => setShowCalendly(true)}
        />
      </motion.div>

      {/* Calendly overlay */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-void/80 backdrop-blur-sm"
              onClick={() => setShowCalendly(false)}
            />

            {/* Full-viewport panel */}
            <motion.div
              className="relative h-full w-full overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-void-light text-lg text-text-muted transition-colors hover:bg-void-lighter hover:text-text-primary"
              >
                &#x2715;
              </button>

              <iframe
                src={CALENDLY_URL}
                title="Book a consultation"
                className="h-full w-full border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
