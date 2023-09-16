---
title: review-of-a-year-of-react
description: A review, or retro of using React professionally.
published: true
date: 2023-09-23T00:00:00.000Z
slug: review-of-a-year-of-react
---

# Review of a year of React

Its been a little of a year since I've started using React professionally, and also been a number of months since my last update to this blog.

One of the key reasons for this is I wanted to update the dependencies of this project to get things aligned with the latest release of nx before expanding on it. Now that I've gotten out of the way, I can **finally** get around to adding more content!

So after using Angular for a number of years, then having to pickup React for work I went into React with an idea of the general ideas, but really wanted to get into more in-depth knowledge of how it works in practice. To get this I needed to use it, and that
would just require time applying myself to using the library in different aspects. This took some time, but I think I have a good
idea of how to move forward, and deal with most use-cases I've come across, or could come across.

So lets go to the list!

## React is simpler conceptually, but is more limited out of the box

This is a pretty obvious one that is usually pointed out, but I want to go into how and why this makes React easier to use, but also more annoying to work with in some cases.

Personally I've found there being essentially only 2 types of "tools" React provides to solve all your problems.

- component
- hooks

Yes there are a **ton** of hooks (will go over that more later), and other patterns such as Context, and different types of components, but just these two "tools" end up being the core fundamentals implied to solve **all** of the problems you could face **building user interfaces**.

This keeps your options simple, **but** forces you to know how to wield them correctly to solve all the problems you come across.
The few "gaps" in available patterns between Angular and React could be re-built or "re-implemented" using just these tools, but
it could require some extra legwork that you just don't get with React out of the box.

## React hooks are more important than components

Coming from Angular, where there's any number of ways to do something (services, components, directives, pipes, etc), React is much more limited in what it provides out of the box. However, the concept of **hooks**, stands out as one of the single most powerful features. To the point I'd consider saying **thinking of Hooks as the core of React, and components as just the "view" layer**.

Lately I've changed how I create my React UIs around hooks. The pattern I've been relying on is the "single-hook" pattern, which is best compared to the traditional [MVC pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) (except with focus on just the VC part).

I create a single hook that handles all the logic for a given component, and then the component itself is just a "dumb" component that renders the hook. This means there's roughly 3 parts:

- "controller" component - acts as a high-level "smart" component. This could be the page, or just a high level point.
- the "state hook" - which returns an object of values+function-callbacks that can be passed into the view components. Internally it could have multiple hooks to further segment the logic, but general acts as the "god-object" to manage most of the business logic.
  As long as this logic isn't extremely complex the pattern holds. Its easy to split-up code, but that could become a problem depending on what your doing.
- view-component(s) - these are dumb components that take in props from the "state hook" and is managed by the "controller" component.

With this pattern its easy to build simpler UI elements, or at least create what I consider to be **testable, and approachable** "smart" React components.

Thus far the pattern has worked well and scales decently. If I had to do a complex form, or something with a lot of dynamic logic, I'd consider it only a starting point though.

## React's ecosystem is a huge pain

With Angular there's only a few sensible choices in regards to libraries and patterns. With React there's a ton of choices. Which is both good and bad, its good when what you pick goes well with what you've already picked, but things quickly start spiralling out of control as you start integrating more and more technologies.

For example, I've been focusing on nextjs (which this site is built on) for my side-projects, but have been having trouble keeping up with all the changes and different ways to utilize the meta-framework. Furthermore, I wanted to use tailwindcss, but had issues with it integrating with nx and storybook.

I'm sure there is a way to get all of it worth together happily, but that gets even more difficult as nextjs changes forcing a review of all of the technologies. This is also one of the main driving forces why a lot of my side-projects get paused. (besides me just losing interest!)

## Overall its been great though

React, thus far has been a joy to work with once some of the quirks have been figured out. Hooks are powerful, and force you into thinking and writing code a specific way, but it does make things easier once things are build with the patterns in mind.

Being able to just completely isolate business logic into a singular function makes testing and documenting **a breeze**. It also makes re-using code between components much easier.

Components with TypeScript is very descriptive and easy to use, as long as they don't get too bloated.

Jest and integration with other tools is better, as React is "king" in that regard.

Features from meta-frameworks have been a blast, and options are everywhere.

So thats more or less been 1 year, and I'm looking for many more (hopefully!) working with React.

Next up is re-focusing on React, and maybe using it in new contexts, such as outside of the browser. See how many months it takes for me to get around to writing a post on that topic!

Keep learning, keep growing, keep building!
