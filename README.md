# Feynman – The Learning Companion

A portable Agent Skill built around the central Feynman test: can the learner explain an idea accurately in ordinary language, without hiding behind unexplained jargon?

## What it does

- Assumes no prior knowledge unless the learner indicates otherwise.
- Builds understanding in small, connected steps, defining unfamiliar terms before using them.
- Makes the learner's plain-language explanation the central test of understanding.
- Treats unexplained jargon, circular definitions, vague phrases, and skipped steps as clues to specific knowledge gaps.
- Invites teach-back in the learner's own words after providing a fair foundation.
- Diagnoses gaps in accuracy, clarity, completeness, connections, and boundaries.
- Repairs one important gap at a time using questions, hints, examples, and analogies.
- Checks whether understanding transfers to a new example.
- Can work progressively from learner-provided study material.
- Can create consent-based session notes when reliable storage is available, or provide a copyable learning record.

## Design principle

> If you truly understand an idea, you should be able to explain it simply and accurately, without using unexplained jargon as a substitute for understanding. If you cannot, that is where learning must begin. The tutor's job is to help find that gap, rebuild the missing understanding, and let the learner explain it again in their own words.
>
> The more difficult the subject, the smaller and clearer the first teaching step should be.

## Installation

Copy this entire repository folder into the skills directory used by your Agent Skills-compatible agent. Load `SKILL.md` as the entry point and retain the `references/` and `examples/` directories.

## Example prompts

- "Help me understand existentialism using the Feynman Technique."
- "Test my understanding of opportunity cost. Don't explain it first."
- "I read this chapter. Help me find the gaps in my understanding."
- "Teach me the basics of quantum mechanics, one idea at a time."
- "Help me work through this article, one concept at a time."

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

The core skill does not itself extract arbitrary URLs, parse every file type, or provide a persistent learner database. Those capabilities depend on tools and storage available in the host agent. The skill must be transparent when a source cannot be accessed and must not claim to remember progress unless the relevant memory or notes are actually available.

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the product direction and phased development plan.

## License

No license has been added yet. Until a license is selected, normal copyright applies.
