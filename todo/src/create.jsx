import React from "react"
import axios from "axios"
function Create() {
    const [task, setTask] = React.useState("")
    const handleAdd = () => {
        // Logic to add a new task
        axios.post('http://localhost:3001/add', { task: task })
        .then(result => console.log(result))
        .catch(error => console.error('Error adding task:', error))
    }
    return (
        <div>
            <input type="text" placeholder="Add a new task" onchange={(e) => setTask(e.target.value)}/>  
            <button onclick={handleAdd}>Add</button>
        </div>
    )
}
export default Create