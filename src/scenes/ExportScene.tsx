import { siteContent } from '../data/content';
import ivyEdgeLogo from '../assets/ivy-edge-logo.jpg';

const ARCHETYPE_IDS = [
  'bio_innovator_micro',
  'bio_systems_macro',
  'systems_architect_micro',
  'platform_builder_macro',
  'cultural_analyst_micro',
  'justice_engineer_macro',
  'narrative_scientist_micro',
  'impact_producer_macro',
] as const;

type ArchetypeId = (typeof ARCHETYPE_IDS)[number];

interface ExportSceneProps {
  archetypeId: ArchetypeId;
}

const universities = ['Harvard', 'Columbia', 'Yale', 'MIT', 'Stanford'];

export function ExportScene({ archetypeId }: ExportSceneProps) {
  const archetype = siteContent.archetypes[archetypeId];
  const projectConcept = siteContent.projectConcepts[archetypeId].paper[0];

  if (!archetype) return <div>Unknown archetype: {archetypeId}</div>;

  return (
    <div
      style={{
        width: '816px',
        minHeight: '1056px',
        backgroundColor: '#000000',
        color: '#f0f0f5',
        fontFamily: '"Space Mono", monospace',
        padding: '64px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <img
          src={ivyEdgeLogo}
          alt="Ivy Edge"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            border: '1px solid rgba(212,175,55,0.4)',
            objectFit: 'cover',
          }}
        />
        <div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#00ffff',
            }}
          >
            Project: The Ivy Edge Research Program
          </div>
          <div
            style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#606070',
              marginTop: '4px',
            }}
          >
            Research Archetype Profile
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(0,255,255,0.15)' }} />

      {/* Pre-title */}
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          color: '#00ffff',
        }}
      >
        Analysis Complete · You are
      </div>

      {/* Archetype name */}
      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: '56px',
          fontWeight: '900',
          color: '#f0f0f5',
          margin: 0,
          lineHeight: 1.1,
          textShadow: '0 0 10px rgba(0,255,255,0.4), 0 0 20px rgba(0,255,255,0.2)',
        }}
      >
        {archetype.name}
      </h1>

      {/* Description */}
      <div
        style={{
          borderLeft: '2px solid rgba(0,255,255,0.3)',
          paddingLeft: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '16px',
            fontStyle: 'italic',
            lineHeight: 1.7,
            color: '#a0a0b0',
            margin: 0,
          }}
        >
          {archetype.baseDescription}
        </p>
      </div>

      {/* Project Concept Card */}
      <div
        style={{
          border: '1px solid rgba(0,255,255,0.25)',
          borderRadius: '12px',
          padding: '32px',
          backgroundColor: '#12121a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: '#00ffff',
            marginBottom: '12px',
          }}
        >
          Generated Project Concept
        </div>
        <p
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '20px',
            fontWeight: 'bold',
            lineHeight: 1.5,
            color: '#f0f0f5',
            margin: 0,
          }}
        >
          {projectConcept}
        </p>
      </div>

      {/* Mentor Network */}
      <div
        style={{
          border: '1px solid rgba(0,255,255,0.1)',
          borderRadius: '12px',
          padding: '20px 24px',
          backgroundColor: 'rgba(18,18,26,0.6)',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            color: 'rgba(0,255,255,0.7)',
            marginBottom: '12px',
          }}
        >
          Mentor Network
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {universities.map((uni) => (
            <span
              key={uni}
              style={{
                border: '1px solid rgba(0,255,255,0.15)',
                borderRadius: '999px',
                padding: '4px 12px',
                fontFamily: 'monospace',
                fontSize: '12px',
                color: '#00ffff',
                backgroundColor: '#0a0a0f',
              }}
            >
              {uni}
            </span>
          ))}
          <span style={{ fontSize: '13px', color: '#606070', marginLeft: '8px' }}>
            {archetype.fields.join(' · ')}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 'auto',
          borderTop: '1px solid rgba(0,255,255,0.1)',
          paddingTop: '16px',
          fontFamily: 'monospace',
          fontSize: '10px',
          color: '#606070',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
        }}
      >
        ivyedgeresearchprogram.com · Book a Strategy Session at calendly.com/theivyedge
      </div>
    </div>
  );
}

export { ARCHETYPE_IDS };
