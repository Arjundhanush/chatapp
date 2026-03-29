import React, { useState } from 'react'
import axios from 'axios'

function Create({ onAdd }) {
  const [task, setTask] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleAdd = () => {
    if (!task.trim()) return
    setIsAdding(true)
    axios.post('http://localhost:3001/add', { task: task })
      .then(() => {
        setTask('')
        setIsAdding(false)
        if (onAdd) onAdd()
      })
      .catch(error => {
        console.error('Error adding task:', error)
        setIsAdding(false)
      })
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="create-form">
      <div className="input-wrapper">
        <span className="input-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
        <input
          id="new-task-input"
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isAdding}
        />
      </div>
      <button
        id="add-task-btn"
        className={`add-btn ${isAdding ? 'adding' : ''}`}
        onClick={handleAdd}
        disabled={!task.trim() || isAdding}
      >
        {isAdding ? (
          <span className="btn-spinner"></span>
        ) : (
          'Add Task'
        )}
      </button>
    </div>
  )
}

export default Create