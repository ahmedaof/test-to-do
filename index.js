const express = require('express');
const app = express();
const PORT = 3000; // Or any other port number
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb+srv://yoaqSMGdXN7ONlN1:yoaqSMGdXN7ONlN1@cluster0.wbcru.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });



const { create, update , deleteTodo, getTodo, getAllToDo } = require('./controller/todo');

app.use(express.json());


app.post('/todos', create);
app.put('/todos/:id', update);

app.delete('/todos/:id', deleteTodo);

app.get('/todos/:id', getTodo);

app.get('/todos', getAllToDo);