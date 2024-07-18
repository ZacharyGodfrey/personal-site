import { readFile, listFiles, emptyFolder, copyFolder, writeFile } = from './lib/file.js';
import { compileMD, minifyCSS, parseMetadata, renderHTML } = from './lib/transform.js';
import { emojify } = from './lib/emoji.js';

const byAscending = (fn) => (left, right) => {
  const l = fn(left), r = fn(right);

  return l < r ? -1 : l > r ? 1 : 0;
};

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

emptyFolder('./dist');
copyFolder('./src/static', './dist');

const posts = pages
  .filter(x => x.meta.type == 'post')
  .sort(byAscending(x => x.meta.order));

pages.forEach(({ uri, meta, content: rawContent }) => {
  const data = { meta, posts };
  const partials = { favicon, fontFancy, fontMono, style, hero };
  const content = compileMD(renderHTML(emojify(rawContent), data, partials));
  const fileName = `./dist/${uri}.html`;

  console.log(`Writing File: ${fileName}`);

  writeFile(fileName, renderHTML(shell, data, { ...partials, content }));
});