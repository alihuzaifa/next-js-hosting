import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, { payload }: { payload: string }) => {
      state.todos.push(payload);
    },
    deleteTodo: (state, { payload }) => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice;
