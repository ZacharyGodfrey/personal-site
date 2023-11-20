// Dependencies

const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

// Helper Functions

const resolve = (filePath) => path.resolve(path.join(__dirname, filePath));
const listFiles = (pattern) => glob.sync(pattern, { cwd: resolve('./') });
const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));

// Read Input

const shell = readFile('./src/shell.html');
const favicon = readFile('./src/favicon.png', 'base64');
const font = readFile('./src/Satisfy.ttf', 'base64');
const style = readFile('./src/style.css');
const pages = listFiles('./src/pages/**/*.*').map(filePath => ({
  name: filePath.split('/src/pages/')[1],
  content: readFile(`./${filePath}`)
}));

const baseFile = shell
  .replace('/*favicon*/', favicon)
  .replace('/*font*/', font)
  .replace('/*style*/', style);

// Write Output

emptyFolder('./dist');
copyFolder('./src/static', './dist');

pages.forEach(page => {
  const fileName = page.name.split('.').slice(0, -1).join('.');
  const filePath = `./dist/${fileName}.html`;
  const fileContent = baseFile.replace('/*content*/', page.content);

  writeFile(filePath, fileContent);
});