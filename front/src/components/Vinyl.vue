<template>
  <router-link :to="'/details/'+vinyl.id">
    <div class="item inline-b-item">
      <img :src="vinyl.image" width="200" height="200">
      <label>{{vinyl.name}}</label>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Vinyl',
  props: {
    vinyl: Object
  }
}
</script>


<style scoped>

</style>