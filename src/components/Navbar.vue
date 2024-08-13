<template>
  <v-app-bar>
    <v-app-bar-nav-icon class="d-sm-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>My Store</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Only show on medium and larger screens -->
    <router-link to="/home">
      <v-btn text class="d-none d-md-inline-flex">Home</v-btn>
    </router-link>
    <router-link to="/shop">
      <v-btn text class="d-none d-md-inline-flex">Shop</v-btn>
    </router-link>
    <router-link to="/blog">
      <v-btn text class="d-none d-md-inline-flex">Blog</v-btn>
    </router-link>
    <router-link to="/cart">
      <v-btn text class="d-none d-md-inline-flex">Cart</v-btn>
    </router-link>

    <!-- Menu icon for smaller screens -->
    <v-btn icon="mdi-dots-vertical" class="d-md-none" @click.stop="drawer = !drawer"></v-btn>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list>
        <v-list-item v-for="item in items" :key="item.value" :to="{ path: '/' + item.value }" router>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', value: 'home' },
        { title: 'Shop', value: 'shop' },
        { title: 'Blog', value: 'blog' },
        { title: 'Cart', value: 'cart' },
      ],
    };
  },
};
</script>

<style>
.navbar-container {
  padding: 0;
  margin: 0;
}
</style>
