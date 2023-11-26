<template>
  <div class="flex-container" style="text-align: center; height: 80.8vh">
    <div class="login-flex">
      <div style="display: flex; justify-content: center">
        <div style="display: block; text-align: left;">
        </div>
        <div class="text-fields" style="display: flex; flex-direction: column;">
          <input required class="field" type="text" name="email" placeholder="Email" v-model="email">
          <input required class="field" type="password" name="password" placeholder="Password" v-model="password">
        </div>
      </div>
      <small id="passwordHelp" class="form-text text-muted">Password should contain
        <span :class="has_length ? 'has_required' : ''">between 8 to 15 characters</span>,
        <span :class="has_two_lowercase ? 'has_required' : ''">two lowercase letter</span>,
        <span :class="has_uppercase ? 'has_required' : ''">one uppercase letter</span>,
        <span :class="has_number ? 'has_required' : ''">one number</span>,
        <span :class="has_underscore ? 'has_required' : ''">underscore character</span>
        <span :class="starts_uppercase ? 'has_required' : ''"> and needs to start with an uppercase character.</span>

      </small>
      <div>
        <button @click="SignUp" class="blue-button" id="login-button" :disabled = "has_length && has_two_lowercase && has_uppercase && has_number && has_special  && has_underscore && starts_uppercase ? false: true">Sign Up</button>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "signup",

  data() {
    return {
      email: '',
      password: null,
      password_length: 0,
      contains_right_amount_of_characters: false,
      contains_number: false,
      contains_uppercase: false,
      contains_lowercase: false,
      contains_special_character: false,
      valid_password: false
    }
  },

  watch: {
    password() {
      this.has_length = (this.password.length >= 8 && this.password.length <= 15);
      this.has_number    = /\d/.test(this.password);
      this.has_two_lowercase = /[a-z]{2}/.test(this.password);
      this.has_uppercase = /[A-Z]/.test(this.password);
      this.has_special   = /[!@#\$%\^\&*\)\(+=._-]/.test(this.password);
      this.has_underscore = /[_]/.test(this.password);
      this.starts_uppercase = /[A-Z]/.test(this.password[0]);
    }
  },

}

</script>

<style scoped>

* {
  font-family: sans-serif;
}

.login-flex {
  display: flex;
}

input {
  margin-bottom: 5px;
}

h3 {
  margin-right: 20px;
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
.blue-button {
  background-color: #4267B2;
  font-size: medium;
  color: white;
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