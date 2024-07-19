import { readFile, listFiles, emptyFolder, copyFolder, writeFile } from './lib/file.js';
import { compileMD, minifyCSS, parseMetadata, renderMustache } from './lib/transform.js';
import { emojify } from './lib/emoji.js';

const byAscending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return l < r ? -1 : l > r ? 1 : 0;
};

const wrapEmoji = (x) => `<span style="font-family:emoji,serif;">${x}</span>`;

const shell = readFile('assets/shell.html');
const favicon = readFile('assets/terminal.png', 'base64');
const fontFancy = readFile('assets/satisfy.ttf', 'base64');
const fontMono = readFile('assets/roboto-mono.ttf', 'base64');
const style = await minifyCSS(readFile('assets/style.css'));
const hero = readFile('static/animated.png', 'base64');

const pages = listFiles('./pages/**/*.md').map(filePath => {
  const uri = filePath.split('pages/')[1].replace('.md', '');
  const fileContent = readFile(`./${filePath}`);
  const { meta, content } = parseMetadata(fileContent);

  return { uri, meta, content };
});

emptyFolder('./dist');
copyFolder('./static', './dist');

const posts = pages
  .filter(x => x.meta.type == 'post')
  .sort(byAscending(x => x.meta.order));

pages.forEach(({ uri, meta, content: rawContent }) => {
  const data = { meta, posts };
  const partials = { favicon, fontFancy, fontMono, style, hero };
  const content = emojify(compileMD(renderMustache(rawContent, data, partials)), wrapEmoji);
  const fileName = `./dist/${uri}.html`;

  console.log(`Writing File: ${fileName}`);

  writeFile(fileName, renderMustache(shell, data, { ...partials, content }));
});