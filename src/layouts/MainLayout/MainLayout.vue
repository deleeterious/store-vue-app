<script setup lang="ts">
import Header from "../../components/Header.vue";
</script>

<template>
  <Header />
  <div class="grid grid-cols-[250px,1fr]">
    <div class="">Sidebar</div>

    <div>
      <slot />
    </div>
  </div>
</template>
