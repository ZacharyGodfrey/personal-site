---
type: "draft"
title: "How I Built My Personal Website"
order: "001"
date: "TBD"
---

## {{meta.title}}

*Posted on {{meta.date}}*

---

My personal website is intentionally simple, and that provides it several great advantages: it's crazy fast, entirely free, and totally portable. In this post, I'll detail each of these advantages and how I achieved them.

### Nothing Fancy

When I'm building software, simplicity is my top priority. I prefer small, single-purpose tools over heavy, all-in-one frameworks. With those small tools, I can compose a solution that is just big enough, just complex enough, to solve the problem at hand without introducing any unnecessary overhead. If my requirements change in the future, I can swap out each individual tool as needed without having to reconfigure the entire project.

At a high level, my website is basically a single JavaScript file (fewer than 100 lines) for the build script, an HTML template file, a CSS file for the style rules, some fonts and images, and a folder of Markdown files for the content. When the build script renders my pages, it uses several small libraries that compose together very nicely:

- [glob](https://github.com/isaacs/node-glob) discovers the content files that need to be rendered
- [fs-extra](https://github.com/jprichardson/node-fs-extra) reads the input files and writes the output files
- [front-matter](https://github.com/jxson/front-matter) parses the metadata at the top of each document
- [marked](https://github.com/markedjs/marked) renders Markdown content into HTML
- [mustache](https://github.com/janl/mustache.js) composes HTML templates and JSON data together

I understand that Mustache is an old tool, but I'd rather use an old tool that solves my problem in a simple way over the latest hotness that tries to do way too much.

### Crazy Fast

The speed of a website can be broken down into several steps that take time:

1. The request data travels from the browser to the server
2. The server computes the appropriate response to the request
3. The response data travels from the server back to the browser
4. The browser renders the response data

The travel time for the request and response data is minimized when the server is physically close to the user's location. My website is hosted on a global CDN (content delivery network), which is a large collection of servers distributed all over the world that each have their own copy of my website. When a user requests a page of my website, the request goes to the server closest to them to minimize the roundtrip travel time. If a server goes down, my website is still accessible and the user will receive a response from the next closest server.

When a server receives a request, it has to compute the correct response to send back. This usually involves fetching some dynamic data from a database and rendering that data into the HTML. Computers are fast, but computations do take some time and network roundtrips to the database take time too. The fastest way for a server to respond to a request is for it to already have a fully rendered HTML page ready to go with no computation necessary. My website is composed of static content that doesn't change often. This means that I can render every page one time with a build step, upload the generated HTML files to the CDN, and they can be served to users without any computation time on each request. I only have to rebuild the pages when the content changes.

Once the browser has downloaded the HTML document from the server, it then has to parse a list of other files that are needed for rendering (fonts, images, CSS files, etc.), issue additional network requests for all that data, wait for all of the responses, and then render the final content. During my build step, I minify and inline my stylesheet and base-64 encode and inline my fonts to reduce the number of network requests and speed up the browser's rendering. In most cases, each page on my website can render with only the single network request for the HTML. The main exceptions to this are the images which are stored as separate static assets (also on the CDN).

In summary: short trip to the server, zero computation, short trip back to the browser, no additional requests, fast rendering.

### Entirely Free

Because my content is authored in Markdown, which is basically plaintext, I can write my content in a simple text editor: no expensive tools needed. The code is under version control in GitHub, which is also free. In fact, my website is so simple I can just use GitHub's web interface to edit my content files and push updates to the website.

I'm hosting my website for free using [Netlify](https://www.netlify.com)'s CDN. I'm not sponsored in any way by them, I just really enjoy using their service and can't believe that companies like them offer CDN hosting at no cost. The setup is extremely easy as well: connect to your GitHub repository, specify a build command and the expected output directory, and choose which branch to deploy. When you push a change to that branch in GitHub, Netlify will automatically pull the latest code, run the build command, upload the files in the output directory to the CDN, and your updates are live!

### Totally Portable

In my previous jobs, I've seen the negative effects of vendor-lock: you want to switch from one service provider to another, but you're stuck because you're using some proprietary technology from the current provider that won't be available after the switch. I built my website to be entirely indifferent to the hosting environment. I'm not making use of any proprietary services or databases. I could easily deploy my website with any number of other hosting providers without any changes to my code or data.

### Authoring Content

Every page on my website, and every blog post, is a Markdown file in the `src/pages` directory in the repository. Using the directory structure and file names to build the URLs keeps things organized and incredibly simple. At the top of each document, I can specify metadata for each page using a simple YAML syntax. This allows me to set up things like the page title and description, a blog post's publish date, etc. The Markdown syntax is far more lightweight than writing the HTML by hand, but it's also expressive enough for me to author almost all of the content I need. For anything that has to be more complex than Markdown can handle, I can still write the necessary HTML in place directly in the Markdown document and it will be preserved during rendering. If I need to include reusable snippets of HTML, or render some JSON data into the HTML, I can use 

---

All of the code for my website is available on [GitHub](https://github.com/ZacharyGodfrey/personal-site) if you'd like to use it as a starting point for your own website.
