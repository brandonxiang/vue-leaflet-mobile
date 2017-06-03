const path = require('path');
const shell = require('shelljs');

const sourcePath = path.resolve(__dirname, '../www/*');
const targetPath = path.resolve(__dirname, '../../../deploy/app');

shell.rm('-R', `${targetPath}/*`);
shell.cp('-R', sourcePath, targetPath);

shell.cd(targetPath);
shell.exec('git add .');
shell.exec('git commit -m "Auto commit"')
shell.exec('git push -u origin master')