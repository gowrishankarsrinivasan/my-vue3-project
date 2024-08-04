<template>
  <v-container fluid >
    <v-row>
      <v-col >
        <h2>Best Fashion Brand For You!</h2>
        <v-carousel hide-delimiter-background show-arrows-on-hover style="background-color: aqua;" align="center">
          <v-carousel-item v-for="(group, index) in groupedItems" :key="index" >
            <v-row class="d-flex align-center justify-center fill-height" >
              <v-col v-for="(item, idx) in group" :key="idx" cols="4" >
                <v-card >
                  <v-img :src="item.image" height="200px"></v-img>
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image: 'path/to/image1.jpg',
          title: 'Metronaut, Adrenex...',
          subtitle: 'Under 349/-',
        },
        {
          image: 'path/to/image2.jpg',
          title: 'Mobile Pouches',
          subtitle: 'From ₹99',
        },
        {
          image: 'path/to/image3.jpg',
          title: 'Branded Kurtas',
          subtitle: 'From ₹399',
        },
        {
          image: 'path/to/image4.jpg',
          title: 'Metro, Mochi ...',
          subtitle: 'Under ₹999',
        },
        {
          image: 'path/to/image5.jpg',
          title: 'Sabse Badi Deals',
          subtitle: 'Min 70% Off',
        },
        {
          image: 'path/to/image6.jpg',
          title: 'Discounts You Can\'t Miss!',
          subtitle: 'Min 60%+Extra 10% Off',
        },
        {
          image: 'path/to/image7.jpg',
          title: 'Dhamaka Offers On Brands!',
          subtitle: 'Under ₹399',
        },
      ],
    };
  },
  computed: {
    groupedItems() {
      // Group items into arrays of 3
      const groups = [];
      for (let i = 0; i < this.items.length; i += 3) {
        groups.push(this.items.slice(i, i + 3));
      }
      return groups;
    },
  },
};
</script>

<style scoped>
v-card {
  text-align: center;
}
.v-carousel__controls {
  display: none;
}
.v-carousel__prev,
.v-carousel__next {
  top: 50%;
  transform: translateY(-50%);
}
.v-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
