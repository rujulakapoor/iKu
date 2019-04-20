<template>
  <div id="Error">
    <v-container grid-list-xl></v-container>
    <h1>404</h1>
    <h2>Everything's broken, please go home.</h2>
    <router-link to="/" tag="button" replace>Back to Home</router-link>
  </div>
</template>

<style scoped>
button {
  font-family: "Nunito", Helvetica, Arial, sans-serif;
  font-size: 40px;
  border: 0ch;
  margin: auto;
  display: block;
  color: #ffffff;
  background: rgb(190, 184, 192);
  border-radius: 8px;
  font-weight: normal;
  margin-top: 60px;
  padding-left: 10px;
  padding-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #ffffff;
}
</style>
