<template>
  <div class="count">
    <h3>Log in</h3>
    <p>Username:</p>
    <p>{{this.username}}</p>
    <div style="align-items:center">
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" v-if="LogInVisibility" class="googlebutton">Log in with Google</GoogleLogin>
        <b-button v-if="LogInVisibility" class="guestbutton" v-on:click="login()">Log in as a Guest</b-button>
        <b-button v-else class="guestbutton" v-on:click="logout()">Log out</b-button>
    </div>

    <div style="margin: 50px 0 0 0">
      <h3>Write your Haiku</h3>
        <!-- <p style="white-space: pre-line;">{{message}}</p> -->
        <textarea class="textbox" v-model="message" placeholder="Enter your Haiku here" rows="3" max-rows="3"></textarea>
        <p>{{result}}</p>
    </div>
    <b-button v-on:click="click()">Check</b-button>
    <br/>
    <br/>
    <b-button v-on:click="createPost()">Post</b-button>
  </div>
</template>

<script>
//WE USE DATAMUSE
import PostService from '@/PostService.js';

export default {
  name: 'EnterHaiku',
  props: {
    msg: String
  },
  data: () => ({
    message: "",
    result: "Press Check to see if it's a haiku",
    params: {
        client_id: "284290029340-v9q3t3ebcum9k4qokplucdt8aitkernf.apps.googleusercontent.com",
    },
    username: 'Not logged in',
    LogInVisibility: true,
  }),
  mounted() {
    if (localStorage.name != "Not logged in") {
      console.log("Load prev username = "+localStorage.username);
      this.username = localStorage.username;
      this.LogInVisibility = false;
    }
    else{
      console.log("Load prev username = what"+localStorage.username);
      this.username = 'Not logged in';
      this.LogInVisibility = true;
    }
  },
  methods:{
    async createPost() {
      //Check if logged in
      if(this.username === "Not logged in") {
        alert("Please log in!");
      }
      else {
        console.log("adding user: " + this.username + " haiku: " + this.message);
        await PostService.insertPost(
          this.username,
          this.message
        );
      }
      
      //location.reload();
      },
      onSuccess(googleUser) {
        //this.console.log(googleUser);
 
        // This only gets the user information: id, name, imageUrl and email
        this.username = googleUser.getBasicProfile().getName();
        localStorage.username = this.username;
        this.LogInVisibility = false;
      },
      onFailure(error) {
          //this.console.log(error);
          this.username = error;
      },
      login(){
          this.username = "Guest";
          this.LogInVisibility = false;
          localStorage.username = "Guest";
      },
      logout(){
          this.username = "Not logged in";
          this.LogInVisibility = true;
          localStorage.username = "Not logged in";
      },
      httpPromise(line){
          return new Promise((resolve, reject) => {
            var words = line.split(" ");
            var total = 0;
            var that = this;
            var counter = 0;
            words.forEach(function(word){
                let reqURL = "https://cors-anywhere.herokuapp.com/https://api.datamuse.com/words?md=s&max=1&sp=";
                reqURL += word;
                that.$http.get(reqURL).then(result => {
                    counter++;
                    total += result["body"][0]["numSyllables"];
                    //console.log(word + " : " + total);
                    if(counter == words.length){
                        resolve(total);
                    }
                }, error => {
                    that.HaikuError += error;
                    reject(error);
                });
            });
          });
      },
      click(){
          var isHaiku = true;
          var HaikuError = "";
          var haikuLines = this.message.split("\n");

          this.httpPromise(haikuLines[0]).then( (total1) =>{
            var firstline = total1;
            this.httpPromise(haikuLines[1]).then( (total2) => {
                var secondline = total2;
                this.httpPromise(haikuLines[2]).then( (total3) => {

                    var thirdline = total3;

                    //console.log("firstline = "+firstline);
                    //console.log("secondline = "+secondline);
                    //console.log("thridline = "+thirdline);

                    if(firstline !=  5){
                        isHaiku = false;
                        HaikuError+="Your first line is not 5 syllables!\n";
                    }
                    if(secondline !=  7){
                        isHaiku = false;
                        HaikuError+="Your second line is not 7 syllables!\n";
                    }
                    if(thirdline !=  5){
                        isHaiku = false;
                        HaikuError+="Your third line is not 5 syllables!\n";
                    }
                    if(isHaiku) this.result = "Valid Haiku!";
                    else this.result = "Invalid Haiku, you're a failure!\n" + HaikuError;

                }, (err3) => {HaikuError+=err3});
            }, (err2) => {HaikuError+=err2});
          }, (err1) => { HaikuError+=err1;});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.textbox{
    width: 70%;
}

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
