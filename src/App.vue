<template>
  <v-app>
    <NavbarComponent />
    <carouselComponent/>
    <ProductComponent />
    <v-footer color="primary" dark>
      <v-container>
        <v-row>
          <v-col class="text-center">
            &copy; 2024 My E-Commerce App. All rights reserved.
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import ProductComponent from './components/ProductComponent.vue';
import carouselComponent from './components/carouselComponent.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    ProductComponent,
    carouselComponent


  },
};
</script>

<style>
/* Global styles can be added here */
</style>
