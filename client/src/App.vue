<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/iKu_cropped.png">
    <Intro/>
    <Auth/>
  </div>
</template>

<script>
import Intro from './components/Intro.vue'
import Auth from './components/Auth.vue'

export default {
  name: 'app',
  components: {
    Intro,
    Auth
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
