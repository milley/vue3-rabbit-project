import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import { insertCartAPI, findNewCartListAPI } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    const cartList = ref([]);
    const addCart = async (goods) => {
      const { skuId, count } = goods;
      if (isLogin.value) {
        await insertCartAPI({ skuId, count });
        const res = await findNewCartListAPI();
        cartList.value = res.result;
      } else {
        const item = cartList.value.find((item) => item.skuId === goods.skuId);
        if (item) {
          item.count++;
        } else {
          cartList.value.push(goods);
        }
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
