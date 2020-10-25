<template>
  <div class="home">
    <div >
      <TodoList v-if="todos.length != 0" :todos="todos" :method="getTodos"/>
      <div class="loading" v-else>loading...</div>
    </div>
    <CreateTodo />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'
import CreateTodo from '@/components/CreateTodo.vue'
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
      .get('http://localhost:7000/todo')
      .then(response => (this.todos = response.data.data))
    },
  },
}
</script>

<style>
.loading {
  text-align: center;
}
</style>
