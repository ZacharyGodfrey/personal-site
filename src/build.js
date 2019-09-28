// Dependencies

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const scss = require('node-sass');
const frontMatter = require("front-matter");
const markdown = require("marked");
const mustache = require('mustache');
const moment = require('moment-timezone');

// Helper Functions

const resolve = (filePath) => path.resolve(path.join(__dirname, filePath));
const readFile = (filePath) => fs.readFileSync(resolve(filePath), 'utf-8');
const writeFile = (filePath, content) => fs.outputFileSync(resolve(filePath), content, 'utf-8');
const src = (filePath) => readFile(`./${filePath}`);
const dist = (filePath, content) => writeFile(`../dist/${filePath}`, content);
const cleanDist = () => fs.emptyDirSync(resolve('../dist'));
const copyStatic = () => fs.copySync(resolve('./static'), resolve('../dist'));

const findFiles = (pattern) => glob.sync(pattern, {
  cwd: resolve('./')
});

const compileSCSS = (fileContent) => scss.renderSync({
  data: fileContent,
  outputStyle: 'compressed'
}).css.toString();

const parseMetadata = (fileContent) => {
  const data = frontMatter(fileContent);

  return {
    meta: data.attributes,
    content: data.body
  };
};

const compileMD = (fileContent) => markdown(fileContent, {
  gfm: true,
  headerIds: false
}).replace(/    /g, "\t");

const byAscending = (fn) => {
  return (left, right) => {
    const l = fn(left), r = fn(right);
    return l < r ? -1 : l > r ? 1 : 0;
  }
}

const byDescending = (fn) => {
  return (left, right) => {
    const l = fn(left), r = fn(right);
    return r < l ? -1 : r > l ? 1 : 0;
  }
}

// Read Files

const styles = compileSCSS([
  "/style/variables.scss",
  "/style/reset.scss",
  "/style/fonts.scss",
  "/style/utilities.scss",
  "/style/components.scss",
].map(file => src(file)).join('\n'));

const shell = src('shell.html').replace('/* Styles */', styles);

const partials = findFiles('partials/**/*.html').reduce((result, path) => {
  const file = src(path);
  const name = path.split('/').slice(-1)[0].replace('.html', '');

  return Object.assign(result, { [name]: file });
}, {});

const pages = findFiles('pages/**/*.html').map((path) => parseMetadata(src(path)));

const posts = findFiles('posts/**/*.md').reduce((result, path) => {
  const file = src(path);
  const parsed = parseMetadata(file);

  parsed.meta.timestamp = moment(parsed.meta.timestamp, 'YYYY-MM-DD').format('DD MMM YYYY');

  return parsed.meta.published ? result.concat(parsed) : result;
}, []).sort(byDescending(x => x.meta.timestamp));

// Write Files

cleanDist();
copyStatic();

pages.forEach(page => {
  const data = {
    pages: pages,
    posts: posts,
    page: page.meta
  };

  const partialViews = Object.assign({}, partials, {
    page: page.content
  });

  const destination = `${page.meta.uri}/index.html`;
  const rendered = mustache.render(shell, data, partialViews);

  dist(destination, rendered);
});

posts.forEach(post => {
  const data = {
    pages: pages,
    posts: posts,
    page: post.meta
  };

  const partialViews = Object.assign({}, partials, {
    page: partials.blogPost,
    post: compileMD(post.content)
  });

  const destination = `blog/${post.meta.slug}/index.html`;
  const rendered = mustache.render(shell, data, partialViews);

  dist(destination, rendered);
});