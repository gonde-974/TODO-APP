import React, { useState } from 'react'

function TodoInputComponent({allTodo , setAllTodo}) {
    const[currentTodo , setCurrentTodo] = useState('')

    function handleInput(e){
    // console.log(e.target.value);
    setCurrentTodo(e.target.value)
      
    }

    function handleTodo (){
       if(currentTodo){
        // setAllTodo([...allTodo , currentTodo]) pravenje na id i title 
        setAllTodo([...allTodo ,{title:currentTodo , id:new Date().getTime()}])
        setCurrentTodo('')
       }
    }
  return (
    <div className=' flex items-center justify-center border bg-slate-800 h-[200px]'>
        <input className='px-[5px] mx-[10px]' 
               type="text" 
               placeholder='Insert Todo' 
               onChange={handleInput}
               value={currentTodo}/>
        <button className='bg-white text-black px-[10px]' onClick={handleTodo}>Add Todo</button>
    </div>
  )
}

export default TodoInputComponent