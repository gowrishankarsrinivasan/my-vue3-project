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
// import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent,
    // HomeComponent
  },
};
</script>

<style></style>
