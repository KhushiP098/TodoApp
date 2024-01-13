import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";
import { toast } from 'react-toastify';

const Todo = ({ ele, setItems, items, ind }) => {

  const [show,setShow]=useState(false);
  const [Value,setValue]=useState(ele);
  const [input,setInput]=useState(Value);

  const deleteHandler = (id) => {
    const updatedItems = items.filter((ele, ind) => ind != id);
    setItems(updatedItems);
    toast.error(` "${Value}" TODO Deleted!`);

  }

  const updateHandler=(id)=>{
    items[id]=input;
    setValue(input);
    setShow(false);
    toast.success("TODO updated!");
  }


  return (
    <div className='flex flex-col items-center justify-center  relative '>
      <div className='font-serif flex items-center justify-between text-[18px] text-white bg-slate-900 py-2 px-4 m-2 w-[300px] md:w-[450px]'>

        <div>{Value}</div>
        <div className='flex items-center justify-center md:gap-5 gap-2'>
          <FaPencilAlt size={20} className='text-slate-600 cursor-pointer'
          onClick={()=>setShow(!show)} />
          <MdDelete size={20} className='text-red-600 cursor-pointer'
            onClick={() => deleteHandler(ind)} />
        </div>
      </div>

      {
          show &&
          <div className=' my-[20px] py-[20px] bg-white w-[300px] md:w-[400px] px-5 h-[120px] border border-black/[0.2] flex items-center flex-col justify-center shadow-lg '>
            <p className='font-serif font-bold text-[18px] '>Update ToDo</p>

           <div className='flex items-center w-full  gap-2 justify-between'>
           <input placeholder='Enter Todo' value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='border-2 border-black/[0.3] p-2 cursor-pointer my-2 outline-none text-[16px] '/>
          
             <button onClick={()=>updateHandler(ind)}
             className='text-white bg-blue-500 py-2 md:px-5 px-2 rounded-md md:text-[18px] text-[16px] '>
             Update
             </button>
            </div>
          </div>
        }
    </div>


  )
}

export default Todo
