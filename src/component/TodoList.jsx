import React from 'react'

// const TodoList = ({todos}) => {
const TodoList = ({children}) => {
  return (
    <div>
        <h3>List of items</h3>
        {
            children
        }
    </div>
  )
}

export default TodoList