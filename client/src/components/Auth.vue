<template>
  <div class="auth">

    <h3>Auth</h3>
    <div>
        <b-button>Log in as a Guest</b-button>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'Auth',
  props: {
    msg: String
  },
  data: () => ({
      
  }),
  methods: {
   
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
