import React from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = React.useState("");

  const handleAdd = () => {
    axios.post(
      "https://todoapp-backend-bfj8.onrender.com/add",
      { task: task }
    )
      .then(result => {
        console.log(result);
        window.location.reload();
      })
      .catch(error => console.error("Error adding task:", error));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Add a new task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;
