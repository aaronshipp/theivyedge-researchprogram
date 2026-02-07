import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTypewriter } from '../hooks/useTypewriter';

interface RotatingTypewriterProps {
  sentences: string[];
  speed?: number;
  pauseBetween?: number;
  className?: string;
  delay?: number;
  restartDelay?: number;
}

function TypedSentence({
  text,
  speed,
  onDone,
}: {
  text: string;
  speed: number;
  onDone?: () => void;
}) {
  const firedRef = useRef(false);

  const { displayedText, isComplete } = useTypewriter({
    text,
    speed,
    onComplete: () => {
      if (!firedRef.current) {
        firedRef.current = true;
        onDone?.();
      }
    },
  });

  return (
    <>
      {displayedText}
      {!isComplete && (
        <span
          className="inline-block h-[1em] w-[2px] align-middle bg-neon-cyan/60 ml-0.5"
          style={{ animation: 'typewriter-cursor 0.8s step-end infinite' }}
        />
      )}
    </>
  );
}

export function RotatingTypewriter({
  sentences,
  speed = 30,
  pauseBetween = 2200,
  className,
  delay = 0,
  restartDelay = 6000,
}: RotatingTypewriterProps) {
  const [index, setIndex] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const t = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  if (!ready) return <div className={className} />;

  const isLast = index >= sentences.length - 1;

  return (
    <div className={className}>
      {/* Grid overlap: invisible sentences establish max height, active overlays */}
      <div className="grid">
        {sentences.map((s) => (
          <span key={s} className="invisible col-start-1 row-start-1" aria-hidden>
            {s}
          </span>
        ))}
        <div className="col-start-1 row-start-1">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${cycle}-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
            >
              <TypedSentence
                text={sentences[index]}
                speed={speed}
                onDone={() => {
                  const nextDelay = isLast ? restartDelay : pauseBetween;
                  setTimeout(() => {
                    if (isLast) {
                      setIndex(0);
                      setCycle((c) => c + 1);
                    } else {
                      setIndex((i) => i + 1);
                    }
                  }, nextDelay);
                }}
              />
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Sentence progress dots */}
      {sentences.length > 1 && (
        <div className="mt-3 flex justify-center gap-1.5">
          {sentences.map((_, i) => (
            <motion.div
              key={i}
              className="h-1 w-1 rounded-full"
              animate={{
                backgroundColor:
                  i === index
                    ? 'rgba(0, 255, 255, 0.8)'
                    : i < index
                      ? 'rgba(0, 255, 255, 0.3)'
                      : 'rgba(0, 255, 255, 0.1)',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
