<template>
  <v-app>
    <v-main>
      <NavbarComponent />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
      <FooterComponent />
    </v-main>
  </v-app>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style></style>
