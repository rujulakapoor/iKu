<template>

  <div class="auth">

    <h3>Auth</h3>
    <div style="align-items:center">
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" class="googlebutton">
            Log in with Google
        </GoogleLogin>
        <b-button v-on:click="login()" class="guestbutton">Log in as a Guest</b-button>
    </div>
    
  </div>
</template>
<script>

/*
    project_id:"iku-share-your-h-1555582331882",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
*/

export default {
  name: 'Auth',
  props: {
    msg: String
  },
  data: () => ({
    params: {
        client_id: "284290029340-v9q3t3ebcum9k4qokplucdt8aitkernf.apps.googleusercontent.com",
    },
  }),
  methods: {
   onSuccess(googleUser) {
        this.console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        this.console.log(googleUser.getBasicProfile());
    },
    onFailure(error) {
        this.console.log(error);
    },
    login(){

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
    margin: 0 0 0 10;
    border-radius: 5px;
    border-color: #4285f4;
}
.guestbutton{
    background-color: #8d72a8;
    border-color: #8d72a8;
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
