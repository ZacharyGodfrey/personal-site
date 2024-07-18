import emojilib from 'emojilib' assert { type: "json" };

const lookup = emojilib.reduce((result, { alias, unicode }) => {
  [].concat(alias).forEach((name) => {
    result[`:${name}:`] = unicode; // `<span style="font-family:emoji,serif;">${unicode}</span>`;
  });

  return result;
}, {});

export const emojify = (input, transform) => {
  return input.replace(/:[\w\-+]+:/g, (tag) => {
    const value = lookup[tag] || tag;

    return transform ? transform(value) : value;
  });
};
