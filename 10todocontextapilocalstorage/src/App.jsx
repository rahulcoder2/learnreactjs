import { useState } from "react";
import { TodoContextProvider } from "./Contexts";
import { useEffect } from "react";

import {TodoForm, TodoItem} from './components'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo_title)=>{
    setTodos((prev) => [{id:Date.now(),...todo_title}, ...prev])
  }

  const updateTodo = (id, todo_title) =>{
    setTodos((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo_title : prevTodo)))
  }

  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleChecked = (id) =>{
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, todo_checked: !prevTodo.todo_checked}: 'prevTodo'))
  }


  // localstorage implementing

  // implementing quary to load first data in localstorage

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
   
  }, [])

  // adding new todo in localstorage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleChecked }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem
                todo_title={todo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
