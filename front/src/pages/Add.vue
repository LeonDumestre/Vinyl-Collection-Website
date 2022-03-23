<template>
  <h2>Ajouter un vinyle</h2>
  <form @submit.prevent="addVinyl">
    <input type="text" placeholder="name" v-model="name" required />
    <input type="file" required />
    <input type="text" placeholder="artist" v-model="artist" required />
    <input type="text" placeholder="label" v-model="label" required />
    <input type="date" placeholder="release_date" v-model="release_date" required />
    <input type="date" placeholder="purchase_date" v-model="purchase_date" required />
    <input type="number" placeholder="release_price" v-model="release_price" required />
    <input type="number" placeholder="current_price" v-model="current_price" required />
    <input type="number" placeholder="quantity" v-model="quantity" required />
    <button type="submit">Ajouter le vinyle</button>
  </form>
</template>

<script>
import Vinyl from '../components/Vinyl.vue';
export default {
  name: "Add",
  components: {
    Vinyl
  },
  data: () => ({
    name: '',
    artist: '',
    label: '',
    release_date: 0,
    purchase_date: 0,
    release_price: 0,
    current_price: 0,
    quantity: 1
  }),
  methods: {
    addVinyl() {
      this.Vinyl.push({name: this.value, checked: false});
      this.value = '';
    }
  }
}
</script>

<style scoped>

</style>