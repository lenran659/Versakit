import * as sass from 'sass'
import * as fs from 'fs'
import * as path from 'path'
import type { Plugin } from 'vite'

const extractDarkStyles: Plugin = {
  name: 'vite-plugin-extract-dark',
  transform(code: string, id: string): string | null | undefined {
    // 仅处理.scss 文件
    if (path.extname(id) === '.scss') {
      try {
        // 编译 SCSS 为 CSS
        const compiledCss = sass.compileString(code).css
        let darkCss = ''
        let modifiedCss = ''
        // 利用正则表达式匹配.dark 样式块
        const darkRegex = /\.dark\s*\{([\s\S]*?)\}/g
        let match: RegExpExecArray | null
        let lastIndex = 0
        // 查找所有匹配的.dark 样式块
        while ((match = darkRegex.exec(compiledCss)) !== null) {
          // 保存.dark 样式块到 darkCss
          darkCss += match[0] + '\n'
          // 保存匹配之前的部分到 modifiedCss
          modifiedCss += compiledCss.slice(lastIndex, match.index)
          lastIndex = darkRegex.lastIndex
        }
        // 保存剩余部分
        modifiedCss += compiledCss.slice(lastIndex)

        // 将提取的.dark 样式保存到单独的文件
        const darkCssFilePath = path.join(path.dirname(id), 'dark-styles.css')
        fs.writeFileSync(darkCssFilePath, darkCss)

        return modifiedCss
      } catch (error) {
        console.error(`Error compiling SCSS file ${id}:`, error)
        return code
      }
    }
    return code
  },
}

export default extractDarkStyles
