<!--
 * @Date: 2022-11-04 16:00:17
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-22 15:49:16
 * @FilePath: \template-web\src\components\about\component-a-a.vue
-->
<script setup lang="ts">
import { getCurrentInstance, inject, ref } from 'vue'
// import { storeToRefs } from 'pinia';
import type { Ref } from 'vue'
// import appStore from '@/stores';
const {
  appContext: {
    config: { globalProperties }
  }
}: any = getCurrentInstance()
defineProps<{
  msgA: string
}>()

// const parantMsg = inject<string>("parantMsg");
let parentMsg = inject<Ref<string>>('parentMsg', ref('父级数据'))
// const color = inject<Ref<string>>('color',ref('red'));
interface parentObjInterface {
  name: string
  age: number
}
let parentObj = inject<Ref<any>>('parentObj', ref({} as parentObjInterface))
const changeParentMsg = inject<Ref<any>>('changeParentMsg')

console.log(parentMsg, 'parentMsg', parentObj)
const change = () => {
  parentMsg.value = '修改后的parentMsg'
  parentObj['name'] = 'sb'
}

// const { count, doubleCount } = storeToRefs(appStore.useCounterStore);
</script>

<template>
  <div>
    <p>父组件数据parantMsg：{{ parentMsg }}</p>
    <p>父组件数据parentObj：{{ parentObj }}</p>
    <button @click="change">修改provide值parantMsg：</button>
    <button @click="changeParentMsg">修改provide值parantMsg的年级：</button>
    <p>子组件的子组件数据a-a：{{ msgA }}</p>
  </div>
</template>

<style scoped></style>
