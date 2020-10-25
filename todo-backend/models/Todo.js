const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define schema for todo items
const todoSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String
  },
  due_date: {
    type: Date
  },
  image: {
    type: String
  },
  done: {
    type: Boolean,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
