import React, { useState,useEffect } from 'react'
import Todo from './Todo.js'
import { toast } from 'react-toastify';
import Img from '../Assets/Todo.avif'

const getData=()=>{
    const data= JSON.parse(localStorage.getItem("TodoList"));

    if(data){
      return data;
    }
    else{
        return [];
    }
}

const Home = () => {

    const[items,setItems]=useState(getData());
    const [inputData, setInputData] = useState("");

    const AddHandler=()=>{

        const trimmedInput = inputData.trim();
        if(trimmedInput=== ""){
            toast.error("Your Todo is empty! ");
        }
        else{
            setItems([...items,inputData]);
            setInputData("");
            toast.success("Todo added successfully!");
        }
    }

    useEffect(()=>{
        localStorage.setItem("TodoList",JSON.stringify(items));
    },[items]);

    return (
        <div className='w-full  m-5 font-serif  flex items-center justify-center'>

            <div className='flex flex-col items-center  py-[50px] px-[20px]'>

                <div className=' flex items-center  justify-center gap-5 my-[30px] '>
                    <p className=' text-[40px] font-bold md:text-[60px] md:leading-[72px]  '>My Todo List</p>
                    <img src={Img}  className='md:w-[150px] md:h-[150px] w-[100px] h-[100px]' alt='img' />
                </div>


                <div className='flex items-center justify-between gap-5 my-[20px]'>

                    <input placeholder="Enter ToDo" type="text"
                        value={inputData} onChange={(e) => setInputData(e.target.value)}
                        className='border-2 border-black/[0.3] p-2 m-2 cursor-pointer outline-none text-[18px] md:w-[400px]' />

                    <button onClick={AddHandler}
                        className='text-white bg-blue-500 py-2 md:px-5 px-2 rounded-md  text-[16px] md:text-[18px] my-[10px] '>
                        Add Todo
                    </button>

                </div>

                {

                    items.map((ele, ind) => {
                        return (
                            <Todo key={ind} ele={ele} setItems={setItems} items={items} ind={ind} />
                        )
                    })

                }

                {
                    items.length!==0 &&

                    <button onClick={()=>{setItems([])
                     toast.success("All ToDo's deleted!")}}
                    className='text-white bg-blue-500 py-2 px-5 rounded-md text-[18px] my-[20px] '>
                    Delete All</button>
                }



            </div>
        </div>
    )
}

export default Home
