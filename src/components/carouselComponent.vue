<template>
    <v-carousel class="pt-10" height="400" show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item v-for="(banner, i) in banners" :key="i">
            <v-img :src="banner" class="carousel-image">
            </v-img>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
// import B1 from "../assets/Banners/B1.jpg";
// import B2 from "../assets/Banners/B2.jpg";
import B3 from "../assets/Banners/B3.jpg";
import B4 from "../assets/Banners/B4.jpg";
import B5 from "../assets/Banners/B5.jpg";
// import B6 from "../assets/Banners/B6.jpg";
// import B7 from "../assets/Banners/B7.jpg";

export default {
    name: 'carouselComponent',

    data() {
        return {
            banners: [
                B4, B5, B3
            ]
        }
    }
}
</script>

<style scoped>
.carousel-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
}
</style>
