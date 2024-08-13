<template>
    <v-container fluid style="padding: 0; margin: 0;">
        <!-- this is the home page -->
        <v-main style="padding: 0; margin: 0;">
            <div class="content" >
                <div class="content-container">
                    <div class="left-content">
                        <h1>Super value deals</h1>
                        <h2 data-aos="fade-up">On all products</h2>
                        <h3>Save more with coupons & get up to 70% off!</h3>
                        <p>Trade-in-offer</p>
                        <button class="home-button" data-aos="fade-up" data-aos-delay="400">Shop Now!</button>
                    </div>
                </div>
                <div class="right-img"></div>
            </div>
        </v-main>

        <!-- this is the carouselComponent -->

        <v-carousel data-aos="zoom-in-down" class="pt-10" height="400" show-arrows="hover" cycle
            hide-delimiter-background>
            <v-carousel-item v-for="(banner, i) in banners" :key="i">
                <v-img :src="banner" class="carousel-image">
                </v-img>
            </v-carousel-item>
        </v-carousel>

        <v-container style="height: auto; background-color: var(--v-primary-base);">
            <v-row class="text-center pb-10">
                <v-col>
                    <h1 class="display-1 font-weight-bold">Featured Product</h1>
                    <h2 class="display-2 font-weight-light">The best products we have on sale</h2>
                </v-col>
            </v-row>
            <v-row class="pt-6">
                <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
                    <v-card data-aos="zoom-in-down">
                        <v-img :src="product.image" height="400px" width="100%"></v-img>
                        <v-card-title>{{ product.name }}</v-card-title>
                        <v-card-subtitle>{{ product.category }}</v-card-subtitle>
                        <v-card-text>
                            <v-row no-gutters align="center">
                                <v-col cols="auto">
                                    ${{ product.price }}
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="auto" class="text-right">
                                    <v-btn color="primary" outlined @click="addToCart(product)">
                                        Add to Cart
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-img :src="img"></v-img>
            </v-row> -->
        </v-container>


        <v-container fluid>
            <v-row data-aos="zoom-in-down">
                <v-col>
                    <h2>Best Fashion Brand For You!</h2>
                    <v-carousel v-if="items.length" hide-delimiter-background show-arrows-on-hover
                        style="height: 350px; width: 100%;" align="center">
                        <v-carousel-item v-for="(group, index) in groupedItems" :key="index">
                            <v-row class="d-flex align-center justify-center fill-height" style="width: 100%;">
                                <v-col v-for="(item, idx) in group" :key="idx" cols="3">
                                    <v-card>
                                        <v-img :src="item.image" height="200px" class="fill-card"></v-img>
                                        <v-card-title>{{ item.title }}</v-card-title>
                                        <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
            <v-row data-aos="zoom-in-down">
                <v-col>
                    <h2>Best Deals on SmartPhones</h2>
                    <v-carousel v-if="smartPhones.length" hide-delimiter-background show-arrows-on-hover
                        style="height: 350px; width: 100%;" align="center">
                        <v-carousel-item v-for="(group, index) in groupedSmartPhones" :key="index">
                            <v-row class="d-flex align-center justify-center fill-height" style="width: 100%;">
                                <v-col v-for="(phone, idx) in group" :key="idx" cols="3">
                                    <v-card>
                                        <v-img :src="phone.imgLink" height="200px" class="fill-card"></v-img>
                                        <v-card-title>{{ phone.name }}</v-card-title>
                                        <v-card-subtitle>${{ phone.price }}</v-card-subtitle>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../assets/Banners/Tb.png";
import { mapActions } from 'vuex'; // Import Vuex


import B3 from "../assets/Banners/B3.jpg";
import B4 from "../assets/Banners/B4.jpg";
import B5 from "../assets/Banners/B5.jpg";

export default {
    name: 'HomeComponent',
    data() {
        return {
            products: [],
            banners: [
                B4, B5, B3
            ],
            items: [],
            smartPhones: [],
            img
        };
    },
    created() {
        this.fetchProducts();
        this.fetchPhones();
        this.fetchBrandItems();
    },
    computed: {
        groupedItems() {
            const groups = [];
            for (let i = 0; i < this.items.length; i += 4) {
                groups.push(this.items.slice(i, i + 4));
            }
            return groups;
        },
        groupedSmartPhones() {
            const groups = [];
            for (let i = 0; i < this.smartPhones.length; i += 4) {
                groups.push(this.smartPhones.slice(i, i + 4));
            }
            return groups;
        },
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get('http://localhost:3000/products');
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
        async fetchPhones() {
      try {
        const response = await axios.get('http://localhost:3000/smartPhones');
        this.smartPhones = response.data;
      } catch (e) {
        console.error(e.message);
      }
    },
    async fetchBrandItems() {
      try {
        const response = await axios.get('http://localhost:3000/items');
        this.items = response.data;
      } catch (e) {
        console.error(e.message);
      }
    },
        ...mapActions(['addToCart'])
    },
    mounted() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }
};
</script>

<style>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    width: 100%;
    /* padding: 0; */
}

.content-container {
    flex: 1;
    display: flex;
    width: 80%;
    height: 100%;
    text-align: left;
}

.right-img {
    flex: 1;
    height: 100%;
    background-image: url('D:/E-commerce/FrontEnd/my-vue3-project/src/assets/happy-pretty-asian-woman-carrying-colorful-shopping-bags-isolated-yellow-studio-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.left-content {
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 50px;
}

.home-button {
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

.home-button:hover {
    background-color: #6ecb00;
    transform: translateY(-10px);
}

.v-card {
    margin-bottom: 20px;
}

.carousel-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

</style>
