---
title: 'Introducing Jia — the Search Engine for Everything'
listTitle: 'introducing jia'
category: life
date: '2025-12-23'
author: 'Amaan'
published: false
excerpt: 'Semantic search across your files — videos, PDFs, images — so you can find things by what they contain.'
---

## What is Jia?

Imagine this, you upload something to Google Drive, and think to yourself "thank God for cloud storage, I can view this from anywhere I need". A few days later, you need that file (it could be an image, video, or a PDF) again but cannot remember the name of the file for the life of you. Now what? Sort by date? Probably. You're stressed and miss it even after a few scrolls up and down the page. Now what? Did you actually think you'd remember the name of the file with random characters at the end combined with your incredibly abysmal way of naming things, especially if they're important?.

Silly enough, you find that file a couple of days later and in shock you say "Of course I named it that ughh"

## How does Jia help?

We don't just store and host your files for you, we understand what your file is about, despite the format. If it's a video.

We also:

- who's in the video
- where is it taking place
- what objects are in the video
- the VIBES

You get the point.

Similarly, if it's a PDF, for example, we extract the content to process it. On top of this, you can attach your own tags to the file you're uploading. Like "homework", "college", "trip to hawaii" etc.

In this way, if you remember anything in or about the file, we can find it for you.

## Why Jia?

Google Drive is ass, don't even get me started on the search functionality.

### How do I achieve this?

Currently, the functionality is limited to videos, which might seem crazy because videos are the most difficult file type to index because they're dynamic and multimodal. I am very close with getting the video search tool working decently, which means images, files like pdfs and word docs should be way easier to preprocess.

Let's talk about how I do this with videos, because the rest would just be a subset of that.

With our preprocessing pipeline, I first chunk the videos, meaning they're split into smaller 30-second chunks. Then multiple threads are spawned for a multi-process pipeline that I call "INDEXING". It has:

- Transcription pipeline - extracts audio from the chunk, passes that to an LLM for transcription, and writes to JSON the transcript. It's important to keep in mind I do word-level transcription because video editing needs very precise control.
- Scene / environment detection - for each chunk made for the video, we take three screenshots: one at the start, one in the middle, and the very last frame of that chunk. We then pass these images to an LLM to get a general idea of what the video is about in terms of objects and environment. The JSON written by the LLM is very detailed, containing objects found, scene/environment, number of people, etc.
- REDACTED - YOU DIDN'T THINK I WAS GONNA TELL YOU EVERYTHING, RIGHT?

Currently in the process of fine-tuning a model for various video editing use cases.

## But I don't want you to have my data

No worries, I have no interest in your data either. I'm committed to building software that's private, efficient, and treats users with respect. I always prioritize people first and follow strict standards. There's absolutely no hidden agenda.

No data retention by default, not as a hidden option.

I'm designing this in a way where I cannot read or access any information about the user or their files unless I have a confirmation, which will be asked for when or if a user reports a bug that requires me to look at their data.
