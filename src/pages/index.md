---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

<div class="grid stack columns-2 items-y-center">
  <div>
    <img src="data:image/jpg;base64,{{>hero}}" alt="hero">
  </div>

  <div>
    <h2>Hey! I'm Zach.</h2>
    <p>I'm a Senior Software Engineer, husband and father, and competitive axe thrower.</p>
  </div>
</div>

<!--
![hero](data:image/jpg;base64,{{>hero}})

## Hey! I'm Zach.

I'm a Senior Software Engineer, husband and father, and competitive axe thrower.
-->

## Work

I have over a decade of experience building and maintaining software in a variety of languages and tech stacks.

I believe that the less my work gets called *magic* the better. I take it as a compliment, of course, but my goal is that everyone, regardless of technical knowledge, can understand how things are working. I love explaining technical concepts in simple terms for people. When I'm in the code, my main goal is the ruthless elimination of complexity.

I'm currently working at [The Knot](https://theknot.com) and my full [work history](/work) is available if that interests you.

## Play

I believe that playing is the act of learning. My personal projects almost never see the light of day because they're almost exclusively the product of my playing around with code. I love to run in the opposite direction of "industry best practices" to see if there's wisdom to be found where nobody else is looking. My personal code is on [GitHub](https://github.com/ZacharyGodfrey) if you're curious.

Outside of code, I throw axes in the IATF under the alias [REDACTED](https://axescores.com/player/1207260). In my first year in the sport, I qualified for and competed in the **2023 International Axe Throwing Championship**. From a global population of 20,000 throwers, the top 256 were selected to compete in the event. I placed 97th overall, which is in the top half for the tournament and the top 0.5% globally.

## Contact

You can reach me on [LinkedIn](https://linkedin.com/in/zachary-godfrey) or contact me directly via [email](mailto:contact@zacharygodfrey.dev) if you'd like to chat.

{{#posts.length}}

## Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}