
<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="title" placeholder="Buy Stuffs" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Description</label>
            <input v-model="description" type='text' placeholder="'Oh well, it is needed." ref='description' defaultValue="">
          </div>
          <div class='field'>
            <label>Image Url</label>
            <input v-model="image" type='text' placeholder="https://openthread.google.cn/images/ot-contrib-google.png" ref='image' defaultValue="">
          </div>
          <div class='field'>
            <label>Due Date</label>
            <input v-model="due_date" type='text' placeholder="YYYY/MM/DD" ref='due-date' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      title: '',
      description: '',
      image: '',
      due_date: '',
      isCreating: false,
    };
  },
  props: ['addTodo'],
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
          axios
            .post('http://localhost:7000/todo/new', {
                title: this.title,
                description: this.description,
                image: this.image,
                due_date: this.due_date
            })
              .then(response => console.log(response))
            this.isCreating = false;
            window.location.reload()
    },
  },
};
</script>