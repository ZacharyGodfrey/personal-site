---
type: "draft"
title: "How I Built My Personal Website"
order: "001"
date: "TBD"
---

## {{meta.title}}

*Posted on {{meta.date}}*

---

My personal website is admittedly quite simple, but that's kind of the whole point; and because of its simplicity, it has some pretty great things going for it. The code is available on [GitHub](https://github.com/ZacharyGodfrey/personal-site) if you're interested in the details, but I'll give an overview here of how I built it and why I think this is such a nice solution.

### Nothing Fancy

When I'm building software, simplicity is my top priority. I prefer small, single-purpose tools over heavy, all-in-one frameworks. With those small tools, I can compose a solution that is just big enough, just complex enough, to solve the problem at hand without premature optimization or outsized technical debt. If the requirements change, I can swap out one tool for another without having to reconfigure the entire project.

I've worked with a lot of tech stacks, frameworks, and fancy tools in my professional life. Most of the time, modern tools that are industry favorites just feel overly complex to me - and their benefits do not outweigh that complexity cost. As a general rule, older tools are simpler and feel like a better fit for the way that I like to build software. They often don't require any additional configuration files to be added to my project, and they solve a single problem in a succinct way without offering me a bunch of features I don't need.

### Static Site Generation

My website doesn't have a lot of interactive elements, it's mostly static content that doesn't change often. This is a great fit for a static site generator: all of the pages can be fully rendered into finalized HTML documents at build time. Once the build is finished, those pages can be uploaded to a CDN and hosted statically.

I could use one of the many libraries out there for static site generation, but most of them are bigger than what my website needs. Instead, I'm using a simple build script that I wrote myself. It's just a short JavaScript file (less than 100 lines) that gets executed with `npm run build`. The script reads in all of my dependencies (HTML templates, CSS file, fonts, etc.) and my content files, renders the HTML pages, and writes them to a `dist` output directory.

### Authoring Content

When the build script renders my pages, it uses several small libraries that compose together very nicely:

- [glob](https://github.com/isaacs/node-glob) discovers the content files that need to be rendered
- [fs-extra](https://github.com/jprichardson/node-fs-extra) reads the input files and writes the output files
- [front-matter](https://github.com/jxson/front-matter) parses the metadata at the top of each document
- [marked](https://github.com/markedjs/marked) renders Markdown content into HTML (and preserves any handwritten HTML)
- [mustache](https://github.com/janl/mustache.js) composes HTML templates together with data

Every page on my website, and every blog post, is a Markdown file in the `src/pages` directory in the repository. Using the directory structure and file names to build the URLs keeps things organized and incredibly simple. At the top of each document, I can specify metadata for each page using a simple YAML syntax. This allows me to set up things like the page title and description, a blog post's publish date, etc. The Markdown syntax is far more lightweight than writing the HTML by hand, but it's also expressive enough for me to author almost all of the content I need. For anything that has to be more complex than Markdown can handle, I can still write the necessary HTML in place directly in the Markdown document and it will be preserved during rendering. If I need to include reusable snippets of HTML, or render some JSON data into the HTML, I can use 

### Incredible Performance

My static pages are hosted on a global CDN (content delivery network). This means that when a visitor hits my website, their browser receives the page from the server that is closest to them in physical space. Because the pages are rendered at build time, that server doesn't have to do any computations at all in order to serve the content. So the user's request takes very little time to reach the server, the server spends no time rendering, and the requested page takes very little time to reach the user's browser.

Once the HTML document is downloaded, the browser then has to turn that HTML code into pretty colors on a screen. For most websites, that means parsing a list of other files that are needed for rendering (fonts, images, CSS files, etc.) and then waiting for those additional network requests to provide everything that's needed. During my build step, I minify and inline my stylesheet and base-64 encode and inline my fonts to reduce the number of network calls and speed up the browser's rendering. In most cases, each page on my website can render with only the single network request for the HTML. The main exception to this is images which are stored as separate static assets (also on the CDN).

### Unhackable

Storing the content in the repo, rather than a database, means that there's no database to host, maintain, backup, or secure against hacking.
