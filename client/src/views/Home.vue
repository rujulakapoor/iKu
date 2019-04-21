<template>
  <div id="home">

    <div class="container">
      <div class="row align-items-center">
        <div class="col">

          <h1>iKu</h1>
          <!--<img alt="iKu" src="@/assets/iKu_cropped.png">
          <h3>The revolutionary haiku sharing platform</h3>-->
          <Intro/>
        </div>
        <div class="col">
          <img alt="iKu waterfall" class="homeGraphic" src="@/assets/home_graphic_circle.png">
        </div>
      </div>
    </div>
    
    <!--<Intro style="backgroundColor:#E3E3E3"/>-->
    <Auth style="backgroundColor:#E3E3E3"/>
    <SyllableCount />
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

.homeGraphic {
  width: 600px;
  height: 600px;
}

#home h1{
  font-size: 80px;
  color: #877a97;
}

#home h3{
  font-size: 30px;
  color: #938d99;
}

</style>
