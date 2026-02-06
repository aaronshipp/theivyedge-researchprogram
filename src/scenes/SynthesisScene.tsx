import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { siteContent } from '../data/content';

interface SynthesisSceneProps {
  onComplete: () => void;
}

const { scanLines } = siteContent.synthesis;

export function SynthesisScene({ onComplete }: SynthesisSceneProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervals = scanLines.map((_, i) =>
      setTimeout(() => setActiveIndex(i), i * 800),
    );

    const completeTimer = setTimeout(onComplete, scanLines.length * 800 + 600);

    return () => {
      intervals.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="flex w-full max-w-lg flex-col items-center gap-10">
      <div className="flex w-full flex-col gap-4">
        {scanLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={
              i <= activeIndex
                ? { opacity: i === activeIndex ? 1 : 0.4, x: 0 }
                : { opacity: 0, x: -10 }
            }
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-3 font-mono text-sm text-neon-cyan"
          >
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                i === activeIndex ? 'bg-neon-cyan glow-cyan' : 'bg-neon-cyan/30'
              }`}
            />
            {line}
          </motion.div>
        ))}
      </div>

      <div className="h-0.5 w-full overflow-hidden rounded-full bg-void-lighter">
        <motion.div
          className="h-full bg-neon-cyan glow-cyan"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{
            duration: scanLines.length * 0.8 + 0.6,
            ease: 'linear',
          }}
        />
      </div>

      <div className="relative h-px w-full overflow-hidden">
        <div
          className="absolute inset-0 h-full w-1/3 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent"
          style={{
            animation: 'scan-line 1.5s ease-in-out infinite',
          }}
        />
      </div>
    </div>
  );
}
