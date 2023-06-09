import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from 'entities/Task';
import { Todo, TodoSchema } from '../types/todo';
import { fetchTodoData } from '../services/getUserTodo/getUserTodo';
import { fetchTodoTasks } from '../services/fetchTodoTasks/fetchTodoTasks';

const initialState: TodoSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  tasks: undefined,
  error: undefined,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Todo>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
    setTodoTasksData: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodoData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTodoData.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchTodoData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodoTasks.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchTodoTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
        state.tasks = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: todoActions } = todoSlice;
export const { reducer: todoReducer } = todoSlice;
