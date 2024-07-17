// Dependencies

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const frontMatter = require('front-matter');
const { render } = require('mustache');
const marked = require('marked');
const { gfmHeadingId } = require('marked-gfm-heading-id');
const postcss = require('postcss');
const cssnano = require('cssnano');
const config = require('./src/config.json');

marked.use(gfmHeadingId({ prefix: '' }));

// Helper Functions

const resolve = (filePath) => path.resolve(filePath);
const listFiles = (pattern) => glob.sync(pattern, { cwd: resolve('./') });
const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));
const compileMD = (fileContent) => marked.parse(fileContent, { gfm: true });

const minifyCSS = async (fileContent) => {
  return await postcss([cssnano]).process(fileContent, {
    from: undefined
  }).then(({ css }) => css);
};

const parseMetadata = (fileContent) => {
  const { attributes: meta, body: content } = frontMatter(fileContent);

  return { meta, content };
};

const byAscending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return l < r ? -1 : l > r ? 1 : 0;
};

const byDescending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return r < l ? -1 : r > l ? 1 : 0;
};

(async () => {
  // Read Input

  const shell = readFile('./src/shell.html');
  const favicon = readFile('./src/static/terminal.png', 'base64');
  const fontFancy = readFile('./src/static/satisfy.ttf', 'base64');
  const fontMono = readFile('./src/static/roboto-mono.ttf', 'base64');
  const style = await minifyCSS(readFile('./src/style.css'));
  const hero = readFile('./src/static/animated.png', 'base64');

  const pages = listFiles('./src/pages/**/*.md').map(filePath => {
    const uri = filePath.split('src/pages/')[1].replace('.md', '');
    const fileContent = readFile(`./${filePath}`);
    const { meta, content } = parseMetadata(fileContent);

    return { uri, meta, content };
  });

  // Write Output

  emptyFolder('./dist');
  copyFolder('./src/static', './dist');

  const posts = pages
    .filter(x => x.meta.type == 'post')
    .sort(byAscending(x => x.meta.order));

  pages.forEach(({ uri, meta, content: rawContent }) => {
    const data = { config, posts, meta };
    const partials = { favicon, fontFancy, fontMono, style, hero };
    const content = compileMD(render(rawContent, data, partials));

    writeFile(`./dist/${uri}.html`, render(shell, data, { ...partials, content }));
  });
})();
