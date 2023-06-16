import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateTaskSchema } from '../types/createTask';
import { createTask } from '../services/createTask/createTask';

const initialState: CreateTaskSchema = {
  isLoading: false,
  title: '',
  priority: 'LOW',
  text: '',
};

export const createTodoSlice = createSlice({
  name: 'createTask',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setPriority: (state, action: PayloadAction<string>) => {
      state.priority = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTask.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: createTaskReducer } = createTodoSlice;
export const { actions: createTaskActions } = createTodoSlice;
