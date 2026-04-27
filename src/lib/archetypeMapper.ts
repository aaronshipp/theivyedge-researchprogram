import type { CompletedAnswers, ArchetypeResult, QuizMode } from '../types';
import { getArchetypeId } from '../data/archetypes';
import { siteContent } from '../data/content';

export function computeArchetype(answers: CompletedAnswers, mode: QuizMode = 'student'): ArchetypeResult {
  const archetypeId = getArchetypeId(answers.tool, answers.scale);
  const archetype = siteContent.archetypes[archetypeId];
  const conceptOptions = siteContent.projectConcepts[archetypeId][answers.outcome];
  const projectConcept = conceptOptions[Math.floor(Math.random() * conceptOptions.length)];

  const modifierKey = `${answers.crew}_${answers.fuel}` as const;
  const isParent = mode === 'parent';
  const modifiers = isParent ? siteContent.modifiersParent : siteContent.modifiers;
  const modifierDesc = modifiers.descriptions[modifierKey];
  const gapHookPrefix = modifiers.gapHooks[modifierKey];

  const baseDesc = isParent
    ? (archetype.baseDescriptionParent ?? archetype.baseDescription)
    : archetype.baseDescription;
  const description = `${baseDesc} ${modifierDesc}`;
  const universityList = archetype.universities ?? siteContent.mentorNetwork.universities;
  const topUniversities = universityList.slice(0, 3).join(', ');
  const gapHook = `${gapHookPrefix} ${archetype.fields.join(' & ')} at ${topUniversities}.`;

  return {
    id: archetypeId,
    name: archetype.name,
    description,
    projectConcept,
    gapHook,
    mentorField: archetype.fields.join(', '),
    universities: universityList,
    fields: archetype.fields,
  };
}
