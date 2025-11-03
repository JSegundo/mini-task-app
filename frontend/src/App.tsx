import { useEffect, useState } from 'react'
import './App.css'
import { apiService } from './services/apiService'
import type { Task } from './services/apiService'

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      try {
        await apiService.createTask(inputValue)
        setInputValue('')
        loadTasks()
      } catch (error) {
        console.error('Failed to create task:', error)
      }
    }
  }

  const loadTasks = async () => {
    try {
      const fetchedTasks = await apiService.getAllTasks()
      setTasks(fetchedTasks)
    } catch (error) {
      console.error('Failed to load tasks:', error)
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await apiService.deleteTask(id)
      loadTasks()
    } catch (error) {
      console.error('Failed to delete task:', error)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <>
      <h1>mini-task-app</h1>
      <form onSubmit={handleSubmit}>

        <h2>List of tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title}
              <button type="button" onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        <input 
          type='text'
          placeholder='The title of the task to do'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>
          Add task
      </button>
      </form>
    </>
  )
}

export default App
