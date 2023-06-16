import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/taskSchema';
import { fetchTasks } from '../services/fetchTasks/fetchTasks';

const initialState: TaskSchema = {
  isLoading: false,
  error: undefined,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: taskReducer } = taskSlice;
export const { actions: taskActions } = taskSlice;
