<script>
import axios from 'axios'
import Vinyl from '../components/Vinyl.vue';
import Pagination from '../components/Pagination.vue'

export default {
  name: 'Home',
  components: {
    Vinyl,
    Pagination
  },
  data: () => ({
    vinyls: [],
    pageSize: 7,
    currentPage: 0,
    visibleVinyls: []
  }),
  mounted() {
    axios.get('http://localhost:3001/vinyls').then(response => {
      console.log(response.data)
      this.vinyls = response.data
      this.updateVisibleVinyls()
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    updatePage(pageNumber) {
      this.currentPage = pageNumber
      this.updateVisibleVinyls()
    },
    updateVisibleVinyls() {
      this.visibleVinyls = this.vinyls.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
      if (this.visibleVinyls.length === 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1)
      }
    }
  }
}
</script>

<template>
  <ul class="container inline-b">
    <Vinyl v-for="vinyl in visibleVinyls" :vinyl="vinyl" />
    <Pagination
        v-bind:vinyls="vinyls"
        v-on:page:update="updatePage"
        v-bind:currentPage="currentPage"
        v-bind:pageSize="pageSize">
    </Pagination>
  </ul>
</template>

<style>

</style>