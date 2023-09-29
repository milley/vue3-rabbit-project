<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <RouterLink to="/" class="goods-item">
    <img v-img-lazy="goods.picture" alt="" />
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
  </RouterLink>
</template>

<style scoped lang="scss">
.goods-list {
  width: 990px;
  display: flex;
  flex-wrap: wrap;

  li {
    width: 240px;
    height: 300px;
    margin-right: 10px;
    margin-bottom: 10px;

    &:nth-last-child(-n + 4) {
      margin-bottom: 0;
    }

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}
</style>
