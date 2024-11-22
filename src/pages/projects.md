---
type: "page"
title: "Personal Projects"
description: ""
---

(section

## {{meta.title}}

I'm primarily a back-end engineer, so my UI design in these projects likely won't impress you. I built these projects either to solve an interesing problem or to explore a new concept (new to me, anyway).

section)

(section

### Axe Charts

I created [Axe Charts](https://axecharts.com) to supplement the official stats website for IATF axe throwing. In addition to providing in-depth performance statistics for Premier axe throwers, the site also implements some key feature requests from the axe throwing community:

- [Badges](https://axecharts.com/badges) provide fun performance milestones to work toward while chasing down that elusive 81 score.
- The [Axe Charts Rating (ACR)](https://axecharts.com/rating-system) is an alternative rating system based on overall accuracy rather than wins and losses.

With this site, I wanted to explore using SQLite to store the scraped data in a file in the repository so that all of the code and data can be downloaded together with a single command and run locally with no dependencies on external services. Other than GitHub's 50MB file size limitation, this implementation actually went really well.

View the code on [GitHub](https://github.com/ZacharyGodfrey/axe-charts).

section)

(section

### Pub Subs

I made this [simple page](https://pubsubs.netlify.app) to display whether Publix Chicken Tender Subs are on sale. They're a local favorite item, and I thought it would be a fun little project that makes use of a publicly available API.

The UI is nothing to be impressed by, but I thought the method of getting the data was pretty cool. The project uses a GitHub action triggered on a cron schedule to hit the API endpoint once a week when the sales week starts. The JSON response from the API endpoint is stored as a file in the repository.

When the GitHub action pushes the JSON file change back to the repository, it triggers a new build of the site in Netlify. The site keeps itself up to date with no manual intervention, costs me nothing, and is as simple as a single static web page.

View the code on [GitHub](https://github.com/ZacharyGodfrey/pubsubs).

section)
