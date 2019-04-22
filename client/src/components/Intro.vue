<template>
  <div class="hello">

    <div style="margin: 50px 0 50px 0">
      <h3>Take a break from life</h3>
      <h3>Sit down and share wisdom of</h3>
      <h3>Haiku with iKu</h3>
    </div>

    <p>Haiku is a traditional form of Japanese poetry with 3 lines.</p> 
    <p>Each line has 5, 7, and 5 syllables respectively. </p>
    <p>Compose, share, and learn about Haiku with iKu.</p>

    <v-btn to="/create" class="button" style="backgroundColor: #8d72a8" raised round>
      <p style="margin: 5px 0 3px 0">Write your Haiku</p>
    </v-btn>

  </div>
</template>

<script>
export default {
  name: 'Intro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .button{
    background-color: #8d72a8;
    border-color: #8d72a8;
    margin: 10px 0 0 0;
  }
</style>

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
