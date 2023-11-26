<template>
  <div class="signup">
    <signup/>
  </div>
</template>


<script>
// @ is an alias to /src

import signup from "@/components/signup";

export default {
  name: 'SignUpView',
  components: {
    signup
  }
}

</script>


<style scoped>
body {
  height: 100%;
  min-height: 100%;
}

</style>