---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

<!-- ![hero](data:image/jpg;base64,{{>hero}}) -->

## Hey! I'm Zach.

I'm a *Senior Software Engineer* with over a decade of experience building and maintaining web applications in a variety of languages and tech stacks. I'm currently working at [The Knot](https://theknot.com).

## Projects

Most of my personal projects never see the light of day. They're mostly used to experiment with doing things differently (often opposing "industry best practices") to see if there's wisdom to be found where nobody else is looking. Any projects listed here will be ones that provide enough value to be shared with others.

### Axe Charts

I created [Axe Charts](https://axecharts.com) to supplement the official stats website for IATF axe throwing. In addition to providing in-depth performance statistics for Premier axe throwers, the site also implements some key feature requests from the axe throwing community:

- *Badges* provide fun performance milestones to work toward while chasing down that elusive 81 score.
- The *Axe Charts Rating (ACR)* is an alternative rating system based on overall accuracy rather than wins and losses.

{{#posts.length}}

## Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}