<script setup lang="ts">
import { ref } from "vue";
import { Product } from "../../../types";
import ProductCard from "./components/ProductCard.vue";

const productList = ref<Product[]>([
  { id: 1, name: "Product 1", cost: 12 },
  { id: 2, name: "Product 2", cost: 13 },
  { id: 3, name: "Product 3", cost: 14 },
  { id: 4, name: "Product 4", cost: 15 },
]);
</script>

<template>
  <div>
    <ProductCard
      v-for="product in productList"
      :data="product"
      :key="product.id"
    />
  </div>
</template>
