// Dependencies

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const markdown = require('marked');
const { render } = require('mustache');

// Helper Functions

const resolve = (filePath) => path.resolve(path.join(__dirname, filePath));
const listFiles = (pattern) => glob.sync(pattern, { cwd: resolve('./') });
const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));
const compileMD = (fileContent) => markdown(fileContent, { gfm: true }).trim();

// Read Input

const shell = readFile('./src/shell.html');
const favicon = readFile('./src/favicon.png', 'base64');
const fontSatisfy = readFile('./src/satisfy.ttf', 'base64');
const fontRoboto = readFile('./src/roboto-mono.ttf', 'base64');
const style = readFile('./src/style.css');
const mdWrap = readFile('./src/partials/md-wrap.html');

const pages = listFiles('./src/pages/**/*.*').map(filePath => {
  const name = filePath.split('src/pages/')[1];
  console.log('filePath: ', filePath);
  console.log('name: ', name);
  const isMarkdown = name.includes('.md');
  const content = readFile(`./${filePath}`);

  return {
    name,
    content: isMarkdown ? render(mdWrap, {}, { content: compileMD(content) }) : content
  };
});

const baseFile = shell
  .replace('/*favicon*/', favicon)
  .replace('/*fontSatisfy*/', fontSatisfy)
  .replace('/*fontRoboto*/', fontRoboto)
  .replace('/*style*/', style);

// Write Output

emptyFolder('./dist');
copyFolder('./src/static', './dist');

pages.forEach(({ name, content }) => {
  const fileName = name.split('.').slice(0, -1).join('.');
  const filePath = `./dist/${fileName}.html`;
  const fileContent = baseFile.replace('/*content*/', content);

  writeFile(filePath, fileContent);
});