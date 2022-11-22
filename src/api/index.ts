/*
 * @Date: 2022-10-28 14:22:37
 * @LastEditors: SiJia
 * @LastEditTime: 2022-10-29 11:29:19
 * @FilePath: \vue-ts\src\api\index.ts
 */

/**
 * @method 自动化注册api并导出
 * @returns 所有的api模块，在main.ts里导入使用
 */

// 引入所有的api.ts模块
const files = import.meta.glob('./modules/*.ts', { eager: true })
const models: any = {}
// console.log(files, 'files')

for (const key in files) {
  try {
    const keys = {}
    const obj :any = files[key]
    for (const v in obj) {
      // console.log(files[key], 'files[key]')
      Object.assign(keys, { [v]: obj[v] })
    }
    models[key.replace(/(\.\/modules\/|\.ts)/g, '')] = keys
  } catch {
    throw new Error(`${key}模块导出失败`)
  }
}
// console.log(models, 'models')
export default models
