<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LagerTitle from './components/LagerTitle.vue'
</script>

<template>
  <LagerTitle title="Emil's lager" />
  <main class="main">
      <RouterView />
  </main>

  <nav class="bottom-nav">
    <RouterLink to="/">Produkter</RouterLink>
    <RouterLink to="/packlist">Plocklista</RouterLink>
  </nav>
</template>

<style scoped>

</style>
