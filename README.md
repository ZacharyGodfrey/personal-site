# Personal Website

My personal website: https://zacharygodfrey.dev

## Running Locally

- `npm i` to install dependencies
- `npm run dev` to build and start the local server
- The site will run at `http://localhost:8080`
- The site will rebuild on file changes

## Hosting

[![Netlify Status][deploy-img]][deploy-link]

[deploy-img]: https://api.netlify.com/api/v1/badges/ea8e6080-6311-4691-81a1-ae6d5d9301aa/deploy-status
[deploy-link]: https://app.netlify.com/sites/zg-personal/deploys

The site is hosted on [Netlify](https://netlify.com) with the following settings:

- Build command: `npm run build`
- Publish directory: `dist`