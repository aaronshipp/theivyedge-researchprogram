import { useReducer } from 'react';
import { computeArchetype } from '../lib/archetypeMapper';
import type { QuizState, QuizAction, CompletedAnswers } from '../types';

const initialState: QuizState = {
  currentScene: 1,
  answers: {},
  archetype: null,
  mode: 'student',
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'START':
      return { ...state, currentScene: 2, mode: action.payload };
    case 'ANSWER_TOOL':
      return { ...state, currentScene: 3, answers: { ...state.answers, tool: action.payload } };
    case 'ANSWER_SCALE':
      return { ...state, currentScene: 4, answers: { ...state.answers, scale: action.payload } };
    case 'ANSWER_OUTCOME':
      return { ...state, currentScene: 5, answers: { ...state.answers, outcome: action.payload } };
    case 'ANSWER_CREW':
      return { ...state, currentScene: 6, answers: { ...state.answers, crew: action.payload } };
    case 'ANSWER_FUEL': {
      const answers = { ...state.answers, fuel: action.payload };
      return { ...state, currentScene: 7, answers };
    }
    case 'SYNTHESIS_COMPLETE': {
      const archetype = computeArchetype(state.answers as CompletedAnswers, state.mode);
      return { ...state, currentScene: 8, archetype };
    }
    default:
      return state;
  }
}

export function useQuiz() {
  return useReducer(quizReducer, initialState);
}
