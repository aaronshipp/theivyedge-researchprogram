/**
 * ============================================================
 * SITE CONTENT — Single source of truth for all editable text
 * ============================================================
 *
 * Edit this file to change any text in the Research Explorer experience.
 * See CONTENT_GUIDE.md in the project root for detailed instructions.
 *
 * After editing, run `npm run build` to check for errors,
 * then `npm run dev` to preview your changes.
 */

import type { ToolChoice, ScaleChoice, OutcomeChoice, CrewChoice, FuelChoice } from '../types';

// ─── Archetype Definition Type ──────────────────────────────

export interface ArchetypeDefinition {
  name: string;
  baseDescription: string;
  mentorProfile: string;
  fields: string[];
}

// ─── Site Content ───────────────────────────────────────────

export const siteContent = {

  // ── Intro Scene (Scene 1) ──────────────────────────────────

  intro: {
    /** Small label above the main heading */
    label: 'Project: The Ivy Edge Research Program',
    /** Main heading — two lines rendered separately in IntroScene */
    headingLine1: "Your Ivy Edge Research Program",
    headingLine2: "Journey Begins Here",
    /** Description paragraph below the heading */
    subtext: 'Real research. Real mentors. Real results.',
    /** Text on the primary call-to-action button */
    cta: 'Initiate Sequence',
    /** Small footer text below the button */
    footer: '60 seconds * No wrong answers * Choose your adventure',
  },

  // ── Quiz Questions (Scenes 2–6) ────────────────────────────
  //
  // Each question has a prompt (the heading) and a list of options.
  // Options have: id (must match the TypeScript type), icon (emoji),
  // label (card title), and description (card subtitle).
  //
  // WARNING: Do not change option `id` values — they are used by
  // the archetype mapping logic. You can freely change labels,
  // descriptions, and icons.

  questions: [
    // Q1 — "The Tool" (Scene 2)
    {
      id: 'tool',
      prompt: 'What\'s your instrument of change?',
      options: [
        { id: 'stem_bio' as ToolChoice, icon: '🔬', label: 'Microscope / DNA Helix', description: 'Biology, Chemistry, Life Sciences' },
        { id: 'cs_eng' as ToolChoice, icon: '💻', label: 'Code Terminal / Matrix', description: 'Computer Science, Engineering' },
        { id: 'humanities' as ToolChoice, icon: '⚖️', label: 'Gavel / Vintage Pen', description: 'Humanities, Law, Policy' },
        { id: 'creative_media' as ToolChoice, icon: '🎬', label: 'Video Camera / VR Headset', description: 'Creative Arts, Media, Design' },
      ],
    },
    // Q2 — "The Scale" (Scene 3)
    {
      id: 'scale',
      prompt: 'How do you solve problems?',
      options: [
        { id: 'micro' as ScaleChoice, icon: '⚛️', label: 'Micro — The Cell / The Atom', description: 'I look at the building blocks.' },
        { id: 'macro' as ScaleChoice, icon: '🌍', label: 'Macro — The City / The Globe', description: 'I look at the big picture.' },
      ],
    },
    // Q3 — "The Outcome" (Scene 4)
    {
      id: 'outcome',
      prompt: 'What does "finished" look like to you?',
      options: [
        { id: 'paper' as OutcomeChoice, icon: '📜', label: 'A Published Paper', description: 'Academic research, peer review, citations.' },
        { id: 'prototype' as OutcomeChoice, icon: '🤖', label: 'A Working Prototype', description: 'Something you can touch, demo, or deploy.' },
        { id: 'media' as OutcomeChoice, icon: '🎙️', label: 'A Launch Event / Podcast', description: 'Media, storytelling, public engagement.' },
        { id: 'policy' as OutcomeChoice, icon: '🏛️', label: 'A Policy Change', description: 'Legislation, frameworks, systemic reform.' },
      ],
    },
    // Q4 — "The Crew" (Scene 5)
    {
      id: 'crew',
      prompt: "Who's with you on your mission?",
      options: [
        { id: 'independent' as CrewChoice, icon: '🧑‍💻', label: 'Just Me & My Mentor', description: 'Deep focus. One mind. One question.' },
        { id: 'collaborative' as CrewChoice, icon: '👥', label: 'A Full Research Team', description: 'Collaboration. Multiple perspectives. Shared discovery.' },
      ],
    },
    // Q5 — "The Fuel" (Scene 6)
    {
      id: 'fuel',
      prompt: 'What drives you?',
      options: [
        { id: 'curiosity' as FuelChoice, icon: '🔭', label: 'Pure Curiosity — The Unknown', description: 'I want to know what no one else knows.' },
        { id: 'impact' as FuelChoice, icon: '⚡', label: 'Real-World Impact — The Change', description: 'I want to build something that matters.' },
      ],
    },
  ],

  // ── Synthesis Scene (Scene 7) ──────────────────────────────

  synthesis: {
    /** Lines displayed sequentially during the "scanning" animation */
    scanLines: [
      'Scanning Ivy Edge Mentor Network...',
      'Accessing Harvard / Columbia / MIT nodes...',
      'Cross-referencing Research Vectors...',
      'Synthesizing Your Archetype...',
    ],
  },

  // ── Result Scene (Scene 8) ─────────────────────────────────

  result: {
    /** Small label above the archetype name */
    preTitle: 'Analysis Complete',
    /** Prefix before the archetype name (e.g., "You are The Bio-Innovator") */
    titlePrefix: 'You are',
    /** Label above the project concept box */
    projectConceptLabel: 'Generated Project Concept',
    /** Text on the booking CTA button */
    ctaLabel: 'Book Discovery Session',
    /** Calendly URL — override with VITE_CALENDLY_URL env var for production */
    calendlyFallbackUrl: 'https://calendly.com/theivyedge/20-minute-consultation',
  },

  // ── Archetypes ─────────────────────────────────────────────
  //
  // 8 archetypes derived from Q1 (tool) × Q2 (scale).
  // The key must match the archetype mapping in archetypeMapper.ts.
  // `fields` are the academic disciplines shown on the result card.

  archetypes: {
    bio_innovator_micro: {
      name: 'The Bio-Innovator',
      baseDescription:
        'You see biology as a machine to be tuned. Your instinct is to zoom in — to the cellular level, the molecular mechanism, the invisible process that governs everything above it.',
      mentorProfile: 'stem_bio',
      fields: ['Molecular Biology', 'Biochemistry', 'Genetics'],
    },
    bio_systems_macro: {
      name: 'The Ecological Investigator',
      baseDescription:
        'You think in ecosystems, not test tubes. Where others see a single organism, you see interconnected systems, environmental pressures, and emergent behaviors at scale.',
      mentorProfile: 'stem_bio',
      fields: ['Ecology', 'Public Health', 'Epidemiology'],
    },
    systems_architect_micro: {
      name: 'The Systems Architect',
      baseDescription:
        'You build from first principles. Algorithms, architectures, elegant solutions to hard problems — you are drawn to the logic beneath the interface.',
      mentorProfile: 'cs_eng',
      fields: ['Computer Science', 'Electrical Engineering', 'Robotics'],
    },
    platform_builder_macro: {
      name: 'The Platform Builder',
      baseDescription:
        "You don't just write code — you design systems that serve millions. Platforms, networks, infrastructure that scales. You think about the user, the community, the world.",
      mentorProfile: 'cs_eng',
      fields: ['Software Engineering', 'Data Science', 'Systems Design'],
    },
    cultural_analyst_micro: {
      name: 'The Cultural Analyst',
      baseDescription:
        'You decode texts, cases, and arguments at the sentence level. Precision of language is your instrument. You find truth in the footnotes.',
      mentorProfile: 'humanities',
      fields: ['Philosophy', 'Literature', 'Legal Studies'],
    },
    justice_engineer_macro: {
      name: 'The Justice Engineer',
      baseDescription:
        'You see the structures that others accept as given — and you want to redesign them. Policy, power, equity: these are your raw materials.',
      mentorProfile: 'humanities',
      fields: ['Political Science', 'Sociology', 'Public Policy'],
    },
    narrative_scientist_micro: {
      name: 'The Narrative Scientist',
      baseDescription:
        'You blend art and analysis. Every frame, every edit, every word choice is a data point in a story designed to shift perception.',
      mentorProfile: 'humanities',
      fields: ['Film Studies', 'Journalism', 'Digital Media'],
    },
    impact_producer_macro: {
      name: 'The Impact Producer',
      baseDescription:
        'You create media that moves systems. Documentaries that change policy. Campaigns that shift culture. Your canvas is the public conversation.',
      mentorProfile: 'humanities',
      fields: ['Communications', 'Media Studies', 'Social Entrepreneurship'],
    },
  } as Record<string, ArchetypeDefinition>,

  // ── Project Concepts ───────────────────────────────────────
  //
  // 32 total (8 archetypes × 4 outcome types).
  // Each is a one-sentence research project idea shown on the result card.

  projectConcepts: {
    bio_innovator_micro: {
      paper: [
        'A research paper on CRISPR gene-editing efficiency in antibiotic-resistant bacteria.',
        'A comparative analysis of enzyme kinetics in plastic-degrading microbial strains.',
        'A meta-analysis of mRNA stability markers in synthetic biological circuits.',
      ],
      prototype: [
        'A biosensor prototype that detects early-stage inflammatory markers in saliva samples.',
        'A low-cost, 3D-printed microfluidic chip for rapid water quality testing.',
        'A machine-learning powered app that classifies skin lesions via smartphone camera.',
      ],
      media: [
        'A science communication series breaking down genomics breakthroughs for Gen Z audiences.',
        'An animated explainer series visualizing the molecular mechanisms of viral entry.',
        'A podcast exploring the ethical frontiers of DIY bio-hacking and citizen science.',
      ],
      policy: [
        'A policy brief on ethical frameworks for human germline genetic modification.',
        'A regulatory proposal for safety standards in non-institutional synthetic biology labs.',
        'An analysis of patent law implications on access to essential genetic medicines.',
      ],
    },
    bio_systems_macro: {
      paper: [
        'A research paper modeling how urban microbiomes influence respiratory disease rates.',
        'A statistical analysis of vector-borne disease migration patterns due to warming climates.',
        'A study on the correlation between green space distribution and community mental health metrics.',
      ],
      prototype: [
        'A real-time dashboard prototype tracking pollinator population decline using satellite data.',
        'An automated drone system for monitoring algae bloom growth in local reservoirs.',
        'A predictive model for forest fire spread based on historical soil moisture data.',
      ],
      media: [
        'A documentary podcast exploring how climate migration is reshaping global public health.',
        'A data-visualization project mapping the "cancer alley" industrial impact in the American South.',
        'A multimedia journalism piece on the intersection of biodiversity loss and food security.',
      ],
      policy: [
        'A policy proposal for equitable vaccine distribution frameworks in climate-vulnerable regions.',
        'A legislative framework for integrating carbon capture verification into municipal zoning.',
        'A proposal for standardized air quality monitoring requirements in low-income housing.',
      ],
    },
    systems_architect_micro: {
      paper: [
        'A research paper on novel graph algorithms for optimizing neural network pruning in edge devices.',
        'A comparative study of quantum-resistant encryption protocols for IoT devices.',
        'An investigation into optimizing energy consumption in large language model training.',
      ],
      prototype: [
        'An autonomous micro-robot prototype that navigates disaster rubble using LIDAR.',
        'A haptic feedback glove designed to translate sign language into text in real-time.',
        'A custom FPGA accelerator designed to optimize specific cryptographic functions.',
      ],
      media: [
        'An interactive web experience visualizing how sorting algorithms compete in real-time.',
        'A YouTube series deconstructing the "Black Box" logic of proprietary AI models.',
        'A digital museum of "Dead Tech" exploring the evolution of failed hardware standards.',
      ],
      policy: [
        'A technical standards proposal for ethical AI auditing in criminal justice prediction systems.',
        'A white paper on "Right to Repair" legislation regarding proprietary diagnostic software.',
        'A framework for standardized cybersecurity labeling on consumer IoT devices.',
      ],
    },
    platform_builder_macro: {
      paper: [
        'A research paper analyzing distributed consensus mechanisms for equitable resource allocation.',
        'A study on the latency vs. security trade-offs in decentralized finance protocols.',
        'An analysis of network effects and user retention in open-source educational platforms.',
      ],
      prototype: [
        'A platform prototype connecting underserved communities to real-time mental health responders.',
        'A decentralized voting application using blockchain to ensure transparent student government elections.',
        'A supply-chain transparency tool allowing consumers to trace product origins via QR codes.',
      ],
      media: [
        'A data journalism project mapping digital infrastructure inequality across American schools.',
        'A podcast series interviewing the maintainers of the open-source infrastructure running the web.',
        'An interactive dashboard visualizing real-time energy consumption of major crypto networks.',
      ],
      policy: [
        'A policy framework for open-source governance of municipal AI-driven public services.',
        'A legislative proposal for data portability rights between major social media platforms.',
        'An antitrust analysis of app store monopolies and their impact on software innovation.',
      ],
    },
    cultural_analyst_micro: {
      paper: [
        'A research paper deconstructing the rhetoric of Supreme Court dissents and their influence.',
        'A comparative literature study on post-colonial translation theory in modern poetry.',
        'An analysis of linguistic evolution and slang propagation within Gen Z subcultures.',
      ],
      prototype: [
        'A digital humanities tool that maps intertextual references across 500 years of manuscripts.',
        'A natural language processing tool detecting implicit bias in major news headlines.',
        'A curated digital archive preserving the oral histories of a specific local community.',
      ],
      media: [
        'A literary podcast dissecting how contemporary fiction encodes political resistance.',
        'A video essay series analyzing the semiotics of color in modern advertising campaigns.',
        'An Instagram-based micro-history project chronicling the evolution of protest art.',
      ],
      policy: [
        'A legal analysis of how language in housing policy perpetuates systemic exclusion.',
        'A policy review of copyright laws regarding AI-generated art and intellectual property.',
        'A proposal for reforming history curriculum standards to include underrepresented narratives.',
      ],
    },
    justice_engineer_macro: {
      paper: [
        'A research paper on how algorithmic bail-setting systems reproduce racial disparities.',
        'A quantitative analysis of the "School-to-Prison Pipeline" using district disciplinary data.',
        'A study on the economic impact of Universal Basic Income pilots on local small businesses.',
      ],
      prototype: [
        'A civic tech prototype that helps residents track and challenge local zoning decisions.',
        'A legal-aid chatbot designed to help tenants understand their rights during eviction notices.',
        'A crowdsourced map identifying accessibility barriers for disabled citizens in public transit.',
      ],
      media: [
        'A documentary investigating how grassroots movements leverage social media to shift policy.',
        'A podcast series exploring restorative justice models in international conflict zones.',
        'A multimedia campaign visualizing the wealth gap through the lens of generational housing.',
      ],
      policy: [
        'A comprehensive policy redesign for school discipline frameworks centering restorative justice.',
        'A legislative proposal for regulating the use of facial recognition technology in public spaces.',
        'A framework for community-led participatory budgeting in municipal government.',
      ],
    },
    narrative_scientist_micro: {
      paper: [
        'A research paper analyzing how documentary cinematography techniques shape viewer empathy.',
        'A study on the psychological impact of non-linear narrative structures in video games.',
        "An analysis of the \"Hero's Journey\" archetype in modern political campaign messaging.",
      ],
      prototype: [
        'An interactive VR experience placing users inside historical moments via archival audio.',
        "A branching-narrative film that changes outcomes based on the viewer's eye-tracking data.",
        'An augmented reality museum guide that reveals the hidden history of exhibited artifacts.',
      ],
      media: [
        'A short film series exploring the hidden mathematics behind viral visual storytelling.',
        'A video essay deconstructing the editing techniques used in propaganda films.',
        'A podcast on "Soundscapes" and how audio design influences emotional retention in media.',
      ],
      policy: [
        'A media literacy curriculum proposal for high schools based on cognitive bias research.',
        'A regulatory framework for labeling "Deepfake" content in political advertisements.',
        'A funding proposal for public arts initiatives that prioritize interactive community storytelling.',
      ],
    },
    impact_producer_macro: {
      paper: [
        'A research paper on how strategic media campaigns measurably shift public opinion on climate.',
        'A study on the efficacy of fear-based vs. hope-based messaging in public health PSAs.',
        'An analysis of cross-cultural meme transmission and its role in global political discourse.',
      ],
      prototype: [
        'A community storytelling platform prototype that amplifies marginalized voices via AI translation.',
        'A browser extension that contextualizes news articles with funding source transparency.',
        'A gamified mobile app that incentivizes and tracks local civic engagement actions.',
      ],
      media: [
        'A cross-platform campaign documenting youth-led climate activism across five continents.',
        'A docu-series highlighting social entrepreneurs solving the water crisis in the Global South.',
        'A multimedia brand strategy for a non-profit fighting food insecurity.',
      ],
      policy: [
        'A policy brief on regulating algorithmic content curation to protect democratic discourse.',
        'A proposal for tax incentives for media productions that meet specific diversity inclusion standards.',
        'A framework for protecting freedom of the press in the age of decentralized media platforms.',
      ],
    },
  } as Record<string, Record<OutcomeChoice, string[]>>,

  // ── Modifiers (Q4 crew × Q5 fuel) ─────────────────────────
  //
  // These phrases are appended to the archetype description and
  // used to construct the "gap hook" on the result card.

  modifiers: {
    descriptions: {
      independent_curiosity:
        'You thrive in deep, solo exploration — driven by the thrill of uncovering what no one else has found.',
      independent_impact:
        'You work best with laser focus — one researcher, one mission, one outcome that changes the game.',
      collaborative_curiosity:
        'You believe the best discoveries happen at the intersection of minds — your curiosity multiplies in conversation.',
      collaborative_impact:
        'You build coalitions. Your research is not just rigorous — it is designed to move people and reshape systems.',
    } as Record<`${CrewChoice}_${FuelChoice}`, string>,

    gapHooks: {
      independent_curiosity:
        'To go deeper, you need a mentor who has navigated the frontiers of',
      independent_impact:
        'To turn your vision into reality, you need a mentor with hands-on experience in',
      collaborative_curiosity:
        'To build the right team, you need a mentor embedded in the research networks of',
      collaborative_impact:
        'To scale your impact, you need a mentor who knows how to mobilize resources in',
    } as Record<`${CrewChoice}_${FuelChoice}`, string>,
  },

  // ── Mentor Network ─────────────────────────────────────────

  mentorNetwork: {
    /** Universities displayed as badges on the result card */
    universities: ['Harvard', 'Columbia', 'Yale', 'MIT', 'Stanford'],
  },
};
