<template>
  <div id="app">
    <div class="nav">
      <Navbar msg="TODO APP"/>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    },
  };
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Poppins', sans-serif;
}
.nav {
  margin-bottom: 50px;
}
</style>
