<template>

  <v-layout>
    <v-app-bar style="background-color: #33ff00;">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text :to="{ path: '/home' }">Home</v-btn>
      <v-btn>shop</v-btn>
      <v-btn>Blog</v-btn>
      <v-btn>shop</v-btn>
      <v-btn>cart</v-btn>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main style="height: 100vh; background-color: var(--v-primary-base);">
      <div class="content">
        <div class="content-container">
          <div class="left-content">
            <p>Trade-in-offer</p>
            <h1>Super value deals</h1>
            <h2 data-aos="fade-up">On all products</h2>
            <h3>save more with coupons & get up to 70% off!</h3>
            <button class="shop-button" data-aos="fade-up" data-aos-delay="400">Shop Now!</button>
          </div>
        </div>
        <div class="right-img">

        </div>
      </div>
    </v-main>
  </v-layout>

</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {

  name: 'NavbarComponent',

  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),





  watch: {
    group() {
      this.drawer = false
    },
  },

  mounted() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }
}
</script>


<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  /* background: linear-gradient(135deg, #f3f3f3 25%, #e8e8e8 100%); */
}

.content-container {
  flex: 1;
  display: flex;
  width: 80%;
  height: 100%;
  text-align: left
}

.right-img {
  flex: 1;
  height: 100%;
  background-image: url("D:\E-commerce\FrontEnd\my-vue3-project\src\assets\happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-yellow-studio-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.left-content {
  /* margin-left: 0; Remove left margin if it's not needed */
  text-align: left;
  /* Align text to the left */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* Align items to the start (left side) */
}

.left-content {
  margin-left: 50px;
}

.right-content {
  margin-right: 50px;
}

img {
  height: auto;
  width: 80%;
  /* height: 500px; */
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

/* img:hover {
  transform: scale(1.05);
}
 */
.content h1 {
  z-index: 100;
  font-size: 60px;
  text-transform: capitalize;
  font-style: italic;
  letter-spacing: -1px;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  color: #333;
}

.content h1:hover {
  color: #88ff00;
}

.content p {
  z-index: 100;
  margin-top: 20px;
  font-size: 24px;
  display: block;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 300;
  cursor: pointer;
  text-transform: uppercase;
  color: rgb(100, 100, 100);
  position: relative;
}

.content p::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(136, 255, 0);
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.3, 1);
}

.content p:hover::after {
  transform: scaleX(1);
}

.shop-button {
  z-index: 100;
  margin-top: 40px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #88ff00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 1s ease-in-out, transform 1s ease-in-out;
}

.shop-button:hover {
  background-color: #6ecb00;
  transform: translateY(-5px);
}
</style>
