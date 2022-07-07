import React from 'react'
import AddTodo from './AddTodo'
import CompletedTodo from './CompletedTodo'
import TodoList from './TodoList'
function Todo() {
  return (
    <div className='container mx-auto px-5 mt-5 p-4 font-[Poppins]'>
    <div className='w-96 p-4  rounded-sm'>
     <h1 className='capitalize text-2xl font-[Poppins] font-bold mb-3'>MY todo app</h1>
     <AddTodo/>
     <TodoList/>
     <CompletedTodo/>
    </div>
    </div>
  )
}

export default Todo