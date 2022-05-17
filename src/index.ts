/*
 * @Author: vickiWu
 * @Date: 2022-05-17 13:35:32
 * @LastEditTime: 2022-05-17 14:16:28
 * @LastEditors: vickiWu
 * @Description:
 * @FilePath: \sdk-ts\src\index.ts
 */
/**
 * 这是一个测试Class,调用方法如下：
 * ```typescript
 * // We can initialize like this
 * const sdk = new frontendSdk();
 * ```
 */
/**
 * @description:        用以初始化
 * @param {string} id   传参的ID
 * @param {string} url  建立链接的ID
 * @return {*}
 */
export class frontendSdk {
  initConfig(id: string, url: string) {
    console.log('%c 🍻 id: ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', id, url);
  }
}
