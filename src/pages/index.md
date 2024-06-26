---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

![hero](data:image/png;base64,{{>hero}})

## Hello!

**Hey, I'm Zach.** I'm a Senior Software Engineer at [The Knot](https://theknot.com). I'm also a husband and father and a competitive axe thrower.

### About

I have *over a decade* of [experience](/work) building and maintaining software in a variety of languages and tech stacks. Most of my professional work has been on internal systems that cannot be shared or backend systems that aren't visible. Because of this, I don't have a portfolio of work to show. You can check out my personal [projects](/projects) to see what I've built outside of work.

I also [throw axes](https://axescores.com/player/1207260) competitively in the IATF. In my first year in the sport, I qualified for and competed in the *2023 International Axe Throwing Championship*. From more than 20,000 throwers worldwide, the top 256 were selected to compete in the event. I placed 97th overall, which is in the top half for the tournament and the top 0.5% globally.

{{#posts.length}}

### Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}
