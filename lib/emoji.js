// Repo: https://github.com/ricealexander/emoji-list
// Gist: https://gist.github.com/ricealexander/ae8b8cddc3939d6ba212f953701f53e6

const EMOJI_URL = 'https://raw.githubusercontent.com/ricealexander/emoji-list/main/emojis.json';

const emoji = await fetch(EMOJI_URL).then(res => res.json());

const lookup = emoji.reduce((result, { alias, unicode }) => {
  [].concat(alias).forEach((name) => {
    result[`:${name}:`] = unicode;
  });

  return result;
}, {});

export const emojify = (input, transform) => {
  return input.replace(/:[\w\-+]+:/g, (tag) => {
    const value = lookup[tag] || tag;

    return transform ? transform(value) : value;
  });
};
