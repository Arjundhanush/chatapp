const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const TodoModel = require('./models/todo')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/tododb')
app.post('/add', (req, res) => {
    const task=req.body.task;
    TodoModel.create({task:task})
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: 'Error adding task' }))   

})

app.get('/todos', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: 'Error fetching tools' }))
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
