<script setup>
import { onMounted } from "vue";
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutFixed from "./components/LayoutFixed.vue";
import { useCategoryStore } from "@/stores/categoryStore";

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory();
});
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!--强制销毁重建，添加key简单粗暴-->
  <!--<RouterView :key="$route.fullPath" />-->
  <RouterView />
  <LayoutFooter />
</template>
