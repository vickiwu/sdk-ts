/**
 * @Author: vickiWu
 * @Date: 2022-05-17 13:34:51
 * @LastEditTime: 2022-05-17 14:17:16
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \sdk-ts\scripts\constants.js
 */
const path = require('path');
const resolve = path.resolve;
const isDev = process.env.NODE_ENV !== 'production';
const PROJECT_PATH = resolve(__dirname, '../');

module.exports = {
  PROJECT_PATH,
  resolve,
  isDev,
};
