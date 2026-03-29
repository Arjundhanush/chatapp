import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Create from './create'

function Home() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTodos = () => {
    setLoading(true)
    axios.get('http://localhost:3001/get')
      .then(response => {
        setTodos(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching todos:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleToggle = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
      .then(() => fetchTodos())
      .catch(error => console.error('Error toggling task:', error))
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => fetchTodos())
      .catch(error => console.error('Error deleting task:', error))
  }

  const completedCount = todos.filter(t => t.done).length
  const totalCount = todos.length

  return (
    <div className="home">
      <div className="header">
        <div className="header-top">
          <div className="logo">
            <span className="logo-icon">✦</span>
            <h1>Taskflow</h1>
          </div>
          <div className="stats-badge">
            <span className="stats-done">{completedCount}</span>
            <span className="stats-sep">/</span>
            <span className="stats-total">{totalCount}</span>
          </div>
        </div>
        <p className="subtitle">Organize your day, one task at a time</p>
        {totalCount > 0 && (
          <div className="progress-bar-container">
            <div
              className="progress-bar-fill"
              style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
            ></div>
          </div>
        )}
      </div>

      <Create onAdd={fetchTodos} />

      <div className="todo-list">
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading tasks...</p>
          </div>
        ) : todos.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">🎯</span>
            <h3>No tasks yet</h3>
            <p>Add your first task above to get started!</p>
          </div>
        ) : (
          todos.map((item, index) => (
            <div
              key={item._id}
              className={`todo-item ${item.done ? 'done' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className={`checkbox ${item.done ? 'checked' : ''}`}
                onClick={() => handleToggle(item._id)}
                aria-label={item.done ? 'Mark as incomplete' : 'Mark as complete'}
                id={`toggle-${item._id}`}
              >
                {item.done && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </button>
              <span className="todo-text">{item.task}</span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item._id)}
                aria-label="Delete task"
                id={`delete-${item._id}`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home