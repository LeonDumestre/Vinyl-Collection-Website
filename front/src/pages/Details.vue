<template>
  <div class="container details-container">
    <h2>{{vinyl.name}}</h2>
    <img id="img-details" :src="vinyl.image" class="" width="400" height="400">
    <label v-if="vinyl.artist != null">Groupe / Artiste : {{vinyl.artist}}</label>
    <label v-if="vinyl.label != null">Label : {{vinyl.label}}</label>
    <label v-if="vinyl.purchase_date != null">Date d'achat : {{vinyl.purchase_date}}</label>
    <label v-if="vinyl.release_date != null">Date de sortie : {{vinyl.release_date}}</label>
    <label v-if="vinyl.release_price != null">Prix à la sortie : {{vinyl.release_price}} €</label>
    <label v-if="vinyl.purchase_price != null">Prix d'achat : {{vinyl.purchase_price}} €</label>
    <label v-if="vinyl.current_price != null">Prix actuel : {{vinyl.current_price}} €</label>
    <label v-if="vinyl.quantity != null">Quantité : {{vinyl.quantity}}</label>
    <div>
      <router-link :to="'/edit/' + vinyl.id"><a class="btn btn-theme btn-margin">Modifier</a></router-link>
      <a href="#" class="btn btn-theme04 btn-margin" v-on:click="removeVinyl()">Supprimer</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vinyl from '../components/Vinyl.vue';

export default {
  name: "Details",
  components: {
    Vinyl
  },
  data: () => ({
    vinyl: Vinyl
  }),
  mounted() {
    axios.get('http://localhost:3001/vinyl/' + this.$route.params.id).then(response => {
      console.log(response.data)
      this.vinyl = response.data
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    removeVinyl() {
      axios.delete('http://localhost:3001/vinyl/' + this.$route.params.id)
          .then(response => {
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