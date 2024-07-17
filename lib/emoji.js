const EMOJI_URL = `https://raw.githubusercontent.com/ricealexander/emoji-list/main/emojis.json`;
const TAG_REGEX = /:[\w\-+]+:/g;

const lookup = {};

(async () => {
  const emojiData = await fetch(EMOJI_URL).then((res) => res.json());

  emojiData.forEach(({ alias, unicode }) => {
    [].concat(alias).forEach((name) => {
      lookup[`:${name}:`] = unicode;
    });
  });
})();

exports.emojify = (input) => input.replace(TAG_REGEX, (tag) => lookup[tag] || tag);