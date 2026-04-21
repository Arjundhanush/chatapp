import react,{useEffect, useState} from 'react'
import Create from './create'

function Home() {
  const [todo,setTodos] = useState([])
  useEffect(() => {
    fetch('https://todoapp-backend-bfj8.onrender.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error))
  }, [])
  return (
    <div>
        <h2> Todo List</h2>
        <Create />
        {
          todo.map((item,index) => (
            <div key={index}>{item}</div>
          ))
        }
    </div>
  )
}
export default Home
