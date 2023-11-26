<template>
  <div class="flex-container" style="text-align: center; height: 80.8vh">
    <div class="login-flex">
      <form>
        <div style="display: flex; justify-content: center">
          <div style="display: block; text-align: left;">

          </div>
          <div class="text-fields" style="display: flex; flex-direction: column;">
            <input required class="field" type="text" name="email" placeholder="Email" v-model="email">
            <input required class="field" type="password" name="password" placeholder="Password" v-model="password">
          </div>
        </div>
        <div class = "buttons">
          <button @click="LogIn" class="blue-button" id="login-button" type="button">Log In</button>
          <p class = "buttonTextBetween">Or</p>
          <router-link to="/signup">
            <button class="blue-button"  id="signup-button" type="button">Sign Up</button>
          </router-link>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

export default {
  name: "Login"
}

</script>

<style scoped>

* {
  font-family: sans-serif;
}

.buttons{
  display: flex;
  justify-content: center;

}

.buttonTextBetween{
  margin-left:1em;
  margin-right:1em;
  font-size: large;
}

.login-flex {
  display: flex;
}

input {
  margin-bottom: 5px;
}

h3 {
  margin-right: 10px;
}

.field{
  width: 25em;
  height: 2.8em;
}

.text-fields{
  padding: 0.3em;
}

#login-button{
  width:5em;
  height: 2em;
  padding: 0;
  margin-bottom: 1.3em;
  margin-top:0.8em;
  cursor:pointer;
}

#signup-button{
  width:5em;
  height: 2em;
  margin-bottom: 1.3em;
  margin-top:0.8em;
  cursor:pointer;
}

.blue-button {
  background-color: grey;
  font-size: medium;
  color: black;
  border-radius: 20px;
}


.flex-container > div {
  background-color: #f1f1f1;
  width: 50%;
  margin:auto;
  margin-top: 2%;
  margin-bottom: 2%;
  display:flex;
  line-height: 25px;
  font-size: 15px;
  border-radius: 10px;
  padding-left: 1.5%;
  padding-right: 1.5%;
  padding-top: 1.5%;
}
section {
  padding: 10px 15px;
  margin: 10px;
  display: block;

}
h4 {
  padding:5px;
  font-size: 20px;
}

.has_required{
  text-decoration: line-through;
  color:#689868;
}
</style>