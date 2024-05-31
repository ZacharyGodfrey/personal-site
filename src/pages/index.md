---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

![hero](data:image/jpg;base64,{{>hero}})

## Hey! I'm Zach.

I'm a *Senior Software Engineer* with over a decade of experience building and maintaining web applications in a variety of languages and tech stacks. I'm currently working at [The Knot](https://theknot.com).

<!-- [Projects](/projects) [GitHub](https://github.com/ZacharyGodfrey) [Work History](/work) -->

## Links

- My personal code is on [GitHub](https://github.com/ZacharyGodfrey)
- My full [work history](/work) is available if that interests you
- I'm available on [LinkedIn](https://linkedin.com/in/zachary-godfrey) and via [email](mailto:contact@zacharygodfrey.dev) if you'd like to chat

{{#posts.length}}

## Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}