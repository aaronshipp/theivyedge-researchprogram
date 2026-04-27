import type { CompletedAnswers, ArchetypeResult } from '../types';
import { getArchetypeId } from '../data/archetypes';
import { siteContent } from '../data/content';

export function computeArchetype(answers: CompletedAnswers): ArchetypeResult {
  const archetypeId = getArchetypeId(answers.tool, answers.scale);
  const archetype = siteContent.archetypes[archetypeId];
  const conceptOptions = siteContent.projectConcepts[archetypeId][answers.outcome];
  const projectConcept = conceptOptions[Math.floor(Math.random() * conceptOptions.length)];

  const modifierKey = `${answers.crew}_${answers.fuel}` as const;
  const modifierDesc = siteContent.modifiers.descriptions[modifierKey];
  const gapHookPrefix = siteContent.modifiers.gapHooks[modifierKey];

  const description = `${archetype.baseDescription} ${modifierDesc}`;
  const topUniversities = siteContent.mentorNetwork.universities.slice(0, 3).join(', ');
  const gapHook = `${gapHookPrefix} ${archetype.fields.join(' & ')} at ${topUniversities}.`;

  return {
    id: archetypeId,
    name: archetype.name,
    description,
    projectConcept,
    gapHook,
    mentorField: archetype.fields.join(', '),
    universities: siteContent.mentorNetwork.universities,
    fields: archetype.fields,
  };
}
