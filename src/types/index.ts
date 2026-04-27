export type QuizMode = 'student' | 'parent';

export type ToolChoice = 'stem_bio' | 'cs_eng' | 'humanities' | 'creative_media';
export type ScaleChoice = 'micro' | 'macro';
export type OutcomeChoice = 'paper' | 'prototype' | 'media' | 'policy';
export type CrewChoice = 'independent' | 'collaborative';
export type FuelChoice = 'curiosity' | 'impact';

export interface QuizAnswers {
  tool?: ToolChoice;
  scale?: ScaleChoice;
  outcome?: OutcomeChoice;
  crew?: CrewChoice;
  fuel?: FuelChoice;
}

export type CompletedAnswers = Required<QuizAnswers>;

export interface ArchetypeResult {
  id: string;
  name: string;
  description: string;
  projectConcept: string;
  gapHook: string;
  mentorField: string;
  universities: string[];
  fields: string[];
}

export interface QuizState {
  currentScene: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  answers: QuizAnswers;
  archetype: ArchetypeResult | null;
  mode: QuizMode;
}

export type QuizAction =
  | { type: 'START'; payload: QuizMode }
  | { type: 'ANSWER_TOOL'; payload: ToolChoice }
  | { type: 'ANSWER_SCALE'; payload: ScaleChoice }
  | { type: 'ANSWER_OUTCOME'; payload: OutcomeChoice }
  | { type: 'ANSWER_CREW'; payload: CrewChoice }
  | { type: 'ANSWER_FUEL'; payload: FuelChoice }
  | { type: 'SYNTHESIS_COMPLETE' };

export interface SceneProps {
  onNext: () => void;
  state: QuizState;
}

export interface OptionDef {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}
