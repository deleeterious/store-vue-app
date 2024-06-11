<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "../store/CartStore";
import { RouterLink } from "vue-router";

const store = useCartStore();
const { cart } = storeToRefs(store);
</script>

<template>
  <div class="flex justify-between py-5 px-8">
    <h1 class="text-2xl font-medium">Store</h1>
    <RouterLink to="/cart"
      ><h1 class="text-xl">
        Cart{{ cart.length ? ` (${cart.length})` : "" }}
      </h1></RouterLink
    >
  </div>
</template>
