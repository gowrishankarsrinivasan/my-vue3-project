<template>
  <v-app>
    <NavbarComponent />
    <carouselComponent />
    <ProductComponent />
    <CartComponent />

    <ProductCurosel />
    <FooterComponent />
    <DisplayCartItems />
  </v-app>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import ProductComponent from './components/ProductComponent.vue';
import carouselComponent from './components/carouselComponent.vue';
import CartComponent from './components/CartComponent.vue';
import ProductCurosel from './components/ProductCurosel.vue';
import FooterComponent from './components/FooterComponent.vue';
import DisplayCartItems from './components/DisplayCartItems.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    ProductComponent,
    carouselComponent,
    CartComponent,
    ProductCurosel,
    FooterComponent,
    DisplayCartItems
  },
};
</script>

<style>
/* Global styles can be added here */
</style>
