import React from 'react'
import uuid from 'react-uuid'
// import { BiCommentAdd } from 'react-icons/bi'

const Form = ({ content, setTasks, tasks, setContent }) => {

  const inputTaskHandler = (e) => {
    setContent(e.target.value)
  }
  
  
  const addTaskHandler = (e) => {
    e.preventDefault()
    setTasks([
      ...tasks,
      { content: content, done: false, id: uuid(), editTask: false },
    ])
    setContent('')
  }

  return (
    <form className="form">
      <input
        className="form--add-input"
        onChange={inputTaskHandler}
        value={content}
        type="text"
        placeholder="What needs to be done?"
      />
      <button
        className="btn form--add-task"
        onClick={addTaskHandler}
        disabled={content ? false : true}
      ></button>
    </form>
  )
}

export default Form
