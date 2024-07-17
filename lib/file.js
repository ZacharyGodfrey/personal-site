const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');

const resolve = (filePath) => path.resolve(filePath);
const listFiles = (pattern) => glob.sync(pattern, { cwd: resolve('./') });
const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));

module.exports = {
  resolve,
  listFiles,
  readFile,
  writeFile,
  emptyFolder,
  copyFolder
};