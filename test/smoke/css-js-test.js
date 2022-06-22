// 检测css和js文件是否正常生成
const glob = require('glob-all')

describe('Checking generated css js files', () => {
  if ('should generated css js files', done => {
    // 借助glob，以同步的方式判断文件是否生成，_* 匹配哈希
    const files = glob.sync([
      // 测试用例的 output 文件
      './dist/index_*.js',
      './dist/index_*.css',
      './dist/search_*.html',
      './dist/search_*.css'
    ])

    if (files.length > 0) {
      done()
    } else {
      throw new Error('no css js files generated')
    }
  })
})