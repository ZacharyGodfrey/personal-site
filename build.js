// Dependencies

const path = require('path');
const fs = require('fs-extra');
const scss = require('node-sass');
const markdown = require('marked');

// Helper Functions

const resolve = (filePath) => path.resolve(path.join(__dirname, filePath));
const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));

const compileSCSS = (fileContent) => scss.renderSync({
    data: fileContent,
    outputStyle: 'compressed'
}).css.toString().trim();

const compileMD = (fileContent) => markdown(fileContent, {
    gfm: true
}).trim();

// Read Input

const page = readFile('./src/page.html');
const favicon = readFile('./src/favicon.png', 'base64');
const font = readFile('./src/Satisfy.ttf', 'base64');
const content = compileMD(readFile('./src/content.md'));
const style = compileSCSS(readFile('./src/style.scss'));
const script = readFile('./src/script.js');

// Write Output

const index = page
    .replace('//favicon', favicon)
    .replace('//font', font)
    .replace('/* style */', style)
    .replace('<!-- content -->', content)
    .replace('/* script */', script);

emptyFolder('./dist');
writeFile('./dist/index.html', index);