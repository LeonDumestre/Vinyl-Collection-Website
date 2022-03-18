<template>
  <div class="task">
    <img :src="source" @click="toogleCheck" />
    <p @click="deleteTask" :class="{ '-checked': task.checked }">{{ task.name }}</p>
  </div>
</template>

<script>
import Unchecked from '../assets/unchecked.svg'
import Checked from '../assets/check.svg'
export default {
  name: 'Vinyl',
  props: {
    task: Object
  },
  computed: {
    source() {
      return this.task.checked ? Checked : Unchecked;
    }
  },
  methods: {
    toogleCheck() {
      this.$emit('toggle');
    },
    deleteTask() {
      this.$emit('delete');
    },
  }
}
</script>


<style scoped>
.-checked {
  text-decoration: line-through;
}
</style>