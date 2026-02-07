import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SceneTransitionProps {
  children: ReactNode;
  sceneKey: number;
}

const expoOut = [0.22, 1, 0.36, 1] as const;

const sceneVariants = {
  initial: {
    opacity: 0,
    scale: 0.97,
    filter: 'blur(8px)',
    clipPath: 'inset(5% 5% 5% 5%)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: { duration: 0.6, ease: expoOut },
  },
  exit: {
    opacity: 0,
    scale: 1.03,
    filter: 'blur(8px)',
    clipPath: 'inset(5% 5% 5% 5%)',
    transition: { duration: 0.35, ease: 'easeIn' as const },
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
