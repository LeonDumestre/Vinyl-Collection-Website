<template>
  <div class="container form">
  <h2>Ajouter un vinyle</h2>
    <form @submit.prevent="addVinyl">

      <div class="row">
        <h4>Informations du vinyle</h4>
        <input type="text" placeholder="Nom de l'album" v-model="name" required />
        <input type="file" required />
        <input type="text" placeholder="Nom de l'artiste / groupe" v-model="artist" required />
        <input type="text" placeholder="Label de l'album" v-model="label" required />
        <input type="date" placeholder="Date de sortie" v-model="release_date" required />
        <input type="number" placeholder="Prix à la sortie" v-model="release_price" required />
        <input type="number" placeholder="Prix actuel" v-model="current_price" />
      </div>

      <div class="row">
        <h4>Acquisition</h4>
        <input type="date" placeholder="Date d'acquisition" v-model="purchase_date" />
        <input type="number" placeholder="Prix d'acquisition" v-model="current_price" />
        <input type="number" placeholder="Quantité" v-model="quantity" required />
      </div>

      <button type="submit">Ajouter le vinyle</button>
    </form>
  </div>
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
    purchase_price: 0,
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