/**
 * @Author: vickiWu
 * @Date: 2022-05-17 13:38:37
 * @LastEditTime: 2022-05-17 14:17:24
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \sdk-ts\scripts\webpack.prod.js
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
});
