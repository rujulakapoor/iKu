<template>
  <div>
    <div class="header">
      <v-toolbar dark flat id="toolbar" align-center>
        <router-link to="/">
          <img class="logo" alt="logo" src="@/assets/iKu_cropped.png" />
        </router-link>
        <v-toolbar-title>
          <router-link to="/">
            <h3 id="title"></h3>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn to="/" flat>
            <h4>Home</h4>
          </v-btn>
          <v-btn to="/create" flat>
            <h4>Create</h4>
          </v-btn>
          <v-btn to="/about" flat>
            <h4>About</h4>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped>

#toolbar {
  background-color: rgb(190, 184, 192);
}
#title {
  color: white;
}
.header {
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.11);
  width: 100%;
}
.header h4 {
  color: white;
  text-transform: lowercase;
}
.header #searchBox {
  padding-right: 50px;
}
.logo {
  margin-bottom: -25px;
  padding-bottom: 20px;
  height: calc(35px + 3vh);
}
</style>