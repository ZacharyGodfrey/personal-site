---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

![hero](data:image/jpg;base64,{{>hero}})

I'm a [Senior Software Engineer](#work), husband and father, and a competitive [axe thrower](https://axescores.com/player/1207260) in my limited free time.

## Work

I have over a decade of experience building and maintaining web applications in a variety of languages and tech stacks. I'm currently working at [The Knot](https://theknot.com).

My personal code is on [GitHub](https://github.com/ZacharyGodfrey) and you can view my full [work history](/work) if that interests you.

## Projects

Most of the time, my personal projects don't see the light of day. They're mostly a way for me to experiment with doing things differently - often opposing "industry best practices" - just to see if there's wisdom to be found where nobody is currently looking. Any projects listed here will be the ones that provide enough value to be shared with others.

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