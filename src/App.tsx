import { AnimatePresence } from 'motion/react';
import './App.css';
import { useQuiz } from './hooks/useQuiz';
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
import type { ToolChoice, ScaleChoice, OutcomeChoice, CrewChoice, FuelChoice } from './types';

function App() {
  const [state, dispatch] = useQuiz();

  function renderScene() {
    switch (state.currentScene) {
      case 1:
        return <IntroScene onNext={() => dispatch({ type: 'START' })} />;
      case 2:
        return (
          <ToolScene
            onSelect={(tool: ToolChoice) => dispatch({ type: 'ANSWER_TOOL', payload: tool })}
          />
        );
      case 3:
        return (
          <ScaleScene
            onSelect={(scale: ScaleChoice) =>
              dispatch({ type: 'ANSWER_SCALE', payload: scale })
            }
          />
        );
      case 4:
        return (
          <OutcomeScene
            onSelect={(outcome: OutcomeChoice) =>
              dispatch({ type: 'ANSWER_OUTCOME', payload: outcome })
            }
          />
        );
      case 5:
        return (
          <CrewScene
            onSelect={(crew: CrewChoice) => dispatch({ type: 'ANSWER_CREW', payload: crew })}
          />
        );
      case 6:
        return (
          <FuelScene
            onSelect={(fuel: FuelChoice) => dispatch({ type: 'ANSWER_FUEL', payload: fuel })}
          />
        );
      case 7:
        return (
          <SynthesisScene onComplete={() => dispatch({ type: 'SYNTHESIS_COMPLETE' })} />
        );
      case 8:
        return <ResultScene archetype={state.archetype!} />;
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-void font-body">
      <ParticleBackground />
      <AnimatePresence mode="wait">
        <SceneTransition key={state.currentScene} sceneKey={state.currentScene}>
          {renderScene()}
        </SceneTransition>
      </AnimatePresence>
    </div>
  );
}

export default App;
