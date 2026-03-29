const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const TodoModel = require('./models/todo')

app.use(cors())
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tododb'

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error)
    })

// GET all todos (sorted newest first)
app.get('/get', (req, res) => {
    TodoModel.find()
        .sort({ createdAt: -1 })
        .then(todos => res.json(todos))
        .catch(error => res.status(500).json({ error: 'Error fetching todos' }))
})

// POST add a new todo
app.post('/add', (req, res) => {
    const task = req.body.task;
    if (!task || task.trim() === '') {
        return res.status(400).json({ error: 'Task is required' })
    }
    TodoModel.create({ task: task.trim() })
        .then(result => res.json(result))
        .catch(error => res.status(500).json({ error: 'Error adding task' }))
})

// PUT toggle done status
app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findById(id)
        .then(todo => {
            if (!todo) {
                return res.status(404).json({ error: 'Todo not found' })
            }
            todo.done = !todo.done;
            return todo.save();
        })
        .then(updated => res.json(updated))
        .catch(error => res.status(500).json({ error: 'Error updating task' }))
})

// DELETE remove a todo
app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete(id)
        .then(result => {
            if (!result) {
                return res.status(404).json({ error: 'Todo not found' })
            }
            res.json({ message: 'Todo deleted', result })
        })
        .catch(error => res.status(500).json({ error: 'Error deleting task' }))
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})