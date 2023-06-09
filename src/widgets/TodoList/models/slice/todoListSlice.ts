import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from 'entities/Todo';
import { TodoListSchema } from '../types/todolist';
import { fetchTodoListData } from '../services/fetchTodoListData/fetchTodoListData';

const initialState: TodoListSchema = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodoListData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTodoListData.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchTodoListData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: todoListActions } = todoListSlice;
export const { reducer: todoListReducer } = todoListSlice;
