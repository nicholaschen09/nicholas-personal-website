---
title: "Scene AI When"
date: "2026-01-01"
author: "Amaan Bilwar"
published: false
excerpt: "How Scene AI started as a CLI side project and became a real video editing tool."
---

## Introduction

I know you all have heard it by now, but if you haven't here I am to introduce you to Scene AI. Scene AI started as this side project of mine to merge my love for video editing and computer software.

## Where it all began

It was really bizzare how it became a thing, if you know how I started.

I was watching a video while eating, like any other human, and thought, "I know how to edit videos like this. Neat trick. I should get back into it." Then I did what any other human does: moved on.

But the thought stuck. Finals ended. April 2025. I'm sitting in my room thinking, "Hmmm, now what?" I'm someone who likes being busy; having nothing to do is rare for me (ask my friends). That itch to make something turned into, "Okay, let's actually do this."

Video editing is fun. Programming's grown on me thanks to two internships and building the DAQ(Data Acquisition System) for my school's formula electric racecar team - Bearcats Electric Racing(BER). So why not combine the two? Big undertaking, sure. But at the start I was thinking small: a CLI tool just for me. No grand plan.. Also, I was already making social posts for BER, so the use case was real.

The idea was simple: take a video, pass flags like --trim, and get clean results. Easy, right? That's what they all say.

I started researching. If you're editing programmatically, there's the undisputed GOAT: Ffmpeg. But I didn't want to learn this ffmpeg syntax of DOOM and DESPAIR. I wanted something you could use without squinting at docs.

Python was the obvious starting point, familiar, fast to iterate, lots of libraries. CLI tools aren't difficult* in any language if you know what you're building.

Three days in, maybe 30–45 minutes a day, I had a working prototype. No Adobe Premiere Pro crashes, no sluggish timelines, just code doing what I asked. I felt like Frankenstein watching his monster take a step.

Of course, I immediately wanted more features. That's just how this goes. And soon "my little CLI" wasn't little anymore: I built a backend, roped in a childhood friend as co-founder, put a frontend on top, and founded The Timeline Company. Scene AI was born (formerly Reduct), and the side-quest became a real thing

## Where it is now

I'm rebuilding the rough prototype into a codebase that is fast, stable, and easier to maintain. Parts that need raw performance live in Rust. The rest stay in Python for flexibility. The refactor is a steep curve, but worth it.

We're narrowing focus. Instead of chasing pros, we're helping beginners, clubs, friends, and anyone who wants to post without wrestling timelines. Simple templates, smart assistants, and clean exports that get you to publish.

Scene AI is in alpha with a growing waitlist. It's stable enough to use, and we're shipping improvements steadily. Expect more in 2026.

## Final Thoughts

let's write wrap it up, shall we?

Scene AI started as me scratching an itch: I like editing, I like building, so why not build the thing I wanted when I was editing? It's not a moonshot manifesto, it's a friendly, fast tool that helps you hit publish without spending your entire evening wrangling timelines.

I care about three things: speed, simplicity, and kindness.

- Speed, because waiting on a render bar is soul-sucking.
- Simplicity, because most people don't want to learn a new cockpit to post a 30-second clip.
- Kindness, because guardrails, privacy, and a nudge of confidence matter when you're putting yourself out there.

If any of this resonates - if you've got a club recap, a hackathon demo, a meme that deserves life outside your camera roll, come along. Join the waitlist, DM me ideas, send me weird edge cases.

I won't overpromise; I'll ship, listen, and iterate.

## Notes

Difficult is subjective. I can't write assembly, Ruby, Zig or Haskell so don't take my word for it
