<template>
  <v-container fluid>
    <v-row data-aos="zoom-in-down">
      <v-col>
        <h2>Best Fashion Brand For You!</h2>
        <v-carousel v-if="items.length" hide-delimiter-background show-arrows-on-hover style="height: 350px; width: 100%;" align="center">
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
        <v-carousel v-if="smartPhones.length" hide-delimiter-background show-arrows-on-hover style="height: 350px; width: 100%;" align="center">
          <v-carousel-item v-for="(group, index) in groupedSmartPhones" :key="index">
            <v-row class="d-flex align-center justify-center fill-height" style="width: 100%;">
              <v-col v-for="(phone, idx) in group" :key="idx" cols="3">
                <v-card>
                  <v-img :src="phone.imgLink" height="200px" class="fill-card"></v-img>
                  <v-card-title>{{ phone.name }}</v-card-title>
                  <v-card-subtitle>{{ phone.price }}</v-card-subtitle>
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
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      smartPhones: [],
    };
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
  created() {
    this.fetchPhones();
    this.fetchBrandItems();
  },
  methods: {
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
    }
  }
};
</script>

<style scoped>
.fill-card {
  object-fit: cover;
  width: 100%;
}

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

.v-row {
  width: 100%;
}
</style>
