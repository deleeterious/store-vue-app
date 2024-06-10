import { defineStore } from "pinia";
import { ref } from "vue";
import { Product } from "../types";

export const useCartStore = defineStore("cart", () => {
  const cart = ref<Product[]>([]);

  const pushToCart = (value: Product) => {
    cart.value = [...cart.value, value];
  };
  const removeFromCart = (id: number) => {
    cart.value = cart.value.filter((item) => item.id !== id);
  };

  return { cart, pushToCart, removeFromCart };
});
