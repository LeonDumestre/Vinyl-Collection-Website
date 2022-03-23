<script setup>

</script>

<template>
    <header class="header black-bg">
      <a href="/" class="logo"><b>VINYL<span>COLLECTION</span></b></a>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <router-link to="/add"><a class="btn btn-theme">Ajouter un vinyle</a></router-link>
        </ul>
      </div>
    </header>

    <div id="container">
      <router-view></router-view>
    </div>

</template>

<style>
  @import 'css/bootstrap.min.css';
  @import 'css/style.css';
  @import 'css/form.css';
</style>