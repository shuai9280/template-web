/*
 * @Date: 2022-10-31 14:45:59
 * @LastEditors: SiJia
 * @LastEditTime: 2022-10-31 15:22:24
 * @FilePath: \vue-ts\src\stores\index.ts
 */
import { useCounterStore } from '@/stores/modules/counter'
import { userInfoStore } from '@/stores/modules/userInfo'

export interface IAppStore {
  useCounterStore: ReturnType<typeof useCounterStore>;
  userInfoStore: ReturnType<typeof userInfoStore>;
}

const appStore: IAppStore = {} as IAppStore

export const registerStore =()=>{
  appStore.useCounterStore = useCounterStore(),
  appStore.userInfoStore = userInfoStore()

}

export default appStore