<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
//import homePanel from './components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
  <!-- 测试面板组件 -->
  <!--
  <homePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>
      我是新鲜好物slot
    </div>
  </homePanel>

  <homePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <div>
      我是人气推荐slot
    </div>
  </homePanel>
  -->
</template>