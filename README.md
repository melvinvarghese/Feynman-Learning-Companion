# Feynman – The Learning Companion

**Understand difficult ideas. Explain them simply. Discover what you still need to learn.**

Feynman – The Learning Companion is an open-source AI agent skill that helps people learn through the **Feynman Technique**. It guides an AI assistant to explain a concept in clear, beginner-friendly language, invite the learner to teach it back in their own words, identify gaps in understanding, and help rebuild the explanation until the idea makes sense.

You can start with a question or bring your own study material. Both routes use the same learning method.

[Explore the project website](https://melvinvarghese.github.io/Feynman-Learning-Companion/) · [Read the skill instructions](SKILL.md) · [Download the repository](https://github.com/melvinvarghese/Feynman-Learning-Companion/archive/refs/heads/main.zip)

## Two ways to learn

### 1. Learn a concept

Ask the AI assistant a question:

> What is quantum physics? Explain it as if I'm a complete beginner.

The assistant starts with a direct explanation in ordinary language. It explains unfamiliar terms instead of hiding behind jargon, gives a useful example, and then invites you to explain the idea in your own words.

### 2. Learn from your material

Bring a source you are studying, such as:

- A book or textbook
- A PDF or document
- Notes or copied text
- A webpage or online article
- A video or its transcript
- A photograph, diagram, or textbook image

The assistant uses the accessible material as its primary source, explains its ideas in simpler language, and guides you through the same Feynman learning cycle. When a gap appears, it can return to the relevant passage or section if that source is accessible.

**These are two entry points to one learning method—not two separate tutoring systems.**

## The Feynman learning cycle

1. **Understand the explanation:** Start with a clear, simple foundation.
2. **Teach it back:** Explain the idea in your own words, as if teaching someone new to the subject.
3. **Find the gaps:** Notice jargon you cannot unpack, vague phrases, missing steps, or misconceptions.
4. **Repair the understanding:** Revisit the relevant idea or source and work through the missing piece.
5. **Explain it again:** Reconstruct the explanation independently.
6. **Test transfer:** Apply the idea to a new example and recognise its limits.

The central test is simple: **Can you explain the idea accurately in ordinary language without relying on words whose meaning you cannot explain?**

## What makes this different?

- **Beginner-first teaching:** The assistant explains before asking a beginner to teach the concept back.
- **Understanding over memorisation:** Repeating a definition is not treated as proof of comprehension.
- **Jargon as a clue:** Technical terms are allowed, but the learner should be able to explain what they mean.
- **Targeted feedback:** The assistant identifies the specific phrase, assumption, or reasoning step that needs work.
- **One gap at a time:** It repairs the most important misunderstanding instead of overwhelming the learner.
- **Adaptive pace:** Learners who already understand the basics can move to deeper mechanisms, nuance, and new applications.
- **Source-aware learning:** When using supplied material, the assistant distinguishes the author's claims from additional explanation.

## Who is it for?

Feynman – The Learning Companion can support:

- Students learning school, college, or university subjects
- Independent learners exploring unfamiliar topics
- People studying from textbooks, articles, lecture notes, or transcripts
- Exam preparation and concept revision
- Anyone who wants to check whether they genuinely understand an idea

## Try these prompts

- "Teach me photosynthesis as if I'm a complete beginner. Then check my understanding."
- "Help me understand opportunity cost using the Feynman Technique."
- "I uploaded a textbook PDF. Teach me the first chapter one concept at a time."
- "Explain this article in simple language, then ask me to teach it back."
- "Use this diagram to help me understand the process it shows."
- "I already know the basics. Skip the introduction and test my understanding with a new example."

## Install the skill

This repository is an **Agent Skill**, not a standalone tutoring app. It provides instructions that an AI agent can follow. It does not independently provide a chat interface, file uploader, browser, video transcription, optical character recognition, or learner database.

To use it:

1. Download or clone this repository.
2. Copy the complete repository folder into the skills directory supported by your AI agent.
3. Keep `SKILL.md` together with the `references/` and `examples/` folders.
4. Ask your agent to use the Feynman Learning Companion skill.

The exact installation path and supported file types depend on the AI agent. The host agent must have the relevant tools to access PDFs, webpages, videos, or images. The skill instructs the agent to be transparent whenever material cannot be accessed.

## Project files

- [SKILL.md](SKILL.md) – Main instructions for the AI learning companion
- [Feynman method guide](references/feynman-method.md) – The learning cycle and its principles
- [Questioning techniques](references/questioning-techniques.md) – Focused prompts for teach-back and gap diagnosis
- [Assessment framework](references/assessment-framework.md) – Criteria for evaluating understanding
- [Learning session examples](examples/learning-session.md) – Sample concept-based and source-based sessions
- [Roadmap](ROADMAP.md) – Project direction and planned improvements

## Frequently asked questions

### What is the Feynman Technique?

The Feynman Technique is a way to learn by explaining an idea in simple language, finding the parts you cannot explain clearly, returning to those gaps, and trying again. It helps reveal the difference between recognising information and genuinely understanding it.

### Does Feynman explain a topic before testing me?

Yes. For a normal learning request, the assistant first gives a clear, beginner-friendly explanation. It invites a teach-back only after providing that foundation. If you explicitly ask to be tested first, it can begin with a diagnostic question.

### Can I use my own PDF, book, notes, or webpage?

Yes, provided the AI agent you use can access the material. The skill guides the agent to use it as the primary source, explain it simply, and return to relevant passages when possible. If the agent cannot access a file or link, it should tell you rather than pretend it has read it.

### Does it support videos and images?

The skill includes guidance for learning from videos, transcripts, photographs, and diagrams. Actual video transcription, image reading, and text extraction depend on the tools available in your AI agent.

### Is this a standalone app?

No. It is a portable instruction package for compatible AI agents. It does not include its own model, chat interface, file-processing backend, or hosting service.

### Is it free and open source?

The repository is public and can be downloaded. No software license has been added yet, so please do not assume that it has an open-source license granting reuse rights.

## Contribute or report an issue

Suggestions, corrections, and improvements are welcome. Open an issue in the [GitHub repository](https://github.com/melvinvarghese/Feynman-Learning-Companion/issues).

---

**Feynman – The Learning Companion**  
A practical AI learning skill built around clear explanations, independent teach-back, and genuine understanding.

[Project website](https://melvinvarghese.github.io/Feynman-Learning-Companion/) · [GitHub repository](https://github.com/melvinvarghese/Feynman-Learning-Companion)
