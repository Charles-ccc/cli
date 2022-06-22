// 检测html文件是否正常生成
const glob = require('glob-all')

describe('Checking generated html files', () => {
  if ('should generated html files', done => {
    // 借助glob，以同步的方式判断文件是否生成
    const files = glob.sync([
      // 测试用例的 output 文件
      './dist/index.html',
      './dist/search.html'
    ])

    if (files.length > 0) {
      done()
    } else {
      throw new Error('no html files generated')
    }
  })
})