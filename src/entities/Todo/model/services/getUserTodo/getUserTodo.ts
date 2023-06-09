import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { i18n } from 'shared/config/i18n';
import { Todo } from '../../types/todo';

export const fetchTodoData = createAsyncThunk<Todo, void, ThunkConfig<string>>(
  'todo/fetchTodoData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.get<Todo>('/todos');
      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Не удалось запросить информацию о пользователе'));
    }
  },
);
