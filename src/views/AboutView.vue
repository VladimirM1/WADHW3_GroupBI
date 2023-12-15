<template>
  <div class="contacts">
    <contacts/>
  </div>
</template>


<script>
// @ is an alias to /src

import Contacts from "@/components/Contacts";

export default {
  name: 'AboutView',
  components: {
    Contacts
  },
}

</script>


<style scoped>
body {
  height: 100%;
  min-height: 100%;
}

</style>