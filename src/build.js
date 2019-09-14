// Dependencies

const path = require('path');
const fs = require('fs-extra');
const scss = require('node-sass');
const mustache = require('mustache');

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
const readJson = (filePath) => fs.readJsonSync(resolve(filePath), 'utf-8');
const writeFile = (filePath, content) => fs.outputFileSync(resolve(filePath), content, 'utf-8');

const src = memoize((filePath) => readFile(`./${filePath}`));
const dist = (filePath, content) => writeFile(`../dist/${filePath}`, content);
const cleanDist = () => fs.emptyDirSync(resolve('../dist'));

const compileSCSS = (fileContent) => scss.renderSync({
  data: fileContent,
  outputStyle: 'compressed'
}).css.toString();

// Build Pages

cleanDist();

const config = readJson('config.json');

config.pages.forEach(page => {
  const globalStyles = config.shared.stylesheets.map(file => src(file));
  const pageStyles = (page.stylesheets || []).map(file => src(file));
  const stylesheet = compileSCSS(globalStyles.concat(pageStyles).join('\n'));

  const globalScripts = config.shared.scripts.map(file => src(file));
  const pageScripts = (page.scripts || []).map(file => src(file));
  const script = globalScripts.concat(pageScripts).join('\n');

  const destination = `${page.url}/index.html`;
  const content = src(page.content);
  const layout = src(page.layout)
  .replace('/* Stylesheet */', stylesheet)
  .replace('/* Script */', script);

  const globalPartials = Object.keys(config.shared.partials).reduce((obj, key) => {
    return Object.assign(obj, { [key]: src(config.shared.partials[key]) });
  }, {});

  const pagePartials = Object.keys(page.partials || {}).reduce((obj, key) => {
    return Object.assign(obj, { [key]: src(page.partials[key]) });
  }, {});

  const partials = Object.assign({}, globalPartials, pagePartials, {
    page: content
  });

  dist(destination, mustache.render(layout, page.data, partials));
});