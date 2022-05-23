import React from 'react'

const TodoItem = ({todo,deleteTodo}) => {
  return (
    <div>{todo.value}
    
    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
    </div>

  )
}

export default TodoItem