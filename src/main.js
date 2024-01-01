import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

import { useIntersectionObserver } from "@vueuse/core";
import { componentPlugin } from "@/components";

// 测试接口函数
// import { getCategory } from '@/apis/testAPI'

// getCategory().then(res => {
//     console.log(res)
// })
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(componentPlugin);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // el: 指令绑定的元素 img
    // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
    // console.log(el, binding.value);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      // console.log(isIntersecting);
      if (isIntersecting) {
        el.src = binding.value;
      }
    });
  },
});
