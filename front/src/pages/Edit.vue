<template>
  <div class="container form">
    <h2>Modifier le vinyle</h2>
    <form @submit.prevent="editVinyl">

      <div class="row">
        <h4>Informations du vinyle</h4>
        <input type="text" class="input-group" placeholder="Nom de l'album" v-model="vinyl.name" required/>
        <input type="text" class="input-group" placeholder="Nom de l'artiste / groupe" v-model="vinyl.artist" required/>
        <input type="text" class="input-group" placeholder="Label de l'album" v-model="vinyl.label" required/>
        <input type="text" class="input-group" placeholder="Lien de l'image" v-model="vinyl.image" required/>
      </div>

      <div class="row">
        <div class="col-half">
          <h4>Date de sortie</h4>
          <div class="input-group">
            <div class="col-third"><input class="month" type="number" placeholder="MM" min="1" max="12" v-model="vinyl.month_release_date"/></div>
            <div class="col-third"><input class="year" type="number" placeholder="AAAA" min="1940" max="3000" v-model="vinyl.year_release_date"/></div>
          </div>
        </div>

        <div class="col-half">
          <h4>Prix à la sortie / actuel</h4>
          <div class="input-group">
            <div class="col-third"><input type="number" class="input-group" min="0" v-model="vinyl.release_price"/></div>
            <div class="col-third"><input type="number" class="input-group" min="0" v-model="vinyl.current_price"/></div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-half">
          <h4>Date d'acquisition</h4>
          <div class="input-group">
            <div class="col-third"><input class="month" type="number" placeholder="MM" min="1" max="12" v-model="vinyl.month_purchase_date"/></div>
            <div class="col-third"><input class="year" type="number" placeholder="AAAA" min="1940" max="3000" v-model="vinyl.year_purchase_date"/></div>
          </div>
        </div>
        <div class="col-half">
          <h4>Quantité / Prix d'achat</h4>
          <div class="col-third"><input type="number" min="0" max="999" v-model="vinyl.quantity" required/></div>
          <div class="col-third"><input type="number" class="input-group" min="0" v-model="vinyl.purchase_price"/></div>
        </div>
      </div>

      <button type="submit" class="btn btn-theme">Valider</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Vinyl from '../components/Vinyl.vue';

export default {
  name: "Edit",
  components: {
    Vinyl
  },
  data: () => ({
    vinyl: Vinyl
  }),
  methods: {
    editVinyl() {
      axios.post('http://localhost:3001/vinyl/edit', {
        vinyl: this.vinyl,
      }).then(response => {
        this.$router.push('/')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted() {
    axios.get('http://localhost:3001/vinyl/' + this.$route.params.id).then(response => {
      console.log(response.data)
      this.vinyl = response.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>