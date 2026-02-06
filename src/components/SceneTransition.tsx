import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SceneTransitionProps {
  children: ReactNode;
  sceneKey: number;
}

const sceneVariants = {
  initial: { opacity: 0, y: 20, filter: 'blur(4px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(4px)',
    transition: { duration: 0.3, ease: 'easeIn' as const },
  },
};

export function SceneTransition({ children, sceneKey }: SceneTransitionProps) {
  return (
    <motion.div
      key={sceneKey}
      variants={sceneVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10 flex min-h-screen w-full items-center justify-center px-4"
    >
      {children}
    </motion.div>
  );
}
