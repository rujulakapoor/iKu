<template>
    <div id="secure">
        <h1>You are logged in</h1>
        <p>Post button and log out button would go here</p>
        <p>List of posts would go here</p>
    </div>
</template>

<script>
    export default {
        name: 'Secure',
        data() {
  
        }
    }
</script>

<style scoped>
#secure {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
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