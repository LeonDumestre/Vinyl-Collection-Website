<script setup>
import Task from './components/Task.vue'
</script>

<template>
  <ul>
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/about">About</router-link></li>
  </ul>
  <router-view></router-view>
</template>

<style>
@import './style.css';
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 50vw;
  margin: auto;
  margin-top: 60px;
}
.task {
  display: flex;
}
</style>
