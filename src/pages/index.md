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
    <h2>Hello!</h2>
    <p><strong>Hey, I'm Zach.</strong> I'm a Senior Software Engineer, husband and father, and a competitive axe thrower.</p>
  </div>
</div>

---

## About

I have over a decade of experience building and maintaining software in a variety of languages and tech stacks. I live in Florida with my wife and our two children and I'm currently working at [The Knot](https://theknot.com).

Outside of code, I [throw axes](https://axescores.com/player/1207260) in the IATF. In my first year in the sport, I qualified for and competed in the *2023 International Axe Throwing Championship*. From a global population of 20,000 throwers, the top 256 were selected to compete in the event. I placed 97th overall, which is in the top half for the tournament and the top 0.5% globally.

{{#posts.length}}

---

## Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}

---

## Contact

You can reach me on [LinkedIn](https://linkedin.com/in/zachary-godfrey) or contact me directly via [email](mailto:contact@zacharygodfrey.dev) if you'd like to chat.
