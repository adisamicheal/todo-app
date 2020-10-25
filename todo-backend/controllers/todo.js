const repository = require('../respositories/TodoRepository');

// get all todo items in the db
const getAllTodos = (req, res) => {
  repository
    .findAll()
    .then((todos) => {
        res.status(200).json({
            "message": `All todos fetched successfully`,
            "data": todos
        });;
    })
    .catch((error) => console.log(error));
};

// add a todo item
const addTodo = (req, res) => {
  const { title, description, due_date, image } = req.body;
  repository
    .create(title, description, due_date, image)
    .then((todo) => {
        res.status(200).json({
            "message": `todo created successfully`,
            "data": todo
        });
    })
    .catch((error) => console.log(error));
};

// get a todo item
const getATodo = (req, res) => {
    const { id } = req.params;
    repository
      .findById(id)
      .then((todo) => {
        console.log(`Fetched todo with id: ${id} successfully`);
        res.status(200).json({
            "message": `to with id ${id} fetched successfully`,
            "data": todo
        });
      })
      .catch((error) => console.log(error));
  };

// delete a todo item
const deleteTodo = (req, res) => {
  const { id } = req.params;
  repository
    .deleteById(id)
    .then((ok) => {
      console.log(ok);
      console.log(`Deleted record with id: ${id}`);
      res.status(200).json({
          "message": `to with id ${id} deleted successfully`
      });
    })
    .catch((error) => console.log(error));
};

// update a todo item
const updateTodo = (req, res) => {
  const { id } = req.params;
  const todo = {
    title: req.body.title,
    description: req.body.description,
    due_date: req.body.due_date,
    image: req.body.image,
    done: req.body.done
  };
  repository
    .updateById(id, todo)
    .then(res.status(200).json({
        "message": `todo with id ${id} updated successfully`,
    }))
    .catch((error) => console.log(error));
};

module.exports = { getAllTodos, addTodo, getATodo,  deleteTodo, updateTodo };
