<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../../../../store/CartStore";
import { Product } from "../../../../types";
import { RouterLink } from "vue-router";

const props = defineProps<{ data: Product }>();

const store = useCartStore();
const { cart } = storeToRefs(store);
const { pushToCart } = store;

const handleAddToCart = () => {
  pushToCart(props.data);
};
</script>

<template>
  <RouterLink :to="`/product/${data.id}`">
    <div class="w-full border-black border-2">
      <div>{{ data.name }}</div>
      <div>{{ data.cost }}</div>
      <button
        v-if="!cart.find((item) => item.id === data.id)"
        class="button"
        @click="handleAddToCart"
      >
        add to cart
      </button>
    </div>
  </RouterLink>
</template>
