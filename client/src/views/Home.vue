<template>
  <div id="home">
    <v-container grid-list-xl></v-container>
    <img alt="Vue logo" src="@/assets/iKu_cropped.png">
    <Intro style="backgroundColor:#DDDDDD"/>
    <Auth/>
    <SyllableCount style="backgroundColor:#DDDDDD"/>
    <p>List of posts would go here</p>
  </div>
</template>

<script>
import Intro from '@/components/Intro.vue'
import Auth from '@/components/Auth.vue'
import SyllableCount from '@/components/SyllableCount.vue'

export default {
  name: 'home',
  components: {
    Intro,
    Auth,
    SyllableCount,
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
