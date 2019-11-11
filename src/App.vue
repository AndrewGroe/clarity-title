<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: #c6c6c5;
}
</style>
