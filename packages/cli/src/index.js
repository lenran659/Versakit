#!/usr/bin/env node

// 导入 commander 包用于构建命令行界面
import { Command } from 'commander'
import { createNewFolder } from './script/new'
import { info } from './script/info'

function main() {
  const program = new Command()
  // 定义 --help 命令对应的帮助信息
  program
    .name('v')
    .description('Versakit命令行工具')
    .version('0.2.1')
    .action(() => {
      info()
    })

  // 定义创建新文件夹对应的命令
  program
    .command('new')
    .description('创建一个新文件夹')
    .argument('<folderName>', '要创建的文件夹名称')
    .action((folderName) => {
      createNewFolder(folderName)
    })
    .addHelpText('after', '\n注意：文件夹名称只能包含字母、数字和下划线。')

  program.parse(process.argv)
}

main()
