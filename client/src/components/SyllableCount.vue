<template>
  <div class="count">

    <div style="margin: 50px 0 0 0">
      <h3>Write your Haiku</h3>
        <!-- <p style="white-space: pre-line;">{{message}}</p> -->
        <textarea class="textbox" v-model="message" placeholder="Enter your Haiku here" rows="3" max-rows="3"></textarea>
        <p>{{result}}</p>
    </div>
    <b-button v-on:click="click()">Check</b-button>
  </div>
</template>

<script>
//WE USE DATAMUSE

export default {
  name: 'Intro',
  props: {
    msg: String
  },
  data: () => ({
    message: "",
    result: "Press Check to see if it's a haiku",
  }),
  methods:{
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
                    else this.result = "Invalid Haiku!\n" + HaikuError;

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
