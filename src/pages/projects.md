---
type: "page"
title: "Personal Projects"
description: ""
---

(~

## {{meta.title}}

My personal projects rarely see the light of day. The projects listed here are the exceptions. These aren't necessarily the best things I've ever built - just the ones that demonstrate the sort of thing I like to do with my spare time: running in the opposite direction of the current industry trend to see if there's wisdom to be found where nobody else is looking.

~)

(~

### Axe Charts

I created [Axe Charts](https://axecharts.com) to supplement the official stats website for IATF axe throwing. In addition to providing in-depth performance statistics for Premier axe throwers, the site also implements some key feature requests from the axe throwing community:

- [Badges](https://axecharts.com/badges) provide fun performance milestones to work toward while chasing down that elusive 81 score.
- The [Axe Charts Rating (ACR)](https://axecharts.com/rating-system) is an alternative rating system based on overall accuracy rather than wins and losses.

With this site, I wanted to explore using SQLite to store the scraped data in a file in the repository so that all of the code and data can be downloaded together with a single command and run locally with no dependencies on external services. Other than GitHub's 50MB file size limitation, this implementation actually went really well.

View the code on [GitHub](https://github.com/ZacharyGodfrey/axe-charts).

~)

(~

### Pub Subs

I made this [simple page](https://pubsubs.netlify.app) to display whether Publix Chicken Tender Subs are on sale. They're a local favorite item, and I thought it would be a fun little project that makes use of a publicly available API.

The project uses a GitHub action triggered on a cron schedule to hit the API endpoint once a week when the sales week starts. The JSON response from the API endpoint is stored as a file in the repository. When the GitHub action pushes the JSON file change back to the repository, it triggers a new build of the site in Netlify. The single, static web page then gets rendered by the build script using the data from the JSON file. The site keeps itself up to date with no manual intervention, costs me nothing, and is as simple as a single static web page.

View the code on [GitHub](https://github.com/ZacharyGodfrey/pubsubs).

~)
