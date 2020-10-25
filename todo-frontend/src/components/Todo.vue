<template>
    <div class='ui centered card'>
    <!-- // Todo shown when we are not in editing mode. -->
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ todo.title }}
      </div>
      <div class='meta'>
          {{ todo.description }}
      </div>
      <div class='meta'>
        {{ formatDate }}
      </div>
      <div class='extra content'>
        <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo()">
         <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <!-- // form is visible when we are in editing mode -->
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="todo.title" >
        </div>
        <div class='field'>
          <label>Description</label>
          <input type='text' v-model="todo.description" >
        </div>
        <div class='field'>
          <label>Date</label>
          <input type='text' v-model="todo.due_date" >
        </div>
        <div class='field'>
          <label>Image URL</label>
          <input type='text' v-model="todo.image" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="hideForm">
            Save
          </button>
        </div>
      </div>
    </div>
    <router-link  :to="{ name: 'ViewTodo', params: {id: todo._id}}">
        <div class='ui bottom attached green basic button'>
            View Todo
        </div>
    </router-link>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios';
import moment from 'moment'

  export default {
    props: ['todo', 'method'],
    data() {
      return {
        isEditing: false,
      };
    },
    computed: {
      formatDate() {
        return moment(this.todo.due_date).format('YYYY-MM-DD');
      }
    },
    methods: {
        showForm() {
            this.isEditing = true;
        },
        hideForm() {
          let id = this.todo._id
          axios
            .put('http://localhost:7000/todo/'+id, {
              title: this.todo.title,
              description: this.todo.description,
              image: this.todo.image,
              due_date: this.todo.due_date
            })
              .then(response => console.log(response))
            this.isEditing = false;
        },
        completeTodo(todo) {
            this.$emit('complete-todo', todo);
        },
        deleteTodo() {
          let id = this.todo._id
            axios
              .delete('http://localhost:7000/todo/'+id)
                .then(response => console.log(response))
                window.location.reload()
          },
    },
  };
</script>