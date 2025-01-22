import React from 'react';

function TodoItemComponent({ allTodo, setAllTodo }) {
  function handleDelete(id) {
    const updatedTodos = allTodo.filter((item) => item.id !== id);
    setAllTodo(updatedTodos);
  }

  return (
    <div className='flex flex-col gap-4 mt-6 px-4'>
      {allTodo.length > 0 ? (
        allTodo.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'
          >
            <h2 className='text-lg font-semibold text-gray-800'>{item.title}</h2>
            <button
              className='bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300'
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h2 className='text-center text-lg text-gray-700'>
          Zadacite se zavrseni
        </h2>
      )}
    </div>
  );
}

export default TodoItemComponent;
