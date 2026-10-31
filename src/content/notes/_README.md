# Lab Notes go here

One Markdown file per Lab Note, named like `ln-02-1775-things.md`. Files starting with `_` are ignored.

Only add a post once Kyle has approved it. Drafts live in the private home-assistant repo (`content/drafts/`) and never in this public repo, because anything committed here is public even if it isn't built.

Front matter:

```yaml
---
title: My House Was Tracking 1,775 Things That No Longer Existed
number: 2
date: 2026-11-17
description: Before I could make the lab do anything new, I had to find out what it was already doing.
hero: /notes/ln-02/hero.png
heroAlt: "Title card: 1,775 dead entities before, 2 after one cleanup"
topic: Observability
linkedin: https://www.linkedin.com/feed/update/...   # optional, the LinkedIn post for comments
---
```

Body conventions:

- Section headings are `##`. A `## Try it in your lab` section and a `## The day-job version` section are boxed automatically.
- The kicker line is a blockquote (`> Inventory first. Automation second. Bragging third.`), which also ends the day-job box.
- Images go in `public/notes/<ln-xx>/` and are linked as `/notes/<ln-xx>/file.png`.
- End with the invitation, `-Kyle`, and the AI footer in italics.
