<template>
  <div class="login">
    <login/>
  </div>
</template>


<script>

import Login from "@/components/Login";

export default {
  name: 'LoginView',
  components: {
    Login
  }
}

</script>


<style scoped>
body {
  height: 100%;
  min-height: 100%;
}

</style>