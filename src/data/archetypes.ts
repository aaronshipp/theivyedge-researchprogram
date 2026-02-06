import type { ToolChoice, ScaleChoice } from '../types';

// Q1 (tool) -> [micro archetype id, macro archetype id]
const toolToArchetype: Record<ToolChoice, [string, string]> = {
  stem_bio: ['bio_innovator_micro', 'bio_systems_macro'],
  cs_eng: ['systems_architect_micro', 'platform_builder_macro'],
  humanities: ['cultural_analyst_micro', 'justice_engineer_macro'],
  creative_media: ['narrative_scientist_micro', 'impact_producer_macro'],
};

export function getArchetypeId(tool: ToolChoice, scale: ScaleChoice): string {
  const [micro, macro] = toolToArchetype[tool];
  return scale === 'micro' ? micro : macro;
}
