<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  },
  props: {
    msg:String
  },
  data() {
    return {
      authenticated: false,
    }
  },
  mounted() {
    if(!this.authenticated) {
      //this.$router.replace({ name: "home" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
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
}
</style>
