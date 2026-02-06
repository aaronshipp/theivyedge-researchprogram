import { useState } from 'react';
import { motion } from 'motion/react';
import { OptionCard } from '../components/OptionCard';
import { ProgressIndicator } from '../components/ProgressIndicator';
import { siteContent } from '../data/content';
import type { OutcomeChoice } from '../types';

interface OutcomeSceneProps {
  onSelect: (outcome: OutcomeChoice) => void;
}

const question = siteContent.questions[2];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export function OutcomeScene({ onSelect }: OutcomeSceneProps) {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSelect(id: string) {
    setSelected(id);
    setTimeout(() => onSelect(id as OutcomeChoice), 400);
  }

  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-8">
      <ProgressIndicator current={3} total={siteContent.questions.length} />

      <div className="text-center">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
          Question 3 of {siteContent.questions.length}
        </p>
        <h2 className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
          {question.prompt}
        </h2>
      </div>

      <motion.div
        className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2"
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
