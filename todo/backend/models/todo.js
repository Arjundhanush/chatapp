const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: String
})
const TodoModel = mongoose.model('todolist', todoSchema);
module.exports = TodoModel;