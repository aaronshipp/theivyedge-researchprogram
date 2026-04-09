import { motion } from 'motion/react';
import { GlowButton } from '../components/GlowButton';
import { TypewriterText } from '../components/TypewriterText';
import { RevealText } from '../components/RevealText';
import { siteContent } from '../data/content';
import ivyEdgeLogo from '../assets/ivy-edge-logo.jpg';

interface IntroSceneProps {
  onNext: () => void;
}

const { intro } = siteContent;

export function IntroScene({ onNext }: IntroSceneProps) {
  return (
    <div className="flex max-w-3xl flex-col items-center gap-6 sm:gap-8 text-center">
      {/* Logo — spring entrance with gold glow */}
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
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            boxShadow:
              '0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.15)',
          }}
        />
        <img
          src={ivyEdgeLogo}
          alt="Ivy Edge"
          className="relative z-10 h-20 w-20 rounded-full border border-gold/30 object-cover"
        />
      </motion.div>

      {/* Label — typewriter */}
      <div className="h-5 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
        <TypewriterText text={intro.label} speed={35} delay={500} />
      </div>

      {/* Heading — word-by-word reveal, two lines */}
      <h1 className="font-sansation text-3xl font-bold leading-tight text-text-primary text-glow-amber md:text-4xl lg:text-5xl">
        <span className="block">
          <RevealText text={intro.headingLine1} by="word" staggerDelay={0.07} delay={1.2} />
        </span>
        <span className="block">
          <RevealText text={intro.headingLine2} by="word" staggerDelay={0.07} delay={1.2 + 0.07 * 6} />
        </span>
      </h1>

      {/* Subtext */}
      <motion.p
        className="max-w-lg text-sm sm:text-base leading-relaxed text-text-secondary"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {intro.subtext}
      </motion.p>

      {/* CTA — spring entrance */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 2.6 }}
      >
        <GlowButton label={intro.cta} onClick={onNext} />
      </motion.div>

      {/* Footer */}
      <motion.p
        className="font-mono text-xs text-text-secondary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.5 }}
      >
        {intro.footer}
      </motion.p>

      {/* Home page link button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 3.2 }}
      >
        <motion.a
          href="https://www.ivyedgeresearchprogram.com/home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block cursor-pointer rounded-lg border border-neon-cyan bg-neon-cyan/10 px-10 py-4 font-mono text-base font-bold uppercase tracking-widest text-neon-cyan transition-colors hover:bg-neon-cyan/20"
          style={{ animation: 'neon-pulse 2s ease-in-out infinite' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Go to Home Page
        </motion.a>
      </motion.div>
    </div>
  );
}
