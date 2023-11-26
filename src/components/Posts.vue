<template>
    <div id="flex-container" class="posts-container">
      <ul>
        <li class="post" v-for="post in PostsList" :key="post.id">
          <img :src="post.profilepic" alt="Profile Image" class="profile-image"/> 
          <br />
          <span class="author"> <b>Author:</b> {{ post.author }} </span> <br />
          <span class="creation"> <b>Creation:</b> {{ post.creation }} </span> <br />
          <img :src="post.picture" alt="Post Image" class="post-image"/> 
          <br />
          <span class="caption"> <b>Caption:</b> {{ post.caption }} </span> <br />
          <img :src="post.like" alt="Like Image" class="like-image" @click="increaseLikes(post)"/> 
          <br />
          <span class="like_amount"> {{ post.like_amount }} </span>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
  
  export default {
    name: 'Posts',
    data() {
      return {};
    },
  
    computed: {
      PostsList() {
        return this.$store.getters.PostsListGet
      }
    },
  
    methods: {
      increaseLikes(post) {
        this.$store.dispatch('IncreaseLikeAct', post);
      }
    
  
  },
  }
  </script>
  
  <style scoped>
  
  
  .profile-image {
    max-width: 20%;
    max-height: 20%;
    margin: auto;
    height: auto; 
    display: block; 
    margin-bottom: 5px; 
  }
  .like-image {
    max-width: 10%;
    max-height: 10%;
    margin: auto;
    height: auto; 
    display: block; 
    margin-bottom: 5px; 
  }
  
  .post-image {
    max-width: 55%;
    max-height: 55%;
    margin: auto;
    height: auto; 
    display: block; 
    margin-bottom: 5px; 
  }
  
  .posts-container {
    max-height: 600px; /* Adjust the maximum height as needed */
    overflow-y: auto; /* Enable vertical scrolling */
  }
  
  * {
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  .post {
    display: flex;
    flex-direction: column;
    background: rgb(195, 211, 202);
    margin-bottom: 50px;
    margin-right: 500px;
    margin-left: 500px;
    padding: 10px;
    border-radius: 10px;
  }
  
  #flex-container {
    display: block;
    flex-direction: column;
    justify-content: right;
  } 
  
  
  #flex-container > div {
    background-color: #f1f1f1;
    width: 50%;
    margin:auto;
    margin-top: 2%;
    margin-bottom: 2%;
    line-height: 25px;
    font-size: 17px;
    border-radius: 10px;
    padding-left: 1.5%;
    padding-right: 1.5%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
  }
  
  </style>
  