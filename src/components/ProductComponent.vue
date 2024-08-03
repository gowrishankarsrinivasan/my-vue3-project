<template>
    <div>
        <v-container style="height: auto; background-color: var(--v-primary-base);">
            <v-row class="text-center pb-10">
                <v-col>
                    <h1 class="display-1 font-weight-bold">
                        Featured Product
                    </h1>
                    <h2 class="display-2 font-weight-light">
                        The best products we have on sale
                    </h2>
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
                                    ${{ product.price }} per {{ product.unit }}
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="auto" class="text-right">
                                    <v-btn color="primary" outlined>
                                        Add to Cart
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-img :src="img"></v-img>
            </v-row>
        </v-container>
    </div>

</template>

<script>
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../assets/Banners/Tb.png";
export default {
    name: 'ProductComponent',
    data() {
        return {
            products: [],
            img
        };
    },
    created() {
        this.fetchProducts();
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
    },
    mounted() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
    }
};
</script>

<style scoped>
.v-card {
    margin-bottom: 20px;
}
</style>