import { AnimatePresence, motion } from 'motion/react';
import './App.css';
import { useQuiz } from './hooks/useQuiz';
import ivyEdgeLogo from './assets/ivy-edge-logo.jpg';
import { SceneTransition } from './components/SceneTransition';
import { ParticleBackground } from './components/ParticleBackground';
import { IntroScene } from './scenes/IntroScene';
import { ToolScene } from './scenes/ToolScene';
import { ScaleScene } from './scenes/ScaleScene';
import { OutcomeScene } from './scenes/OutcomeScene';
import { CrewScene } from './scenes/CrewScene';
import { FuelScene } from './scenes/FuelScene';
import { SynthesisScene } from './scenes/SynthesisScene';
import { ResultScene } from './scenes/ResultScene';
import { ExportScene } from './scenes/ExportScene';
import { computeArchetype } from './lib/archetypeMapper';
import type { ToolChoice, ScaleChoice, OutcomeChoice, CrewChoice, FuelChoice, QuizMode } from './types';

function QuizApp() {
  const [state, dispatch] = useQuiz();

  function renderScene() {
    switch (state.currentScene) {
      case 1:
        return <IntroScene onNext={(mode: QuizMode) => dispatch({ type: 'START', payload: mode })} />;
      case 2:
        return (
          <ToolScene
            mode={state.mode}
            onSelect={(tool: ToolChoice) => dispatch({ type: 'ANSWER_TOOL', payload: tool })}
          />
        );
      case 3:
        return (
          <ScaleScene
            mode={state.mode}
            onSelect={(scale: ScaleChoice) =>
              dispatch({ type: 'ANSWER_SCALE', payload: scale })
            }
          />
        );
      case 4:
        return (
          <OutcomeScene
            mode={state.mode}
            onSelect={(outcome: OutcomeChoice) =>
              dispatch({ type: 'ANSWER_OUTCOME', payload: outcome })
            }
          />
        );
      case 5:
        return (
          <CrewScene
            mode={state.mode}
            onSelect={(crew: CrewChoice) => dispatch({ type: 'ANSWER_CREW', payload: crew })}
          />
        );
      case 6:
        return (
          <FuelScene
            mode={state.mode}
            onSelect={(fuel: FuelChoice) => dispatch({ type: 'ANSWER_FUEL', payload: fuel })}
          />
        );
      case 7:
        return (
          <SynthesisScene mode={state.mode} onComplete={() => dispatch({ type: 'SYNTHESIS_COMPLETE' })} />
        );
      case 8:
        return <ResultScene archetype={state.archetype!} mode={state.mode} />;
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-body">
      <ParticleBackground />
      <AnimatePresence mode="wait">
        <SceneTransition key={state.currentScene} sceneKey={state.currentScene}>
          {renderScene()}
        </SceneTransition>
      </AnimatePresence>
      {/* Subtle brand watermark during quiz scenes */}
      {state.currentScene >= 2 && state.currentScene <= 7 && (
        <motion.img
          src={ivyEdgeLogo}
          alt=""
          className="fixed bottom-4 right-4 z-20 h-8 w-8 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}

function App() {
  const params = new URLSearchParams(window.location.search);

  const exportId = params.get('export');
  if (exportId) {
    return <ExportScene archetypeId={exportId as Parameters<typeof ExportScene>[0]['archetypeId']} />;
  }

  const previewId = params.get('preview');
  if (previewId) {
    const archetypeAnswers: Record<string, { tool: ToolChoice; scale: ScaleChoice }> = {
      bio_innovator_micro:       { tool: 'stem_bio',       scale: 'micro' },
      bio_systems_macro:         { tool: 'stem_bio',       scale: 'macro' },
      systems_architect_micro:   { tool: 'cs_eng',         scale: 'micro' },
      platform_builder_macro:    { tool: 'cs_eng',         scale: 'macro' },
      cultural_analyst_micro:    { tool: 'humanities',     scale: 'micro' },
      justice_engineer_macro:    { tool: 'humanities',     scale: 'macro' },
      narrative_scientist_micro: { tool: 'creative_media', scale: 'micro' },
      impact_producer_macro:     { tool: 'creative_media', scale: 'macro' },
    };
    const base = archetypeAnswers[previewId];
    if (base) {
      const archetype = computeArchetype({ ...base, outcome: 'paper', crew: 'independent', fuel: 'curiosity' });
      return <ResultScene archetype={archetype} mode="student" />;
    }
  }

  return <QuizApp />;
}

export default App;
