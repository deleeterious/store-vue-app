<script setup lang="ts">
import { Product } from "../../../../types";

defineProps<{ data: Product }>();
</script>

<template>
  <div>
    <div>{{ data.name }}</div>
    <div>{{ data.cost }}</div>
  </div>
</template>
