<template>
  <div class="home">
      <router-link to="/jugar" class="jugar">Jugar &#9654;</router-link>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.jugar{
  background-color: #889bff;
  padding: 15px;
  border-radius: 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  text-shadow: 0px 0px 1px black;
  box-shadow: 0px 0px 5px #4e4e4e;
}
</style>