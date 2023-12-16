<template>
    <div class="form">
        <h3>Add a Post</h3>
        <label for="body">Body: </label>
        <input name="body" type="text" id="body" required v-model="post.body" />
        <button @click="addPost" class="addPost">Add Post</button>
    </div>
    </template>
    
    <script>
    export default {
    name: "AddPostView",
    data() {
        return {
        post: {
            body: "",
        },
        };
    },
    methods: {
        addPost() {
        var data = {
            body: this.post.body,
            date: new Date().toLocaleDateString()
        };
        fetch("http://localhost:3000/api/posts", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            console.log(response.data);
            this.$router.push("/");
        })
        .catch((e) => {
            console.log(e);
            console.log("error");
        });
        },
    },
    };
    </script>
    
    <style scoped>
    * {
        font-family: sans-serif;
    }
    .form {
    max-width: 420px;
    margin: 30px auto;
    background-color: #f1f1f1;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    }
    h3 {
    text-align: center;
    }
    label {
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    }
    input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid white;
    color: black;
    }
    button {
    background-color: #4267B2;
    border: 0;
    padding: 10px 20px;
    font-size: medium;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    border-radius: 20px;
      position: relative;
      left: 38%;
    }
    
    </style>