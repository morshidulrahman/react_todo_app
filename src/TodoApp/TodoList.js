import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux/es/exports'
import { SelectTodos } from '../Redux/Slices/CountSlices'

function TodoList() {
   
  const todos=useSelector(SelectTodos)

  {console.log(todos)}
    // const todos=[
    //     {id:1,title:"todo1",completed:false}, 
    //     {id:2,title:"todo2",completed:false}, 
    //     {id:3,title:"todo3",completed:true} 
    // ]
  return (
    <div>
       <ul className='w-full mt-5'>
       {todos?.map((todo)=>{
        return(
          <Todoitem title={todo.title} completed={todo.completed} id={todo.id} key={todo.id}/>
        )
       })}
       </ul>
    </div>
  )
}

export default TodoList