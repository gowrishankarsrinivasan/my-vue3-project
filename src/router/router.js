import { createRouter, createWebHashHistory } from "vue-router";

import CartComponent from "@/components/CartComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
import DisplayCartItems from "@/components/DisplayCartItems.vue";
const routes = [
    {path: '/Home', component: HomeComponent},
    { path: '/displayCart', name: "CartComponent", component: CartComponent },
    { path: '/cart', name: "DisplayCartItems", component: DisplayCartItems },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;