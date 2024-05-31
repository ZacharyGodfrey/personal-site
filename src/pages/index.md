---
type: "page"
title: ""
description: "The personal website of Zachary Godfrey"
---

![hero](data:image/jpg;base64,{{>hero}})

## Hey! I'm Zach.

I'm a *Senior Software Engineer* with over a decade of experience building and maintaining web applications in a variety of languages and tech stacks. I'm currently working at [The Knot](https://theknot.com).

## Links

- Browse my [personal projects](/projects)
- See my code on [GitHub](https://github.com/ZacharyGodfrey)
- Review my [work history](/work)
- Connect with me on [LinkedIn](https://linkedin.com/in/zachary-godfrey)
- Contact me directly via [email](mailto:contact@zacharygodfrey.dev)

{{#posts.length}}

## Blog

{{#posts}}

[{{meta.title}}](/{{{uri}}})\
*{{meta.date}}*

{{/posts}}

{{/posts.length}}