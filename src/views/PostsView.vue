<template>
    <div class="posts">
      <h2>Posts page</h2>
      <Posts></Posts>
  
      <button v-on:click="IncreaseLike">Increase likes</button>
      <button v-on:click="ResetLikes">Reset likes</button><br />
  
    </div>
  </template>
  
  <script>
  import Posts from "@/components/Posts.vue";

  export default {
    name: "PostsView",
    components: { Posts },
  
    methods: {
      IncreaseLike: function () {
        // this.$store.commit("IncreasePrice");
        this.$store.dispatch("IncreaseLikeAct");
      },
      ResetLikes: function () {
        // this.$store.commit("DecreasePrice");
        this.$store.dispatch("ResetLikesAct");
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    background: rgb(31, 163, 163);
    border: 0;
    padding: 10px 20px 10px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 10px;
    color: white;
    border-radius: 20px;
  }
  </style>
  