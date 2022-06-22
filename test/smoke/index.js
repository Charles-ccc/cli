const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: '10000ms'
})

// 进入 template 目录
process.chdir(path.join(__dirname, 'template'))
// 删掉 dist 文件
rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod.js')
  // 执行配置文件
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err)
      // 抛出错误码，并退出
      process.exit(2)
    }
    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false
    }))

    console.log('Webpack build success, begin run mocha test.')
    // 加入测试用例
    mocha.addFile(path.join(__dirname, 'html-test.js'))
    mocha.addFile(path.join(__dirname, 'css-js-test.js'))
    // 执行用例
    mocha.run()
  })
})