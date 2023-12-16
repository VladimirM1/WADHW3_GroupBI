<template>
    <div class="posts">
      <!-- <h2>Posts page</h2> -->
      <router-link to="/addPost">
      <button style="margin-top:3em" class="button">Add post</button>
      </router-link>
      <button @click="Logout" style="margin-top:3em" class="button">Logout</button>
      <button @click="deletePosts" style="margin-top:3em" class="blue-button">Delete all</button>
      <Posts></Posts>
      <!-- <Posts></Posts> -->
  
      <!-- <button v-on:click="IncreaseLike">Increase likes</button> -->
      <!-- <button v-on:click="ResetLikes">Reset likes</button><br /> -->
  
    </div>
  </template>
  
  <script>
  import Posts from "@/components/Posts.vue";

  export default {
    name: "PostsView",
    posts: [],
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
      fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
          .then((response) => response.json())
          .then((data) => (this.posts = data))
          .catch((err) => console.log(err.message));
      },
      Logout() {
        fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              console.log('jwt removed');
              //console.log('jwt removed:' + auth.authenticated());
              this.$router.push("/login");
              //location.assign("/");
            })
            .catch((e) => {
              console.log(e);
              console.log("error logout");
            })
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
  