export const SITE = {
  name: 'kyleprins.com',
  title: 'Lab Notes by Kyle Prins',
  description:
    'Short notes from a Splunker’s home lab: what I built, what broke, what you can try in your own lab, and why the same lesson shows up at work.',
  author: 'Kyle Prins',
  linkedin: 'https://www.linkedin.com/in/kyleprins/',
};

// About 238 words a minute (Brysbaert 2019), rounded up.
export const readMinutes = (text: string) =>
  Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 238));

export const shortDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
