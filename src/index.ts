/*
 * @Author: vickiWu
 * @Date: 2022-05-17 13:35:32
 * @LastEditTime: 2022-05-17 14:40:25
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
interface ConfigOptions {
  id: string;
  url: string;
}
class LibraryStarter {
  public id: string;

  public url: string;

  constructor(options: ConfigOptions) {
    this.id = options.id;
    this.url = options.url;
  }

  getConfig() {
    return {
      id: this.id,
      url: this.url,
    };
  }
}

export default LibraryStarter;
