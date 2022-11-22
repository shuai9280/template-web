<!--
 * @Date: 2022-11-22 15:06:14
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-22 15:37:07
 * @FilePath: \template-web\src\views\HomeView.vue
-->
<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { ref, getCurrentInstance } from 'vue'
import appStore from '@/stores'
import { storeToRefs } from 'pinia'

const {
  appContext: {
    config: { globalProperties }
  }
}: any = getCurrentInstance()

globalProperties.$api.common.getName().then(res => {
  console.log(res, 'res-getName')
})
const { count, doubleCount } = storeToRefs(appStore.useCounterStore)
console.log(count, 'useCounterStore-count')
const { increment } = appStore.useCounterStore
console.log(doubleCount, 'useCounterStore-doubleCount')

const { userInfo } = storeToRefs(appStore.userInfoStore)
const { userInfoSet, userInfoChange } = appStore.userInfoStore

function toSetUserInfo() {
  console.log('toSetUserInfo')
  const data = {
    name: 'aha',
    age: '18',
    sex: 'woman'
  }
  userInfoSet(data)
}
function toChangeUserInfo(key, value) {
  userInfoChange({ key: key, value: value })
}
</script>

<template>
  <main>
    <h1 class="green">{{ userInfo.name }}</h1>
    <h1 class="green">{{ userInfo.age }}</h1>
    <button @click="toSetUserInfo">点我设置我的信息</button>
    <button @click="toChangeUserInfo('name', 'hhh')">点我修改我的名字</button>
    <button @click="toChangeUserInfo('age', userInfo.age ? ++userInfo.age : 0)">
      点我修改我的年龄
    </button>
    <br />

    <span ref="ageBox">{{ userInfo.age }}</span>
    <span ref="nameBox">{{ userInfo.name }}</span>

    <br />
    <h1 class="green">doubleCount:{{ doubleCount }}</h1>
    <h1 class="green">count：{{ count }}</h1>
    <button @click="increment">点我</button>
    <!-- <TheWelcome /> -->
  </main>
</template>
