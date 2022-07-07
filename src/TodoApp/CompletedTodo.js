import React from 'react'
import { useSelector } from 'react-redux'
import { SelectTodos } from '../Redux/Slices/CountSlices'

function CompletedTodo() {
    const todositems=useSelector(SelectTodos)
     const todo=todositems.filter(todo=>todo.completed===true)
  return (
    <div>
        <h1 className="text-xl">Complete Todo items : {todo.length}</h1>
    </div>
  )
}

export default CompletedTodo