---
title: UTF-8 vs UTF-16
description: 'A lesson in copy-paste'
published: true
date: 2021-07-07T00:00:00.000Z
slug: utf-8-vs-utf-16
tags:
  - github-action
  - github
---

# UTF-8 vs UTF-16

I don't remember the last time a bug like this has ruined my day, but this issue was a great reminder about "hidden characters", text encoding and the disadvantages of copy-pasting.

## The background

As part of learning how to build a github-page with all the bells and whistles, I wanted to add lighthouse testing to the mix. Specifically adding this [github action](https://github.com/treosh/lighthouse-ci-action):

```
treosh/lighthouse-ci-action@v7
```

This github-action should of been as easy as adding it to the existing workflow file I have, and optionally adding 2 extra files, a budget file, and an rc file.
All examples revolved around these 2 files and its configuration within the workflow file. At a glance I ~~wrongly~~ assumed this would take under 10 minutes of work to get some basic lighthouse testing up and running.

The process ended up taking multiple hours, included a walk to help clear my brain, multiple profanities, a whole lot of second guessing and a resolution that ultimately didn't feel like a "win" but was one nonetheless.

## The problem

The problem started with me trying to be clever and use the [yaml configuration for lighthouse](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md), rather than the traditional json format. Because of this, I used a starting JSON file example, and then an online converter to convert the JSON to YAML as **I was lazy at the time**.

The end result was the following text (this was copied directly from the [source](https://github.com/bradtaniguchi/bradtaniguchi.github.io/blob/2ab3efef433969f2caaf9b09f91b8cc7294164b8/lighthouserc.yaml)):

```yaml
ci:
  url:
    - http://localhost/
  collect:
    staticDistDir: './public/static'
```

**note** this first version is actually incorrect compared to the final format, which correctly used the `staticDistDir` of `public/client-static`, but this would of given me a different more friendly error than what occurred.

From this YAML file, I deployed my to my CI/CD and where I was introduced to this friendly error message:

```
Run treosh/lighthouse-ci-action@v2
Action config
  Error: end of the stream or a document separator is expected at line 1, column 4:
      ��c
         ^
```

**note** this was copied directly from the [source](https://github.com/bradtaniguchi/bradtaniguchi.github.io/runs/3003815331?check_suite_focus=true)

By this point I introduced only 2 new files, and made changes to my CI/CD workflow file. The issue had to be isolated to one of the 2 files, **or** the 2 files are working correctly and what is being loaded/tested by lighthouse is failing.

**this is where I started to debug.... a lot, and where the trials began....**

## The trials

I started debugging with the 2 files I added, the rc file and the budget file. Both looked like valid contents, except with every deployment I kept getting **the same error**. It took roughly 5-6 builds to get a different error, which was when I 100% removed all changes except the changes to the github-action workflow itself. At this point I took a walk to help clear my head from all the red `x`s.

Knowing that the issue was isolated to the single file, I started getting a nagging feeling the lighthouserc.json file had an issue with it, maybe one I couldn't actually see. It was at this point I directly ran the lighthouse action in nodejs and got the same issue, except without having to wait for the CI/CD pipeline. It was then I realized.... VSCode pointed out the file format was in `UTF-16` rather than the usual `UTF-8`. I switched the file format, and lo and behold, the CI/CD failed a different way. I walked away and accepted that I essentially "fixed" the problem.

## The solution

The issue was there was 2 invisible character introduced at the start of the time by the yaml-to-json converter. This apparently created the error message I saw in the lighthouse-ci action during serialization of the JSON file. I don't remember exactly what was the character(s), but will remember to check that small box in the corner showing the text encoding, as this sort of problem wasted too much of my time already, and I don't plan on letting it waste more in the future.
