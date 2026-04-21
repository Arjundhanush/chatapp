import React from "react"
function Create() {
    const [task, setTask] = React.useState("")
    const handleAdd = () => {
        // Logic to add a new task
         axios.post(
      "https://todoapp-backend-bfj8.onrender.com/add",
      { task: task }
    )
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
