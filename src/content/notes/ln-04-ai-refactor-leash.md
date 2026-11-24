---
title: "I Let an AI Refactor My House. Here's the Leash."
number: 4
date: 2026-11-24
description: An AI rewrote 44 of the automations that run my house with the same behavior. The leash is why, and the snag was me.
hero: /notes/ln-04/hero.png
heroAlt: "Title card: 117 device references converted, each write checked against a dry run"
topic: AI
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7530986333566189568/
---

Confession: I let an AI rewrite 44 of the automations that run my house. Before you ask, yes, the lights still work. That part was the leash, not luck.

The October Home Assistant update changed how devices get registered, and it broke 57 references across 31 automations and scripts. I patched them that day. The real fix was getting off device IDs. A device ID is 32 characters of hex that nobody can read and that breaks when hardware or the registry changes. An entity ID says what it is. A motion trigger that pointed at a random string now points at the stairs motion sensor.

Converting it all is big, boring, fiddly work. Perfect for my AI pair. Also perfect for my AI pair to get confidently wrong.

## The leash

So, the leash. The next morning I snapshotted the config into a private git repo, so the whole job would land as one diff I could read. Then a dry run: every planned change listed, nothing written. Then guarded edits, each write checked against the dry run, and every automation had to load afterwards. Then a don't-touch list. Four garage automations are waiting on a replacement controller, so they stayed as they were. One vacuum script waited until I'd decided to keep the vacuum. It got converted that afternoon. Underneath all of it, a standing rule: no secrets in the repo, ever, and every commit gets scanned before it's pushed.

The result: 117 device-based triggers, conditions and actions in 44 automations and 2 scripts, moved to entity IDs with the same behavior. The config came out about 140 lines shorter.

## The snag

The snag was me. Five of those 44 carefully refactored automations were dead weight. I deleted two as unused less than an hour later, one more that afternoon, and two more two days after that. My AI pair did exactly what I asked. I just hadn't asked whether they were worth keeping. A beautifully refactored... nothing.

That's the part AI doesn't replace. It types faster than me. Deciding what's in scope is still the architect's job.

## Try it in your lab

- Put your config in git before any tool, AI or not, edits it. Read the diff before you call it done.
- Ask for a dry run first: every planned change as a list, nothing written yet.
- Write a don't-touch list and hand it over with the job.
- Delete what's dead before you refactor it.

## The day-job version

Agents need the same change control as any other automation: a dry run, a scoped change list, verification against the plan, and an explicit don't-touch list. My lab's Splunk apps get the same leash: they're built from code in git, and when I split them, I backed up the app first and ran all 120 dashboard searches before trusting the result. Someone still has to be the architect who decides what's in scope.

> Let the AI hold the pen. Keep your hand on the leash.

Have you let an AI loose on your config yet? Tell me how you leashed it, or what got away.

-Kyle
