import frontMatter from 'front-matter';
import Mustache from 'mustache';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import postcss from 'postcss';
import cssnano from 'cssnano';

marked.use(gfmHeadingId({ prefix: '' }));

const cssNano = postcss([cssnano]);

export const renderMustache = Mustache.render;

export const renderMD = (fileContent) => {
  return marked.parse(fileContent, { gfm: true });
};

export const renderCustomTags = (fileContent) => {
  const tags = {
    '(section': '<section>',
    'section)': '</section>',
    '(card': '<div class="card">',
    'card)': '</div>',
  };

  return Object.entries(tags).reduce((text, [key, value]) => {
    return text.replaceAll(`<p>${key}</p>`, value);
  }, fileContent);
};

export const minifyCSS = async (fileContent) => {
  return await cssNano.process(fileContent, { from: undefined }).then(({ css }) => css);
};

export const parseMetadata = (fileContent) => {
  const { attributes: meta, body: content } = frontMatter(fileContent);

  return { meta, content };
};