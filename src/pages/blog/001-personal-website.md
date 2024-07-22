---
type: "post"
title: "How I Built My Personal Website"
order: "001"
date: "June 10, 2024"
---

## {{meta.title}}

*Posted on {{meta.date}}*

---

<div class="md-indent"></div>

My personal website is intentionally simple; it's also fast, free, and portable. In short, what I've built is a statically generated website, hosted on a CDN, and authored using Markdown. The rest of this post will explain each of those parts and how they work together to achieve the listed benefits.

### Nothing Fancy

<div class="md-indent"></div>

First, a quick aside. When I'm building software, simplicity is my top priority. I prefer to use small, single-purpose tools over heavy, all-in-one frameworks. With these small tools, I can compose a solution that is just big enough to solve the problem at hand without introducing any unnecessary complexity. If my requirements change in the future, I can swap out each individual tool as needed without having to reconfigure the entire project.

### Authoring Content

<div class="md-indent"></div>

Every page on my website, and every blog post, is a Markdown file in the repository. I love the simplicity of having the content stored in basically plaintext files in the repository rather than having a database or third-party service involved in my content creation. Also, using the directory structure and file names to build the URLs keeps things organized and incredibly simple.

<div class="md-indent"></div>

At the top of each document, I can specify metadata for the page using a simple YAML syntax called Frontmatter. This allows me to set up things like the page title and description, publish date, etc.

<div class="md-indent"></div>

The main content is written in Markdown, which is so much faster than writing the HTML by hand but is also expressive enough for me to author almost all of the content I need. For anything that has to be more complex than what Markdown can handle, I can still write the necessary HTML in place and it will be preserved during rendering. I can also inject some data and logic into my content using Mustache tags.

The combination of Frontmatter, Markdown, and Mustache make authoring content incredibly fast and easy.

### Static Site Generation

<div class="md-indent"></div>

My website is composed of static content that doesn't change often. There's no dynamic data coming from a database and no application code running on a server in order to handle requests. For a given URL, everyone gets sent the same content. This means that I can run a build command that will render all of my authored content into fully finalized HTML pages, and I only need to rebuild the pages when the content changes.

<div class="md-indent"></div>

I could have used an existing static site generator to do the build, but most of them are bigger and more complex than I need. I wrote my own build script instead, and it's fewer than 100 lines of JavaScript. When the build script renders my pages, it uses several small libraries that compose together very nicely:

- [glob](https://github.com/isaacs/node-glob) discovers the content files that need to be rendered
- [fs-extra](https://github.com/jprichardson/node-fs-extra) reads the input files and writes the output files
- [front-matter](https://github.com/jxson/front-matter) parses the metadata at the top of each document
- [marked](https://github.com/markedjs/marked) renders Markdown content into HTML
- [mustache](https://github.com/janl/mustache.js) composes HTML templates and JSON data together

### CDN Hosting

<div class="md-indent"></div>

Because my website is just a collection of static HTML documents, hosting my website can be as simple as having a computer on the internet that serves the files out of a folder. Since the content is not dynamic, there could also be several computers hosting their own copy of the pages. A CDN (content delivery network) is exactly that: a global network of servers that each have their own copy of your static web pages.

<div class="md-indent"></div>

I'm hosting my website on [Netlify](https://www.netlify.com)'s CDN. I'm not sponsored by them in any way, I just really enjoy using their service. The setup is extremely easy as well: connect to your GitHub repository, specify a build command and the expected output directory, and choose which branch to deploy. When you push a change to that branch in GitHub, Netlify will automatically pull the latest code, run the build command, upload the files in the output directory to the CDN, and your updates are live!

### Fast

The speed of a website can be broken down into several steps that take time:

1. The request data travels from the browser to the server
2. The server computes the appropriate response to the request
3. The response data travels from the server back to the browser
4. The browser renders the response data

<div class="md-indent"></div>

With a static content website, there is no computation time. The server just responds with the requested file or the 404 page if a matching file doesn't exist: simple and fast!

<div class="md-indent"></div>

Because my website is hosted on a global CDN, the request will always be handled by the server that is closest to the user in physical space. This minimizes the amount of time that the data spends traveling back and forth on the network.

<div class="md-indent"></div>

With the first three points optimized, let's talk about that last point: rendering. Once the browser has downloaded the HTML document from the server, it then has to parse a list of other files that are needed for rendering (fonts, images, CSS files, etc.), issue additional network requests for all that data, wait for all of the responses, and then render the final content. During my build step, I minify and inline my stylesheet and base-64 encode and inline my fonts to reduce the number of network requests and speed up the browser's rendering. In most cases, each page on my website can render immediately with no additional network requests. The main exceptions to this are the images which are stored as separate static assets (also on the CDN).

<div class="md-indent"></div>

In summary: short trip to the server, zero computation, short trip back to the browser, no additional requests, fast rendering.

### Free

<div class="md-indent"></div>

Because my content is authored in Markdown, which is basically plaintext, I can write my content in a simple text editor: no expensive tools needed. The code is under version control in GitHub, which is also free. In fact, my website is so simple I can just use GitHub's web interface to edit my content files and push updates to the website.

<div class="md-indent"></div>

I'm hosting my website for free using [Netlify](https://www.netlify.com)'s CDN. That's right, in addition to offering simplicity and a massive speed benefit, they will also host static websites like mine at absolutely no cost! Like I said, they aren't sponsoring this content, I just can't believe that companies like them have such a great free tier.

### Portable

<div class="md-indent"></div>

In my previous jobs, I've seen the negative effects of vendor-lock: you want to switch from one service provider to another, but you're stuck because you're using some proprietary technology from the current provider that won't be available after the switch. I built my website to be entirely indifferent to the hosting environment. I'm not making use of any proprietary services or databases. I could easily deploy my website with any number of other hosting providers without any changes to my code or data.

<div class="md-indent"></div>

Having an entirely portable website is great for my peace of mind. If, for example, Netlify goes out of business or removes their free tier, I can easily and quickly get my website up and running with a different hosting provider.

### Conclusion

<div class="md-indent"></div>

Not every website can benefit from the setup I've described, but I'd be willing to bet that there are a lot of over-engineered websites out there that could be simplified. Keeping things intentionally simple, when possible, can be great for speed, cost, and portability.

<div class="md-indent"></div>

All of the code for my website is available on [GitHub](https://github.com/ZacharyGodfrey/personal-site) if you'd like to use it as a starting point for your own website.

This was a long post; if you made it this far, thanks so much for reading!
