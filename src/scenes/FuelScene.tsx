import { useState } from 'react';
import { motion } from 'motion/react';
import { OptionCard } from '../components/OptionCard';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { TypewriterText } from '../components/TypewriterText';
import { siteContent } from '../data/content';
import type { FuelChoice, QuizMode } from '../types';

interface FuelSceneProps {
  onSelect: (fuel: FuelChoice) => void;
  mode: QuizMode;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

export function FuelScene({ onSelect, mode }: FuelSceneProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const question = mode === 'parent' ? siteContent.questionsParent[4] : siteContent.questions[4];

  function handleSelect(id: string) {
    setSelected(id);
    setTimeout(() => onSelect(id as FuelChoice), 400);
  }

  return (
    <div className="flex w-full max-w-3xl flex-col items-center gap-10">
      <ProgressIndicator current={5} total={siteContent.questions.length} />

      <div className="text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
          Question 5 of {siteContent.questions.length}
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
          <TypewriterText text={question.prompt} speed={30} cursor={false} />
        </h2>
      </div>

      <motion.div
        className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {question.options.map((opt) => (
          <OptionCard
            key={opt.id}
            icon={<span>{opt.icon}</span>}
            label={opt.label}
            description={opt.description}
            onClick={() => handleSelect(opt.id)}
            selected={selected === opt.id}
            dimmed={selected !== null && selected !== opt.id}
          />
        ))}
      </motion.div>
    </div>
  );
}
