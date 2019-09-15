// Dependencies

const path = require('path');
const fs = require('fs-extra');
const scss = require('node-sass');

// Helper Functions

const memoize = (action) => {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        return cache[key] || (cache[key] = action(...args));
    };
};

const resolve = (filePath) => path.resolve(path.join(__dirname, filePath));
const readFile = (filePath) => fs.readFileSync(resolve(filePath), 'utf-8');
const writeFile = (filePath, content) => fs.outputFileSync(resolve(filePath), content, 'utf-8');

const src = memoize((filePath) => readFile(`./${filePath}`));
const dist = (filePath, content) => writeFile(`../dist/${filePath}`, content);
const cleanDist = () => fs.emptyDirSync(resolve('../dist'));
const copyStatic = () => fs.copySync(resolve('./static'), resolve('../dist'));

const compileSCSS = (fileContent) => scss.renderSync({
  data: fileContent,
  outputStyle: 'compressed'
}).css.toString();

// Build Page

const content = src('index.html');
const styles = compileSCSS([
  "/style/variables.scss",
  "/style/reset.scss",
  "/style/fonts.scss",
  "/style/utilities.scss",
  "/style/components.scss",
].map(file => src(file)).join('\n'));

const page = content.replace('/* Styles */', styles);

// Output Files

cleanDist();
copyStatic();
dist('index.html', page);