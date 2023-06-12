import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateTodoSchema } from '../types/createTodoSchema';

const initialState: CreateTodoSchema = {
  title: '',
  isLoading: false,
};

export const createTodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { reducer: createTodoReducer } = createTodoSlice;
export const { actions: createTodoActions } = createTodoSlice;
