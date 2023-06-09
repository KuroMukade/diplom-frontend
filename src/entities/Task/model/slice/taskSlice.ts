import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/task';

const initialState: TaskSchema = {
  readonly: true,
  isLoading: false,
  data: undefined,
  error: undefined,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTaskData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchTaskData.fulfilled,
        (state, action: PayloadAction<Task>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.form = action.payload;
        },
      )
      .addCase(fetchTaskData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
