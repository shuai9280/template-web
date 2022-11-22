/*
 * @Date: 2022-11-22 15:06:14
 * @LastEditors: SiJia
 * @LastEditTime: 2022-11-22 15:32:41
 * @FilePath: \template-web\src\main.ts
 */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import api from './api'
import { registerStore } from './stores'

import "./assets/main.css";

const app = createApp(App);


app.use(createPinia());
app.use(router);

app.config.globalProperties.$api = api;
registerStore()

app.mount("#app");
