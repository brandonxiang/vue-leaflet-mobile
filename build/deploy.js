var path = require('path')
var shell = require('shelljs')

var sourcePath = path.resolve(__dirname, '../www/*')
var targetPath = path.resolve(__dirname, '../../../deploy/website')

shell.rm('-rf', targetPath+'/*')
shell.mkdir('-p', targetPath)
shell.cp('-R', sourcePath, targetPath)
