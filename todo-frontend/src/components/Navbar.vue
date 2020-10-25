<template>
  <div>
      <nav>
          {{msg}}
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style>
nav {
    background: purple;
    color: #ffffff;
    padding: 30px 0;
    text-align: center;
    font-size: 18px;
    font-weight: 200;
    font-weight: bold;
}
</style>