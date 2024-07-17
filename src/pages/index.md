---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

![hero](data:image/png;base64,{{>hero}})

## Hello!

**Hey, I'm Zach.** I'm a Senior Software Engineer at [The Knot](https://theknot.com), a husband and father, and a competitive axe thrower.

### :computer: Work

I have *over a decade* of [experience](/work) building and maintaining software in a variety of languages and tech stacks. Most of my professional work has been on internal systems that cannot be shared or backend systems that aren't visible. Because of this, I don't have a portfolio of work to show. You can check out my personal [projects](/projects) to see what I've built outside of work.

### :grinning: Play

I [throw axes](https://axescores.com/player/1207260) competitively in the IATF. In my first year in the sport, I qualified for and competed in the *2023 International Axe Throwing Championship*. From more than 20,000 throwers worldwide, the top 256 were selected to compete in the event. I placed 97th overall, which is in the top half for the tournament and the top 0.5% globally.

I like to use [Haiku](/haiku) poems to share topics that I find interesting. Each one is a 17 syllable summary in the 5-7-5 format with a link to learn more about the subject.

{{#posts.length}}

### :speech_balloon: Blog

I don't write often, but my long-form thoughts are here if you're interested. I hope you find something of value in the topics below.

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}
