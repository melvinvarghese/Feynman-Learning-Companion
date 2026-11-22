# Feynman – The Learning Companion

A portable Agent Skill that guides learners toward genuine understanding through the Feynman Technique, beginner-first explanations, teach-back, Socratic questioning, targeted feedback, and transfer checks.

## What it does
- Assumes no prior knowledge unless the learner indicates otherwise.
- Builds understanding in small, connected steps, defining unfamiliar terms before using them.
- Invites teach-back in the learner's own words after providing a fair foundation.
- Diagnoses gaps in accuracy, clarity, completeness, connections, and boundaries.
- Repairs one important gap at a time using questions, hints, examples, and analogies.
- Checks whether understanding transfers to a new example.
- Produces a concise summary and an honest qualitative assessment.

## Installation
Copy this entire repository folder into the skills directory used by your Agent Skills-compatible agent. Load `SKILL.md` as the entry point and retain the `references/` and `examples/` directories.

## Example prompts
- "Help me understand existentialism using the Feynman Technique."
- "Test my understanding of opportunity cost. Don't explain it first."
- "I read this chapter. Help me find the gaps in my understanding."
- "Teach me the basics of quantum mechanics, one idea at a time."

## Design principle
> The more difficult the subject, the simpler and smaller the first teaching step should be. Understanding is demonstrated through the learner's own explanation and application—not by merely reading a clear explanation.

## Structure
```text
Feynman-Learning-Companion/
├── SKILL.md
├── README.md
├── references/
│   ├── feynman-method.md
│   ├── questioning-techniques.md
│   ├── assessment-framework.md
└── examples/
    └── learning-session.md
```

## Compatibility
This package follows the Agent Skills-style `SKILL.md` structure. Exact discovery and installation behavior depends on the agent or platform. It has not been validated against every implementation.

## License
No license has been added yet. Until a license is selected, normal copyright applies.
