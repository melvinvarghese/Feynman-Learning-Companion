# Product Roadmap

## Product identity

**Feynman – The Learning Companion** is an AI learning companion built around the defining Feynman test: can the learner explain an idea accurately in ordinary language, without hiding behind unexplained jargon?

If they cannot, the tutor must find the exact word, phrase, assumption, or reasoning step they cannot unpack; help them rebuild that missing understanding; and ask them to explain the idea again themselves. The product exists to make that cycle work exceptionally well—not to maximise the number of features.

## What makes this project distinct

- **Beginner-first:** assume no prior knowledge and build prerequisites in small steps.
- **Plain-language test first:** the learner must be able to explain the idea simply and accurately; unexplained jargon is a signal to investigate a gap, not proof of expertise.
- **Teach-back centred:** the learner does the explaining; the tutor does not confuse a polished lecture with learning.
- **Fair questioning:** never ask learners to use information they have not yet been taught.
- **One gap at a time:** diagnose the most important misunderstanding and repair it without overwhelming the learner.
- **Portable:** the core experience remains a lightweight Agent Skill. Optional capabilities must not make the basic skill unusable.
- **Honest continuity:** use prior learning records only when they are genuinely available and with permission for persistent storage.

## Development principles

1. Improve learning quality before adding infrastructure.
2. Keep the core skill usable without APIs, databases, browser automation, or external services.
3. Treat document/video/web extraction as an optional integration, not a capability the skill can claim by itself.
4. Never claim to remember progress unless memory or saved notes are actually available.
5. Ask before writing persistent learner notes to external storage.
6. Make every new feature solve a specific learning problem.

## Roadmap

### Phase 1 — Teaching quality (current priority)

- The plain-language Feynman test is the centre of every learning cycle.
- Explicit detection of unexplained jargon, circular definitions, vague phrases, and skipped reasoning.
- Teach-back after a fair foundation.
- Specific misconception diagnosis and targeted repair.
- Adaptive pacing when a learner is confused, tired, or ready for more depth.
- Clear distinction between intuitive explanation and precise/technical formulation.
- Transfer checks that test understanding rather than memorisation.

**Completion evidence:** sample sessions demonstrate that a complete beginner can follow the first steps of a difficult topic, explain each building block, and receive useful correction without being overwhelmed.

### Phase 2 — Learning from source material

- Work through learner-provided articles, PDFs, notes, and transcripts.
- Break long material into a navigable sequence of concepts.
- Preserve source meaning and distinguish source claims from tutor explanations.
- Support section-by-section teach-back and comprehension checks.

**Boundary:** extraction from external links or files depends on tools available in the host agent. The core skill must state limitations instead of pretending to access content.

### Phase 3 — Learning continuity

- Produce a concise end-of-session learning record.
- Resume from confirmed prior notes when available.
- Track concepts understood, gaps remaining, and the next learning step.
- Offer periodic retrieval questions when the learner wants review.

**Boundary:** no hidden or assumed learner database. Persistent storage requires a supported platform capability and user consent.

### Phase 4 — Optional integrations

Only after the core learning experience is validated:
- file and document connectors;
- video transcript extraction;
- knowledge-base or note-taking integrations;
- optional visual explanations for concepts that are hard to understand in text.

Each integration should be optional, clearly documented, and replaceable.

## Explicit non-goals

- Competing on feature count with full learning platforms.
- Requiring a complex local installation for basic tutoring.
- Automatically building a personal profile from casual conversation.
- Claiming long-term retention without later retrieval evidence.
- Treating analogies, quizzes, or numerical scores as proof of mastery.

## How we evaluate progress

Evaluate sample lessons against:
- accessibility to a true beginner;
- factual and conceptual accuracy;
- whether questions are answerable from prior teaching;
- quality of misconception detection;
- whether the learner can revise an explanation;
- ability to transfer the idea to a new example;
- transparency about tool, memory, and source-access limitations.

Do not declare a release successful solely because more features were added.
