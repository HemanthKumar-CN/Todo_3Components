import React from 'react'
import uuid from 'react-uuid';

const TodoInput = ({addTodo}) => {

    const [value, setValue]=React.useState("");

    const handleInput=(e) => {
        setValue(e.target.value);
    }

  return (
    <div>
        <input onChange={handleInput}  type="text" value={value} placeholder='Write here' />
        <button disabled={!value} onClick={()=> {
            // console.log(value)
            let val={
                id: uuid(),
                value: value
            }
            addTodo(val); 
            setValue("")
        }}>Add</button>
    </div>
  )
}

export default TodoInput