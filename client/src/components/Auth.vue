<template>
  <div class="auth">
    <h3>Log in</h3>
    <p>Username:</p>
    <p>{{this.username}}</p>
    <div style="align-items:center">
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" v-if="LogInVisibility" class="googlebutton">Log in with Google</GoogleLogin>
        <b-button v-if="LogInVisibility" class="guestbutton" v-on:click="login()">Log in as a Guest</b-button>
        <b-button v-else class="guestbutton" v-on:click="logout()">Log out</b-button>
    </div>
    
  </div>
</template>


<script>
export default {
  name: 'Auth',
  props: {
    msg: String,

  },
  data: () => ({
    params: {
        client_id: "284290029340-v9q3t3ebcum9k4qokplucdt8aitkernf.apps.googleusercontent.com",
    },
    username: 'Not logged in',
    LogInVisibility: true,
  }),
  methods: {
   onSuccess(googleUser) {
        this.console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        this.username = googleUser.getBasicProfile().getName();
        this.LogInVisibility = false;
    },
    onFailure(error) {
        //this.console.log(error);
        this.username = error;
    },
    login(){
        this.username = "Guest";
        this.LogInVisibility = false;
    },
    logout(){
        this.username = "Not logged in";
        this.LogInVisibility = true;
    }
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
