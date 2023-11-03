import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo_title:'',
            todo_checked:false,

        }
    ],
    addTodo: (todo_title) =>{},
    updateTodo: (id, todo_title) =>{},
    deleteTodo: (id) =>{},
    toggleChecked:(id)=>{}
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoContextProvider = TodoContext.Provider