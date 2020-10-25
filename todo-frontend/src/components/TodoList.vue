<template>
  <div>
    <todo v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo" :key="todo.id" :method="method"></todo>
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  props: [
    'todos',
    'method'
    ],
  components: {
    Todo,
  },
  methods: {
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
  },
};
</script>
