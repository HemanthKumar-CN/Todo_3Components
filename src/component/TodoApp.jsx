import React from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';
import TodoList from './TodoList';


const TodoApp = () => {
    const [todos, setTodos] = React.useState([]);

    const addTodo = (newTodo)=> {
        setTodos([...todos, newTodo]);
    }
    // console.log(todos)

    const deleteTodo=(id) => {
        setTodos(todos.filter(todo =>todo.id!=id
        ))
    }
  return (
    <div><h1>TodoApp</h1>
    <TodoInput addTodo={addTodo}/>
    {/* <TodoList todos={todos}/>  */}
    <TodoList> 
     {
         todos.map(todo => {
             return (
            //      <div key={todo.id}>{todo.value}</div>
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
             )

            

         })
     }
     </TodoList>
    </div>
    
  )
}

export default TodoApp