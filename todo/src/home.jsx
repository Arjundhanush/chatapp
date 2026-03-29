import react,{useState} from 'react'
import Create from './create'

function Home() {
  const [todo,setTodos] = useState([])
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