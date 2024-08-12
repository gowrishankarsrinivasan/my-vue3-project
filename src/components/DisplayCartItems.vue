<template>
    <div>
        <v-container>
            <v-row class="text-center pb-10">
                <v-col>
                    <h1 class="display-1 font-weight-bold">Shopping Cart</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col v-for="item in cartItems" :key="item.id" cols="12" sm="6" md="4">
                    <v-card>
                        <v-img :src="item.image" height="200px"></v-img>
                        <v-card-title>{{ item.name }}</v-card-title>
                        <v-card-subtitle>{{ item.category }}</v-card-subtitle>
                        <v-card-text>
                            <p>${{ item.price }} per {{ item.unit }}</p>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CartComponent',
    computed: {
        ...mapGetters(['cartItems'])
    }
};
</script>

<style scoped>
.v-card {
    margin-bottom: 20px;
}
</style>
