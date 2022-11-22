<!--
 * @Date: 2022-10-28 16:57:24
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-22 15:47:02
 * @FilePath: \template-web\src\views\AboutView.vue
-->
<script setup lang="ts">
import { ref, provide, reactive } from 'vue'
import componentA from '@/components/about/component-a.vue'

const parentMsg = ref<string>('我是父级数据')
let obj = reactive({
  name: 'tom',
  age: 14
})
provide('parentObj', obj)
const changeParentMsg = () => {
  obj.age++
}

provide('parentMsg', parentMsg)
provide('changeParentMsg', changeParentMsg)
</script>
<template>
  <div class="about">
    <componentA msg="数据A" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
