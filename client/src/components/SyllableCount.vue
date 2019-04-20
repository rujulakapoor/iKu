<template>
  <div class="count">

    <div style="margin: 50px 0 50px 0">
      <h3>TextBox Sample</h3>
    

    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <b-button v-on:click="click()">Check</b-button>

    </div>

  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  },
  data: () => ({
    message: "",
  }),
  methods:{
      click(){
        
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
  color: #8d72a8;
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
  color: #42b983;
}
</style>
