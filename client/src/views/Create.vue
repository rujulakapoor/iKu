<template>
  <div id="create">
    <v-container grid-list-xl></v-container>
    <h1>Create</h1>
    <EnterHaiku />
    <Sound />
    <br>
  </div>
</template>

<script>
import EnterHaiku from '@/components/EnterHaiku.vue';
import Sound from '@/components/Sound.vue';

export default {
  name: "create",
  components: {
    EnterHaiku,
    Sound
  }
};
</script>

<style scoped>
#create h1 {
  font-size: 50px;
  color: #726483;
}
</style>