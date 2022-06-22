const path = require('path')

process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webpack test case', () => {
  // 执行测试的时候，直接跑下面用例
  require('./unit/webpack-common-test')
})