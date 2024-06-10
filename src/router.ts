import { createRouter, createWebHistory } from "vue-router";

import ProductDetails from "./pages/ProductDetails.vue";
import Cart from "./pages/Cart.vue";
import Home from "./pages/Home/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/cart", component: Cart },
  { path: "/product/:id", component: ProductDetails },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
