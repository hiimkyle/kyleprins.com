---
title: The WAF Report
number: 3
date: 2026-11-17
description: Three automations in my house stopped working and none of them said a word. Quiet isn't the same as healthy.
hero: /notes/ln-03/hero.png
heroAlt: "Title card: the rule said off under 40 W, the amp idles at about 66 W, now it turns off after 30 minutes with no AirPlay"
topic: Home Assistant
---

No alerts means everything's working, right? Nope.

In the [first Lab Note](/notes/ln-01-mac-minis-heating-the-room/) I said the rule for this lab is the WAF, the Wife Approval Factor: don't break the lights, the locks or bedtime. What I hadn't figured out is that you can fail the WAF without breaking anything. An automation just has to stop working and not mention it.

## What I found

In late October I found three.

The record player. The tube amp sits on a smart plug, and an automation was supposed to switch it off after 30 minutes under 40 watts. Sensible. Except the amp draws about 66 watts whether it's playing or not, so it never got under 40. The rule last fired on September 27th. I found out a month later, when the amp had been on since the morning and nothing had played since early evening.

The motion light. A motion sensor started flapping on and off about every 30 seconds, 9,100 times in two days. As far as the house knew, that room was never empty, so the light stayed on until the midnight automation turned it off.

The door notification. This one never worked at all. It called a script with a space in its name, so the script could never exist. Home Assistant logged a warning and carried on.

None of them threw an error. Each one rested on an assumption that was wrong from the start or quietly stopped being true.

## The snag

The record player fix was easy: turn the plug off once the AirPlay stream hasn't played for 30 minutes, with a check every 15 minutes in case Home Assistant restarts. Tested. Plug off, 0 watts.

There's a turntable on that amp too, and vinyl doesn't go through AirPlay, so Home Assistant will never know a record is spinning. Lucky for me, the turntable needs tuning before it plays anything. Right now the amp is just for streaming, and the fix covers everything we actually use. When the records come out, that rule will cut the amp about 30 minutes into an album. That's a problem for future me.

And look at which failure nobody caught. A light on until midnight and an amp left running are failures you can see. A notification you never got is not.

## Try it in your lab

- Sort your automations by last triggered and read the bottom of the list. Anything older than you expect is a question.
- Check a device's real power draw before you build a threshold on it.
- Search your logs for the same warning repeating. That's a failure nobody is reading.
- Ask the people you live with what the house does that annoys them. Write it down. Don't argue.

## The day-job version

A detection rule that stops matching doesn't throw an error. In Splunk it just returns zero results, which looks exactly like a quiet day in the SOC. Watch the rules themselves, whether they fired when they should have, not only the systems they protect.

> Quiet isn't healthy. Quiet is just quiet.

What's the longest one of your automations has been dead before someone noticed? And who noticed? Tell me in the comments.

-Kyle
