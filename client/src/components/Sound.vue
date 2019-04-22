<template>
  <div class="hello">

    <div style="margin: 50px 0 50px 0">
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

     <div style="margin: 50px 0 0 0">
      <b-button style="margin:5px;" v-on:click="playSound1()">Relaxing</b-button>
      <b-button style="margin:5px;" v-on:click="playSound2()">Nature</b-button>
      <b-button style="margin:5px;" v-on:click="playSound3()">Party</b-button>
      
    </div>
        
    </div>
        <b-button v-on:click="pauseSound()" style="background-color:#8d72a8">Pause Sound</b-button>
    

  </div>
</template>

<script>
export default {
  name: 'Sound',
  methods: {
  playSound1(){
        console.log("HELLLLO")
        var x=document.getElementById('play2');
        x.play();   
  },
   playSound2(){
        console.log("HELLLLO")
        var x=document.getElementById('play3');
        x.play();   
  },
  playSound3(){
        console.log("HELLLLO")
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
