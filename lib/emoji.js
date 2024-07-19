import { readFile } from './file.js';

// Repo: https://github.com/ricealexander/emoji-list
// Gist: https://gist.github.com/ricealexander/ae8b8cddc3939d6ba212f953701f53e6
// JSON: https://raw.githubusercontent.com/ricealexander/emoji-list/main/emojis.json
const emoji = JSON.parse(readFile('assets/emoji.json'));

const lookup = emoji.reduce((result, { alias, unicode }) => {
  [].concat(alias).forEach((name) => {
    result[`:${name}:`] = unicode;
  });

  return result;
}, {});

const transform = (value) => {
  return `<span style="font-family:emoji,serif;">${value}</span>`;
};

export const renderEmoji = (input) => {
  return input.replace(/:[\w\-+]+:/g, (tag) => {
    return lookup[tag] ? transform(lookup[tag]) : tag;
  });
};
