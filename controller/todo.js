const Todo = require("../models/todo");

exports.create = (req, res) => {
    if (!req.body.user || !req.body.task) {
        return res.status(400).json({ error: 'Missing required fields: user and task' });
    }
    const { user, task } = req.body;
  const newTodo = new Todo({ user, task });
  newTodo.save()
    .then(() => {
      res.status(201).json({ message: 'To-do added successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error adding to-do', details: err });
    });
};

exports.update = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;
    Todo.findByIdAndUpdate(id, { task })
      .then(() => {
        res.json({ message: 'To-do updated successfully' });
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error updating to-do', details: err });
      });
    };


    exports.deleteTodo = (req, res) => {
        const { id } = req.params;
        Todo.findByIdAndDelete(id)
          .then(() => {
            res.json({ message: 'To-do deleted successfully' });
          })
          .catch((err) => {
            res.status(500).json({ error: 'Error deleting to-do', details: err });
          });
        }

        exports.getTodo = (req, res) => {
            const { id } = req.params;
            Todo.findById(id)
              .then((todo) => {
                if (todo) {
                  res.json(todo);
                } else {
                  res.status(404).json({ message: 'To-do not found' });
                }
              })
              .catch((err) => {
                res.status(500).json({ error: 'Error retrieving to-do', details: err });
              });
            }

            exports.getAllToDo = (req, res) => {
                Todo.find()
                  .then((todos) => {
                    res.json(todos);
                  })
                  .catch((err) => {
                    res.status(500).json({ error: 'Error retrieving to-dos', details: err });
                  });
                }