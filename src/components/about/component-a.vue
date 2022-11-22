<script setup lang="ts">
import { getCurrentInstance } from "vue";
// import { storeToRefs } from 'pinia';
// import appStore from '@/stores';

defineProps<{
  msg: string;
}>();

const {
  appContext: {
    config: { globalProperties },
  },
}: any = getCurrentInstance();

console.log(globalProperties);
// const { count, doubleCount } = storeToRefs(appStore.useCounterStore);
// 303660
</script>

<template>
  <div class="c_a">
    <p>子组件数据a：{{ msg }}</p>
    <componentAA msg-a="数据A-A" />
  </div>
</template>

<style scoped>
.c_a {
  background: #ddf;
}
</style>
