<template>
  <div class="about">
    <v-container grid-list-xl></v-container>
    <img alt="Coursemeleon logo" src="@/assets/iKu_cropped.png" />
    <h1>About iKu</h1>
           <p style="font-size:25px; font-family:georgia,garamond,serif">
              iKu is a revolutionary haiku sharing platform. This application was 
              developed for a CS252 project <br />but is now on track to be the worlds top haiku soical networking site 
           </p>
    <h3 style="font-size:30px;">The Development Team</h3>
     <div class="divider"/>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/lumlauren/">
          <img src="@/assets/l.jpg" height="150" width="150" />
        </a>
        <p>Lauren Lum</p>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/rujulakapoor1/">
          <img src="@/assets/r.png" height="150" width="150" />
        </a>
        <p>Rujula Kapoor</p>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jeonghu-park-811338149/">
          <img src="../assets/j.jpeg" height="150" width="150" />
        </a>
        <p>Jeonghu Park</p>
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: #8d72a8;
}
h3 {
  margin: 40px 0 0;
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
