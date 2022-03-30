<template>
  <div class="container form">
    <h2>Ajouter un vinyle</h2>
    <form @submit.prevent="addVinyl">

      <div class="row">
        <h4>Informations du vinyle</h4>
        <input type="text" class="input-group" placeholder="Nom de l'album" v-model="name" required/>
        <input type="text" class="input-group" placeholder="Nom de l'artiste / groupe" v-model="artist" required/>
        <input type="text" class="input-group" placeholder="Label de l'album" v-model="label" required/>
        <input type="file" class="input-group" accept=".jpg" required/>
      </div>

      <div class="row">
        <div class="col-half">
          <h4>Date de sortie</h4>
          <div class="input-group">
            <div class="col-third"><input class="month" type="number" placeholder="MM" min="1" max="12" v-model="month_release_date"/></div>
            <div class="col-third"><input class="year" type="number" placeholder="AAAA" min="1940" max="3000" v-model="year_release_date"/></div>
          </div>
        </div>

        <div class="col-half">
          <h4>Prix à la sortie / actuel</h4>
          <div class="input-group">
            <div class="col-third"><input type="number" class="input-group" min="0" placeholder="Prix à la sortie" v-model="release_price"/></div>
            <div class="col-third"><input type="number" class="input-group" min="0" placeholder="Prix actuel" v-model="current_price"/></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-half">
          <h4>Date d'acquisition</h4>
          <div class="input-group">
            <div class="col-third"><input class="month" type="number" placeholder="MM" min="1" max="12" v-model="month_purchase_date"/></div>
            <div class="col-third"><input class="year" type="number" placeholder="AAAA" min="1940" max="3000" v-model="year_purchase_date"/></div>
          </div>
        </div>
        <div class="col-half">
          <h4>Quantité / Prix d'achat</h4>
          <div class="col-third"><input type="number" min="0" max="999" v-model="quantity" required/></div>
          <div class="col-third"><input type="number" class="input-group" min="0" placeholder="Prix d'achat" v-model="purchase_price"/></div>
        </div>
      </div>

      <button type="submit" class="btn btn-theme">Ajouter le vinyle</button>
    </form>
  </div>

</template>

<script>
import Vinyl from '../components/Vinyl.vue';
import axios from "axios";

export default {
  name: "Add",
  components: {
    Vinyl
  },
  data: () => ({
    name: '',
    artist: '',
    label: '',
    month_release_date: '',
    year_release_date: '',
    month_purchase_date: '',
    year_purchase_date: '',
    release_price: 0,
    current_price: 0,
    purchase_price: 0,
    quantity: 1
  }),
  methods: {
    addVinyl() {
      axios.post('http://localhost:3001/vinyl/add', {
        name: this.name,
        artist: this.artist,
        label: this.label,
        month_release_date: this.month_release_date,
        year_release_date: this.year_release_date,
        month_purchase_date: this.month_purchase_date,
        year_purchase_date: this.year_purchase_date,
        release_price: this.release_price,
        current_price: this.current_price,
        purchase_price: this.purchase_price,
        quantity: this.quantity
      }).then(response => {
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>