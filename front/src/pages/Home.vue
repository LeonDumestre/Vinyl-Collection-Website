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
  })
}

axios.post('http://localhost:3001/vinyl/add').then(response => {
  this.vinyls = response.data
}).catch(err => {
  console.log(err)
})
</script>

<template>
  <ul class="container inline-b">

    <router-link v-for="vinyl in vinyls" :to="'/details/'+vinyl.id">
      <div class="item inline-b-item">
        <img :src="'../assets/'+vinyl.id+'1.jpg'" width="200" height="200" :alt="vinyl.name">
        <label>{{vinyl.name}}</label>
      </div>
    </router-link>

  </ul>
</template>

<style>

</style>