import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  cursor?: boolean;
}

export function TypewriterText({
  text,
  speed = 40,
  delay = 0,
  className = '',
  onComplete,
  cursor = true,
}: TypewriterTextProps) {
  const { displayedText, isComplete } = useTypewriter({
    text,
    speed,
    delay,
    onComplete,
  });

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <span
          className="inline-block w-[2px] h-[1em] ml-0.5 bg-neon-cyan align-middle"
          style={{
            animation: 'typewriter-cursor 0.8s step-end infinite',
            opacity: isComplete ? 0 : undefined,
          }}
        />
      )}
    </span>
  );
}
