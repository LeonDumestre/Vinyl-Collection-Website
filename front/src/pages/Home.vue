<template>
  <ul class="container inline-b">
    <router-link to="/details/1">
      <div class="item inline-b-item">
        <img src="../assets/1.jpg" width="200" height="200">
        <label>Legend</label>
      </div>
    </router-link>
    <router-link to="/details/2"><li class="item inline-b-item">2</li></router-link>
    <router-link to="/details/3"><li class="item inline-b-item">3</li></router-link>
    <router-link to="/details/4"><li class="item inline-b-item">4</li></router-link>
    <router-link to="/details/5"><li class="item inline-b-item">5</li></router-link>
    <router-link to="/details/6"><li class="item inline-b-item">6</li></router-link>
    <router-link to="/details/7"><li class="item inline-b-item">7</li></router-link>
    <router-link to="/details/8"><li class="item inline-b-item">8</li></router-link>
  </ul>
</template>

<script>
import Vinyl from '../components/Vinyl.vue';
export default {
  name: 'Home',
  components: {
    Vinyl
  }
}
</script>

<style>

</style>