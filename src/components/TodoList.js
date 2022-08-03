import React, { useRef } from 'react'
import { BiFilter } from 'react-icons/bi'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ToDo from './ToDo'

const TodoList = ({
  tasks,
  setTasks,
  setTaskStataus,
  filteredTasks,
  filterInput,
  inputFilterHandler,
}) => {
  const inputEl = useRef('')

  const searchInput = () => {
    inputFilterHandler(inputEl.current.value)
  }
  const incompletedTasksHandler = tasks.filter((task) => {
    return !task.done
  })

  const clearAllCompletedTasksHandler = () => {
    const clearAllCompleted = tasks.filter((task) => task.done !== true)
    setTasks(clearAllCompleted)
  }

  const taskStatusHandler = (e) => {
    setTaskStataus(e.target.value)
  }

  const reorder = (tasks, startIndex, endIndex) => {
    const result = Array.from(tasks)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  const onEnd = (result) => {
    console.log(result)
    setTasks(reorder(tasks, result.source.index, result.destination.index))
  }

  return (
    <section className="section">
      <form className="filter-input">
        <input
          className="filter-input--input"
          type="text"
          placeholder="Filter your tasks..."
          value={filterInput}
          onChange={searchInput}
          ref={inputEl}
        />
        <div className="filter-input__icon">
          <BiFilter className="filter-input--icon" />
        </div>
      </form>
      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="1343">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {filteredTasks.map((task, i) => (
                <ul key={task.id} className="task-list">
                  <Draggable draggableId={task.id} key={task.id} index={i}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ToDo
                          myTask={task.content}
                          taskId={task}
                          setTasks={setTasks}
                          tasks={tasks}
                        />
                      </div>
                    )}
                  </Draggable>
                </ul>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="container">
        <div className="container__completed-task">
          <h2>{`${
            incompletedTasksHandler.length >= 1
              ? `${incompletedTasksHandler.length} task left!`
              : 'No tasks!'
          } `}</h2>
        </div>
        <div className="container__btn-status" onClick={taskStatusHandler}>
          <button value="All">all</button>
          <button value="uncompleted">active</button>
          <button value="completed">complete</button>
        </div>
        <div className="container__clear-completed">
          <button onClick={clearAllCompletedTasksHandler}>
            clear completed
          </button>
        </div>
      </div>
    </section>
  )
}

export default TodoList
