<template>
  <div class="auth">
    <h3>Log in</h3>
    <p>{{username}}</p>
    <div style="align-items:center">
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" class="googlebutton">
            Log in with Google
        </GoogleLogin>
        <b-button class="guestbutton" v-on:click="login()">Log in as a Guest</b-button>
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
    params: {
        client_id: "284290029340-v9q3t3ebcum9k4qokplucdt8aitkernf.apps.googleusercontent.com",
    },
    username: 'Not logged in',
  }),
  methods: {
   onSuccess(googleUser) {
        this.console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        this.console.log(googleUser.getBasicProfile());
        this.username = googleUser.getBasicProfile().getName();
    },
    onFailure(error) {
        this.console.log(error);
    },
    login(){
        this.username = "Hello, Guest!"
        //this.$emit("authenticated", true);
        //this.$router.replace({ name: "secure" });
    },
  }
}
/* 
  Set up client id here
  https://developers.google.com/identity/sign-in/web/sign-in 
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.googlebutton { 
    background-color: #4285f4;
    color: #FFFFFF;
    padding: 5px 10px 7px 10px;
    margin: 15px 10px 15px 0;
    border-radius: 5px;
    border-color: #4285f4;
}

.guestbutton{
    background-color: #8d72a8;
    border-color: #8d72a8;
    margin: 0 0 0 10px;
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
