import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo, TodoSchema } from '../types/todoSchema';
import { fetchTodoById } from '../services/fetchTodoById/fetchTodoById';

const initialState: TodoSchema = {
  isLoading: false,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<Todo>) => {
      state.todoData = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodoById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodoById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoData = action.payload;
      })
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
