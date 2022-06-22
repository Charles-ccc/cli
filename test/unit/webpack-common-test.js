const assert = require('assert')

describe('webpack.common.js test case', () => {
  const commonConfig = require('../../lib/webpack.common.js')
  // console.log(commonConfig)
  it('entry', () => {
    assert.equal(commonConfig.entry.index, '/Users/lc/learn/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(commonConfig.entry.search, '/Users/lc/learn/builder-webpack/test/smoke/template/src/search/index.js')
  })
})