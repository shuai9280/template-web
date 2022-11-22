/*
 * @Date: 2022-10-31 14:43:48
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-07 16:44:25
 * @FilePath: \vue-ts\src\stores\modules\userInfo.ts
 */
import { ref, computed } from "vue";
import {defineStore} from 'pinia'

export const userInfoStore = defineStore('userInfo', ()=>{
  // 用户的类型声明文件
interface IUser {
  name: string;
  age: number;
}
  const userInfo = ref({} as IUser)

  const userInfoNow = computed(() => userInfo.value)


  function userInfoSet (data) {
    userInfo.value = data
  }

  function userInfoChange (data) {
    console.log(userInfo.value.name, 'userInfo', userInfo.value[data.key])
    userInfo.value[data.key] = data.value
  }
  return { userInfo,userInfoNow, userInfoSet, userInfoChange};
})