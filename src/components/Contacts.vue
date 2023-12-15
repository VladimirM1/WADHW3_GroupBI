<template>
  <div class="flex-container" style="text-align: center; height: 80.8vh">
    <div class="contacts-flex">
      <form>
        <div style="display: flex; justify-content: center">
          <div style="display: block; text-align: left;">
            <h3>Team members:</h3>
            <h3>Project repository:</h3>
          </div>
          <div style="display: block; text-align: left;">
            <p>Kirill, Kristjan, Vladimir</p>
            <p>https://github.com/VladimirM1/WADHW3_GroupBI</p>
          </div>
        </div>
      </form>
    </div>

  </div>
</template>

<script>

export default {
  name: "Contacts",
}

</script>

<style scoped>

* {
  font-family: sans-serif;
}
.contacts-flex {
}

input {
  margin-bottom: 5px;
}

h3 {
  margin-right: 20px;
}

.field{
  width: 20em;
  height: 2.8em;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 50%;
  margin:auto;
  margin-top: 2%;
  margin-bottom: 2%;
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
</style>