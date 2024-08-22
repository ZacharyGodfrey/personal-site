import { readFile, listFiles, emptyFolder, copyFolder, writeFile } from '../lib/file.js';
import { renderMD, renderSections, minifyCSS, parseMetadata, renderMustache } from '../lib/transform.js';
import { renderEmoji } from '../lib/emoji.js';
import { byAscending } from '../lib/misc.js';

const START = Date.now();

const shell = readFile('src/assets/shell.html');
const partials = listFiles('src/partials/*.html').reduce((obj, filePath) => {
  const name = filePath.split('partials/')[1].replace('.html', '');

  obj[name] = `\n${readFile(`./${filePath}`)}\n`;

  return obj;
}, {
  favicon: readFile('src/assets/terminal.png', 'base64'),
  fontFancy: readFile('src/assets/satisfy.ttf', 'base64'),
  style: await minifyCSS(readFile('src/assets/style.css')),
  hero: readFile('src/static/animated.png', 'base64')
});

const pages = listFiles('src/pages/**/*.md').map(filePath => {
  const uri = filePath.split('pages/')[1].replace('.md', '');
  const fileContent = readFile(`./${filePath}`);
  const { meta, content } = parseMetadata(fileContent);

  return { uri, meta, content };
});

const posts = pages.filter(x => x.meta.type == 'post').sort(byAscending(x => x.meta.order));

emptyFolder('dist');
copyFolder('src/static', 'dist');

pages.forEach(({ uri, meta, content: rawContent }) => {
  const fileName = `dist/${uri}.html`;
  const data = { meta, posts };
  const content = renderEmoji(
    renderSections(
      renderMD(
        renderMustache(rawContent, data, partials)
      )
    )
  );

  console.log(`Writing File: ${fileName}`);

  writeFile(fileName, renderMustache(shell, data, { ...partials, content }));
});

console.log(`Running Time: ${Date.now() - START}ms`);