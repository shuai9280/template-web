/*
 * @Date: 2022-11-22 15:06:14
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-22 15:17:34
 * @FilePath: \template-web\vite.config.ts
 */
import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from "vite";
import type { ConfigEnv, UserConfigExport } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: './src/mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && true
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        // injectCode: `
        //   import { setupProdMockServer } from '@/mock';
        //   setupProdMockServer();
        // `,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
