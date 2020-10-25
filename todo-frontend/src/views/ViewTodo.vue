<template>
<div>
  <div class="back">
    <a @click.prevent="$router.go(-1)">  
      <span>
       <i class="angle double left icon"></i>Back
      </span>
    </a>
  </div>
  <div class="about ui centered card" v-if="item.length != 0">
    <h1 class="title">Title: {{ item.title }}</h1>
    <p>Description: {{ item.description }}</p>
    <p>Due Date: {{ item.due_date }}</p>
    <div>
      <img :src="item.image" alt="image">
    </div>
  </div>
  <div v-else class="loading">Loading...</div>
</div>
</template>

<script>
import axios from 'axios';

export default{
  name:'ViewTodo',
  props: ['id'],
    data() {
      return{
        item: [],
      }
    },
    mounted() {
      let id = this.$route.params.id
      axios.get('http://localhost:7000/todo/'+id)
        .then(response =>{
          this.item = response.data.data
        })
    },
  };
</script>

<style scoped>
.about {
  padding: 15px;
}
a {
  cursor: pointer;
  font-size: 24px;
  color: #000000;
}
.title {
  text-align: center;
}
img {
  width: 100%;
}
</style>