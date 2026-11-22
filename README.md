# Feynman – The Learning Companion

A portable Agent Skill built around the central Feynman test: can the learner explain an idea accurately in ordinary language, without hiding behind unexplained jargon?

## Two ways to begin, one Feynman learning cycle

**1. Learn a concept**

Ask a question such as "What is quantum physics?" The tutor uses reliable subject knowledge to explain the idea simply and accurately, then invites the learner to teach it back.

**2. Learn from material**

Provide a book, PDF, text, notes, webpage, video, transcript, or image. The tutor uses the accessible supplied material as its primary source, explains its ideas in beginner-friendly language, and guides the learner through the same teach-back and gap-repair process.

These are two entry modes, not two different teaching methods. Both use the same cycle:

**Simple explanation → learner teach-back → diagnose gaps → repair → reconstruct → transfer check.**

The tutor must be honest about what it can actually access. File parsing, webpage retrieval, video transcription, and image understanding depend on the tools available in the host agent.

## What it does

- Starts with a direct, beginner-friendly explanation rather than a quiz-first approach.
- Works either from a learner's question or from supplied learning material.
- Preserves the meaning of a supplied source and distinguishes it from outside clarification.
- Builds understanding in small, connected steps, defining unfamiliar terms before using them.
- Makes the learner's plain-language explanation the central test of understanding.
- Treats unexplained jargon, circular definitions, vague phrases, and skipped steps as clues to specific knowledge gaps.
- Invites teach-back in the learner's own words after providing a fair foundation.
- Diagnoses gaps in accuracy, clarity, completeness, connections, and boundaries.
- Returns to the relevant source passage when available and repairs one important gap at a time.
- Checks whether understanding transfers to a new example.
- Adapts pacing when a learner has already demonstrated the basics.
- Can create consent-based session notes when reliable storage is available, or provide a copyable learning record.

## Design principle

> Whether the learner starts with a question or supplies a source, the tutor makes the idea understandable first. The learner then reconstructs it in their own words. If the explanation breaks down, find the gap, return to the relevant knowledge, rebuild the missing understanding, and let the learner explain it again.

## Installation

Copy this entire repository folder into the skills directory used by your Agent Skills-compatible agent. Load `SKILL.md` as the entry point and retain the `references/` and `examples/` directories.

## Example prompts

- "Help me understand existentialism using the Feynman Technique."
- "Test my understanding of opportunity cost. Don't explain it first."
- "I read this chapter. Help me find the gaps in my understanding."
- "Teach me the basics of quantum mechanics, one idea at a time."
- "I uploaded a biology PDF. Teach me the first chapter simply, one concept at a time."
- "Explain this webpage in simple language, then check whether I understood it."
- "Use this image from my textbook to teach me the process it shows."
- "I have a video lecture transcript. Help me learn it using the Feynman Technique."

## Structure

```text
Feynman-Learning-Companion/
├── SKILL.md
├── README.md
├── ROADMAP.md
├── references/
│   ├── feynman-method.md
│   ├── questioning-techniques.md
│   └── assessment-framework.md
└── examples/
    └── learning-session.md
```

## Compatibility and limitations

This package follows the Agent Skills-style `SKILL.md` structure. Exact discovery and installation behavior depends on the agent or platform. It has not been validated against every implementation.

The skill defines how the tutor should teach from supplied material; it does not itself provide universal file extraction, webpage browsing, video transcription, OCR, or image understanding. Those capabilities depend on tools available in the host agent. If a source cannot be accessed or interpreted, the tutor must say so and ask for an accessible version. It must not pretend to have read or viewed material.

The core skill also does not provide a persistent learner database. Continuity depends on memory or storage actually available in the host agent.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the product direction and phased development plan.

## License

No license has been added yet. Until a license is selected, normal copyright applies.
