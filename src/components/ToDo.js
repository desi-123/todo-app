import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

const ToDo = ({ myTask, taskId, tasks, setTasks }) => {
  const doneTaskHandler = () => {
    const taskDone = tasks.map((task) => {
      if (task.id === taskId.id) {
        return {
          ...task,
          done: !task.done,
        }
      }
      return task
    })
    setTasks(taskDone)
  }

  const deleteTaskHandler = () => {
    const removeTask = tasks.filter((tsk) => tsk.id !== taskId.id)
    setTasks(removeTask)
  }

  return (
    <div className="task">
      <div className="task-item">
        <button
          className=" check-done btn btn--task-done"
          onClick={doneTaskHandler}
        ></button>
        <li className={`task-done ${taskId.done ? 'done' : ''}`}>{myTask}</li>
      </div>
      <div className="btn--task-icon">
        <button className="task__delete" onClick={deleteTaskHandler}>
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  )
}

export default ToDo
