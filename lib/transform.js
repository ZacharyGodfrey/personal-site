const frontMatter = require('front-matter');
const { render: renderHTML } = require('mustache');
const marked = require('marked');
const { gfmHeadingId } = require('marked-gfm-heading-id');
const cssnano = require('cssnano');
const postcss = require('postcss')([cssnano]);

marked.use(gfmHeadingId({ prefix: '' }));

const compileMD = (fileContent) => {
  return marked.parse(fileContent, { gfm: true });
};

const minifyCSS = async (fileContent) => {
  return await postcss.process(fileContent, { from: undefined }).then(({ css }) => css);
};

const parseMetadata = (fileContent) => {
  const { attributes: meta, body: content } = frontMatter(fileContent);

  return { meta, content };
};

module.exports = {
  compileMD,
  minifyCSS,
  parseMetadata,
  renderHTML
};