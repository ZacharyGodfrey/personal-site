import path from'path';
import fs from'fs-extra';
import glob from'glob';

export const resolve = (filePath) => path.resolve(filePath);
export const listFiles = (pattern) => glob.sync(pattern, { cwd: resolve('./') });
export const readFile = (filePath, encoding) => fs.readFileSync(resolve(filePath), { encoding: encoding || 'utf-8' });
export const writeFile = (filePath, content, encoding) => fs.outputFileSync(resolve(filePath), content, { encoding: encoding || 'utf-8' });
export const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
export const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));