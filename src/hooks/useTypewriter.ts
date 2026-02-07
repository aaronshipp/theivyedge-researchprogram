import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 40,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay === 0) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (charIndex >= text.length) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => setCharIndex((i) => i + 1), speed);
    return () => clearTimeout(timer);
  }, [started, charIndex, text.length, speed, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setCharIndex(0);
    setStarted(delay === 0);
  }, [text, delay]);

  return {
    displayedText: text.slice(0, charIndex),
    isComplete: charIndex >= text.length,
  };
}
