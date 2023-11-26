<template>
  <header>
    <ul>
      <li><router-link to="/login">Home</router-link></li>
      <li><router-link to="/posts">Posts</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style>

ul {
  display:flex;
  padding-inline-start: 0px;
}
header {
  font-family: sans-serif;
  background-color: Grey;
  display: flex;
  flex-direction: row;
  color: #ffffff;
  overflow:hidden;
  font-size: 18px;
  text-transform: uppercase;
  justify-content: center;
  box-sizing: border-box;
}
header a {
  font-family: sans-serif;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: black;
  font-size: .99em;
  text-decoration: none;
}
li {
  padding: 10px;
  list-style-type: none;
}
</style>
