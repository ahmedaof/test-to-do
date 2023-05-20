const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
  });
  const Todo = mongoose.model('Todo', todoSchema);

  module.exports =  Todo;