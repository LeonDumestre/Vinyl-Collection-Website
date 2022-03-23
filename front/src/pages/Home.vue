<script>
import axios from 'axios'
import Vinyl from '../components/Vinyl.vue';

export default {
  name: 'Home',
  components: {
    Vinyl
  },
  data: () => ({
    vinyls: []
  }),
  mounted() {
    axios.get('http://localhost:3001/vinyls').then(response => {
      console.log(response.data)
      this.vinyls = response.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<template>
  <ul class="container inline-b">
    <Vinyl v-for="vinyl in vinyls" :vinyl="vinyl" />
  </ul>
</template>

<style>

</style>