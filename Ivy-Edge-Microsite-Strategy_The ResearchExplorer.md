# **Ivy Edge "Research Explorer" Microsite Strategy**

## **1\. Executive Summary**

**Objective:** Transform the standard "Contact Us" funnel into a high-velocity, gamified "Choose Your Own Adventure" experience.

**Goal:** Qualify leads by generating a personalized "Research Archetype" and "Project Starter" that compels them to book a Calendly meeting to "activate" their research journey.

**Vibe:** High-production value, "Sci-Fi / Future-Tech" aesthetic, fast-paced (under 60 seconds to complete), impossible to fail.

## **2\. The User Journey: "The Discovery Path"**

We move away from standard form fields. We use **associative imagery** and **scenario-based choices** to build a hidden profile.

### **Phase 1: The Hook (Landing)**

* **Visual:** A pulsing, animated 3D node network or a cinematic particle effect.  
* **Copy:** "You have a question the world hasn't answered yet. Let's find it."  
* **Action:** Button: \[Initiate Sequence\] (No "Submit" buttons allowed).

### **Phase 2: The Data Stream (The Game)**

* **Format:** 5 Rapid-fire interactions. No text inputs, only clicks/taps.  
* **Logic:** Each choice tags the user with attributes (e.g., STEM, Humanities, Creative, Social Impact, Theoretical, Applied).

### **Phase 3: The Synthesis (Loading)**

* **Visual:** "Analyzing Neural Pathways..." / "Matching with PhD Mentor Database..." / "Generating Research Vectors..."  
* **Purpose:** Builds anticipation and perceived value of the AI output.

### **Phase 4: The Reveal (The Lead Magnet)**

* **Outcome:** The user receives a **"Researcher Archetype"** card (e.g., *The Bio-Ethical Architect* or *The Quantum Storyteller*).  
* **The Hook:** A 3-sentence "Generated Project Concept" that sounds incredibly cool but requires guidance to execute.  
* **The CTA:** "This project requires Expert Clearance. Schedule your Mentor Match to validate this research path." \-\> Opens Calendly.

## **3\. Script & Storyboard (Developer Implementation Guide)**

**Tech Stack:** React, Tailwind CSS, Framer Motion (for high-end feel), Vercel AI SDK (optional, or simulated via logic).

### **Scene 1: Introduction**

* **UI:** Dark mode, neon accents. Central text fades in.  
* **Text:** "Colleges don't just want grades. They want *creators*."  
* **Subtext:** "The Ivy Edge Research Program pairs you with PhD mentors to build something real."  
* **Interaction:** User clicks \[Start Discovery\].  
* **Dev Note:** Preload assets here.

### **Scene 2: Question 1 \- The Tool**

* **Prompt:** "Choose your instrument of change."  
* **Options (Visual Cards):**  
  1. **Microscope/DNA Helix:** (Tags: STEM, Bio)  
  2. **Code Terminal/Matrix:** (Tags: CS, Engineering)  
  3. **Gavel/Vintage Pen:** (Tags: Humanities, Law, Policy)  
  4. **Video Camera/VR Headset:** (Tags: Creative, Media)

### **Scene 3: Question 2 \- The Scale**

* **Prompt:** "How do you solve problems?"  
* **Options:**  
  1. **Micro (The Cell/The Atom):** "I look at the building blocks." (Focus: Detail, Theory)  
  2. **Macro (The City/The Globe):** "I look at the big picture." (Focus: Systems, Social Impact)

### **Scene 4: Question 3 \- The Outcome**

* **Prompt:** "What does 'Finished' look like to you?"  
* **Options:**  
  1. **A Published Paper:** (Academic focus)  
  2. **A Working Prototype/Robot:** (Engineering focus)  
  3. **A Launch Event/Podcast:** (Media/Social focus)  
  4. **A Policy Change:** (Social Science focus)

### **Scene 5: The "AI" Generation (Transition)**

* **Visual:** Show data points from the PDF (Mentor Universities, Disciplines) flashing by as if they are being scanned to find a match.  
* **Text:**  
  * "Scanning Ivy Edge Mentor Network..."  
  * "Accessing Harvard/Columbia/MIT nodes..."  
  * "Synthesizing Project Milestone 3..."

