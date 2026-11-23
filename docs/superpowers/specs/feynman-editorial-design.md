# Feynman website: Thinking Desk

## Selected design
The owner selected variation 1, The Thinking Desk. Use that composition as the reference: paper texture, dark green serif headline, a loose study sheet on the right, small illustrated entry points, and a connected five-stage learning cycle. Do not substitute a long editorial manifesto or a grid of bordered process cards.

## Implementation
- Static HTML with a local styles.css; no external font or framework dependency.
- Hero: Understanding begins with your own words.
- A layered, ruled study sheet with a pencil and a meaningful metal-versus-wood teach-back example. Text stays selectable and accessible.
- Two illustrated entry points: Ask a question / Bring your material.
- Five illustrated steps: Explain, Teach back, Find gaps, Rebuild, Apply. Returning to a gap and explaining again remains explicit.
- Gravity example, installation links, host capability clarification, native FAQ disclosures, and project footer.
- Keep existing metadata, structured data, repository links, and author attribution.
- Mobile stacks the notebook, entry points, and examples. The learning cycle becomes a vertical list.

## Validation on 23 November 2026
- Desktop browser visual review.
- Mobile browser visual review at 390px; no horizontal document overflow.
- Internal fragment destinations checked in the rendered document.
- FAQ opened successfully in the mobile browser.
- Git diff whitespace check.

## Delivery
Changes are in index.html, styles.css, and the Pages workflow. The workflow watches styles.css so later style changes also deploy. Local preview is served on port 8765. No claim of remote deployment until the changes have been pushed and Pages has completed.
