import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
  ],
};

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newtodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.todos.push(newtodo);
    },
    togolecompleted: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].completed = action.payload.completed;
    },
    delettodo: (state, action) =>{
      state.todos= state.todos.filter((todo) =>todo.id !== action.payload.id)  
    },
    updatetodo:(state,action)=>{
      state.todos.map(todo=>{
        if(todo.id===action.payload.id){
          todo.title=action.payload.title
        }
      })
    }
  },
});

export const { addTodo, togolecompleted, delettodo,updatetodo } = TodoSlice.actions;

export const SelectTodos = (state) => state.todo.todos;

export default TodoSlice.reducer;
