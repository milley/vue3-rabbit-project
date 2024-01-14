import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { mergeCartAPI } from "@/apis/cart";
import { useCartStore } from "@/stores/cartStore";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref({});
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      cartStore.updateNewList();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };

    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
