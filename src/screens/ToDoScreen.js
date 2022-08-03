import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import TodoList from '../components/TodoList'
import data from '../data'

const ToDoScreen = () => {
  const [content, setContent] = useState('')
  const [tasks, setTasks] = useState(data)
  const [taskStatus, setTaskStataus] = useState('All')
  const [filteredTasks, setFilteredTasks] = useState(data)
  const [filterInput, setFilterInput] = useState('')
  const [result, setResult] = useState([])

  const inputFilterHandler = (filterInput) => {
    setFilterInput(filterInput)

    if (filterInput !== '') {
      const newTaskItem = tasks.filter((task) => {
        return task.content.toLowerCase().includes(filterInput.toLowerCase())
      })
      setResult(newTaskItem)
    } else {
      setResult(tasks)
    }
  }
  // save data local

  useEffect(() => {
    const saveTasksInLocal = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    saveTasksInLocal()
  }, [tasks])

  useEffect(() => {
    const getTasksInLocal = () => {
      if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]))
      } else {
        let taskLocal = JSON.parse(localStorage.getItem('tasks'))
        setTasks(taskLocal)
      }
    }
    getTasksInLocal()
  }, [])

  useEffect(() => {
    const taskFilterHandler = () => {
      if (taskStatus === 'completed') {
        setFilteredTasks(tasks.filter((task) => task.done === true))
      } else if (taskStatus === 'uncompleted') {
        setFilteredTasks(tasks.filter((task) => task.done === false))
      } else {
        setFilteredTasks(tasks)
      }
    }
    taskFilterHandler()
  }, [tasks, taskStatus])

  return (
    <div className="app">
      <h2 className="title-heading-two">Todo List</h2>
      <Form
        content={content}
        setContent={setContent}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filterInput.length < 1 ? filteredTasks : result}
        setTaskStataus={setTaskStataus}
        taskStatus={taskStatus}
        filterInput={filterInput}
        inputFilterHandler={inputFilterHandler}
      />
    </div>
  )
}

export default ToDoScreen
