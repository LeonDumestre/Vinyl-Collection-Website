<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span v-if="showPreviousLink()" class="pagination-btn" v-on:click="updatePage(currentPage - 1)"> &#171; </span>
    {{ currentPage + 1 }} of {{ totalPages() }}
    <span v-if="showNextLink()" class="pagination-btn" v-on:click="updatePage(currentPage + 1)"> &#187; </span>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['vinyls', 'currentPage', 'pageSize'],
  methods: {
    updatePage(pageNumber) {
      this.$emit('page:update', pageNumber);
    },
    totalPages() {
      return Math.ceil(this.vinyls.length / this.pageSize);
    },
    showPreviousLink() {
      return this.currentPage !== 0;
    },
    showNextLink() {
      return this.currentPage !== (this.totalPages() - 1);
    }
  }
}
</script>

<style scoped>
</style>