### **Scene 6: The Result (The Payoff)**

* **Dynamic Header:** "You are a \[ARCHETYPE NAME\]" (e.g., *Systemic Justice Engineer*)  
* **Dynamic Body:** "Your intersection of \[Choice 1\] and \[Choice 2\] suggests a high aptitude for \[Derived Field\]. A potential project: '\[AI-Generated Title based on inputs\]'."  
* **The "Gap":** "To build this, you need a mentor from our network."  
* **CTA:** \[Book Strategy Session\] (Calendly Embed).

## **4\. Developer Workflow: "The Superpower Approach"**

**Tools:**

* **IDE:** VS Code.  
* **Extension:** Claude Code (accessing Opus 4.5).  
* **Process:**  
  1. **Prompt 1 (Scaffold):** "Create a React microsite structure using 'The Discovery Path' logic. Use Framer Motion for page transitions. Create a state machine for the quiz flow."  
  2. **Prompt 2 (Styling):** "Apply a 'Futuristic Academic' theme using Tailwind. Dark backgrounds, serif fonts for headings (Ivy League feel), monospace for data (Research feel)."  
  3. **Prompt 3 (Logic):** "Ingest the program\_data.json (below). Write a function that maps the user's quiz answers to specific 'Mentor profiles' and 'Project Examples' found in the data."

## **5\. RAG / Context Source: program\_data.json**

*Copy and paste this JSON into your project as src/data/ivy\_edge\_data.json. This condenses all your PDFs into a structured format for the app to consume.*

{  
  "programInfo": {  
    "name": "The Ivy Edge Research Program",  
    "mission": "Empower next-gen thinkers through personalized, project-based learning and expert mentorship.",  
    "coreValueProp": \[  
      "Student-directed research",  
      "Tangible outcomes (Papers, Apps, Podcasts)",  
      "Near-peer mentorship (PhD students)"  
    \],  
    "structure": {  
      "duration": "3-6 months",  
      "sessions": 10,  
      "frequency": "One-on-one, 1 hour sessions",  
      "workload": "3-5 hours per week"  
    }  
  },  
  "milestones": \[  
    { "session": 3, "deliverable": "Research Question Finalized" },  
    { "session": 4, "deliverable": "One-page Project Outline" },  
    { "session": 6, "deliverable": "Draft of 50% of Project" },  
    { "session": 9, "deliverable": "First Full Draft" },  
    { "session": 10, "deliverable": "Final Submission" }  
  \],  
  "products": \[  
    {  
      "name": "Core Program",  
      "price": 4000,  
      "currency": "USD",  
      "features": \["10 Sessions", "2 rounds writing feedback", "Symposium access", "Rec Letter option"\]  
    },  
    {  
      "name": "Launchpad",  
      "price": 700,  
      "details": "For undecided students. 3 sessions to brainstorm topics.",  
      "bundlePrice": 700  
    },  
    {  
      "name": "Showcasing Support",  
      "price": 1100,  
      "bundlePrice": 1000,  
      "details": "Guidance for journals, competitions, or media.",  
      "tracks": \["Publishing", "Competing", "Multimedia", "Presenting"\]  
    }  
  \],  
  "mentorNetwork": {  
    "universities": \["Harvard", "Columbia", "Yale", "MIT", "Stanford"\],  
    "profileTypes": \[  
      {  
        "id": "stem\_bio",  
        "label": "The Bio-Innovator",  
        "description": "You see biology as a machine to be tuned. You need a mentor doing wet-lab or computational bio research.",  
        "sampleProject": "Predicting protein folding using neural networks."  
      },  
      {  
        "id": "cs\_eng",  
        "label": "The Systems Architect",  
        "description": "You build solutions. You need a mentor with deep engineering or CS experience.",  
        "sampleProject": "Developing an autonomous drone algorithm for search and rescue."  
      },  
      {  
        "id": "humanities",  
        "label": "The Cultural Analyst",  
        "description": "You decode human behavior. You need a mentor in Sociology, History, or Literature.",  
        "sampleProject": "Analyzing the impact of social media algorithms on teen political polarization."  
      }  
    \]  
  }  
}  
