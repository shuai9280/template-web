/*
 * @Date: 2022-11-07 17:10:36
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-07 17:18:08
 * @FilePath: \vue-ts\src\mock\mockProdServer.ts
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import index from './index'

export function setupProdMockServer () {
  createProdMockServer([...index])
}