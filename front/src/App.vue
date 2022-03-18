<script setup>
import Task from './components/Task.vue'
import axios from 'axios'

axios.get('http://localhost:3001/tracks').then(response => {
  console.log(response.data)
}).catch(err => {
  console.log(err)
})
</script>

<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<style>
@import './style.css';
</style>