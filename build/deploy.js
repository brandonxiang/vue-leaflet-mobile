const path = require('path');
const shell = require('shelljs');

const sourcePath = path.resolve(__dirname, '../www/*');
const targetPath = path.resolve(__dirname, '../../../deploy/website');

shell.rm('-R', `${targetPath}/*`);
shell.cp('-R', sourcePath, targetPath);
