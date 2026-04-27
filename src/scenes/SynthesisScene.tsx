import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { TypewriterText } from '../components/TypewriterText';
import { siteContent } from '../data/content';
import type { QuizMode } from '../types';

interface SynthesisSceneProps {
  onComplete: () => void;
  mode: QuizMode;
}
const LINE_DURATION = 1200; // ms per line (typewriter needs more time)
const SEGMENTS = 12; // progress bar segments

export function SynthesisScene({ onComplete, mode }: SynthesisSceneProps) {
  const { scanLines } = mode === 'parent' ? siteContent.synthesisParent : siteContent.synthesis;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timers = scanLines.map((_, i) =>
      setTimeout(() => setActiveIndex(i), i * LINE_DURATION),
    );

    const completeTimer = setTimeout(
      onComplete,
      scanLines.length * LINE_DURATION + 600,
    );

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      {/* Scan lines with typewriter */}
      <div className="flex w-full flex-col gap-4">
        {scanLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={
              i <= activeIndex
                ? { opacity: i === activeIndex ? 1 : 0.35, x: 0 }
                : { opacity: 0, x: -10 }
            }
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex items-center gap-3 font-mono text-sm text-neon-cyan"
          >
            <motion.span
              className="inline-block h-2 w-2 flex-shrink-0 rounded-full"
              animate={{
                backgroundColor:
                  i === activeIndex
                    ? 'rgba(0, 255, 255, 1)'
                    : i < activeIndex
                      ? 'rgba(0, 255, 255, 0.3)'
                      : 'rgba(0, 255, 255, 0)',
                boxShadow:
                  i === activeIndex
                    ? '0 0 8px rgba(0, 255, 255, 0.6)'
                    : '0 0 0px rgba(0, 255, 255, 0)',
              }}
              transition={{ duration: 0.3 }}
            />
            {i === activeIndex ? (
              <TypewriterText text={line} speed={25} cursor={true} />
            ) : i < activeIndex ? (
              <span className="opacity-60">{line}</span>
            ) : null}
          </motion.div>
        ))}
      </div>

      {/* Segmented progress bar */}
      <div className="flex w-full gap-1">
        {Array.from({ length: SEGMENTS }, (_, i) => {
          const progress = activeIndex / (scanLines.length - 1);
          const segmentThreshold = i / SEGMENTS;
          const isActive = progress >= segmentThreshold;

          return (
            <motion.div
              key={i}
              className="h-1 flex-1 rounded-full"
              initial={{ backgroundColor: 'rgba(26, 26, 46, 1)' }}
              animate={{
                backgroundColor: isActive
                  ? 'rgba(0, 255, 255, 0.8)'
                  : 'rgba(26, 26, 46, 1)',
                boxShadow: isActive
                  ? '0 0 6px rgba(0, 255, 255, 0.4)'
                  : '0 0 0px rgba(0, 255, 255, 0)',
              }}
              transition={{ duration: 0.3, delay: isActive ? i * 0.03 : 0 }}
            />
          );
        })}
      </div>

      {/* Scan line sweep */}
      <div className="relative h-px w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"
          style={{ animation: 'scan-line 1.5s ease-in-out infinite' }}
        />
      </div>

      {/* Spinner ring */}
      <motion.div
        className="h-8 w-8 rounded-full border-2 border-neon-cyan/10 border-t-neon-cyan/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
