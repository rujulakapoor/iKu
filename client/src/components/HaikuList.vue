<template>
  <div class="haikulist">
    <div class ="posts-container">
      <div class="post"
        v-for="(post, index) in haikus"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
      >
        <p class="text">{{ post.username }}</p>
        <p class="score">{{ post.message }}</p>
      </div>
    </div>  
  </div>
</template>

<script>
//WE USE DATAMUSE
import PostService from '@/PostService.js';

export default {
  name: 'HaikuList',
  data() {
    return {
      haikus: []
    }
  },
  async created() {
    try {
      this.haikus = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }

  },

}
</script>

<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.post {
  position: relative;
  border: 1px solid #938d99;
  background-color: 3bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  margin: 20px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  color: #726483;
}
p.score {
  font-size: 22px;
  margin-bottom: 0;
  color: #938d99;
}
</style>