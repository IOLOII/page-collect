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
// 根据文件名称格式对其中最后的 时间标识进行时间排序
const reg = /\((\d{4}_\d{1,2}_\d{1,2} \D*\d{1,2}_\d{2}_\d{2})\)\.html$/
htmlFiles = htmlFiles.sort((a, b) => {
  const aTimeMatch = a.file.match(reg)
  const bTimeMatch = b.file.match(reg)
  if (aTimeMatch && bTimeMatch) {
    const aTime = aTimeMatch[1]
    const bTime = bTimeMatch[1]
    const aTimeParsed = parseTime(aTime)
    const bTimeParsed = parseTime(bTime)
    return bTimeParsed.getTime() - aTimeParsed.getTime()
  }
  return 0
}).map(item => item.file)

// 解析时间字符串
function parseTime(timeStr: string): Date {
  const [date, time] = timeStr.split(' ')
  const [year, month, day] = date.split('_').map(Number)
  const periodMatch = time.match(/(下午|上午)/)
  const period = periodMatch ? periodMatch[0] : ''
  const timePart = time.replace(period, '')
  let [hour, minute, second] = timePart.split('_').map(Number)
  if (period === '下午' && hour < 12) {
    hour += 12
  }
  return new Date(year, month - 1, day, hour, minute, second)
}

// 打印所有找到的 HTML 文件
htmlFiles.forEach(htmlFile => {
  console.log(`htmlFile`, htmlFile)
})
// 打印所有找到的 HTML 文件
// htmlFiles.forEach(htmlFile => {
//   console.log(`htmlFile`, htmlFile)
// })
// console.log(`htmlFile`, 'over')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    port: 5173,
    host: '0.0.0.0',
    cors: true,
  },
  base: './',

  define: {
    __HTML_FILES__: JSON.stringify(htmlFiles),
  },

})
