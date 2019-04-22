<template>
  <div class="hello">

      <div>
        <h3> Enhance Your Writing Experience: Choose A Mood</h3>
        <audio id="play2"> 
          <source src="./relax.mp3">
        </audio>
        <audio id="play3"> 
          <source src="./nature.mp3">
        </audio>
        <audio id="play4"> 
          <source src="./party.mp3">
        </audio>

        <div style="margin: 20px 0 0 0">
          <b-button style="margin:5px;" v-on:click="playSound1()">Relaxing</b-button>
          <b-button style="margin:5px;" v-on:click="playSound2()">Nature</b-button>
          <b-button style="margin:5px;" v-on:click="playSound3()">Party</b-button>
          <b-button v-on:click="pauseSound()" style="background-color:#8d72a8; margin: 5px;">Pause</b-button>
        </div>
        
      </div>

  </div>
</template>

<script>
export default {
  name: 'Sound',
  methods: {
  playSound1(){
        //console.log("HELLLLO")
        var x=document.getElementById('play2');
        x.play();   
  },
  playSound2(){
        //console.log("HELLLLO")
        var x=document.getElementById('play3');
        x.play();   
  },
  playSound3(){
        //console.log("HELLLLO")
        var x=document.getElementById('play4');
        x.play();   
  },
  pauseSound(){
      document.getElementById('play2').pause();
      document.getElementById('play3').pause();
      document.getElementById('play4').pause();
  }  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  background-color: #e6e6e6;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.11);
  margin: 30px;
  padding: 10px;
  margin-right: 15%;
  margin-left: 15%;
}

h3 {
  margin: 35px 0 0;
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
