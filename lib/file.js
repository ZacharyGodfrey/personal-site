import path from'path';
import fs from'fs-extra';
import { globSync } from'glob';

const resolve = (filePath) => path.resolve(filePath);

export const listFiles = (pattern) => globSync(pattern, { cwd: resolve('.') });
export const readFile = (filePath, encoding = 'utf-8') => fs.readFileSync(resolve(filePath), { encoding });
export const writeFile = (filePath, content, encoding = 'utf-8') => fs.outputFileSync(resolve(filePath), content, { encoding });
export const emptyFolder = (folderPath) => fs.emptyDirSync(resolve(folderPath));
export const copyFolder = (srcPath, destPath) => fs.copySync(resolve(srcPath), resolve(destPath));