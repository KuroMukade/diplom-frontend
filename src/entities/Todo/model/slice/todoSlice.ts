import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo, TodoSchema } from '../types/todoSchema';

const initialState: TodoSchema = {};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<Todo>) => {
      state.todoData = action.payload;
    },
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
