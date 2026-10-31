# kyleprins.com

Lab Notes by Kyle Prins: short posts from a home lab, with the day-job parallel. Built with [Astro](https://astro.build) and deployed to GitHub Pages on every push to `main`.

## Adding a Lab Note

Only approved posts go in this repo. Drafts live in the private home-assistant repo, because anything committed here is public.

1. Add `src/content/notes/ln-xx-slug.md` (front matter and body rules are in [src/content/notes/_README.md](src/content/notes/_README.md)).
2. Put its images in `public/notes/ln-xx/`.
3. Run `npm run build` to check it, then commit and push. The site updates in about a minute.

## Local preview

```bash
npm ci
npm run dev
```

## Design

Colours, type and the mark come from the Lab Notes brand kit (`content/brand/` in the home-assistant repo). The site follows the reader's light or dark setting, and the header switch overrides it.
