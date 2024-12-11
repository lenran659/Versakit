// 导入相关模块和库
import colors from 'colors'
import fs from 'fs-extra'
import path from 'path'

// 定义创建新文件夹以及对应文件的逻辑
export const createNewFolder = (folderName) => {
  const targetFolderPath = path.join('packages', 'ui', 'components', folderName)
  // 创建文件夹
  fs.mkdirpSync(targetFolderPath)
  // 创建src文件夹
  const srcFolderPath = path.join(targetFolderPath, 'src')
  fs.mkdirpSync(srcFolderPath)
  // 创建type文件夹
  const typeFolderPath = path.join(targetFolderPath, 'type')
  fs.mkdirpSync(typeFolderPath)

  // 创建index.ts文件并写入内容
  const indexTsPath = path.join(targetFolderPath, 'index.ts')
  const indexTsContent = `import { withInstall } from '../../utils/withinstall';
        import ${folderName} from './src/index.vue';

        const V${folderName} = withInstall(${folderName});

        export default V${folderName};`
  fs.writeFileSync(indexTsPath, indexTsContent)

  console.log(
    colors.green(`已成功创建名为${folderName}的文件夹及相关文件内容。`),
  )
}