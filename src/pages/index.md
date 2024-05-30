---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

<!-- ![hero](data:image/jpg;base64,{{>hero}}) -->

## Hey, I'm Zach.

I'm a [Senior Software Engineer](#work), husband and father, and competitive [axe thrower](https://axescores.com/player/1207260).

## Work

I have over a decade of experience building and maintaining web applications in a variety of languages and tech stacks.

I believe that the world is a better place when we understand how it works: the less my work gets called *magic* the better. I love explaining technical concepts to people in simple terms. I'm constantly looking for opportunities to simplify things and reduce complexity.

I'm currently working at [The Knot](https://www.theknot.com) and my full [work history](/work) is available if that interests you.

## Personal Projects

### Axe Charts

I created [Axe Charts](https://axecharts.com) to supplement the official stats website for IATF axe throwing. In addition to providing in-depth performance statistics for Premier axe throwers, the site also addresses some key requests from the axe throwing community.

*Badges* provide fun performance milestones to work toward while chasing down that elusive 81 score and the *Axe Charts Rating (ACR)* is an alternative rating system based on overall accuracy rather than wins and losses.

{{#posts.length}}

## Blog

{{#posts}}

**[{{meta.title}}](/{{{uri}}})**\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}
