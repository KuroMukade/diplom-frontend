import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/taskSchema';
import { fetchTasks } from '../services/fetchTasks/fetchTasks';
import { deleteTaskById } from '../services/deleteTaskById/deleteTaskById';
import { updateTaskById } from '../services/updateTaskById/updateTaskById';

const initialState: TaskSchema = {
  isLoading: false,
  error: undefined,
  tasks: [],
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
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks?.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks?.filter((task) => task._id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = action.payload;
      const updatedTasks = state.tasks?.map((task) => {
        if (task._id === updatedTask._id) {
          return updatedTask;
        }
        return task;
      });

      state.tasks = updatedTasks ? [...updatedTasks] : undefined;
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
      })
      .addCase(updateTaskById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(updateTaskById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTaskById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(deleteTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteTaskById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: taskReducer } = taskSlice;
export const { actions: taskActions } = taskSlice;
