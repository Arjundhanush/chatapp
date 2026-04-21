import react,{useEffect, useState} from 'react'
import Create from './create'

function Home() {
  const [todo,setTodos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error))
  }, [])
  return (
    <div className="home">
        <h2> Todo List</h2>
        <Create />
        {
          todo.length === 0 
          ? <div><h2>No Record</h2></div>
          : todo.map((item,index) => (
            <div key={index} style={{marginTop: "10px"}}>
              <span style={{fontSize: "18px", backgroundColor: "#fff", padding: "10px", borderRadius: "5px", display: "inline-block", minWidth: "350px"}}>{item.task}</span>
            </div>
          ))
        }
    </div>
  )
}
export default Home
