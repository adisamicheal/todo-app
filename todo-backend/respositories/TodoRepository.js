const Todo = require('../models/Todo');

class TodoRepository {
  /**
   * @param {*} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @param {String} name
   */
  create(title, description, due_date, image) {
    const newTodo = { title, description, due_date, image, done: false };
    // eslint-disable-next-line new-cap
    const todo = new this.model(newTodo);

    return todo.save();
  }

  findAll() {
    return this.model.find();
  }

  /**
   * @param {Integer} id
   */
  findById(id) {
    return this.model.findById(id);
  }

  /**
   * @param {integer} id
   */
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  /**
   *
   * @param {integer} id
   * @param {*} object
   */
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findByIdAndUpdate(query, {
      $set: object
    });
  }
}

module.exports = new TodoRepository(Todo);
