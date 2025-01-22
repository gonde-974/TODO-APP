import { useEffect, useState } from 'react';
import './App.css';
import TodoInputComponent from './assets/Components/TodoInputComponent';
import TodoItemComponent from './assets/Components/TodoItemComponent';

function App() {
  const [allTodo, setAllTodo] = useState([]);

  useEffect(() => {
    console.log(allTodo);
  }, [allTodo]);

  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center'>
      <div className='w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Todo App</h1>
        {/* TODO INPUT */}
        <TodoInputComponent allTodo={allTodo} setAllTodo={setAllTodo} />

        {/* TODO OUTPUT */}
        <TodoItemComponent allTodo={allTodo} setAllTodo={setAllTodo} />
      </div>
    </div>
  );
}

export default App;
