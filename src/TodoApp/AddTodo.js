import React, { useState } from 'react'
 import { useDispatch } from 'react-redux/es/exports'
 import { addTodo } from '../Redux/Slices/CountSlices'
function AddTodo() {
    const[value,setvalue]=useState("")
    const dispatch=useDispatch()

    const onsubmit=(e)=>{
        e.preventDefault()
        console.log(value)
         if(value==""){
          alert("please input a vlaue")
         }else{
          dispatch(addTodo({
            title:value
           }))
         }
         
         setvalue("")
    }
  return (
    <div className='font-[Poppins]'>
        <form onSubmit={onsubmit} >
            <input type="text" 
            className='outline-none w-full border border-blue-500 rounded-sm p-1 placeholder:text-xs '
            placeholder='Add Todo...'
            value={value}
            onChange={(e)=>setvalue(e.target.value)}
            />
            <button type="submit" className='px-3 py-1 bg-blue-800 rounded-sm text-white capitalize mt-3 text-sm'>submit</button>
        </form>
    </div>
  )
}

export default AddTodo