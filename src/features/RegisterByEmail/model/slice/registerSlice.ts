import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RegisterSchema } from '../types/registerSchema';
import { registerByEmail } from '../services/registerByEmail/registerByEmail';

const initialState: RegisterSchema = {
  email: '',
  password: '',
  isLoading: false,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerByEmail.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registerByEmail.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(registerByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
