import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'





import fs from 'fs'
import path from 'path'

/**
 * 遍历目录并返回所有 .html 文件的路径数组
 * @param {string} dir - 要遍历的目录路径
 * @param {Array<string>} results - 存储找到的 HTML 文件路径的数组
 */
function findHtmlFiles(dir: string, results = [] as any[]) {
  fs.readdirSync(dir).forEach((file: any) => {
    const filePath = path.join(dir, file) as string
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      // 如果是目录，则递归调用自身
      // findHtmlFiles(filePath, results)
    } else if (path.extname(file) === '.html' && file !== "index.html") {
      // 如果是 .html 文件，则将其路径添加到结果数组中
      results.push({
        file,
        birthtime: stat.birthtime
      })
    }
  })
  return results

}

// 获取当前工作目录
const currentDir = process.cwd()

// 查找所有 HTML 文件
let htmlFiles = findHtmlFiles(currentDir)
htmlFiles = htmlFiles.sort((a, b) => b.birthtime - a.birthtime).map(item => item.file)


// 打印所有找到的 HTML 文件
// htmlFiles.forEach(htmlFile => {
//   console.log(`htmlFile`, htmlFile)
// })
// console.log(`htmlFile`, 'over')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],

  define: {
    __HTML_FILES__: JSON.stringify(htmlFiles),
  },

})
