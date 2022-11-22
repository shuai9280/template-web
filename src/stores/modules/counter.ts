/*
 * @Date: 2022-10-28 16:57:24
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-03 13:59:11
 * @FilePath: \vue-ts\src\stores\modules\counter.ts
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {LocalStorageService} from '../storage'

console.log(LocalStorageService, 'LocalStorageService')
console.log(LocalStorageService.get('counter'), 'get')

export const useCounterStore = defineStore('counter', () => {
  const count =  ref(0)
  count.value = LocalStorageService.get('counter') || 0

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
    LocalStorageService.set('counter', count.value)
  }

  return { count, doubleCount, increment }
})
