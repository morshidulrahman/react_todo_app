import React,{useState} from 'react'
import { useDispatch,useSelector} from 'react-redux/es/exports'
import { togolecompleted ,delettodo,updatetodo} from '../Redux/Slices/CountSlices'
function Todoitem({title,id,completed}) {
const[value,setvalue]=useState("")
const[show,setshow]=useState(false)
 
 
 const dispatch = useDispatch()

  const handlechange=()=>{
    dispatch(togolecompleted({id:id , completed:!completed}))
  }
  const handledelet=()=>{
    dispatch(delettodo({id:id}))
  }

  const handleupdate=()=>{
    setshow(true)
     if(value!==""){
      dispatch(updatetodo({
        id:id,
        title:value
       }))
       setshow(false)
     }
     setvalue("")
    //  setshow(false)
  }
  return (
    <>
      <li className={`p-2 mb-3 rounded-sm ${completed ? "bg-red-500":"bg-gray-300"}`}>
                <div className='flex justify-between items-center'>
                    <span className='flex items-center'>
                          <input type="checkbox" checked={completed} onChange={handlechange} className="mr-2"/> {title}
                    </span>
                    <div>
                    <button  onClick={handleupdate} className='px-2 p-1 rounded-sm bg-pink-600 text-white hover:bg-pink-800 duration-500 mr-3'>update</button>
                    <button onClick={handledelet} className='px-2 p-1 rounded-sm bg-pink-600 text-white hover:bg-pink-800 duration-500'>Delete</button>
                    </div>
                </div>     
                   {
                    show &&(
                      <input onChange={(e)=>setvalue(e.target.value)}   type="text" className=' mt-2 w-1/3'/>
                    )
                   }
            </li>
    </>
  )
}

export default Todoitem