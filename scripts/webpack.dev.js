/**
 * @Author: vickiWu
 * @Date: 2022-05-17 13:38:13
 * @LastEditTime: 2022-05-17 14:17:22
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \sdk-ts\scripts\webpack.dev.js
 */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
      openAnalyzer: false, //  阻止在默认浏览器中自动打开报告
    }),
  ],
});
