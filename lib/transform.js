import frontMatter from 'front-matter';
import { render } from 'mustache';
import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import postcss from 'postcss';
import cssnano from 'cssnano';

marked.use(gfmHeadingId({ prefix: '' }));

const cssNano = postcss([cssnano]);

export const renderHTML = render;

export const compileMD = (fileContent) => {
  return marked.parse(fileContent, { gfm: true });
};

export const minifyCSS = async (fileContent) => {
  return await cssNano.process(fileContent, { from: undefined }).then(({ css }) => css);
};

export const parseMetadata = (fileContent) => {
  const { attributes: meta, body: content } = frontMatter(fileContent);

  return { meta, content };
};