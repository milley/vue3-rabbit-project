import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);
    const addCart = (goods) => {
      const item = cartList.value.find((item) => item.skuId === goods.skuId);
      if (item) {
        item.count++;
      } else {
        cartList.value.push(goods);
      }
    };
    const delCart = (skuId) => {
      const idx = cartList.value.findIndex((item) => item.skuId === skuId);
      cartList.value.splice(idx, 1);
    };
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      item.selected = selected;
    };
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    );
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
      cartList,
      addCart,
      delCart,
      singleCheck,
      allCheck,
      allCount,
      allPrice,
      selectedCount,
      selectedPrice,
      isAll,
    };
  },
  {
    persist: true,
  }
);
