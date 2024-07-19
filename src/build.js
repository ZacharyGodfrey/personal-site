import { readFile, listFiles, emptyFolder, copyFolder, writeFile } from '../lib/file.js';
import { renderMD, minifyCSS, parseMetadata, renderMustache } from '../lib/transform.js';
import { renderEmoji } from '../lib/emoji.js';

const START = Date.now();

const byAscending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return l < r ? -1 : l > r ? 1 : 0;
};

const shell = readFile('src/assets/shell.html');
const favicon = readFile('src/assets/terminal.png', 'base64');
const fontFancy = readFile('src/assets/satisfy.ttf', 'base64');
const fontMono = readFile('src/assets/roboto-mono.ttf', 'base64');
const style = await minifyCSS(readFile('src/assets/style.css'));
const hero = readFile('src/static/animated.png', 'base64');

const pages = listFiles('src/pages/**/*.md').map(filePath => {
  const uri = filePath.split('pages/')[1].replace('.md', '');
  const fileContent = readFile(`./${filePath}`);
  const { meta, content } = parseMetadata(fileContent);

  return { uri, meta, content };
});

const posts = pages
  .filter(x => x.meta.type == 'post')
  .sort(byAscending(x => x.meta.order));

const partials = { favicon, fontFancy, fontMono, style, hero };

emptyFolder('dist');
copyFolder('src/static', 'dist');

pages.forEach(({ uri, meta, content: rawContent }) => {
  const fileName = `dist/${uri}.html`;
  const data = { meta, posts };
  const content = renderEmoji(renderMD(renderMustache(rawContent, data, partials)));

  console.log(`Writing File: ${fileName}`);

  writeFile(fileName, renderMustache(shell, data, { ...partials, content }));
});

console.log(`Running Time: ${Date.now() - START}ms`);