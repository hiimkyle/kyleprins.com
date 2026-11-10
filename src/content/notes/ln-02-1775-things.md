---
title: My House Was Tracking 1,775 Things That No Longer Existed
number: 2
date: 2026-11-10
description: Before I could dive into the lab, I had to get the smart home healthy. First stop, what it was already tracking. Spoiler, a lot of nothing.
hero: /notes/ln-02/hero.png
heroAlt: "Title card: 1,775 dead entities before, 2 after one cleanup"
topic: Home Assistant
linkedin: https://www.linkedin.com/feed/update/urn:li:activity:7525943081481965568/
---

Before I could dive into my lab, I needed to get it healthy, and that meant fixing the smart home first. Remember, the most important KPI in this house is the [WAF](/notes/ln-01-mac-minis-heating-the-room/).

Step one was the boring one, but the most necessary. Given how fast exploits get released these days, I wanted everything updated as quickly as possible. Home Assistant was three releases behind. I took a full backup before every risky step, updated it, and then went looking at what was actually in there. Spoiler: a lot of nothing.

## The count

1,775 dead entities. Stale and orphaned, all of them. Integrations for an old phone, a universal remote hub and an IR blaster. Seven camera bridges that were either dead or had never been paired in the first place. My house had been faithfully keeping a list of things that didn't exist anymore.

I removed about 1,450 entities and a pile of dead integrations. When the dust settled, the dead count was 2.

That order mattered more than I knew. Three days later, Home Assistant started sending every state change to the Splunk instance in my home lab. So the index started with the house that actually exists, not 1,775 ghosts.

![Excerpt of the maintenance log for 2026-10-26: Core 2026.7.4 to 2026.10.4, 57 broken device-ID references, about 1,450 stale entities removed](/notes/ln-02/log.png)

## The upgrade's little gift

The new release changed how devices are registered, and that broke 57 references across 31 automations and scripts. Every one of them pointed at a device by its internal device ID. I patched them that day, then moved them to entity IDs the next day so the next registry change won't do it again.

## Try it in your lab

- Open your entity list and filter to unavailable. Count them. Don't be embarrassed. Okay, be a little embarrassed.
- Take a full backup before each risky step, not one at the start of the evening.
- Delete integrations for hardware you don't own anymore. Each one is something that can break on upgrade day.

## The day-job version

This is CMDB drift with a doorbell. In Splunk Enterprise Security, an inventory like this becomes the asset lookup that enriches every notable event, so stale entries put ghosts into the context an analyst trusts. You can't secure, monitor or automate what you can't see.

> Inventory first. Indexing second. Bragging third.

How many dead entities is your setup carrying? I bet it's more than you think. Tell me in the comments.

-Kyle
